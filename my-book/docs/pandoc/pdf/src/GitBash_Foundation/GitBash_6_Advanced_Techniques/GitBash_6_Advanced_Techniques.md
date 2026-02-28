[Header 3 ("gitbash-6-advanced-terminal-techniques---shell-scripts-functions--professional-workflows", [], []) [Str "GitBash-6: Advanced Terminal Techniques - Shell Scripts, Functions & Professional Workflows"], Para [Strong [Str "Duration:"], Str " 4-4.5 hours (for screen reader users)", SoftBreak, Strong [Str "Prerequisites:"], Str " Complete GitBash-0 through GitBash-5", SoftBreak, Strong [Str "Skill Level:"], Str " Advanced intermediate"], Para [Str "This lesson extends Git Bash skills to professional-level workflows. You'll learn to automate complex tasks, write reusable shell scripts, and integrate tools for 3D printing workflows."], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson, you will be able to:"], BulletList [[Plain [Str "Create and run shell scripts (.sh files)"]], [Plain [Str "Write functions that accept parameters"]], [Plain [Str "Use loops to repeat tasks automatically"]], [Plain [Str "Automate batch processing of 3D models"]], [Plain [Str "Debug scripts when something goes wrong"]], [Plain [Str "Create professional workflows combining multiple tools"]]], HorizontalRule, Header 4 ("shell-script-basics", ["unnumbered", "unlisted"], []) [Str "Shell Script Basics"], Header 5 ("whats-a-shell-script", ["unnumbered", "unlisted"], []) [Str "What's a Shell Script?"], Para [Str "A shell script (", Code ("", [], []) ".sh", Str ") contains multiple bash commands that run in sequence. Instead of typing commands one by one, you put them in a file and run them all at once."], Para [Strong [Str "Why use shell scripts?"]], BulletList [[Plain [Str "Repeatability: Run the same task 100 times identically"]], [Plain [Str "Documentation: Commands are written down for reference"]], [Plain [Str "Complexity: Combine many commands logically"]], [Plain [Str "Automation: Schedule scripts to run automatically"]]], Header 5 ("creating-your-first-shell-script", ["unnumbered", "unlisted"], []) [Str "Creating Your First Shell Script"], Para [Strong [Str "Step 1: Open a text editor"]], CodeBlock ("", ["bash"], []) "notepad.exe my-first-script.sh
", Para [Strong [Str "Step 2: Type this script"]], CodeBlock ("", ["bash"], []) "#!/bin/bash
# This is a comment - screen readers will read it
echo \"Script is running!\"
pwd
ls -1
echo \"Script is done!\"
", Para [Strong [Str "Step 3: Save the file"]], BulletList [[Plain [Str "In Notepad: Ctrl+S"]], [Plain [Str "Make sure filename ends in ", Code ("", [], []) ".sh"]], [Plain [Str "Save in an easy-to-find location (like Documents)"]]], Para [Strong [Str "Step 4: Make it executable and run the script"]], CodeBlock ("", ["bash"], []) "chmod +x my-first-script.sh
./my-first-script.sh
", Para [Strong [Str "What happens:"], SoftBreak, Str "Bash runs each command in sequence and shows output."], Header 5 ("important-the-shebang-line", ["unnumbered", "unlisted"], []) [Str "Important: The Shebang Line"], Para [Str "The ", Code ("", [], []) "#!/bin/bash", Str " at the top of your script (called a \"shebang\") tells the system which shell to use to run the script."], CodeBlock ("", ["bash"], []) "#!/bin/bash
# Now bash runs every command below
echo \"Hello!\"
", HorizontalRule, Header 4 ("variables-and-parameters", ["unnumbered", "unlisted"], []) [Str "Variables and Parameters"], Header 5 ("using-variables", ["unnumbered", "unlisted"], []) [Str "Using Variables"], Para [Str "Variables store values you want to use later."], Para [Strong [Str "Example script:"]], CodeBlock ("", ["bash"], []) "#!/bin/bash
mypath=\"$HOME/Documents\"
cd \"$mypath\"
echo \"I am now in:\"
pwd
ls -1
", Para [Strong [Str "Breaking it down:"]], BulletList [[Plain [Code ("", [], []) "mypath=\"...\"", Str " assigns the variable (no spaces around ", Code ("", [], []) "=", Str ")"]], [Plain [Code ("", [], []) "\"$mypath\"", Str " uses the variable (quote it to handle spaces in paths)"]], [Plain [Str "Variables in bash are always referenced with ", Code ("", [], []) "$"]]], Header 5 ("functions-with-parameters", ["unnumbered", "unlisted"], []) [Str "Functions with Parameters"], Para [Str "A function is reusable code that you can run with different inputs."], Para [Strong [Str "Example: A function that lists files in a folder"]], CodeBlock ("", ["bash"], []) "#!/bin/bash
list_folder() {
    local path=\"$1\"
    echo \"Contents of: $path\"
    cd \"$path\"
    ls -1
}

