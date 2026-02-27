[Header 3 ("powershell_foundation_ps_6_advanced_techniques-ps_6_advanced_techniques", [], []) [Str "PS-6: Advanced Terminal Techniques - Scripts, Functions & Professional Workflows"], Para [Str "Duration: 4-4.5 hours (for screen reader users)", LineBreak, Str "Prerequisites: Complete PS-0 through PS-5", LineBreak, Str "Skill Level: Advanced intermediate"], Para [Str "This lesson extends PowerShell skills to professional-level workflows. You'll learn to automate complex tasks, write reusable code, and integrate tools for 3D printing workflows."], Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson, you will be able to:"], BulletList [[Plain [Str "Create and run PowerShell scripts (.ps1 files)"]], [Plain [Str "Write functions that accept parameters"]], [Plain [Str "Use loops to repeat tasks automatically"]], [Plain [Str "Automate batch processing of 3D models"]], [Plain [Str "Debug scripts when something goes wrong"]], [Plain [Str "Create professional workflows combining multiple tools"]]], Header 4 ("powershell-scripts-basics", ["unnumbered", "unlisted"], []) [Str "PowerShell Scripts Basics"], Header 5 ("whats-a-script", ["unnumbered", "unlisted"], []) [Str "What's a Script?"], Para [Str "A script is a file containing PowerShell commands that run in sequence. Instead of typing commands one by one, you put them in a file and run them all at once."], Para [Str "Why use scripts?"], BulletList [[Plain [Str "Repeatability: Run the same task 100 times identically"]], [Plain [Str "Documentation: Commands are written down for reference"]], [Plain [Str "Complexity: Combine many commands logically"]], [Plain [Str "Automation: Schedule scripts to run automatically"]]], Header 5 ("creating-your-first-script", ["unnumbered", "unlisted"], []) [Str "Creating Your First Script"], Para [Str "Step 1: Open a text editor"], CodeBlock ("", ["powershell"], []) "notepad.exe my-first-script.ps1
", Para [Str "Step 2: Type this script"], CodeBlock ("", ["powershell"], []) "# This is a comment - screen readers will read it
Write-Output \"Script is running!\"
pwd
ls -n
Write-Output \"Script is done!\"
", Para [Str "Step 3: Save the file"], BulletList [[Plain [Str "In Notepad: Ctrl+S"]], [Plain [Str "Make sure filename ends in ", Code ("", [], []) ".ps1"]], [Plain [Str "Save in an easy-to-find location (like Documents)"]]], Para [Str "Step 4: Run the script"], CodeBlock ("", ["powershell"], []) ".\\my-first-script.ps1
", Para [Str "What happens:", SoftBreak, Str "PowerShell runs each command in sequence and shows output."], Header 5 ("important-script-execution-policy", ["unnumbered", "unlisted"], []) [Str "Important: Script Execution Policy"], Para [Str "On some Windows systems, you might get an error about \"execution policy\". This is a security feature."], Para [Str "To fix it temporarily:"], CodeBlock ("", ["powershell"], []) "Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
", Para [Str "Then try your script again:"], CodeBlock ("", ["powershell"], []) ".\\my-first-script.ps1
", Para [Str "Note for screen readers: Your screen reader will announce the error if there is one. Use ", Code ("", [], []) "Get-Help Get-ExecutionPolicy", Str " for more information."], Header 4 ("variables-and-parameters", ["unnumbered", "unlisted"], []) [Str "Variables and Parameters"], Header 5 ("using-variables", ["unnumbered", "unlisted"], []) [Str "Using Variables"], Para [Str "Variables store values you want to use later."], Para [Str "Example script:"], CodeBlock ("", ["powershell"], []) "$mypath = \"C:\\Users\\YourName\\Documents\"
cd $mypath
Write-Output \"I am now in:\"
pwd
ls -n
", Para [Str "Breaking it down:"], BulletList [[Plain [Code ("", [], []) "$mypath", Str " = variable name (always starts with ", Code ("", [], []) "$", Str ")"]], [Plain [Code ("", [], []) "=", Str " = assign the value after this"]], [Plain [Code ("", [], []) "\"C:\\Users...\"", Str " = the value (a path)"]], [Plain [Code ("", [], []) "cd $mypath", Str " = use the variable (replace ", Code ("", [], []) "$mypath", Str " with its value)"]]], Header 5 ("functions-with-parameters", ["unnumbered", "unlisted"], []) [Str "Functions with Parameters"], Para [Str "A function is reusable code that you can run with different inputs."], Para [Str "Example: A function that lists files in a folder"], CodeBlock ("", ["powershell"], []) "function ListFolder {
    param(
        [string]$path
    )
    Write-Output \"Contents of: $path\"
    cd $path
    ls -n
}
# Use the function:
ListFolder -path \"C:\\Users\\YourName\\Documents\"
ListFolder -path \"C:\\Users\\YourName\\Downloads\"
", Para [Str "What's happening:"], BulletList [[Plain [Code ("", [], []) "function ListFolder", Str " = name of the function"]], [Plain [Code ("", [], []) "param([string]$path)", Str " = the function accepts a parameter called ", Code ("", [], []) "$path"]], [Plain [Str "Inside the function, use ", Code ("", [], []) "$path", Str " like any variable"]], [Plain [Str "Call the function with ", Code ("", [], []) "-path \"value\""]]], Para [Str "Screen reader tip: When you call a function, PowerShell will announce the results just like any command."], Header 4 ("loops---repeating-tasks", ["unnumbered", "unlisted"], []) [Str "Loops - Repeating Tasks"], Header 5 ("loop-over-files", ["unnumbered", "unlisted"], []) [Str "Loop Over Files"], Para [Str "Imagine you have 10 SCAD files and want to print their contents. You could do it 10 times manually, or use a loop."], Para [Str "Example: Print every .scad file in a folder"], CodeBlock ("", ["powershell"], []) "$scadFiles = ls -n *.scad
foreach ($file in $scadFiles) {
    Write-Output \"=== File: $file ===\"
    cat $file
    Write-Output \"\"
}
", Para [Str "What's happening:"], BulletList [[Plain [Code ("", [], []) "$scadFiles = ls -n *.scad", Str " = find all .scad files and store in variable"]], [Plain [Code ("", [], []) "foreach ($file in $scadFiles)", Str " = for each file, do this:"], BulletList [[Plain [Code ("", [], []) "Write-Output \"=== File: $file ===\"", Str " = announce which file"]], [Plain [Code ("", [], []) "cat $file", Str " = show contents"]], [Plain [Code ("", [], []) "Write-Output \"\"", Str " = blank line between files"]]]]], Para [Str "Result: All files printed one after another, organized and readable."], Header 5 ("loop-with-a-counter", ["unnumbered", "unlisted"], []) [Str "Loop with a Counter"], Para [Str "Example: Do something 5 times"], CodeBlock ("", ["powershell"], []) "for ($i = 1; $i -le 5; $i++) {
    Write-Output \"This is iteration number $i\"
    # Do something here
}
", Para [Str "What's happening:"], BulletList [[Plain [Code ("", [], []) "for ($i = 1; $i -le 5; $i++)", Str " = loop from 1 to 5"]], [Plain [Code ("", [], []) "$i", Str " = counter variable (starts at 1, increases each loop)"]], [Plain [Code ("", [], []) "-le", Str " = \"less than or equal to\" (stop when $i > 5)"]], [Plain [Code ("", [], []) "$i++", Str " = add 1 to $i each time through"]]], Header 4 ("real-world-example---batch-processing-scad-files", ["unnumbered", "unlisted"], []) [Str "Real-World Example - Batch Processing SCAD Files"], Header 5 ("scenario", ["unnumbered", "unlisted"], []) [Str "Scenario"], Para [Str "You have 10 OpenSCAD (.scad) files in a folder. You want to:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "List them all"]], [Plain [Str "Check how many there are"]], [Plain [Str "For each one, verify it exists"]]], Header 5 ("the-script", ["unnumbered", "unlisted"], []) [Str "The Script"], CodeBlock ("", ["powershell"], []) "# Batch Processing Script for SCAD Files
$scadFolder = \"C:\\Users\\YourName\\Documents\\3D_Projects\"
$scadFiles = ls $scadFolder -Filter *.scad -Name
Write-Output \"Processing SCAD files in: $scadFolder\"
Write-Output \"Found $($scadFiles.Count) files\"
Write-Output \"\"
foreach ($file in $scadFiles) {
    $fullPath = Join-Path -Path $scadFolder -ChildPath $file
    if (Test-Path -Path $fullPath) {
        Write-Output \" Found: $file\"
    } else {
        Write-Output \" Missing: $file\"
    }
}
Write-Output \"\"
Write-Output \"Batch processing complete!\"
", Para [Str "Breaking it down:"], BulletList [[Plain [Code ("", [], []) "$scadFolder", Str " = where to look"]], [Plain [Code ("", [], []) "ls $scadFolder -Filter *.scad -Name", Str " = find .scad files, show names only"]], [Plain [Code ("", [], []) "foreach", Str " = process each file"]], [Plain [Code ("", [], []) "Join-Path", Str " = combine folder and filename into full path"]], [Plain [Code ("", [], []) "Test-Path", Str " = check if file exists"]], [Plain [Code ("", [], []) "if", Str " = do different things based on condition"]]], Header 5 ("running-the-script", ["unnumbered", "unlisted"], []) [Str "Running the Script"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Save as ", Code ("", [], []) "batch-process.ps1"]], [Plain [Str "Edit ", Code ("", [], []) "$scadFolder", Str " to match your real folder"]], [Plain [Str "Run it:"], CodeBlock ("", ["powershell"], []) ".\\batch-process.ps1
"]], Para [Str "Screen reader output:"], CodeBlock ("", [""], []) "Processing SCAD files in: C:\\Users\\YourName\\Documents\\3D_Projects
Found 10 files

 Found: model1.scad
 Found: model2.scad
 Found: model3.scad
[... more files ...]
Batch processing complete!
", Header 4 ("error-handling", ["unnumbered", "unlisted"], []) [Str "Error Handling"], Header 5 ("try-catch-blocks", ["unnumbered", "unlisted"], []) [Str "Try-Catch Blocks"], Para [Str "What if something goes wrong? Use try-catch:"], Para [Str "Example:"], CodeBlock ("", ["powershell"], []) "try {
    $file = \"C:\\nonexistent\\path\\file.txt\"
    $content = cat $file
    Write-Output $content
} catch {
    Write-Output \"Error: Could not read file\"
    Write-Output \"Details: $_\"
}
", Para [Str "What's happening:"], BulletList [[Plain [Code ("", [], []) "try", Str " = run these commands"]], [Plain [Str "If an error happens, PowerShell jumps to ", Code ("", [], []) "catch"]], [Plain [Code ("", [], []) "catch", Str " = handle the error gracefully"]], [Plain [Code ("", [], []) "$_", Str " = the error message"]]], Para [Str "Screen reader advantage: Errors are announced clearly instead of crashing silently."], Header 5 ("validating-input", ["unnumbered", "unlisted"], []) [Str "Validating Input"], Para [Str "Example: Make sure a folder exists before processing"], CodeBlock ("", ["powershell"], []) "function ProcessFolder {
    param([string]$folderPath)
    if (-not (Test-Path -Path $folderPath)) {
        Write-Output \"Error: Folder does not exist: $folderPath\"
        return
    }
    Write-Output \"Processing folder: $folderPath\"
    ls -n $folderPath
}
ProcessFolder -folderPath \"C:\\Users\\YourName\\Documents\"
", Para [Str "What's happening:"], BulletList [[Plain [Code ("", [], []) "Test-Path", Str " = check if folder exists"]], [Plain [Code ("", [], []) "-not", Str " = if NOT true"]], [Plain [Code ("", [], []) "return", Str " = exit the function early if error"]]], Header 4 ("debugging-scripts", ["unnumbered", "unlisted"], []) [Str "Debugging Scripts"], Header 5 ("common-errors-and-solutions", ["unnumbered", "unlisted"], []) [Str "Common Errors and Solutions"], Header 6 ("error-1-command-not-found", ["unnumbered", "unlisted"], []) [Str "Error 1: \"Command not found\""], Para [Str "Cause: Typo in command name"], Para [Str "Fix: Check spelling"], CodeBlock ("", ["powershell"], []) "# Wrong:
writ-output \"hello\"
# Correct:
Write-Output \"hello\"
", Header 6 ("error-2-variable-is-null", ["unnumbered", "unlisted"], []) [Str "Error 2: \"Variable is null\""], Para [Str "Cause: Variable was never assigned"], Para [Str "Fix: Make sure variable is set before using it"], CodeBlock ("", ["powershell"], []) "$myvar = \"hello\"  # Set first
Write-Output $myvar  # Then use
", Header 6 ("error-3-cannot-find-path", ["unnumbered", "unlisted"], []) [Str "Error 3: \"Cannot find path\""], Para [Str "Cause: Wrong folder path"], Para [Str "Fix: Verify path exists"], CodeBlock ("", ["powershell"], []) "# Check if path exists:
Test-Path -Path \"C:\\Users\\YourName\\Documents\"
# If false, the path is wrong
", Header 6 ("error-4-access-denied", ["unnumbered", "unlisted"], []) [Str "Error 4: \"Access denied\""], Para [Str "Cause: Don't have permission"], Para [Str "Fix: Run PowerShell as administrator"], BulletList [[Plain [Str "Right-click PowerShell -> Run as administrator"]]], Header 5 ("debugging-technique-trace-output", ["unnumbered", "unlisted"], []) [Str "Debugging Technique: Trace Output"], Para [Str "Add ", Code ("", [], []) "Write-Output", Str " statements to track what's happening:"], CodeBlock ("", ["powershell"], []) "$path = \"C:\\Users\\YourName\\Documents\"
Write-Output \"Starting script. Path is: $path\"
$files = ls -n $path
Write-Output \"Found $($files.Count) files\"
foreach ($file in $files) {
    Write-Output \"Processing: $file\"
    # Do something with $file
    Write-Output \"Done with: $file\"
}
Write-Output \"Script complete\"
", Para [Str "Your screen reader will announce each step, so you know where errors happen."], Header 4 ("creating-professional-workflows", ["unnumbered", "unlisted"], []) [Str "Creating Professional Workflows"], Header 5 ("example-1-automated-project-setup", ["unnumbered", "unlisted"], []) [Str "Example 1: Automated Project Setup"], Para [Str "Scenario: You start a new 3D printing project regularly. Instead of creating folders manually:"], CodeBlock ("", ["powershell"], []) "function SetupNewProject {
    param([string]$projectName)
    $baseFolder = \"C:\\Users\\YourName\\Documents\\3D_Projects\"
    $projectFolder = Join-Path -Path $baseFolder -ChildPath $projectName
    # Create folder structure
    mkdir $projectFolder -Force
    mkdir \"$projectFolder\\designs\" -Force
    mkdir \"$projectFolder\\output\" -Force
    mkdir \"$projectFolder\\notes\" -Force
    # Create a README
    $readmeContent = @\"
# $projectName
Created: $(Get-Date)
## Designs
All .scad files go here.
## Output
STL and other exports go here.
## Notes
Project notes and observations.
\"@
    $readmeContent | Out-File -FilePath \"$projectFolder\\README.txt\" -Encoding utf8
    Write-Output \"Project setup complete: $projectFolder\"
}
# Use it:
SetupNewProject -projectName \"MyKeychain\"
SetupNewProject -projectName \"PhoneStand\"
", Para [Str "What it does:"], BulletList [[Plain [Str "Creates folder structure for a new project"]], [Plain [Str "Sets up subfolders for designs, output, notes"]], [Plain [Str "Creates a README file automatically"]]], Header 5 ("example-2-batch-file-verification", ["unnumbered", "unlisted"], []) [Str "Example 2: Batch File Verification"], Para [Str "Scenario: Before processing, verify all required files exist:"], CodeBlock ("", ["powershell"], []) "function VerifyProjectFiles {
    param([string]$projectFolder)
    $requiredFiles = @(
        \"README.txt\",
        \"designs\",
        \"output\",
        \"notes\"
    )
    $allGood = $true
    foreach ($item in $requiredFiles) {
        $path = Join-Path -Path $projectFolder -ChildPath $item
        if (Test-Path -Path $path) {
            Write-Output \" Found: $item\"
        } else {
            Write-Output \" Missing: $item\"
            $allGood = $false
        }
    }
    if ($allGood) {
        Write-Output \"All checks passed!\"
        return $true
    } else {
        Write-Output \"Some files are missing!\"
        return $false
    }
}
# Use it:
$verified = VerifyProjectFiles -projectFolder \"C:\\Users\\YourName\\Documents\\3D_Projects\\MyKeychain\"
if ($verified) {
    Write-Output \"Safe to proceed with processing\"
}
", Header 4 ("screen-reader-tips-for-scripts", ["unnumbered", "unlisted"], []) [Str "Screen Reader Tips for Scripts"], Header 5 ("making-script-output-readable", ["unnumbered", "unlisted"], []) [Str "Making Script Output Readable"], Para [Str "Problem: Script runs but output scrolls too fast or is hard to follow"], Para [Str "Solution 1: Save to file"], CodeBlock ("", ["powershell"], []) ".\\my-script.ps1 > output.txt
notepad.exe output.txt
", Para [Str "Solution 2: Use Write-Output with clear sections"], CodeBlock ("", ["powershell"], []) "Write-Output \"========== STARTING ==========\"
Write-Output \"\"
# ... script ...
Write-Output \"\"
Write-Output \"========== COMPLETE ==========\"
", Para [Str "Solution 3: Pause between major sections"], CodeBlock ("", ["powershell"], []) "Write-Output \"Pausing... Press Enter to continue\"
Read-Host
", Para [Str "Your screen reader will announce the pause, give you time to read output."], Header 5 ("announcing-progress", ["unnumbered", "unlisted"], []) [Str "Announcing Progress"], Para [Str "For long-running scripts:"], CodeBlock ("", ["powershell"], []) "$files = ls -n *.scad
$count = 0
foreach ($file in $files) {
    $count++
    Write-Output \"Processing $count of $($files.Count): $file\"
    # Do something with $file
}
Write-Output \"All $count files processed!\"
", Header 4 ("practice-exercises", ["unnumbered", "unlisted"], []) [Str "Practice Exercises"], Header 5 ("exercise-1-your-first-script", ["unnumbered", "unlisted"], []) [Str "Exercise 1: Your First Script"], Para [Str "Goal: Create and run a simple script"], Para [Str "Steps:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create file: ", Code ("", [], []) "notepad.exe hello.ps1"]], [Plain [Str "Type:"], CodeBlock ("", ["powershell"], []) "Write-Output \"Hello from my first PowerShell script!\"
pwd
ls -n
"], [Plain [Str "Save and run: ", Code ("", [], []) ".\\hello.ps1"]]], Para [Str "Checkpoint: You should see output for each command."], Header 5 ("exercise-2-script-with-a-variable", ["unnumbered", "unlisted"], []) [Str "Exercise 2: Script with a Variable"], Para [Str "Goal: Use a variable to make the script flexible"], Para [Str "Steps:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create file: ", Code ("", [], []) "notepad.exe smart-listing.ps1"]], [Plain [Str "Type:"], CodeBlock ("", ["powershell"], []) "$targetFolder = \"C:\\Users\\YourName\\Documents\"
Write-Output \"Listing contents of: $targetFolder\"
ls -n $targetFolder
"], [Plain [Str "Edit ", Code ("", [], []) "$targetFolder", Str " to a real folder on your computer"]], [Plain [Str "Run: ", Code ("", [], []) ".\\smart-listing.ps1"]]], Para [Str "Checkpoint: You should see listing of that specific folder."], Header 5 ("exercise-3-function", ["unnumbered", "unlisted"], []) [Str "Exercise 3: Function"], Para [Str "Goal: Create a reusable function"], Para [Str "Steps:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create file: ", Code ("", [], []) "notepad.exe navigate.ps1"]], [Plain [Str "Type:"], CodeBlock ("", ["powershell"], []) "function GoTo {
    param([string]$path)
    if (Test-Path -Path $path) {
        cd $path
        Write-Output \"Now in: $(pwd)\"
        Write-Output \"Contents:\"
        ls -n
    } else {
        Write-Output \"Path does not exist: $path\"
    }
}
# Test the function:
GoTo -path \"C:\\Users\\YourName\\Documents\"
GoTo -path \"C:\\Users\\YourName\\Downloads\"
"], [Plain [Str "Run: ", Code ("", [], []) ".\\navigate.ps1"]]], Para [Str "Checkpoint: Both commands should work, showing contents of each folder."], Header 5 ("exercise-4-loop", ["unnumbered", "unlisted"], []) [Str "Exercise 4: Loop"], Para [Str "Goal: Use a loop to repeat an action"], Para [Str "Steps:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create file: ", Code ("", [], []) "notepad.exe repeat.ps1"]], [Plain [Str "Type:"], CodeBlock ("", ["powershell"], []) "Write-Output \"Demonstrating a loop:\"
for ($i = 1; $i -le 5; $i++) {
    Write-Output \"Iteration $i: Hello!\"
}
Write-Output \"Loop complete!\"
"], [Plain [Str "Run: ", Code ("", [], []) ".\\repeat.ps1"]]], Para [Str "Checkpoint: Should print \"Iteration 1\" through \"Iteration 5\"."], Header 5 ("exercise-5-real-world-script", ["unnumbered", "unlisted"], []) [Str "Exercise 5: Real-World Script"], Para [Str "Goal: Create a useful script for a real task"], Para [Str "Steps:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create a folder: ", Code ("", [], []) "mkdir C:\\Users\\YourName\\Documents\\TestFiles"]], [Plain [Str "Create some test files:"], CodeBlock ("", ["powershell"], []) "echo \"test\" > C:\\Users\\YourName\\Documents\\TestFiles\\file1.txt
echo \"test\" > C:\\Users\\YourName\\Documents\\TestFiles\\file2.txt
echo \"test\" > C:\\Users\\YourName\\Documents\\TestFiles\\file3.txt
"], [Plain [Str "Create script: ", Code ("", [], []) "notepad.exe report.ps1"]], [Plain [Str "Type:"], CodeBlock ("", ["powershell"], []) "$folder = \"C:\\Users\\YourName\\Documents\\TestFiles\"
$files = ls -n $folder
Write-Output \"=== FILE REPORT ===\"
Write-Output \"Folder: $folder\"
Write-Output \"Total files: $($files.Count)\"
Write-Output \"\"
Write-Output \"Files:\"
foreach ($file in $files) {
    Write-Output \"  - $file\"
}
Write-Output \"\"
Write-Output \"=== END REPORT ===\"
"], [Plain [Str "Run: ", Code ("", [], []) ".\\report.ps1"]]], Para [Str "Checkpoint: Should show report of all files in the test folder."], Header 4 ("quiz---lesson-ps-6", ["unnumbered", "unlisted"], []) [Str "Quiz - Lesson PS-6"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What is a PowerShell script?"]], [Plain [Str "What file extension do PowerShell scripts use?"]], [Plain [Str "What is a variable and how do you create one?"]], [Plain [Str "What is a function and why would you use one?"]], [Plain [Str "How do you run a script?"]], [Plain [Str "What is a loop and what does ", Code ("", [], []) "foreach", Str " do?"]], [Plain [Str "What does ", Code ("", [], []) "Test-Path", Str " do?"]], [Plain [Str "How do you handle errors in a script?"]], [Plain [Str "When would you use ", Code ("", [], []) "Try-Catch", Str "?"]], [Plain [Str "What technique makes script output readable for screen readers?"]]], Header 4 ("extension-problems", ["unnumbered", "unlisted"], []) [Str "Extension Problems"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Auto-Backup Script: Create a script that copies all files from one folder to another, announcing progress"]], [Plain [Str "File Counter: Write a function that counts files by extension (.txt, .scad, .stl, etc.)"]], [Plain [Str "Folder Cleaner: Script that deletes files older than 30 days (with user confirmation)"]], [Plain [Str "Project Template: Function that creates a complete project folder structure with all needed files"]], [Plain [Str "Batch Rename: Script that renames all files in a folder according to a pattern"]], [Plain [Str "Log Generator: Create a script that records what it does to a log file for later review"]], [Plain [Str "Scheduled Task: Set up a script to run automatically every day at a specific time"]], [Plain [Str "File Verifier: Check that all SCAD files in a folder have corresponding STL exports"]], [Plain [Str "Report Generator: Create a summary report of all projects in a folder"]], [Plain [Str "Error Tracker: Script that lists all commands that had errors in your recent history"]]], Header 4 ("important-notes", ["unnumbered", "unlisted"], []) [Str "Important Notes"], BulletList [[Plain [Str "Always test scripts on small sets of files first before running them on important data"]], [Plain [Str "Save your work regularly - use version control if possible"]], [Plain [Str "Test error handling - make sure errors don't crash silently"]], [Plain [Str "Document your scripts - use comments so you remember what each part does"]], [Plain [Str "Backup before batch operations - if something goes wrong, you have the original"]]], Header 4 ("references", ["unnumbered", "unlisted"], []) [Str "References"], BulletList [[Plain [Str "Microsoft PowerShell Scripting Guide: ", Link ("", [], []) [Str "https://docs.microsoft.com/powershell/scripting/"] ("https://docs.microsoft.com/powershell/scripting/", "")]], [Plain [Str "Function Documentation: ", Link ("", [], []) [Str "https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_functions_advanced"] ("https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_functions_advanced", "")]], [Plain [Str "Error Handling: ", Link ("", [], []) [Str "https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_error_handling"] ("https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_error_handling", "")]], [Plain [Str "Loops: ", Link ("", [], []) [Str "https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_foreach"] ("https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_foreach", "")]]], Para [Str "Next Steps: After mastering this lesson, explore PowerShell modules, remoting, and 3D printing integration in the main curriculum."]]