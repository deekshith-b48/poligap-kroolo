import { NextRequest, NextResponse } from "next/server";
import { ensureDatabaseConnection } from "@/lib/db-utils";
// Removed enterprise search import - implementing validateUser directly

// Implement validateUser function directly
async function validateUser(userId: string) {
  try {
    const db = await ensureDatabaseConnection();
    const user = await db.collection('users').findOne({ userId });
    
    if (user) {
      return {
        code: 200,
        data: user,
        message: "User validated successfully"
      };
    } else {
      return {
        code: 404,
        data: null,
        message: "User not found"
      };
    }
  } catch (error) {
    console.error("Error in validateUser:", error);
    return {
      code: 500,
      data: null,
      message: "Failed to validate user"
    };
  }
}

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // Ensure database connection
    await ensureDatabaseConnection();
    
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: "Missing userId parameter" },
        { status: 400 }
      );
    }

    const result = await validateUser(userId);

    return NextResponse.json({
      success: result.code === 200,
      data: result.data,
      message: result.message
    });

  } catch (error) {
    console.error("Error in POST /api/validate-user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
