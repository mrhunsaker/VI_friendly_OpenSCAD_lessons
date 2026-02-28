[Header 3 ("cmd-6-advanced-terminal-techniques---batch-scripts-functions--professional-workflows", [], []) [Str "CMD-6: Advanced Terminal Techniques - Batch Scripts, Functions & Professional Workflows"], Para [Strong [Str "Duration:"], Str " 4-4.5 hours (for screen reader users)", SoftBreak, Strong [Str "Prerequisites:"], Str " Complete CMD-0 through CMD-5", SoftBreak, Strong [Str "Skill Level:"], Str " Advanced intermediate"], Para [Str "This lesson extends CMD skills to professional-level workflows. You'll learn to automate complex tasks, write reusable batch scripts, and integrate tools for 3D printing workflows."], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson, you will be able to:"], BulletList [[Plain [Str "Create and run batch files (.bat files)"]], [Plain [Str "Write subroutines that accept parameters"]], [Plain [Str "Use loops to repeat tasks automatically"]], [Plain [Str "Automate batch processing of 3D models"]], [Plain [Str "Debug batch scripts when something goes wrong"]], [Plain [Str "Create professional workflows combining multiple tools"]]], HorizontalRule, Header 4 ("batch-script-basics", ["unnumbered", "unlisted"], []) [Str "Batch Script Basics"], Header 5 ("whats-a-batch-script", ["unnumbered", "unlisted"], []) [Str "What's a Batch Script?"], Para [Str "A batch file (", Code ("", [], []) ".bat", Str ") contains multiple CMD commands that run in sequence. Instead of typing commands one by one, you put them in a file and run them all at once."], Para [Strong [Str "Why use batch scripts?"]], BulletList [[Plain [Str "Repeatability: Run the same task 100 times identically"]], [Plain [Str "Documentation: Commands are written down for reference"]], [Plain [Str "Complexity: Combine many commands logically"]], [Plain [Str "Automation: Schedule scripts to run automatically"]]], Header 5 ("creating-your-first-batch-script", ["unnumbered", "unlisted"], []) [Str "Creating Your First Batch Script"], Para [Strong [Str "Step 1: Open a text editor"]], CodeBlock ("", ["cmd"], []) "notepad.exe my-first-script.bat
", Para [Strong [Str "Step 2: Type this script"]], CodeBlock ("", ["batch"], []) "@echo off
:: This is a comment - screen readers will read it
echo Script is running!
cd
dir /B
echo Script is done!
", Para [Strong [Str "Step 3: Save the file"]], BulletList [[Plain [Str "In Notepad: Ctrl+S"]], [Plain [Str "Make sure filename ends in ", Code ("", [], []) ".bat"]], [Plain [Str "Save in an easy-to-find location (like Documents)"]]], Para [Strong [Str "Step 4: Run the script"]], CodeBlock ("", ["cmd"], []) "my-first-script.bat
", Para [Strong [Str "What happens:"], SoftBreak, Str "CMD runs each command in sequence and shows output."], Header 5 ("important-echo-off", ["unnumbered", "unlisted"], []) [Str "Important: ", Code ("", [], []) "@echo off"], Para [Str "On some scripts, each command is echoed before running. ", Code ("", [], []) "@echo off", Str " at the top suppresses this, showing only output — not the commands themselves."], CodeBlock ("", ["batch"], []) "@echo off
:: Now only output is shown, not each command
echo Hello!
", HorizontalRule, Header 4 ("variables-and-parameters", ["unnumbered", "unlisted"], []) [Str "Variables and Parameters"], Header 5 ("using-variables", ["unnumbered", "unlisted"], []) [Str "Using Variables"], Para [Str "Variables store values you want to use later."], Para [Strong [Str "Example script:"]], CodeBlock ("", ["batch"], []) "@echo off
set mypath=C:\\Users\\YourName\\Documents
cd %mypath%
echo I am now in:
cd
dir /B
", Para [Strong [Str "Breaking it down:"]], BulletList [[Plain [Code ("", [], []) "set mypath=...", Str " assigns the variable"]], [Plain [Code ("", [], []) "%mypath%", Str " uses the variable (wraps it in ", Code ("", [], []) "%", Str ")"]], [Plain [Str "Variables in CMD are always referenced with ", Code ("", [], []) "%VARNAME%"]]], Header 5 ("subroutines-with-parameters", ["unnumbered", "unlisted"], []) [Str "Subroutines with Parameters"], Para [Str "A subroutine is reusable code that you can call with different inputs using ", Code ("", [], []) ":label", Str " and ", Code ("", [], []) "call", Str "."], Para [Strong [Str "Example: A subroutine that lists files in a folder"]], CodeBlock ("", ["batch"], []) "@echo off
call :ListFolder \"C:\\Users\\YourName\\Documents\"
call :ListFolder \"C:\\Users\\YourName\\Downloads\"
goto :eof

:ListFolder
echo Contents of: %~1
cd /D %~1
dir /B
goto :eof
", Para [Strong [Str "What's happening:"]], BulletList [[Plain [Code ("", [], []) ":ListFolder", Str " marks the start of the subroutine"]], [Plain [Code ("", [], []) "%~1", Str " is the first argument passed to the subroutine"]], [Plain [Code ("", [], []) "call :ListFolder \"path\"", Str " calls the subroutine with a path"]], [Plain [Code ("", [], []) "goto :eof", Str " exits the subroutine (or script)"]]], Para [Strong [Str "Screen reader tip:"], Str " When you call a subroutine, CMD will announce the results just like any command."], HorizontalRule, Header 4 ("loops---repeating-tasks", ["unnumbered", "unlisted"], []) [Str "Loops - Repeating Tasks"], Header 5 ("loop-over-files", ["unnumbered", "unlisted"], []) [Str "Loop Over Files"], Para [Str "Imagine you have 10 SCAD files and want to print their names. You could do it 10 times manually, or use a loop."], Para [Strong [Str "Example: Print every .scad file in a folder"]], CodeBlock ("", ["batch"], []) "@echo off
for %%f in (*.scad) do (
    echo === File: %%f ===
    type %%f
    echo.
)
", Para [Strong [Str "What's happening:"]], BulletList [[Plain [Code ("", [], []) "for %%f in (*.scad) do", Str " iterates over each ", Code ("", [], []) ".scad", Str " file"]], [Plain [Code ("", [], []) "%%f", Str " is the loop variable (use ", Code ("", [], []) "%f", Str " in interactive CMD, ", Code ("", [], []) "%%f", Str " in batch files)"]], [Plain [Str "Inside the parentheses, do something with each file"]]], Header 5 ("loop-with-a-counter", ["unnumbered", "unlisted"], []) [Str "Loop with a Counter"], Para [Strong [Str "Example: Do something 5 times"]], CodeBlock ("", ["batch"], []) "@echo off
for /L %%i in (1,1,5) do (
    echo This is iteration number %%i
)
", Para [Strong [Str "What's happening:"]], BulletList [[Plain [Code ("", [], []) "for /L %%i in (start,step,end)", Str " counts from start to end"]], [Plain [Code ("", [], []) "%%i", Str " is the counter variable"]]], HorizontalRule, Header 4 ("real-world-example---batch-processing-scad-files", ["unnumbered", "unlisted"], []) [Str "Real-World Example - Batch Processing SCAD Files"], Header 5 ("scenario", ["unnumbered", "unlisted"], []) [Str "Scenario"], Para [Str "You have 10 OpenSCAD (.scad) files in a folder. You want to:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "List them all"]], [Plain [Str "Check how many there are"]], [Plain [Str "For each one, verify it exists"]]], Header 5 ("the-script", ["unnumbered", "unlisted"], []) [Str "The Script"], CodeBlock ("", ["batch"], []) "@echo off
set scadFolder=C:\\Users\\YourName\\Documents\\3D_Projects
set count=0

echo Processing SCAD files in: %scadFolder%
echo.

for %%f in (%scadFolder%\\*.scad) do (
    if exist \"%%f\" (
        echo  Found: %%~nxf
        set /A count+=1
    ) else (
        echo  Missing: %%~nxf
    )
)