# Use the function:
list_folder \"$HOME/Documents\"
list_folder \"$HOME/Downloads\"
", Para [Strong [Str "What's happening:"]], BulletList [[Plain [Code ("", [], []) "list_folder()", Str " defines the function"]], [Plain [Code ("", [], []) "local path=\"$1\"", Str " assigns the first argument to a local variable"]], [Plain [Code ("", [], []) "$1", Str " is the first argument passed to the function"]], [Plain [Str "Call the function with ", Code ("", [], []) "list_folder \"path/to/folder\""]]], Para [Strong [Str "Screen reader tip:"], Str " When you call a function, bash will announce the results just like any command."], HorizontalRule, Header 4 ("loops---repeating-tasks", ["unnumbered", "unlisted"], []) [Str "Loops - Repeating Tasks"], Header 5 ("loop-over-files", ["unnumbered", "unlisted"], []) [Str "Loop Over Files"], Para [Str "Imagine you have 10 SCAD files and want to print their contents. You could do it 10 times manually, or use a loop."], Para [Strong [Str "Example: Print every .scad file in a folder"]], CodeBlock ("", ["bash"], []) "#!/bin/bash
for file in *.scad; do
    echo \"=== File: $file ===\"
    cat \"$file\"
    echo \"\"
done
", Para [Strong [Str "What's happening:"]], BulletList [[Plain [Code ("", [], []) "for file in *.scad; do", Str " iterates over each ", Code ("", [], []) ".scad", Str " file"]], [Plain [Code ("", [], []) "$file", Str " holds the current filename"]], [Plain [Code ("", [], []) "done", Str " ends the loop"]], [Plain [Str "Inside the loop, do something with each ", Code ("", [], []) "$file"]]], Header 5 ("loop-with-a-counter", ["unnumbered", "unlisted"], []) [Str "Loop with a Counter"], Para [Strong [Str "Example: Do something 5 times"]], CodeBlock ("", ["bash"], []) "#!/bin/bash
for i in $(seq 1 5); do
    echo \"This is iteration number $i\"
    # Do something here
done
", Para [Strong [Str "What's happening:"]], BulletList [[Plain [Code ("", [], []) "for i in $(seq 1 5)", Str " loops with ", Code ("", [], []) "i", Str " from 1 to 5"]], [Plain [Code ("", [], []) "$i", Str " is the counter variable"]]], HorizontalRule, Header 4 ("real-world-example---batch-processing-scad-files", ["unnumbered", "unlisted"], []) [Str "Real-World Example - Batch Processing SCAD Files"], Header 5 ("scenario", ["unnumbered", "unlisted"], []) [Str "Scenario"], Para [Str "You have 10 OpenSCAD (.scad) files in a folder. You want to:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "List them all"]], [Plain [Str "Check how many there are"]], [Plain [Str "For each one, verify it exists"]]], Header 5 ("the-script", ["unnumbered", "unlisted"], []) [Str "The Script"], CodeBlock ("", ["bash"], []) "#!/bin/bash
scad_folder=\"$HOME/Documents/3D_Projects\"
count=0

echo \"Processing SCAD files in: $scad_folder\"
echo \"\"

