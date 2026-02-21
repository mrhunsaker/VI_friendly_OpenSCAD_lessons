#!/usr/bin/env python3
"""
Verify all markdown links in src/ directory
"""
import os
import re
from pathlib import Path
from collections import defaultdict

src_dir = Path('/var/home/ryhunsaker/Documents/3dprint_instructional_resources/VI_friendly_OpenSCAD_lessons/my-book/src')

# Pattern to find markdown links: [text](url)
link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')

broken_links = []
all_links = defaultdict(list)

# Walk through all markdown files
for md_file in src_dir.rglob('*.md'):
    relative_path = md_file.relative_to(src_dir)
    
    with open(md_file, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
    
    for line_num, line in enumerate(lines, 1):
        for match in link_pattern.finditer(line):
            text = match.group(1)
            url = match.group(2)
            all_links[str(relative_path)].append((line_num, text, url))
            
            # Check if it's a relative file link (not a URL)
            if not url.startswith(('http://', 'https://', '#', 'mailto:')):
                # Resolve the link relative to the markdown file's directory
                target_path = (md_file.parent / url).resolve()
                
                # For fragment links, just check the base file
                if '#' in url:
                    base_url = url.split('#')[0]
                    target_path = (md_file.parent / base_url).resolve()
                
                if not target_path.exists():
                    broken_links.append({
                        'file': str(relative_path),
                        'line': line_num,
                        'text': text,
                        'url': url,
                        'resolved_path': str(target_path),
                        'actual_cwd': str(md_file.parent)
                    })

print("=" * 80)
print("MARKDOWN LINK VERIFICATION REPORT")
print("=" * 80)
print(f"\nTotal markdown files checked: {len(all_links)}")
print(f"Total links found: {sum(len(links) for links in all_links.values())}")

if broken_links:
    print(f"\n❌ BROKEN LINKS FOUND: {len(broken_links)}\n")
    for link_info in broken_links:
        print(f"File: {link_info['file']}:{link_info['line']}")
        print(f"  Link text: [{link_info['text']}]")
        print(f"  URL: {link_info['url']}")
        print(f"  From directory: {link_info['actual_cwd']}")
        print(f"  Resolves to (not found): {link_info['resolved_path']}")
        print()
else:
    print("\n✅ All links are valid!")

print("\n" + "=" * 80)
print("SUMMARY BY FILE")
print("=" * 80)
for file_path in sorted(all_links.keys()):
    links = all_links[file_path]
    print(f"\n{file_path}: {len(links)} link(s)")
    for line_num, text, url in links:
        status = "✓" if url.startswith(('http://', 'https://', '#', 'mailto:')) else "?"
        print(f"  Line {line_num}: [{text}]({url}) {status}")
