# Appendix C: Git Bash / POSIX Shell Integration for SCAD Workflows {#3dmake_foundation-appendix_g_gitbash_integration}

This appendix mirrors Appendix D (PowerShell) but provides examples for Git Bash (mingw) or other POSIX-compatible shells on Windows, macOS, and Linux. Use these scripts when you prefer shell utilities (`bash`, `sed`, `awk`, `curl`) and Unix-like tooling.

## Overview: Why Git Bash / POSIX Shell?

- Leverage standard Unix tools for text processing and automation.
- Cross-platform: same scripts often work on Linux/macOS and Windows via Git Bash.
- Good fit for containerized CI like GitHub Actions.

## Prerequisites & Setup

### Required Software

```bash
command -v openscad   # OpenSCAD
command -v prusa-slicer # PrusaSlicer (or use CLI slicer)
command -v python3     # Python (optional)
command -v curl        # curl for API calls
```

### Directory Structure (POSIX-style)

```plaintext
~/projects/3dMake/
|- src/
|- stl/
|- gcode/
|- logs/
`- scripts/
  |- build.sh
  `- batch_build.sh
```

## Basic Workflow: Single-file build (bash)

`scripts/build.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SCAD_FILE="$1"
SCAD_PATH="$ROOT_DIR/src/$SCAD_FILE"
STL_PATH="$ROOT_DIR/stl/${SCAD_FILE%.*}.stl"
GCODE_PATH="$ROOT_DIR/gcode/${SCAD_FILE%.*}.gcode"

echo "Exporting SCAD -> STL: $SCAD_FILE"
"/c/Program Files/OpenSCAD/openscad.exe" -o "$STL_PATH" "$SCAD_PATH" || { echo "STL export failed"; exit 1; }

echo "Slicing STL -> G-code"
"/c/Program Files/Prusa3D/PrusaSlicer/prusa-slicer.exe" --load-config-file "$ROOT_DIR/scripts/default.ini" -o "$GCODE_PATH" "$STL_PATH" || { echo "Slicing failed"; exit 1; }

echo "BUILD COMPLETE: $GCODE_PATH"
```

Notes:

- Paths to GUI apps on Windows may need the `/c/Program\ Files/...` form under Git Bash, or call the native `.exe` with full quoted path.
- On Linux/macOS adjust executable paths accordingly.

## Batch Build (directory)

`scripts/batch_build.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
find "$ROOT_DIR/src" -name "*.scad" -print0 | while IFS= read -r -d '' file; do
  fname="$(basename "$file")"
  echo "Building $fname"
  "$ROOT_DIR/scripts/build.sh" "$fname"
done
```

## Parametric Sweeps

Use `sed` or `python` to template parameter changes, then call `build.sh` for each variant. Example (bash + python hybrid):

```bash
python3 scripts/gen_variants.py "$ROOT_DIR/src/bracelet_holder.scad" --out variants/
for v in variants/*.scad; do
  ./scripts/build.sh "$(basename "$v")"
done
```

## Logging & CSV

Append simple CSV lines using `printf`:

```bash
printf "%s,%s,Success\n" "$(date +'%Y-%m-%d %H:%M:%S')" "${SCAD_FILE%.*}" >> "$ROOT_DIR/logs/build_history.csv"
```

## Send to Printer (USB)

```bash
# Copy to mounted USB drive (example mount point /media/usb)
cp "$GCODE_PATH" "/media/usb/"
```

## Monitoring (network printers)

Use `curl` to call a printer API (e.g., OctoPrint):

```bash
curl -s "[https://example.com](https://example.com) -H "X-Api-Key: $API_KEY" | jq .
```

## Best Practices

- Use `set -euo pipefail` for safer scripts.
- Use `mktemp` or a `variants/` directory for generated files.
- Keep heavy text processing to `python` if logic becomes complex.
- Make scripts executable (`chmod +x scripts/*.sh`).

---


