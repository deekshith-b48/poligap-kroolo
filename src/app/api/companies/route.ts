import { NextRequest, NextResponse } from "next/server";
import { ensureDatabaseConnection } from "@/lib/db-utils";
// Removed enterprise search import - implementing getCompanies directly

// Implement getCompanies function directly
async function getCompanies(userId: string) {
  try {
    const db = await ensureDatabaseConnection();
    const companies = await db.collection('companies').find({ 
      $or: [
        { 'members.userId': userId },
        { 'ownerId': userId }
      ]
    }).toArray();
    
    return {
      code: 200,
      data: companies,
      message: "Companies retrieved successfully"
    };
  } catch (error) {
    console.error("Error in getCompanies:", error);
    return {
      code: 500,
      data: null,
      message: "Failed to retrieve companies"
    };
  }
}

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Handle unsupported methods
export async function PUT(req: NextRequest) {
  return NextResponse.json(
    { error: "Method not allowed. Use GET or POST." },
    { status: 405 }
  );
}

export async function DELETE(req: NextRequest) {
  return NextResponse.json(
    { error: "Method not allowed. Use GET or POST." },
    { status: 405 }
  );
}

export async function PATCH(req: NextRequest) {
  return NextResponse.json(
    { error: "Method not allowed. Use GET or POST." },
    { status: 405 }
  );
}

export async function POST(req: NextRequest) {
  try {
    console.log("POST /api/companies called");
    
    // Ensure database connection
    await ensureDatabaseConnection();
    console.log("Database connection established");
    
    const { userId } = await req.json();
    console.log("Request body:", { userId });

    if (!userId) {
      console.log("Missing userId parameter");
      return NextResponse.json(
        { error: "Missing userId parameter" },
        { status: 400 }
      );
    }

    // Get companies for the user
    console.log("Calling getCompanies for userId:", userId);
    const result = await getCompanies(userId);
    console.log("getCompanies result:", result);

    if (result.code !== 200) {
      console.log("getCompanies failed with code:", result.code);
      return NextResponse.json(
        { error: result.message },
        { status: result.code }
      );
    }

    console.log("Returning successful response");
    return NextResponse.json({
      success: true,
      data: result.data,
      message: result.message
    });

  } catch (error) {
    console.error("Error in POST /api/companies:", error);
    console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    console.log("GET /api/companies called");
    
    // Simple health check
    const { searchParams } = new URL(req.url);
    const healthCheck = searchParams.get('health');
    
    if (healthCheck === 'true') {
      return NextResponse.json({
        success: true,
        message: "API route is working",
        timestamp: new Date().toISOString()
      });
    }
    
    // Ensure database connection
    await ensureDatabaseConnection();
    console.log("Database connection established");
    
    const userId = searchParams.get('userId');

    if (!userId) {
      console.log("Missing userId parameter");
      return NextResponse.json(
        { error: "Missing userId parameter" },
        { status: 400 }
      );
    }

    // Get companies for the user
    console.log("Calling getCompanies for userId:", userId);
    const result = await getCompanies(userId);
    console.log("getCompanies result:", result);

    if (result.code !== 200) {
      console.log("getCompanies failed with code:", result.code);
      return NextResponse.json(
        { error: result.message },
        { status: result.code }
      );
    }

    console.log("Returning successful response");
    return NextResponse.json({
      success: true,
      data: result.data,
      message: result.message
    });

  } catch (error) {
    console.error("Error in GET /api/companies:", error);
    console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
