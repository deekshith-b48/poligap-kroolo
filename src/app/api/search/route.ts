import { NextRequest, NextResponse } from "next/server";
import { ensureDatabaseConnection } from "@/lib/db-utils";
import { getUserEnterpriseIntegration } from "@/app/api/enterpriseSearch/enterpriseSearch";

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // Ensure database connection
    await ensureDatabaseConnection();
    
    const { userId, companyId } = await req.json();

    if (!userId || !companyId) {
      return NextResponse.json(
        { error: "Missing userId or companyId parameter" },
        { status: 400 }
      );
    }

    const result = await getUserEnterpriseIntegration(userId, companyId);

    return NextResponse.json({
      success: result.code === 200,
      data: result.data,
      message: result.message
    });

  } catch (error) {
    console.error("Error in POST /api/search:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
