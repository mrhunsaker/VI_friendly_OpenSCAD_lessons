#!/bin/bash

lookup="ActualFilenames.txt"
target_dir="my-book/src"

while IFS=$'\t' read -r left right; do
    [[ -z "$left" || -z "$right" ]] && continue
    find "$target_dir" -type f -name "*.md" -exec sed -i "s/\b$left\b/$right/g" {} +
done < "$lookup"