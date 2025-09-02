#!/bin/bash

# List of routes that need dynamic exports
routes=(
  "src/app/api/ai-chat/create-conversation/route.ts"
  "src/app/api/ai-chat/delete-conversation/route.ts"
  "src/app/api/ai-chat/edit-conversation/route.ts"
  "src/app/api/ai-chat/get-conversation-list/route.ts"
  "src/app/api/all-chat-history/inbox/route.ts"
  "src/app/api/all-chat-history/trash/route.ts"
  "src/app/api/feedback/route.ts"
  "src/app/api/knowledge-base/enable/route.ts"
  "src/app/api/knowledge-base/media/delete/route.ts"
  "src/app/api/knowledge-base/media/fetch/route.ts"
  "src/app/api/knowledge-base/overview/route.ts"
  "src/app/api/knowledge-base/train-card/route.ts"
  "src/app/api/knowledge-base/upload-media/route.ts"
  "src/app/api/users/get-member/route.ts"
  "src/app/api/users/get-user/route.ts"
)

for route in "${routes[@]}"; do
  if [ -f "$route" ]; then
    echo "Processing $route"
    
    # Check if it already has dynamic export
    if ! grep -q "export const dynamic" "$route"; then
      # Add dynamic exports after the last import line
      sed -i '/^import.*from.*;$/a\\n// Force dynamic rendering for this API route\nexport const dynamic = '\''force-dynamic'\'';\nexport const runtime = '\''nodejs'\'';' "$route"
    fi
  fi
done