echo.
echo Total files found: %count%
echo Batch processing complete!
", Para [Strong [Str "Breaking it down:"]], BulletList [[Plain [Code ("", [], []) "set scadFolder=...", Str " = where to look"]], [Plain [Code ("", [], []) "for %%f in (...\\*.scad)", Str " = find all .scad files"]], [Plain [Code ("", [], []) "if exist \"%%f\"", Str " = check if file exists"]], [Plain [Code ("", [], []) "%%~nxf", Str " = just the filename with extension (not the full path)"]], [Plain [Code ("", [], []) "set /A count+=1", Str " = increment the counter"]]], Header 5 ("running-the-script", ["unnumbered", "unlisted"], []) [Str "Running the Script"], OrderedList (1, DefaultStyle, DefaultDelim) [[Para [Str "Save as ", Code ("", [], []) "batch-process.bat"]], [Para [Str "Edit ", Code ("", [], []) "scadFolder", Str " to match your real folder"]], [Para [Str "Run it:"], CodeBlock ("", ["cmd"], []) "batch-process.bat
"]], Para [Strong [Str "Screen reader output:"]], CodeBlock ("", ["plaintext"], []) "Processing SCAD files in: C:\\Users\\YourName\\Documents\\3D_Projects

 Found: model1.scad
 Found: model2.scad
 Found: model3.scad
[... more files ...]

Total files found: 10
Batch processing complete!
", HorizontalRule, Header 4 ("error-handling", ["unnumbered", "unlisted"], []) [Str "Error Handling"], Header 5 ("checking-error-levels", ["unnumbered", "unlisted"], []) [Str "Checking Error Levels"], Para [Str "What if something goes wrong? Use ", Code ("", [], []) "errorlevel", Str " checks:"], Para [Strong [Str "Example:"]], CodeBlock ("", ["batch"], []) "@echo off
type C:\\nonexistent\\path\\file.txt
if %errorlevel% neq 0 (
    echo Error: Could not read file
    echo Errorlevel: %errorlevel%
)
", Para [Strong [Str "What's happening:"]], BulletList [[Plain [Str "After any command, ", Code ("", [], []) "%errorlevel%", Str " holds ", Code ("", [], []) "0", Str " for success or non-zero for failure"]], [Plain [Code ("", [], []) "if %errorlevel% neq 0", Str " checks for failure"]], [Plain [Str "Handle the error gracefully"]]], Para [Strong [Str "Screen reader advantage:"], Str " Errors are announced clearly instead of crashing silently."], Header 5 ("validating-input", ["unnumbered", "unlisted"], []) [Str "Validating Input"], Para [Strong [Str "Example: Make sure a folder exists before processing"]], CodeBlock ("", ["batch"], []) "@echo off
set folderPath=C:\\Users\\YourName\\Documents

if not exist \"%folderPath%\\\" (
    echo Error: Folder does not exist: %folderPath%
    goto :eof
)

echo Processing folder: %folderPath%
dir /B \"%folderPath%\"
", Para [Strong [Str "What's happening:"]], BulletList [[Plain [Code ("", [], []) "if not exist \"%folderPath%\\\"", Str " checks if folder exists (trailing ", Code ("", [], []) "\\", Str " ensures it's a folder)"]], [Plain [Code ("", [], []) "goto :eof", Str " exits the script early if error"]]], HorizontalRule, Header 4 ("debugging-batch-scripts", ["unnumbered", "unlisted"], []) [Str "Debugging Batch Scripts"], Header 5 ("common-errors-and-solutions", ["unnumbered", "unlisted"], []) [Str "Common Errors and Solutions"], Header 6 ("error-1-command-not-found", ["unnumbered", "unlisted"], []) [Str "Error 1: \"Command not found\""], Para [Strong [Str "Cause:"], Str " Typo in command name or program not in PATH"], Para [Strong [Str "Fix:"], Str " Check spelling and verify PATH"], CodeBlock ("", ["batch"], []) ":: Wrong:
dri /B

