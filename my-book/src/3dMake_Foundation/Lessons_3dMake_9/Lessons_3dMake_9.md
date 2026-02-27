# Lesson 9: Automation and 3dm Workflows

Estimated time: 90–120 minutes

## Learning Objectives
- Write bash scripts to automate repetitive 3dMake build tasks
- Use `import()`, `include`, and `use` to manage multi-file projects
- Automate parameter sweeps to generate STL variant sets
- Use file system tools to organize and archive builds
- Understand how to detect file changes for watch-and-rebuild loops

## Materials
- 3dMake project
- Terminal (bash)
- Text editor

## Step-by-step Tasks

### 1. Write Your First Build Automation Script [^1]

```bash
#!/bin/bash
# build_all.sh — build project and archive the result

set -e  # exit on any error

echo "=== Building project ==="
3dm build

echo "=== Checking output ==="
if [ -f build/main.stl ]; then
  echo "STL created: $(stat -c%s build/main.stl) bytes"
else
  echo "ERROR: build/main.stl not found"
  exit 1
fi

echo "=== Done ==="
```

Make it executable:
```bash
chmod +x build_all.sh
./build_all.sh
```

### 2. Automate Parameter Variants [^2]

Generate multiple STL files with different parameter values by using `sed` or OpenSCAD's `-D` command-line override:

```bash
#!/bin/bash
# generate_variants.sh — build variants with different widths

widths=(40 50 60 80)

mkdir -p build/variants

for w in "${widths[@]}"; do
  echo "Building width=${w}..."
  openscad -D "width=${w}" -o "build/variants/main_w${w}.stl" src/main.scad
  echo "  Created: build/variants/main_w${w}.stl"
done

echo "All variants built:"
ls -lh build/variants/
```

### 3. Use import() for Multi-File Projects

```openscad
// Import an existing STL into your OpenSCAD assembly
// Useful for combining pre-built parts with new geometry
import("existing_part.stl");

// Or position it within an assembly
translate([50, 0, 0])
  import("../../assets/parts/bracket.stl");
```

For OpenSCAD library files, use `use` (modules and functions only) or `include` (executes full file):

```openscad
use <my_library.scad>     // import modules/functions only
include <constants.scad>  // also execute top-level statements
```

### 4. Archive Builds with Timestamps

```bash
#!/bin/bash
# archive_build.sh — timestamped archive of build outputs

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
ARCHIVE_DIR="archives/${TIMESTAMP}"

mkdir -p "$ARCHIVE_DIR"

# Copy build outputs
cp build/main.stl "$ARCHIVE_DIR/"
cp src/main.scad  "$ARCHIVE_DIR/"

# Record metadata
echo "Build archived: ${TIMESTAMP}" > "$ARCHIVE_DIR/README.txt"
echo "Git commit: $(git rev-parse --short HEAD 2>/dev/null || echo 'no git')" >> "$ARCHIVE_DIR/README.txt"

echo "Archived to: ${ARCHIVE_DIR}"
```

### 5. Watch-and-Rebuild Loop

Automatically rebuild when source files change:

```bash
#!/bin/bash
# watch_and_build.sh — rebuild when .scad files are modified

echo "Watching src/ for changes... (Ctrl+C to stop)"

LAST_MOD=""

while true; do
  # Find the most recently modified .scad file
  CURRENT_MOD=$(find src/ -name "*.scad" -newer build/main.stl 2>/dev/null | head -1)

  if [ -n "$CURRENT_MOD" ] && [ "$CURRENT_MOD" != "$LAST_MOD" ]; then
    echo "[$(date +%H:%M:%S)] Change detected in $CURRENT_MOD — rebuilding..."
    3dm build && echo "Build OK" || echo "Build FAILED"
    LAST_MOD="$CURRENT_MOD"
  fi

  sleep 2
done
```

Note: `find -newer` compares modification times. This script polls every 2 seconds; for production use, consider `inotifywait` (Linux) or `fswatch` (macOS) for event-driven watching.

### Checkpoint
- After step 1: `./build_all.sh` runs successfully and reports the STL file size.
- After step 2: `build/variants/` contains one STL per width variant.
- After step 5: When you save `src/main.scad`, the watch script triggers a rebuild within 2 seconds.

## Bash Quick Reference for 3dMake Automation

