import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { markdown, fileName, logo } = await req.json();
    
    if (!markdown || !fileName) {
      return NextResponse.json({ error: "markdown and fileName are required" }, { status: 400 });
    }

    // For now, return a simple response indicating PDF export is not yet implemented
    // This will be implemented when the PDF dependencies are properly configured
    return NextResponse.json({ 
      error: "PDF export functionality is currently being configured. Please try again later.",
      message: "This feature will be available once the required PDF generation libraries are properly set up."
    }, { status: 503 });

  } catch (e) {
    console.error("[export-pdf] unexpected error:", e);
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