for file in \"$scad_folder\"/*.scad; do
    if [ -f \"$file\" ]; then
        echo \"  Found: $(basename \"$file\")\"
        count=$((count + 1))
    else
        echo \"  Missing: $(basename \"$file\")\"
    fi
done

echo \"\"
echo \"Total files found: $count\"
echo \"Batch processing complete!\"
", Para [Strong [Str "Breaking it down:"]], BulletList [[Plain [Code ("", [], []) "scad_folder=\"...\"", Str " = where to look"]], [Plain [Code ("", [], []) "for file in \"$scad_folder\"/*.scad", Str " = find all .scad files"]], [Plain [Code ("", [], []) "if [ -f \"$file\" ]", Str " = check if file exists and is a regular file"]], [Plain [Code ("", [], []) "basename \"$file\"", Str " = just the filename (not the full path)"]], [Plain [Code ("", [], []) "count=$((count + 1))", Str " = increment the counter"]]], Header 5 ("running-the-script", ["unnumbered", "unlisted"], []) [Str "Running the Script"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Save as ", Code ("", [], []) "batch-process.sh"]], [Plain [Str "Edit ", Code ("", [], []) "scad_folder", Str " to match your real folder"]], [Plain [Str "Make it executable and run it:"], CodeBlock ("", ["bash"], []) "chmod +x batch-process.sh
./batch-process.sh
"]], Para [Strong [Str "Screen reader output:"]], CodeBlock ("", [""], []) "Processing SCAD files in: /c/Users/YourName/Documents/3D_Projects

  Found: model1.scad
  Found: model2.scad
  Found: model3.scad
[... more files ...]

Total files found: 10
Batch processing complete!
", HorizontalRule, Header 4 ("error-handling", ["unnumbered", "unlisted"], []) [Str "Error Handling"], Header 5 ("try-style-checks-with-exit-codes", ["unnumbered", "unlisted"], []) [Str "Try-Style Checks with Exit Codes"], Para [Str "What if something goes wrong? Use exit code checks:"], Para [Strong [Str "Example:"]], CodeBlock ("", ["bash"], []) "#!/bin/bash
file=\"$HOME/nonexistent/path/file.txt\"

if cat \"$file\" 2>/dev/null; then
    echo \"File read successfully\"
else
    echo \"Error: Could not read file\"
    echo \"File path was: $file\"
fi
", Para [Strong [Str "What's happening:"]], BulletList [[Plain [Code ("", [], []) "2>/dev/null", Str " suppresses error messages from ", Code ("", [], []) "cat"]], [Plain [Code ("", [], []) "if cat ...; then", Str " checks whether the command succeeded"]], [Plain [Code ("", [], []) "else", Str " handles the failure gracefully"]]], Para [Strong [Str "Screen reader advantage:"], Str " Errors are announced clearly instead of crashing silently."], Header 5 ("validating-input", ["unnumbered", "unlisted"], []) [Str "Validating Input"], Para [Strong [Str "Example: Make sure a folder exists before processing"]], CodeBlock ("", ["bash"], []) "#!/bin/bash
process_folder() {
    local folder_path=\"$1\"

    if [ ! -d \"$folder_path\" ]; then
        echo \"Error: Folder does not exist: $folder_path\"
        return 1
    fi

    echo \"Processing folder: $folder_path\"
    ls -1 \"$folder_path\"
}

process_folder \"$HOME/Documents\"
", Para [Strong [Str "What's happening:"]], BulletList [[Plain [Code ("", [], []) "[ ! -d \"$folder_path\" ]", Str " checks if the path is NOT a directory"]], [Plain [Code ("", [], []) "return 1", Str " exits the function early with a non-zero (error) status"]]], HorizontalRule, Header 4 ("debugging-shell-scripts", ["unnumbered", "unlisted"], []) [Str "Debugging Shell Scripts"], Header 5 ("common-errors-and-solutions", ["unnumbered", "unlisted"], []) [Str "Common Errors and Solutions"], Header 6 ("error-1-command-not-found", ["unnumbered", "unlisted"], []) [Str "Error 1: \"Command not found\""], Para [Strong [Str "Cause:"], Str " Typo in command name"], Para [Strong [Str "Fix:"], Str " Check spelling"], CodeBlock ("", ["bash"], []) "# Wrong:
ech \"hello\"

# Correct:
echo \"hello\"
", Header 6 ("error-2-variable-is-empty", ["unnumbered", "unlisted"], []) [Str "Error 2: \"Variable is empty\""], Para [Strong [Str "Cause:"], Str " Variable was never assigned or has a typo"], Para [Strong [Str "Fix:"], Str " Make sure variable is set before using it"], CodeBlock ("", ["bash"], []) "myvar=\"hello\"  # Set first
echo \"$myvar\"  # Then use
", Header 6 ("error-3-no-such-file-or-directory", ["unnumbered", "unlisted"], []) [Str "Error 3: \"No such file or directory\""], Para [Strong [Str "Cause:"], Str " Wrong folder path"], Para [Strong [Str "Fix:"], Str " Verify path exists"], CodeBlock ("", ["bash"], []) "# Check if path exists:
if [ -d \"$HOME/Documents\" ]; then
    echo \"Path exists\"
fi
", Header 6 ("error-4-permission-denied", ["unnumbered", "unlisted"], []) [Str "Error 4: \"Permission denied\""], Para [Strong [Str "Cause:"], Str " Script not executable, or no write permission"], Para [Strong [Str "Fix:"], Str " Make the script executable, or check file permissions"], CodeBlock ("", ["bash"], []) "chmod +x my-script.sh
", Header 5 ("debugging-technique-trace-output-with-set--x", ["unnumbered", "unlisted"], []) [Str "Debugging Technique: Trace Output with ", Code ("", [], []) "set -x"], Para [Str "Add ", Code ("", [], []) "set -x", Str " at the top of your script to print each command before it runs:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
set -x  # Enable trace mode
path_var=\"$HOME/Documents\"
echo \"Starting script. Path is: $path_var\"

