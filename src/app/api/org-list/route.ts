import { NextRequest, NextResponse } from "next/server";
import { ensureDatabaseConnection } from "@/lib/db-utils";
import { getCompanies } from "@/app/api/enterpriseSearch/enterpriseSearch";

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

    // Get companies for the user
    const result = await getCompanies(userId);

    if (result.code !== 200) {
      return NextResponse.json(
        { error: result.message },
        { status: result.code }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      message: result.message
    });

  } catch (error) {
    console.error("Error in POST /api/org-list:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // Ensure database connection
    await ensureDatabaseConnection();
    
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: "Missing userId parameter" },
        { status: 400 }
      );
    }

    // Get companies for the user
    const result = await getCompanies(userId);

    if (result.code !== 200) {
      return NextResponse.json(
        { error: result.message },
        { status: result.code }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      message: result.message
    });

  } catch (error) {
    console.error("Error in GET /api/org-list:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