:: Correct:
dir /B
", Header 6 ("error-2-variable-is-empty", ["unnumbered", "unlisted"], []) [Str "Error 2: \"Variable is empty\""], Para [Strong [Str "Cause:"], Str " Variable was never set or has a typo"], Para [Strong [Str "Fix:"], Str " Make sure variable is set before using it"], CodeBlock ("", ["batch"], []) "set myvar=hello
echo %myvar%
", Header 6 ("error-3-the-system-cannot-find-the-path-specified", ["unnumbered", "unlisted"], []) [Str "Error 3: \"The system cannot find the path specified\""], Para [Strong [Str "Cause:"], Str " Wrong folder path"], Para [Strong [Str "Fix:"], Str " Verify path exists"], CodeBlock ("", ["batch"], []) ":: Check if path exists:
if exist \"C:\\Users\\YourName\\Documents\\\" echo Path exists
", Header 6 ("error-4-access-denied", ["unnumbered", "unlisted"], []) [Str "Error 4: \"Access denied\""], Para [Strong [Str "Cause:"], Str " Don't have permission"], Para [Strong [Str "Fix:"], Str " Run CMD as administrator"], BulletList [[Plain [Str "Right-click Command Prompt -> Run as administrator"]]], Header 5 ("debugging-technique-trace-output", ["unnumbered", "unlisted"], []) [Str "Debugging Technique: Trace Output"], Para [Str "Add ", Code ("", [], []) "echo", Str " statements to track what's happening:"], CodeBlock ("", ["batch"], []) "@echo off
set path_var=C:\\Users\\YourName\\Documents
echo Starting script. Path is: %path_var%