for file in \"$path_var\"/*; do
    echo \"Processing: $file\"
    # Do something with $file
    echo \"Done with: $file\"
done

echo \"Script complete\"
", Para [Str "Your screen reader will announce each step, so you know where errors happen."], HorizontalRule, Header 4 ("creating-professional-workflows", ["unnumbered", "unlisted"], []) [Str "Creating Professional Workflows"], Header 5 ("example-1-automated-project-setup", ["unnumbered", "unlisted"], []) [Str "Example 1: Automated Project Setup"], Para [Strong [Str "Scenario:"], Str " You start a new 3D printing project regularly. Instead of creating folders manually:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
read -p \"Enter project name: \" project_name
base_folder=\"$HOME/Documents/3D_Projects\"
project_folder=\"$base_folder/$project_name\"

# Create folder structure
mkdir -p \"$project_folder\"
mkdir -p \"$project_folder/designs\"
mkdir -p \"$project_folder/output\"
mkdir -p \"$project_folder/notes\"

# Create a README
cat > \"$project_folder/README.txt\" << EOF
# $project_name

Created: $(date)

## Designs
All .scad files go here.

## Output
STL and other exports go here.

## Notes
Project notes and observations.
EOF

echo \"Project setup complete: $project_folder\"
", Para [Strong [Str "What it does:"]], BulletList [[Plain [Str "Prompts for a project name"]], [Plain [Str "Creates folder structure for a new project"]], [Plain [Str "Sets up subfolders for designs, output, notes"]], [Plain [Str "Creates a README file automatically"]]], Header 5 ("example-2-batch-file-verification", ["unnumbered", "unlisted"], []) [Str "Example 2: Batch File Verification"], Para [Strong [Str "Scenario:"], Str " Before processing, verify all required files exist:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
verify_project() {
    local project_folder=\"$1\"
    local required_items=(\"README.txt\" \"designs\" \"output\" \"notes\")
    local all_good=true

    for item in \"${required_items[@]}\"; do
        local path=\"$project_folder/$item\"
        if [ -e \"$path\" ]; then
            echo \"  Found: $item\"
        else
            echo \"  Missing: $item\"
            all_good=false
        fi
    done

    if $all_good; then
        echo \"All checks passed!\"
        return 0
    else
        echo \"Some files are missing!\"
        return 1
    fi
}

# Use it:
project=\"$HOME/Documents/3D_Projects/MyKeychain\"
if verify_project \"$project\"; then
    echo \"Safe to proceed with processing\"
fi
", HorizontalRule, Header 4 ("screen-reader-tips-for-shell-scripts", ["unnumbered", "unlisted"], []) [Str "Screen Reader Tips for Shell Scripts"], Header 5 ("making-script-output-readable", ["unnumbered", "unlisted"], []) [Str "Making Script Output Readable"], Para [Strong [Str "Problem:"], Str " Script runs but output scrolls too fast or is hard to follow"], Para [Strong [Str "Solution 1: Save to file"]], CodeBlock ("", ["bash"], []) "./my-script.sh > output.txt
notepad.exe output.txt
", Para [Strong [Str "Solution 2: Use echo with clear sections"]], CodeBlock ("", ["bash"], []) "echo \"========== STARTING ==========\"
echo \"\"
# ... script ...
echo \"\"
echo \"========== COMPLETE ==========\"
", Para [Strong [Str "Solution 3: Pause between major sections"]], CodeBlock ("", ["bash"], []) "echo \"Pausing... Press Enter to continue\"
read
", Para [Str "Your screen reader will announce the pause, give you time to read output."], Header 5 ("announcing-progress", ["unnumbered", "unlisted"], []) [Str "Announcing Progress"], Para [Strong [Str "For long-running scripts:"]], CodeBlock ("", ["bash"], []) "#!/bin/bash
count=0
total=$(ls *.scad | wc -l)

for file in *.scad; do
    count=$((count + 1))
    echo \"Processing $count of $total: $file\"
    # Do something with $file
done

echo \"All $count files processed!\"
", HorizontalRule, Header 4 ("practice-exercises", ["unnumbered", "unlisted"], []) [Str "Practice Exercises"], Header 5 ("exercise-1-your-first-shell-script", ["unnumbered", "unlisted"], []) [Str "Exercise 1: Your First Shell Script"], Para [Strong [Str "Goal:"], Str " Create and run a simple shell script"], Para [Strong [Str "Steps:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create file: ", Code ("", [], []) "notepad.exe hello.sh"]], [Plain [Str "Type:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
echo \"Hello from my first Git Bash shell script!\"
pwd
ls -1
"], [Plain [Str "Save, make executable, and run:"], CodeBlock ("", ["bash"], []) "chmod +x hello.sh
./hello.sh
"]], Para [Strong [Str "Checkpoint:"], Str " You should see output for each command."], Header 5 ("exercise-2-script-with-a-variable", ["unnumbered", "unlisted"], []) [Str "Exercise 2: Script with a Variable"], Para [Strong [Str "Goal:"], Str " Use a variable to make the script flexible"], Para [Strong [Str "Steps:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create file: ", Code ("", [], []) "notepad.exe smart-listing.sh"]], [Plain [Str "Type:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
target_folder=\"$HOME/Documents\"
echo \"Listing contents of: $target_folder\"
ls -1 \"$target_folder\"
"], [Plain [Str "Edit ", Code ("", [], []) "target_folder", Str " to a real folder on your computer"]], [Plain [Str "Run:"], CodeBlock ("", ["bash"], []) "chmod +x smart-listing.sh
./smart-listing.sh
"]], Para [Strong [Str "Checkpoint:"], Str " You should see listing of that specific folder."], Header 5 ("exercise-3-function", ["unnumbered", "unlisted"], []) [Str "Exercise 3: Function"], Para [Strong [Str "Goal:"], Str " Create a reusable function"], Para [Strong [Str "Steps:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create file: ", Code ("", [], []) "notepad.exe navigate.sh"]], [Plain [Str "Type:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
go_to() {
    local path=\"$1\"
    if [ -d \"$path\" ]; then
        cd \"$path\"
        echo \"Now in: $(pwd)\"
        echo \"Contents:\"
        ls -1
    else
        echo \"Path does not exist: $path\"
    fi
}

# Test the function:
go_to \"$HOME/Documents\"
go_to \"$HOME/Downloads\"
"], [Plain [Str "Run:"], CodeBlock ("", ["bash"], []) "chmod +x navigate.sh
./navigate.sh
"]], Para [Strong [Str "Checkpoint:"], Str " Both function calls should work, showing contents of each folder."], Header 5 ("exercise-4-loop", ["unnumbered", "unlisted"], []) [Str "Exercise 4: Loop"], Para [Strong [Str "Goal:"], Str " Use a loop to repeat an action"], Para [Strong [Str "Steps:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create file: ", Code ("", [], []) "notepad.exe repeat.sh"]], [Plain [Str "Type:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
echo \"Demonstrating a loop:\"

for i in $(seq 1 5); do
    echo \"Iteration $i: Hello!\"
done

echo \"Loop complete!\"
"], [Plain [Str "Run:"], CodeBlock ("", ["bash"], []) "chmod +x repeat.sh
./repeat.sh
"]], Para [Strong [Str "Checkpoint:"], Str " Should print \"Iteration 1\" through \"Iteration 5\"."], Header 5 ("exercise-5-real-world-script", ["unnumbered", "unlisted"], []) [Str "Exercise 5: Real-World Script"], Para [Strong [Str "Goal:"], Str " Create a useful script for a real task"], Para [Strong [Str "Steps:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create a folder: ", Code ("", [], []) "mkdir ~/Documents/TestFiles"]], [Plain [Str "Create some test files:"], CodeBlock ("", ["bash"], []) "echo \"test\" > ~/Documents/TestFiles/file1.txt
echo \"test\" > ~/Documents/TestFiles/file2.txt
echo \"test\" > ~/Documents/TestFiles/file3.txt
"], [Plain [Str "Create script: ", Code ("", [], []) "notepad.exe report.sh"]], [Plain [Str "Type:"], CodeBlock ("", ["bash"], []) "#!/bin/bash
folder=\"$HOME/Documents/TestFiles\"
count=0

echo \"=== FILE REPORT ===\"
echo \"Folder: $folder\"
echo \"\"
echo \"Files:\"
for file in \"$folder\"/*; do
    echo \"  - $(basename \"$file\")\"
    count=$((count + 1))
done
echo \"\"
echo \"Total: $count files\"
echo \"=== END REPORT ===\"
"], [Plain [Str "Run:"], CodeBlock ("", ["bash"], []) "chmod +x report.sh
./report.sh
"]], Para [Strong [Str "Checkpoint:"], Str " Should show report of all files in the test folder."], HorizontalRule, Header 4 ("quiz---lesson-gitbash6", ["unnumbered", "unlisted"], []) [Str "Quiz - Lesson GitBash.6"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What is a shell script?"]], [Plain [Str "What file extension do bash shell scripts use?"]], [Plain [Str "What is a variable in bash and how do you create one?"]], [Plain [Str "What is a function and why would you use one?"]], [Plain [Str "How do you run a shell script?"]], [Plain [Str "What is a ", Code ("", [], []) "for", Str " loop and what does ", Code ("", [], []) "for file in *.scad; do", Str " do?"]], [Plain [Str "What does ", Code ("", [], []) "[ -f \"$file\" ]", Str " check?"]], [Plain [Str "How do you handle errors in a bash script?"]], [Plain [Str "When would you use ", Code ("", [], []) "if [ ! -d \"$path\" ]; then", Str "?"]], [Plain [Str "What technique makes shell script output readable for screen readers?"]]], HorizontalRule, Header 4 ("extension-problems", ["unnumbered", "unlisted"], []) [Str "Extension Problems"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "Auto-Backup Script:"], Str " Create a bash script that copies all files from one folder to another, announcing progress"]], [Plain [Strong [Str "File Counter:"], Str " Write a function that counts files by extension (.txt, .scad, .stl, etc.)"]], [Plain [Strong [Str "Folder Cleaner:"], Str " Script that deletes files older than 30 days (with user confirmation)"]], [Plain [Strong [Str "Project Template:"], Str " Function that creates a complete project folder structure with all needed files"]], [Plain [Strong [Str "Batch Rename:"], Str " Script that renames all files in a folder according to a pattern"]], [Plain [Strong [Str "Log Generator:"], Str " Create a script that records what it does to a log file for later review"]], [Plain [Strong [Str "Scheduled Task:"], Str " Set up a script to run automatically using cron or Task Scheduler"]], [Plain [Strong [Str "File Verifier:"], Str " Check that all SCAD files in a folder have corresponding STL exports"]], [Plain [Strong [Str "Report Generator:"], Str " Create a summary report of all projects in a folder"]], [Plain [Strong [Str "Error Tracker:"], Str " Script that lists all commands that had errors and logs them with timestamps"]]], HorizontalRule, Header 4 ("important-notes", ["unnumbered", "unlisted"], []) [Str "Important Notes"], BulletList [[Plain [Strong [Str "Always test scripts on small sets of files first"], Str " before running them on important data"]], [Plain [Strong [Str "Save your work regularly"], Str " — use version naming if possible"]], [Plain [Strong [Str "Test error handling"], Str " — make sure errors don't crash silently"]], [Plain [Strong [Str "Document your scripts"], Str " — use ", Code ("", [], []) "#", Str " comments so you remember what each part does"]], [Plain [Strong [Str "Backup before batch operations"], Str " — if something goes wrong, you have the original"]]], HorizontalRule, Header 4 ("references", ["unnumbered", "unlisted"], []) [Str "References"], BulletList [[Plain [Strong [Str "GNU Bash Scripting Guide:"], Str " ", Link ("", [], []) [Str "https://example.com"] ("https://example.com", "")]], [Plain [Strong [Str "Function Documentation:"], Str " ", Link ("", [], []) [Str "https://example.com"] ("https://example.com", "")]], [Plain [Strong [Str "Error Handling:"], Str " ", Link ("", [], []) [Str "https://example.com"] ("https://example.com", "")]], [Plain [Strong [Str "Loops:"], Str " ", Link ("", [], []) [Str "https://example.com"] ("https://example.com", "")]]], RawBlock (Format "html") "<!--pagebreak-->"]