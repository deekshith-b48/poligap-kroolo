import { NextRequest, NextResponse } from "next/server";
import { ensureDatabaseConnection } from "@/lib/db-utils";
import { getUserEnterpriseIntegration, UserAuthenticated, disconnectIntegration } from "@/app/api/enterpriseSearch/enterpriseSearch";

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // Ensure database connection
    await ensureDatabaseConnection();
    
    const { action, ...data } = await req.json();

    let result;
    switch (action) {
      case 'getUserEnterpriseIntegration':
        result = await getUserEnterpriseIntegration(data.userId, data.companyId);
        break;
      case 'UserAuthenticated':
        result = await UserAuthenticated(data.accountId, data.platformId, data.companyId, data.userId);
        break;
      case 'disconnectIntegration':
        result = await disconnectIntegration(data.platformId, data.companyId, data.userId, data.accountId);
        break;
      default:
        return NextResponse.json(
          { error: "Invalid action" },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: result.code === 200,
      data: result,
      message: result.message
    });

  } catch (error) {
    console.error("Error in POST /api/enterprise-integration:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
