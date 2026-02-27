#!/usr/bin/env python3
"""Wrap listed index candidate terms in my-book/src markdown files with TERM.

Creates .bak backups for modified files. Skips code blocks, inline code, and
already-wrapped `...` spans.
"""
import os
import re
from pathlib import Path

TERMS = [
    "you","file","Design","design","print","OpenSCAD","command","PowerShell",
    "Screen","create","Bash","output","files","code","reader","Windows","test",
    "Screen reader","PATH","module","Module","parametric","text","Model","commands",
    "3DMake","accessibility","build","one","script","printing","Git","git","each",
    "using","NVDA","cube","material","quality","run","time","first","write","can",
    "translate","JAWS","printer","part","height","reference","before","STL","filament",
    "List","work","support","parameters","navigation","name","variables","specific",
    "Slicer","into","bed","Bed","layer","error","parameter","Preview","between",
    "GitHub","shell","Shell","common","Common","workflow","copy","difference","Nozzle",
    "scripts","Any","new","environment","geometry","braille",
]


def placeholders_for_spans(text, pattern, tag):
    """Replace spans matching pattern with placeholders and return list of originals."""
    originals = []

    def repl(m):
        originals.append(m.group(0))
        return f"__{tag}_{len(originals)-1}__"

    new = re.sub(pattern, repl, text, flags=re.MULTILINE | re.DOTALL)
    return new, originals


def restore_placeholders(text, originals, tag):
    for i, orig in enumerate(originals):
        text = text.replace(f"__{tag}_{i}__", orig)
    return text


def process_file(path, terms):
    text = path.read_text(encoding="utf-8")
    original = text

    # Remove code blocks (``` ... ```) and store them
    text, codeblocks = placeholders_for_spans(text, r"^```.*?^```", "CODEBLOCK")

    # Remove existing wrapped ... spans to avoid double-wrapping
    text, wrapped = placeholders_for_spans(text, r"\{\{i:[^}]+\}\}", "WRAPPED")

    # Remove inline code spans `...`
    text, inline = placeholders_for_spans(text, r"`[^`]*?`", "INLINE")

    # Sort terms by length desc to avoid partial replacements (e.g., 'Bed' before 'bed')
    terms_sorted = sorted(terms, key=lambda s: -len(s))

    for term in terms_sorted:
        # Escape and replace only whole-word occurrences or exact phrase matches.
        # Use word boundaries where possible; for phrases with spaces we'll drop \b for internal boundaries.
        if " " in term:
            pattern = r"(?<!\{\{i:)(?<!\w)" + re.escape(term) + r"(?!\w)"
        else:
            pattern = r"(?<!\{\{i:})\b" + re.escape(term) + r"\b"

        text = re.sub(pattern, lambda m: "" + m.group(0) + "", text)

    # Restore placeholders
    text = restore_placeholders(text, inline, "INLINE")
    text = restore_placeholders(text, wrapped, "WRAPPED")
    text = restore_placeholders(text, codeblocks, "CODEBLOCK")

    if text != original:
        bak = path.with_suffix(path.suffix + ".bak")
        bak.write_text(original, encoding="utf-8")
        path.write_text(text, encoding="utf-8")
        return True
    return False


def main():
    root = Path(__file__).resolve().parents[1] / "src"
    md_files = list(root.rglob("*.md"))
    changed = []
    for f in md_files:
        try:
            if process_file(f, TERMS):
                changed.append(str(f.relative_to(Path.cwd())))
        except Exception as e:
            print(f"Error processing {f}: {e}")

    print(f"Processed {len(md_files)} files, modified {len(changed)} files.")
    if changed:
        for c in changed:
            print("Modified:", c)


if __name__ == "__main__":
    main()
