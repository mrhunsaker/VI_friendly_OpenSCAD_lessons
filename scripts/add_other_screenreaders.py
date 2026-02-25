#!/usr/bin/env python3
import sys
from pathlib import Path

files = [
"my-book/src/README.md",
"my-book/src/SUMMARY.md",
"my-book/src/3dMake_Foundation/3dMake_Tutorial/3dMake_Tutorial.md",
"my-book/src/3dMake_Foundation/Lessons_3dMake_1/mdbook-navigation-guide.md",
"my-book/src/3dMake_Foundation/Lessons_3dMake_1/nvda-jaws-coding-tips.md",
"my-book/src/3dMake_Foundation/Lessons_3dMake_1/vscode-setup-guide.md",
"my-book/src/CMD_Foundation/CMD_1_navigation/CMD_1_navigation.md",
"my-book/src/CMD_Foundation/CMD_Curriculum_Overview/CMD_Curriculum_Overview.md",
"my-book/src/CMD_Foundation/CMD_Pre_Your_First_Terminal/CMD_Pre_Your_First_Terminal.md",
"my-book/src/Command_Line_Interface_Selection/Command_Line_Interface_Selection.md",
"my-book/src/GitBash_Foundation/GitBash_1_navigation/GitBash_1_navigation.md",
"my-book/src/GitBash_Foundation/GitBash_Curriculum_Overview/GitBash_Curriculum_Overview.md",
"my-book/src/GitBash_Foundation/GitBash_Introduction/GitBash_Introduction.md",
"my-book/src/GitBash_Foundation/GitBash_Pre_Your_First_Terminal/GitBash_Pre_Your_First_Terminal.md",
"my-book/src/GitBash_Foundation/GitBash_Tutorial/GitBash_Tutorial.md",
"my-book/src/PowerShell_Foundation/PS_Pre_Your_First_Terminal/PS_Pre_Your_First_Terminal.md",
"my-book/src/PowerShell_Foundation/PowerShell_Curriculum_Overview/PowerShell_Curriculum_Overview.md",
]

note = "\n\nOther Screen Readers\n\nDolphin SuperNova (commercial) and Windows Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See https://yourdolphin.com/supernova/ and https://support.microsoft.com/narrator for vendor documentation.\n"

root = Path(__file__).resolve().parents[1]
changed = []
for rel in files:
    p = root / rel
    if not p.exists():
        print(f"SKIP (missing): {rel}")
        continue
    text = p.read_text(encoding='utf-8')
    # Only add if neither Dolphin nor Narrator mentioned
    if ('Dolphin' in text) or ('SuperNova' in text) or ('Narrator' in text) or ('Windows Narrator' in text):
        print(f"OK (already mentions): {rel}")
        continue
    # Backup
    bak = p.with_suffix(p.suffix + '.bak')
    bak.write_text(text, encoding='utf-8')
    p.write_text(text + note, encoding='utf-8')
    changed.append(rel)
    print(f"Updated: {rel}")

print('\nSummary:')
print(f'Updated {len(changed)} files')
if changed:
    for c in changed:
        print(' - ' + c)

if __name__ == '__main__':
    sys.exit(0)