for %%f in (%path_var%\\*) do (
    echo Processing: %%f
    :: Do something with %%f
    echo Done with: %%f
)

echo Script complete
", Para [Str "Your screen reader will announce each step, so you know where errors happen."], HorizontalRule, Header 4 ("creating-professional-workflows", ["unnumbered", "unlisted"], []) [Str "Creating Professional Workflows"], Header 5 ("example-1-automated-project-setup", ["unnumbered", "unlisted"], []) [Str "Example 1: Automated Project Setup"], Para [Strong [Str "Scenario:"], Str " You start a new 3D printing project regularly. Instead of creating folders manually:"], CodeBlock ("", ["batch"], []) "@echo off
set /p projectName=Enter project name: 
set baseFolder=C:\\Users\\YourName\\Documents\\3D_Projects
set projectFolder=%baseFolder%\\%projectName%

:: Create folder structure
mkdir \"%projectFolder%\"
mkdir \"%projectFolder%\\designs\"
mkdir \"%projectFolder%\\output\"
mkdir \"%projectFolder%\\notes\"

:: Create a README
echo # %projectName% > \"%projectFolder%\\README.txt\"
echo. >> \"%projectFolder%\\README.txt\"
echo Created: %date% >> \"%projectFolder%\\README.txt\"
echo. >> \"%projectFolder%\\README.txt\"
echo ## Designs >> \"%projectFolder%\\README.txt\"
echo All .scad files go here. >> \"%projectFolder%\\README.txt\"
echo. >> \"%projectFolder%\\README.txt\"
echo ## Output >> \"%projectFolder%\\README.txt\"
echo STL and other exports go here. >> \"%projectFolder%\\README.txt\"

echo Project setup complete: %projectFolder%
", Para [Strong [Str "What it does:"]], BulletList [[Plain [Str "Prompts for a project name"]], [Plain [Str "Creates folder structure for a new project"]], [Plain [Str "Sets up subfolders for designs, output, notes"]], [Plain [Str "Creates a README file automatically"]]], Header 5 ("example-2-batch-file-verification", ["unnumbered", "unlisted"], []) [Str "Example 2: Batch File Verification"], Para [Strong [Str "Scenario:"], Str " Before processing, verify all required files exist:"], CodeBlock ("", ["batch"], []) "@echo off
set projectFolder=C:\\Users\\YourName\\Documents\\3D_Projects\\MyKeychain
set allGood=1

for %%i in (README.txt designs output notes) do (
    if exist \"%projectFolder%\\%%i\" (
        echo  Found: %%i
    ) else (
        echo  Missing: %%i
        set allGood=0
    )
)

