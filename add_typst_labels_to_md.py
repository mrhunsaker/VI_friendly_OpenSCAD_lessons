import os
import re

# Root directory containing your markdown files
ROOT = "my-book/src"

# Regex to match the first Markdown heading
HEADING_RE = re.compile(r"^(# .+)$", re.MULTILINE)

# Helper to create label from path
# e.g. my-book/src/assets/3dMake_Foundation/Lessons_3dMake_5/README.md
#   -> assets_3dMake_Foundation_Lessons_3dMake_5-readme

def make_label(md_path):
    rel = os.path.relpath(md_path, ROOT)
    parts = rel.split(os.sep)
    # Remove .md extension
    if parts[-1].lower().endswith('.md'):
        parts[-1] = parts[-1][:-3]
    # Join with underscores, last part with dash
    if len(parts) > 1:
        label = '_'.join(parts[:-1]) + '-' + parts[-1]
    else:
        label = parts[0]
    # Lowercase, replace spaces with underscores
    label = label.replace(' ', '_').replace('__', '_').lower()
    return label

def process_file(md_path):
    with open(md_path, 'r', encoding='utf-8') as f:
        content = f.read()
    m = HEADING_RE.search(content)
    if not m:
        return False  # No top heading
    heading = m.group(1)
    label = make_label(md_path)
    # If label already present, skip
    if f'{{#{label}}}' in heading:
        return False
    new_heading = heading + f' {{#{label}}}'
    new_content = content.replace(heading, new_heading, 1)
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Added label to {md_path}: {label}")
    return True

def main():
    for dirpath, _, filenames in os.walk(ROOT):
        for fn in filenames:
            if fn.lower().endswith('.md'):
                process_file(os.path.join(dirpath, fn))

if __name__ == "__main__":
    main()
