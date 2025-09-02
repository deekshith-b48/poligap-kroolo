// Example: /api/users/get-member
import Member from "@/models/members.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { ensureDatabaseConnection } from "@/lib/db-utils";

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // Ensure database connection
    await ensureDatabaseConnection();
    
    const { userId, companyId } = await req.json();

    if (!userId || !companyId) {
      return NextResponse.json({ error: "Missing userId or companyId" }, { status: 400 });
    }

    const member = await Member.findOne({
      userId: new mongoose.Types.ObjectId(userId),
      companyId: new mongoose.Types.ObjectId(companyId),
      status: "ACTIVE",
    }).lean();

    if (!member) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }

    return NextResponse.json({ member });
  } catch (err: any) {
    console.error("Error in get-member:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}