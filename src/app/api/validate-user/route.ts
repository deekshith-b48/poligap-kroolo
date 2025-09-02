import { NextRequest, NextResponse } from "next/server";
import { ensureDatabaseConnection } from "@/lib/db-utils";
import { validateUser } from "@/app/api/enterpriseSearch/enterpriseSearch";

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
