import { createApiResponse } from "@/lib/apiResponse";
import AgentConversation from "@/models/agentConversation.model";
import { ensureDatabaseConnection } from "@/lib/db-utils";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Initialize database connection
    await ensureDatabaseConnection();
    const {
      conversationId,
      chatName,
      summary = "Welcome to Poligap",
    } = await request.json();

    if (!conversationId || !chatName) {
      return createApiResponse({
        success: false,
        error: "Missing required fields",
        status: 400,
      });
    }

    const updatedConversation = await AgentConversation.findByIdAndUpdate(
      conversationId,
      {
        $set: {
          chatName: chatName,
          summary: summary,
        },
      },
      { new: true }
    );

    if (!updatedConversation) {
      return createApiResponse({
        success: false,
        error: "Conversation not found",
        status: 404,
      });
    }

    return createApiResponse({
      success: true,
      error: "Conversation updated successfully",
      data: updatedConversation,
      status: 200,
    });
  } catch (error) {
    console.error("Error in editConversation:", error);
    return createApiResponse({
      success: false,
      error: "Failed to update conversation",
      status: 500,
    });
  }
}
