#!/bin/bash

# List of API routes that need database connection fixes
routes=(
  "src/app/api/ai-chat/create-chat/route.ts"
  "src/app/api/users/get-user/route.ts" 
  "src/app/api/ai-chat/create-conversation/route.ts"
  "src/app/api/ai-chat/get-conversation-list/route.ts"
  "src/app/api/all-chat-history/inbox/route.ts"
  "src/app/api/knowledge-base/enable/route.ts"
  "src/app/api/users/get-member/route.ts"
  "src/app/api/knowledge-base/train-card/route.ts"
  "src/app/api/all-chat-history/trash/route.ts"
  "src/app/api/ai-chat/edit-conversation/route.ts"
  "src/app/api/ai-chat/delete-conversation/route.ts"
  "src/app/api/knowledge-base/overview/route.ts"
  "src/app/api/s3/upload/route.ts"
)

for route in "${routes[@]}"; do
  if [ -f "$route" ]; then
    echo "Processing $route"
    
    # Check if it already has the import
    if ! grep -q "ensureDatabaseConnection" "$route"; then
      # Add import after the last import line
      sed -i '/^import.*from/a import { ensureDatabaseConnection } from "@/lib/db-utils";' "$route"
    fi
    
    # Add the database connection call after "try {" in export functions
    sed -i '/export async function \(GET\|POST\|PUT\|DELETE\).*{/{
      N
      /try {/{
        a\    // Ensure database connection\
    await ensureDatabaseConnection();\

      }
    }' "$route"
  fi
done
