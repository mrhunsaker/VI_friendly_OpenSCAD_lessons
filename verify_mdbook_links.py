#!/usr/bin/env python3
"""
Comprehensive markdown link verification for mdbook
"""
import os
import re
from pathlib import Path
from collections import defaultdict

src_dir = Path('/var/home/ryhunsaker/Documents/3dprint_instructional_resources/VI_friendly_OpenSCAD_lessons/my-book/src')

# Pattern to find markdown links: [text](url)
link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')

broken_links = []
external_links = []
all_links = defaultdict(list)

# Walk through all markdown files
for md_file in sorted(src_dir.rglob('*.md')):
    relative_path = md_file.relative_to(src_dir)
    
    with open(md_file, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
    
    for line_num, line in enumerate(lines, 1):
        for match in link_pattern.finditer(line):
            text = match.group(1)
            url = match.group(2)
            
            # Skip image links and similar
            if url.endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg')):
                continue
            
            all_links[str(relative_path)].append((line_num, text, url))
            
            # Check external links
            if url.startswith(('http://', 'https://')):
                external_links.append({
                    'file': str(relative_path),
                    'line': line_num,
                    'url': url
                })
                continue
            
            # Skip mailto and pure anchors
            if url.startswith(('mailto:', '#')):
                continue
            
            # Check if it's a relative file link
            if not url.startswith(('http://', 'https://')):
                # Handle fragment links
                base_url = url.split('#')[0] if '#' in url else url
                
                if base_url:  # Only check if there's a base path
                    target_path = (md_file.parent / base_url).resolve()
                    
                    if not target_path.exists():
                        broken_links.append({
                            'file': str(relative_path),
                            'line': line_num,
                            'text': text,
                            'url': url,
                            'resolved_path': str(target_path.relative_to(src_dir.parent)),
                            'from_dir': str(md_file.parent.relative_to(src_dir))
                        })

print("=" * 80)
print("MARKDOWN LINK VERIFICATION REPORT FOR MDBOOK")
print("=" * 80)
print(f"\nTotal markdown files checked: {len(all_links)}")
total_links = sum(len(links) for links in all_links.values())
print(f"Total links found: {total_links}")
print(f"External links (http/https): {len(external_links)}")
print(f"Broken relative links: {len(broken_links)}")

if broken_links:
    print(f"\n❌ BROKEN LINKS FOUND: {len(broken_links)}\n")
    for i, link_info in enumerate(broken_links, 1):
        print(f"{i}. File: {link_info['file']}:{link_info['line']}")
        print(f"   Link text: [{link_info['text']}]")
        print(f"   URL: {link_info['url']}")
        print(f"   From directory: {link_info['from_dir']}")
        print(f"   Attempted resolution: {link_info['resolved_path']}")
        print()
else:
    print("\n✅ All relative links are valid!")

print("\n" + "=" * 80)
print("EXTERNAL LINKS TO VERIFY")
print("=" * 80)
print(f"\nFound {len(external_links)} external links (not verified for validity):\n")
for link_info in external_links[:10]:  # Show first 10
    print(f"  {link_info['file']}:{link_info['line']}")
    print(f"    {link_info['url']}")

if len(external_links) > 10:
    print(f"\n  ... and {len(external_links) - 10} more external links")

print("\n" + "=" * 80)