if %allGood%==1 (
    echo All checks passed!
) else (
    echo Some files are missing!
)
", HorizontalRule, Header 4 ("screen-reader-tips-for-batch-scripts", ["unnumbered", "unlisted"], []) [Str "Screen Reader Tips for Batch Scripts"], Header 5 ("making-script-output-readable", ["unnumbered", "unlisted"], []) [Str "Making Script Output Readable"], Para [Strong [Str "Problem:"], Str " Script runs but output scrolls too fast or is hard to follow"], Para [Strong [Str "Solution 1: Save to file"]], CodeBlock ("", ["cmd"], []) "my-script.bat > output.txt
notepad.exe output.txt
", Para [Strong [Str "Solution 2: Use echo with clear sections"]], CodeBlock ("", ["batch"], []) "echo ========== STARTING ==========
echo.
:: ... script ...
echo.
echo ========== COMPLETE ==========
", Para [Strong [Str "Solution 3: Pause between major sections"]], CodeBlock ("", ["batch"], []) "echo Pausing... Press any key to continue
pause > nul
", Para [Str "Your screen reader will announce the pause, give you time to read output."], Header 5 ("announcing-progress", ["unnumbered", "unlisted"], []) [Str "Announcing Progress"], Para [Strong [Str "For long-running scripts:"]], CodeBlock ("", ["batch"], []) "@echo off
set count=0
for %%f in (*.scad) do (
    set /A count+=1
    echo Processing file %%f
)
echo All %count% files processed!
", HorizontalRule, Header 4 ("practice-exercises", ["unnumbered", "unlisted"], []) [Str "Practice Exercises"], Header 5 ("exercise-1-your-first-batch-script", ["unnumbered", "unlisted"], []) [Str "Exercise 1: Your First Batch Script"], Para [Strong [Str "Goal:"], Str " Create and run a simple batch script"], Para [Strong [Str "Steps:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Para [Str "Create file: ", Code ("", [], []) "notepad.exe hello.bat"]], [Para [Str "Type:"], CodeBlock ("", ["batch"], []) "@echo off
echo Hello from my first CMD batch script!
cd
dir /B
"], [Para [Str "Save and run: ", Code ("", [], []) "hello.bat"]]], Para [Strong [Str "Checkpoint:"], Str " You should see output for each command."], Header 5 ("exercise-2-script-with-a-variable", ["unnumbered", "unlisted"], []) [Str "Exercise 2: Script with a Variable"], Para [Strong [Str "Goal:"], Str " Use a variable to make the script flexible"], Para [Strong [Str "Steps:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Para [Str "Create file: ", Code ("", [], []) "notepad.exe smart-listing.bat"]], [Para [Str "Type:"], CodeBlock ("", ["batch"], []) "@echo off
set targetFolder=C:\\Users\\YourName\\Documents
echo Listing contents of: %targetFolder%
dir /B \"%targetFolder%\"
"], [Para [Str "Edit ", Code ("", [], []) "targetFolder", Str " to a real folder on your computer"]], [Para [Str "Run: ", Code ("", [], []) "smart-listing.bat"]]], Para [Strong [Str "Checkpoint:"], Str " You should see listing of that specific folder."], Header 5 ("exercise-3-subroutine", ["unnumbered", "unlisted"], []) [Str "Exercise 3: Subroutine"], Para [Strong [Str "Goal:"], Str " Create a reusable subroutine"], Para [Strong [Str "Steps:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Para [Str "Create file: ", Code ("", [], []) "notepad.exe navigate.bat"]], [Para [Str "Type:"], CodeBlock ("", ["batch"], []) "@echo off
call :GoTo \"C:\\Users\\YourName\\Documents\"
call :GoTo \"C:\\Users\\YourName\\Downloads\"
goto :eof

:GoTo
if exist \"%~1\\\" (
    cd /D \"%~1\"
    echo Now in:
    cd
    echo Contents:
    dir /B
) else (
    echo Path does not exist: %~1
)
goto :eof
"], [Para [Str "Run: ", Code ("", [], []) "navigate.bat"]]], Para [Strong [Str "Checkpoint:"], Str " Both subroutine calls should work, showing contents of each folder."], Header 5 ("exercise-4-loop", ["unnumbered", "unlisted"], []) [Str "Exercise 4: Loop"], Para [Strong [Str "Goal:"], Str " Use a loop to repeat an action"], Para [Strong [Str "Steps:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Para [Str "Create file: ", Code ("", [], []) "notepad.exe repeat.bat"]], [Para [Str "Type:"], CodeBlock ("", ["batch"], []) "@echo off
echo Demonstrating a loop:
for /L %%i in (1,1,5) do (
    echo Iteration %%i: Hello!
)
echo Loop complete!
"], [Para [Str "Run: ", Code ("", [], []) "repeat.bat"]]], Para [Strong [Str "Checkpoint:"], Str " Should print \"Iteration 1\" through \"Iteration 5\"."], Header 5 ("exercise-5-real-world-script", ["unnumbered", "unlisted"], []) [Str "Exercise 5: Real-World Script"], Para [Strong [Str "Goal:"], Str " Create a useful script for a real task"], Para [Strong [Str "Steps:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Para [Str "Create a folder: ", Code ("", [], []) "mkdir C:\\Users\\YourName\\Documents\\TestFiles"]], [Para [Str "Create some test files:"], CodeBlock ("", ["cmd"], []) "echo test > C:\\Users\\YourName\\Documents\\TestFiles\\file1.txt
echo test > C:\\Users\\YourName\\Documents\\TestFiles\\file2.txt
echo test > C:\\Users\\YourName\\Documents\\TestFiles\\file3.txt
"], [Para [Str "Create script: ", Code ("", [], []) "notepad.exe report.bat"]], [Para [Str "Type:"], CodeBlock ("", ["batch"], []) "@echo off
set folder=C:\\Users\\YourName\\Documents\\TestFiles
set count=0

echo === FILE REPORT ===
echo Folder: %folder%
echo.
echo Files:
for %%f in (\"%folder%\\*\") do (
    echo   - %%~nxf
    set /A count+=1
)
echo.
echo Total: %count% files
echo === END REPORT ===
"], [Para [Str "Run: ", Code ("", [], []) "report.bat"]]], Para [Strong [Str "Checkpoint:"], Str " Should show report of all files in the test folder."], HorizontalRule, Header 4 ("quiz---lesson-cmd6", ["unnumbered", "unlisted"], []) [Str "Quiz - Lesson CMD.6"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What is a CMD batch script?"]], [Plain [Str "What file extension do CMD batch scripts use?"]], [Plain [Str "What is a variable in a batch script and how do you create one?"]], [Plain [Str "What is a subroutine (", Code ("", [], []) ":label", Str ") and why would you use one?"]], [Plain [Str "How do you run a batch script?"]], [Plain [Str "What is a ", Code ("", [], []) "for", Str " loop and what does ", Code ("", [], []) "for %%f in (*.scad) do", Str " do?"]], [Plain [Str "What does ", Code ("", [], []) "if exist", Str " do?"]], [Plain [Str "How do you handle errors in a batch script?"]], [Plain [Str "When would you use ", Code ("", [], []) "if %errorlevel% neq 0", Str "?"]], [Plain [Str "What technique makes batch script output readable for screen readers?"]]], HorizontalRule, Header 4 ("extension-problems", ["unnumbered", "unlisted"], []) [Str "Extension Problems"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "Auto-Backup Script:"], Str " Create a batch script that copies all files from one folder to another, announcing progress"]], [Plain [Strong [Str "File Counter:"], Str " Write a subroutine that counts files by extension (.txt, .scad, .stl, etc.)"]], [Plain [Strong [Str "Folder Cleaner:"], Str " Batch script that deletes files older than 30 days (with user confirmation)"]], [Plain [Strong [Str "Project Template:"], Str " Subroutine that creates a complete project folder structure with all needed files"]], [Plain [Strong [Str "Batch Rename:"], Str " Script that renames all files in a folder according to a pattern"]], [Plain [Strong [Str "Log Generator:"], Str " Create a script that records what it does to a log file for later review"]], [Plain [Strong [Str "Scheduled Task:"], Str " Set up a batch script to run automatically every day at a specific time"]], [Plain [Strong [Str "File Verifier:"], Str " Check that all SCAD files in a folder have corresponding STL exports"]], [Plain [Strong [Str "Report Generator:"], Str " Create a summary report of all projects in a folder"]], [Plain [Strong [Str "Error Tracker:"], Str " Script that lists all commands that had errors and logs them with timestamps"]]], HorizontalRule, Header 4 ("important-notes", ["unnumbered", "unlisted"], []) [Str "Important Notes"], BulletList [[Plain [Strong [Str "Always test scripts on small sets of files first"], Str " before running them on important data"]], [Plain [Strong [Str "Save your work regularly"], Str " — use version naming if possible"]], [Plain [Strong [Str "Test error handling"], Str " — make sure errors don't crash silently"]], [Plain [Strong [Str "Document your scripts"], Str " — use ", Code ("", [], []) "::", Str " comments so you remember what each part does"]], [Plain [Strong [Str "Backup before batch operations"], Str " — if something goes wrong, you have the original"]]], HorizontalRule, Header 4 ("references", ["unnumbered", "unlisted"], []) [Str "References"], BulletList [[Plain [Strong [Str "Microsoft CMD Batch Scripting Guide:"], Str " ", Link ("", [], []) [Str "https://example.com"] ("https://example.com", "")]], [Plain [Strong [Str "FOR Loop Documentation:"], Str " ", Link ("", [], []) [Str "https://example.com"] ("https://example.com", "")]], [Plain [Strong [Str "IF Statement Reference:"], Str " ", Link ("", [], []) [Str "https://example.com"] ("https://example.com", "")]], [Plain [Strong [Str "SET Variable Reference:"], Str " ", Link ("", [], []) [Str "https://example.com"] ("https://example.com", "")]]], HorizontalRule, Para [Strong [Str "Next Steps:"], Str " After mastering this lesson, explore advanced batch scripting, scheduled tasks, and 3D printing integration in the main curriculum."], RawBlock (Format "html") "<!--pagebreak-->"]