| Construct | Syntax | Example |
|---|---|---|
| Variable | `VAR=value` | `OUT=build/main.stl` |
| Array | `ARR=(a b c)` | `widths=(40 50 60)` |
| For loop | `for x in "${ARR[@]}"` | `for w in "${widths[@]}"` |
| If exists | `if [ -f FILE ]` | `if [ -f build/main.stl ]` |
| String concat | `"${VAR}_suffix"` | `"main_w${w}.stl"` |
| Exit on error | `set -e` | at top of script |
| Command subst. | `$(command)` | `$(date +%Y%m%d)` |
| Redirect output | `command >> file` | `echo "text" >> log.txt` |

## Quiz — Lesson 3dMake.9 (15 questions)

1. What does `chmod +x script.sh` do, and why is it needed?
2. What does `set -e` do in a bash script?
3. What is the difference between `import()` in OpenSCAD and `use` or `include`?
4. What does `$(date +%Y%m%d_%H%M%S)` produce in a bash script?
5. How does `openscad -D "width=50"` differ from editing the `.scad` file directly?
6. What does `find src/ -name "*.scad" -newer build/main.stl` return?
7. True or False: `include <library.scad>` executes any top-level geometry in the library file.
8. What is the purpose of archiving builds with timestamps?
9. What limitation does `find -newer` have compared to `inotifywait`?
10. Write a bash one-liner that builds 3 variants (height=20, 30, 40) using `openscad -D`.
11. What does `&&` do in the line `3dm build && echo "Build OK" || echo "Build FAILED"`?
12. Explain the difference between `[ -f FILE ]` and `[ -d DIR ]` in bash conditionals.
13. Why would you use `git rev-parse --short HEAD` in a build archive script?
14. Describe a scenario where a watch-and-rebuild loop would save significant time during iterative design.
15. What bash construct would you use to loop over a list of 10 filament names and print each one on a separate line?

## Extension Problems (15)

1. Write a `batch_label.sh` script that builds label plates for a list of names (read from a text file), one STL per name.
2. Create a `clean.sh` script that deletes all `.stl` files in `build/` and all timestamped archive directories older than 7 days.
3. Build a variant comparison report: a script that generates 5 STL variants, records each file size, and writes a CSV summary.
4. Write a `deploy.sh` script that copies the current STL to a network-shared slicer folder and logs the transfer with a timestamp.
5. Create a `validate.sh` script that checks whether `build/main.stl` exists, has a file size > 1000 bytes, and was built in the last 5 minutes.
6. Build a multi-project build orchestrator: a script that loops over a list of project directories, runs `3dm build` in each, and reports success/failure.
7. Extend the watch-and-rebuild script to send a desktop notification (using `notify-send` on Linux) when a build succeeds or fails.
8. Create a "parameter sweep" runner that generates a 3D matrix of variants: all combinations of 3 widths × 3 heights × 2 wall thicknesses (18 STLs total).
9. Write a `git_checkpoint.sh` script that runs `3dm build`, then commits `src/main.scad` and `build/main.stl` to git with an auto-generated commit message.
10. Build a `diff_variants.sh` script that compares file sizes of all STLs in `build/variants/` and flags any that are more than 20% different from the median.
11. Research `inotifywait` (Linux). Rewrite the watch-and-rebuild loop from step 5 to use `inotifywait` instead of `find -newer`. Document the advantages of event-driven vs. polling.
12. Create a build log: append each build's timestamp, STL file size, and OpenSCAD parameter values to a `build_log.csv` file automatically.
13. Write a script that parses your `src/main.scad` file and extracts all top-level parameter names and values using `grep` and `sed`. Output a parameter summary table.
14. Build a cross-platform build script (bash + Windows PowerShell) that performs the same validation steps on both platforms. Document the differences.
15. Design an automated testing framework for OpenSCAD modules: write a script that builds 10 test cases, each with known expected STL file size ranges, and reports PASS/FAIL for each.

## References and Helpful Resources

[^1]: 3DMake GitHub Repository — Source code and README with full command reference. [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

[^2]: OpenSCAD Command-Line Interface — OpenSCAD User Manual. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_OpenSCAD_in_a_command_line_environment](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_OpenSCAD_in_a_command_line_environment). Documents the `-D` parameter override flag and other CLI options.

### Supplemental Resources

- [Bash Scripting Guide — GNU Bash Manual](https://www.gnu.org/software/bash/manual/)
- [OpenSCAD User Manual — Include Statement](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement)
- [3DMake End-to-End Test Suite](https://github.com/tdeck/3dmake/blob/main/e2e_test.py) — Example automation patterns from the 3dMake project itself
- [inotify-tools Linux Documentation](https://github.com/inotify-tools/inotify-tools)
