#!/usr/bin/env bash

set -euo pipefail

if [ $# -lt 2 ]; then
    echo "Usage: $0 <owner> <repo> [branch]"
    echo "Example: $0 torvalds linux master"
    exit 1
fi

OWNER="$1"
REPO="$2"
BRANCH="${3:-main}"

API_URL="https://api.github.com/repos/$OWNER/$REPO/git/trees/$BRANCH?recursive=1"

echo "Fetching file list from $OWNER/$REPO ($BRANCH)..." >&2

curl -s "$API_URL" | \
jq -r '.tree[] | select(.type=="blob") | .path' | \
while read -r path; do
    echo "https://raw.githubusercontent.com/$OWNER/$REPO/$BRANCH/$path"
done
