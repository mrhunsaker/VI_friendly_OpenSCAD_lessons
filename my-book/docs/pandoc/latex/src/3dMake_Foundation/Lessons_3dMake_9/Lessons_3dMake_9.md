[Header 2 ("lesson-9-automation-and-3dm-workflows", [], []) [Str "Lesson 9: Automation and 3dm Workflows"], Para [Str "Estimated time: 90–120 minutes"], Header 3 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], BulletList [[Plain [Str "Write bash scripts to automate repetitive 3dMake build tasks"]], [Plain [Str "Use ", Code ("", [], []) "import()", Str ", ", Code ("", [], []) "include", Str ", and ", Code ("", [], []) "use", Str " to manage multi-file projects"]], [Plain [Str "Automate parameter sweeps to generate STL variant sets"]], [Plain [Str "Use file system tools to organize and archive builds"]], [Plain [Str "Understand how to detect file changes for watch-and-rebuild loops"]]], Header 3 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "3dMake project"]], [Plain [Str "Terminal (bash)"]], [Plain [Str "Text editor"]]], Header 3 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], Header 4 ("1-write-your-first-build-automation-script-", ["unnumbered", "unlisted"], []) [Str "1. Write Your First Build Automation Script ", Note [Para [Str "3DMake GitHub Repository — Source code and README with full command reference. ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]]], CodeBlock ("", ["bash"], []) "#!/bin/bash
# build_all.sh — build project and archive the result

set -e  # exit on any error

echo \"=== Building project ===\"
3dm build

echo \"=== Checking output ===\"
if [ -f build/main.stl ]; then
  echo \"STL created: $(stat -c%s build/main.stl) bytes\"
else
  echo \"ERROR: build/main.stl not found\"
  exit 1
fi

echo \"=== Done ===\"
", Para [Str "Make it executable:"], CodeBlock ("", ["bash"], []) "chmod +x build_all.sh
./build_all.sh
", Header 4 ("2-automate-parameter-variants-", ["unnumbered", "unlisted"], []) [Str "2. Automate Parameter Variants ", Note [Para [Str "OpenSCAD Command-Line Interface — OpenSCAD User Manual. ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_OpenSCAD_in_a_command_line_environment"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_OpenSCAD_in_a_command_line_environment", ""), Str ". Documents the ", Code ("", [], []) "-D", Str " parameter override flag and other CLI options."]]], Para [Str "Generate multiple STL files with different parameter values by using ", Code ("", [], []) "sed", Str " or OpenSCAD's ", Code ("", [], []) "-D", Str " command-line override:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# generate_variants.sh — build variants with different widths

widths=(40 50 60 80)

mkdir -p build/variants

for w in \"${widths[@]}\"; do
  echo \"Building width=${w}...\"
  openscad -D \"width=${w}\" -o \"build/variants/main_w${w}.stl\" src/main.scad
  echo \"  Created: build/variants/main_w${w}.stl\"
done

echo \"All variants built:\"
ls -lh build/variants/
", Header 4 ("3-use-import-for-multi-file-projects", ["unnumbered", "unlisted"], []) [Str "3. Use import() for Multi-File Projects"], CodeBlock ("", ["openscad"], []) "// Import an existing STL into your OpenSCAD assembly
// Useful for combining pre-built parts with new geometry
import(\"existing_part.stl\");

// Or position it within an assembly
translate([50, 0, 0])
  import(\"../../assets/parts/bracket.stl\");
", Para [Str "For OpenSCAD library files, use ", Code ("", [], []) "use", Str " (modules and functions only) or ", Code ("", [], []) "include", Str " (executes full file):"], CodeBlock ("", ["openscad"], []) "use <my_library.scad>     // import modules/functions only
include <constants.scad>  // also execute top-level statements
", Header 4 ("4-archive-builds-with-timestamps", ["unnumbered", "unlisted"], []) [Str "4. Archive Builds with Timestamps"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# archive_build.sh — timestamped archive of build outputs

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
ARCHIVE_DIR=\"archives/${TIMESTAMP}\"

mkdir -p \"$ARCHIVE_DIR\"

# Copy build outputs
cp build/main.stl \"$ARCHIVE_DIR/\"
cp src/main.scad  \"$ARCHIVE_DIR/\"

# Record metadata
echo \"Build archived: ${TIMESTAMP}\" > \"$ARCHIVE_DIR/README.txt\"
echo \"Git commit: $(git rev-parse --short HEAD 2>/dev/null || echo 'no git')\" >> \"$ARCHIVE_DIR/README.txt\"

echo \"Archived to: ${ARCHIVE_DIR}\"
", Header 4 ("5-watch-and-rebuild-loop", ["unnumbered", "unlisted"], []) [Str "5. Watch-and-Rebuild Loop"], Para [Str "Automatically rebuild when source files change:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# watch_and_build.sh — rebuild when .scad files are modified

echo \"Watching src/ for changes... (Ctrl+C to stop)\"

LAST_MOD=\"\"

while true; do
  # Find the most recently modified .scad file
  CURRENT_MOD=$(find src/ -name \"*.scad\" -newer build/main.stl 2>/dev/null | head -1)

  if [ -n \"$CURRENT_MOD\" ] && [ \"$CURRENT_MOD\" != \"$LAST_MOD\" ]; then
    echo \"[$(date +%H:%M:%S)] Change detected in $CURRENT_MOD — rebuilding...\"
    3dm build && echo \"Build OK\" || echo \"Build FAILED\"
    LAST_MOD=\"$CURRENT_MOD\"
  fi

  sleep 2
done
", Para [Str "Note: ", Code ("", [], []) "find -newer", Str " compares modification times. This script polls every 2 seconds; for production use, consider ", Code ("", [], []) "inotifywait", Str " (Linux) or ", Code ("", [], []) "fswatch", Str " (macOS) for event-driven watching."], Header 4 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After step 1: ", Code ("", [], []) "./build_all.sh", Str " runs successfully and reports the STL file size."]], [Plain [Str "After step 2: ", Code ("", [], []) "build/variants/", Str " contains one STL per width variant."]], [Plain [Str "After step 5: When you save ", Code ("", [], []) "src/main.scad", Str ", the watch script triggers a rebuild within 2 seconds."]]], Header 3 ("bash-quick-reference-for-3dmake-automation", ["unnumbered", "unlisted"], []) [Str "Bash Quick Reference for 3dMake Automation"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault)] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Construct"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Syntax"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Example"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Variable"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "VAR=value"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "OUT=build/main.stl"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Array"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "ARR=(a b c)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "widths=(40 50 60)"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "For loop"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "for x in \"${ARR[@]}\""]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "for w in \"${widths[@]}\""]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "If exists"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "if [ -f FILE ]"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "if [ -f build/main.stl ]"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "String concat"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "\"${VAR}_suffix\""]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "\"main_w${w}.stl\""]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Exit on error"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "set -e"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "at top of script"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Command subst."]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "$(command)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "$(date +%Y%m%d)"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Redirect output"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "command >> file"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "echo \"text\" >> log.txt"]]]])] (TableFoot ("", [], []) []), Header 3 ("quiz--lesson-3dmake9-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.9 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What does ", Code ("", [], []) "chmod +x script.sh", Str " do, and why is it needed?"]], [Plain [Str "What does ", Code ("", [], []) "set -e", Str " do in a bash script?"]], [Plain [Str "What is the difference between ", Code ("", [], []) "import()", Str " in OpenSCAD and ", Code ("", [], []) "use", Str " or ", Code ("", [], []) "include", Str "?"]], [Plain [Str "What does ", Code ("", [], []) "$(date +%Y%m%d_%H%M%S)", Str " produce in a bash script?"]], [Plain [Str "How does ", Code ("", [], []) "openscad -D \"width=50\"", Str " differ from editing the ", Code ("", [], []) ".scad", Str " file directly?"]], [Plain [Str "What does ", Code ("", [], []) "find src/ -name \"*.scad\" -newer build/main.stl", Str " return?"]], [Plain [Str "True or False: ", Code ("", [], []) "include <library.scad>", Str " executes any top-level geometry in the library file."]], [Plain [Str "What is the purpose of archiving builds with timestamps?"]], [Plain [Str "What limitation does ", Code ("", [], []) "find -newer", Str " have compared to ", Code ("", [], []) "inotifywait", Str "?"]], [Plain [Str "Write a bash one-liner that builds 3 variants (height=20, 30, 40) using ", Code ("", [], []) "openscad -D", Str "."]], [Plain [Str "What does ", Code ("", [], []) "&&", Str " do in the line ", Code ("", [], []) "3dm build && echo \"Build OK\" || echo \"Build FAILED\"", Str "?"]], [Plain [Str "Explain the difference between ", Code ("", [], []) "[ -f FILE ]", Str " and ", Code ("", [], []) "[ -d DIR ]", Str " in bash conditionals."]], [Plain [Str "Why would you use ", Code ("", [], []) "git rev-parse --short HEAD", Str " in a build archive script?"]], [Plain [Str "Describe a scenario where a watch-and-rebuild loop would save significant time during iterative design."]], [Plain [Str "What bash construct would you use to loop over a list of 10 filament names and print each one on a separate line?"]]], Header 3 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Write a ", Code ("", [], []) "batch_label.sh", Str " script that builds label plates for a list of names (read from a text file), one STL per name."]], [Plain [Str "Create a ", Code ("", [], []) "clean.sh", Str " script that deletes all ", Code ("", [], []) ".stl", Str " files in ", Code ("", [], []) "build/", Str " and all timestamped archive directories older than 7 days."]], [Plain [Str "Build a variant comparison report: a script that generates 5 STL variants, records each file size, and writes a CSV summary."]], [Plain [Str "Write a ", Code ("", [], []) "deploy.sh", Str " script that copies the current STL to a network-shared slicer folder and logs the transfer with a timestamp."]], [Plain [Str "Create a ", Code ("", [], []) "validate.sh", Str " script that checks whether ", Code ("", [], []) "build/main.stl", Str " exists, has a file size > 1000 bytes, and was built in the last 5 minutes."]], [Plain [Str "Build a multi-project build orchestrator: a script that loops over a list of project directories, runs ", Code ("", [], []) "3dm build", Str " in each, and reports success/failure."]], [Plain [Str "Extend the watch-and-rebuild script to send a desktop notification (using ", Code ("", [], []) "notify-send", Str " on Linux) when a build succeeds or fails."]], [Plain [Str "Create a \"parameter sweep\" runner that generates a 3D matrix of variants: all combinations of 3 widths × 3 heights × 2 wall thicknesses (18 STLs total)."]], [Plain [Str "Write a ", Code ("", [], []) "git_checkpoint.sh", Str " script that runs ", Code ("", [], []) "3dm build", Str ", then commits ", Code ("", [], []) "src/main.scad", Str " and ", Code ("", [], []) "build/main.stl", Str " to git with an auto-generated commit message."]], [Plain [Str "Build a ", Code ("", [], []) "diff_variants.sh", Str " script that compares file sizes of all STLs in ", Code ("", [], []) "build/variants/", Str " and flags any that are more than 20% different from the median."]], [Plain [Str "Research ", Code ("", [], []) "inotifywait", Str " (Linux). Rewrite the watch-and-rebuild loop from step 5 to use ", Code ("", [], []) "inotifywait", Str " instead of ", Code ("", [], []) "find -newer", Str ". Document the advantages of event-driven vs. polling."]], [Plain [Str "Create a build log: append each build's timestamp, STL file size, and OpenSCAD parameter values to a ", Code ("", [], []) "build_log.csv", Str " file automatically."]], [Plain [Str "Write a script that parses your ", Code ("", [], []) "src/main.scad", Str " file and extracts all top-level parameter names and values using ", Code ("", [], []) "grep", Str " and ", Code ("", [], []) "sed", Str ". Output a parameter summary table."]], [Plain [Str "Build a cross-platform build script (bash + Windows PowerShell) that performs the same validation steps on both platforms. Document the differences."]], [Plain [Str "Design an automated testing framework for OpenSCAD modules: write a script that builds 10 test cases, each with known expected STL file size ranges, and reports PASS/FAIL for each."]]], Header 3 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 4 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Bash Scripting Guide — GNU Bash Manual"] ("https://www.gnu.org/software/bash/manual/", "")]], [Plain [Link ("", [], []) [Str "OpenSCAD User Manual — Include Statement"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement", "")]], [Plain [Link ("", [], []) [Str "3DMake End-to-End Test Suite"] ("https://github.com/tdeck/3dmake/blob/main/e2e_test.py", ""), Str " — Example automation patterns from the 3dMake project itself"]], [Plain [Link ("", [], []) [Str "inotify-tools Linux Documentation"] ("https://github.com/inotify-tools/inotify-tools", "")]]]]