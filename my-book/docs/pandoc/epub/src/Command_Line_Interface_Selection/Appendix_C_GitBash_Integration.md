[Header 3 ("3dmake_foundation-appendix_g_gitbash_integration", [], []) [Str "Appendix C: Git Bash / POSIX Shell Integration for SCAD Workflows"], Para [Str "This appendix mirrors Appendix D (PowerShell) but provides examples for Git Bash (mingw) or other POSIX-compatible shells on Windows, macOS, and Linux. Use these scripts when you prefer shell utilities (", Code ("", [], []) "bash", Str ", ", Code ("", [], []) "sed", Str ", ", Code ("", [], []) "awk", Str ", ", Code ("", [], []) "curl", Str ") and Unix-like tooling."], Header 4 ("overview-why-git-bash--posix-shell", ["unnumbered", "unlisted"], []) [Str "Overview: Why Git Bash / POSIX Shell?"], BulletList [[Plain [Str "Leverage standard Unix tools for text processing and automation."]], [Plain [Str "Cross-platform: same scripts often work on Linux/macOS and Windows via Git Bash."]], [Plain [Str "Good fit for containerized CI like GitHub Actions."]]], Header 4 ("prerequisites--setup", ["unnumbered", "unlisted"], []) [Str "Prerequisites & Setup"], Header 5 ("required-software", ["unnumbered", "unlisted"], []) [Str "Required Software"], CodeBlock ("", ["bash"], []) "command -v openscad   # OpenSCAD
command -v prusa-slicer # PrusaSlicer (or use CLI slicer)
command -v python3     # Python (optional)
command -v curl        # curl for API calls
", Header 5 ("directory-structure-posix-style", ["unnumbered", "unlisted"], []) [Str "Directory Structure (POSIX-style)"], CodeBlock ("", ["plaintext"], []) "~/projects/3dMake/
|- src/
|- stl/
|- gcode/
|- logs/
`- scripts/
  |- build.sh
  `- batch_build.sh
", Header 4 ("basic-workflow-single-file-build-bash", ["unnumbered", "unlisted"], []) [Str "Basic Workflow: Single-file build (bash)"], Para [Code ("", [], []) "scripts/build.sh", Str ":"], CodeBlock ("", ["bash"], []) "#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR=\"$(cd \"$(dirname \"$0\")/..\" && pwd)\"
SCAD_FILE=\"$1\"
SCAD_PATH=\"$ROOT_DIR/src/$SCAD_FILE\"
STL_PATH=\"$ROOT_DIR/stl/${SCAD_FILE%.*}.stl\"
GCODE_PATH=\"$ROOT_DIR/gcode/${SCAD_FILE%.*}.gcode\"

echo \"Exporting SCAD -> STL: $SCAD_FILE\"
\"/c/Program Files/OpenSCAD/openscad.exe\" -o \"$STL_PATH\" \"$SCAD_PATH\" || { echo \"STL export failed\"; exit 1; }

echo \"Slicing STL -> G-code\"
\"/c/Program Files/Prusa3D/PrusaSlicer/prusa-slicer.exe\" --load-config-file \"$ROOT_DIR/scripts/default.ini\" -o \"$GCODE_PATH\" \"$STL_PATH\" || { echo \"Slicing failed\"; exit 1; }

echo \"BUILD COMPLETE: $GCODE_PATH\"
", Para [Str "Notes:"], BulletList [[Plain [Str "Paths to GUI apps on Windows may need the ", Code ("", [], []) "/c/Program\\ Files/...", Str " form under Git Bash, or call the native ", Code ("", [], []) ".exe", Str " with full quoted path."]], [Plain [Str "On Linux/macOS adjust executable paths accordingly."]]], Header 4 ("batch-build-directory", ["unnumbered", "unlisted"], []) [Str "Batch Build (directory)"], Para [Code ("", [], []) "scripts/batch_build.sh", Str ":"], CodeBlock ("", ["bash"], []) "#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR=\"$(cd \"$(dirname \"$0\")/..\" && pwd)\"
find \"$ROOT_DIR/src\" -name \"*.scad\" -print0 | while IFS= read -r -d '' file; do
  fname=\"$(basename \"$file\")\"
  echo \"Building $fname\"
  \"$ROOT_DIR/scripts/build.sh\" \"$fname\"
done
", Header 4 ("parametric-sweeps", ["unnumbered", "unlisted"], []) [Str "Parametric Sweeps"], Para [Str "Use ", Code ("", [], []) "sed", Str " or ", Code ("", [], []) "python", Str " to template parameter changes, then call ", Code ("", [], []) "build.sh", Str " for each variant. Example (bash + python hybrid):"], CodeBlock ("", ["bash"], []) "python3 scripts/gen_variants.py \"$ROOT_DIR/src/bracelet_holder.scad\" --out variants/
for v in variants/*.scad; do
  ./scripts/build.sh \"$(basename \"$v\")\"
done
", Header 4 ("logging--csv", ["unnumbered", "unlisted"], []) [Str "Logging & CSV"], Para [Str "Append simple CSV lines using ", Code ("", [], []) "printf", Str ":"], CodeBlock ("", ["bash"], []) "printf \"%s,%s,Success\\n\" \"$(date +'%Y-%m-%d %H:%M:%S')\" \"${SCAD_FILE%.*}\" >> \"$ROOT_DIR/logs/build_history.csv\"
", Header 4 ("send-to-printer-usb", ["unnumbered", "unlisted"], []) [Str "Send to Printer (USB)"], CodeBlock ("", ["bash"], []) "# Copy to mounted USB drive (example mount point /media/usb)
cp \"$GCODE_PATH\" \"/media/usb/\"
", Header 4 ("monitoring-network-printers", ["unnumbered", "unlisted"], []) [Str "Monitoring (network printers)"], Para [Str "Use ", Code ("", [], []) "curl", Str " to call a printer API (e.g., OctoPrint):"], CodeBlock ("", ["bash"], []) "curl -s \"[https://example.com](https://example.com) -H \"X-Api-Key: $API_KEY\" | jq .
", Header 4 ("best-practices", ["unnumbered", "unlisted"], []) [Str "Best Practices"], BulletList [[Plain [Str "Use ", Code ("", [], []) "set -euo pipefail", Str " for safer scripts."]], [Plain [Str "Use ", Code ("", [], []) "mktemp", Str " or a ", Code ("", [], []) "variants/", Str " directory for generated files."]], [Plain [Str "Keep heavy text processing to ", Code ("", [], []) "python", Str " if logic becomes complex."]], [Plain [Str "Make scripts executable (", Code ("", [], []) "chmod +x scripts/*.sh", Str ")."]]], HorizontalRule]