[Header 3 ("cmd_foundation_cmd_6_advanced_techniques-cmd_6_advanced_techniques", [], []) [Str "CMD-6: Advanced Terminal Techniques - Scripts & Professional Workflows"], Para [Strong [Str "Duration:"], Str " 2.5-3 hours (for screen reader users)", LineBreak, Strong [Str "Prerequisites:"], Str " CMD-Pre through CMD-5"], Para [Strong [Str "Learning Objectives:"]], BulletList [[Plain [Str "Create advanced batch scripts"]], [Plain [Str "Integrate with 3D printing workflows"]], [Plain [Str "Build professional automation"]], [Plain [Str "Troubleshoot and debug scripts"]]], HorizontalRule, Header 4 ("advanced-batch-scripting", ["unnumbered", "unlisted"], []) [Str "Advanced Batch Scripting"], Header 5 ("conditional-logic", ["unnumbered", "unlisted"], []) [Str "Conditional Logic"], CodeBlock ("", ["batch"], []) "@echo off
if exist backup.txt (
    echo Backup already exists
) else (
    echo Creating backup...
    copy data.txt backup.txt
)
", Header 5 ("loops", ["unnumbered", "unlisted"], []) [Str "Loops"], CodeBlock ("", ["batch"], []) "@echo off
for %%i in (*.txt) do (
    echo Processing %%i
    copy %%i backup\\
)
", Header 5 ("3d-printing-integration-example", ["unnumbered", "unlisted"], []) [Str "3D Printing Integration Example"], CodeBlock ("", ["batch"], []) "@echo off
REM Batch process OpenSCAD files
set inputfolder=%USERPROFILE%\\Documents\\Models
set outputfolder=%USERPROFILE%\\Documents\\STLs

echo Processing 3D models...
cd %inputfolder%

for %%f in (*.scad) do (
    echo Converting %%f...
    REM OpenSCAD command would go here
)

echo All files processed!
", HorizontalRule, Header 4 ("practical-workflows", ["unnumbered", "unlisted"], []) [Str "Practical Workflows"], Header 5 ("workflow-1-project-initialization", ["unnumbered", "unlisted"], []) [Str "Workflow 1: Project Initialization"], Para [Str "Create a script that sets up a new project:"], CodeBlock ("", ["batch"], []) "@echo off
set /p projectname=Enter project name: 
mkdir %projectname%
cd %projectname%
mkdir models
mkdir prints
mkdir documentation
mkdir backups
echo Project %projectname% created!
dir /B
", Header 5 ("workflow-2-automated-backup", ["unnumbered", "unlisted"], []) [Str "Workflow 2: Automated Backup"], CodeBlock ("", ["batch"], []) "@echo off
setlocal enabledelayedexpansion
for /f \"tokens=2-4 delims=/ \" %%a in ('date /t') do (set mydate=%%c%%a%%b)
mkdir backup-%mydate%
copy *.scad backup-%mydate%\\
copy *.txt backup-%mydate%\\
echo Backup created: backup-%mydate%
", HorizontalRule, Header 4 ("debugging-batch-files", ["unnumbered", "unlisted"], []) [Str "Debugging Batch Files"], Header 5 ("adding-debug-output", ["unnumbered", "unlisted"], []) [Str "Adding Debug Output"], CodeBlock ("", ["batch"], []) "@echo off
setlocal
REM Turn echo on for debugging
echo Debug: Starting process
echo Debug: Current folder is %cd%
echo Debug: Files found:
dir /B *.scad
echo Debug: Process complete
", Header 5 ("common-errors", ["unnumbered", "unlisted"], []) [Str "Common Errors"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault)] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Error"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Solution"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "\"File not found\""]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Check path with ", Code ("", [], []) "cd", Str " and ", Code ("", [], []) "dir /B"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "\"Access denied\""]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Run as Administrator (Windows+X -> Admin)"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Command doesn't run"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Check file is saved as ", Code ("", [], []) ".bat", Str " not ", Code ("", [], []) ".txt"]]]])] (TableFoot ("", [], []) []), HorizontalRule, Header 4 ("practice-exercises", ["unnumbered", "unlisted"], []) [Str "Practice Exercises"], Header 5 ("exercise-1-create-project-setup-script", ["unnumbered", "unlisted"], []) [Str "Exercise 1: Create Project Setup Script"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create: ", Code ("", [], []) "notepad.exe new-project.bat"]], [Plain [Str "Type:"]]], CodeBlock ("", ["batch"], []) "@echo off
set /p name=Project name: 
mkdir %name%
cd %name%
mkdir models documents backups
echo Project %name% created
dir /B /A:D
", OrderedList (3, DefaultStyle, DefaultDelim) [[Plain [Str "Save and run"]], [Plain [Str "Test creating a new project"]]], Para [Strong [Str "Goal:"], Str " Automate project creation."], Header 5 ("exercise-2-backup-with-timestamp", ["unnumbered", "unlisted"], []) [Str "Exercise 2: Backup with Timestamp"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create script that backs up files with current date"]], [Plain [Str "Test it creates appropriately named folders"]], [Plain [Str "Verify files are copied"]]], Para [Strong [Str "Goal:"], Str " Create smart backup system."], HorizontalRule, Header 4 ("checkpoint-questions", ["unnumbered", "unlisted"], []) [Str "Checkpoint Questions"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What does ", Code ("", [], []) "if exist", Str " do?"]], [Plain [Str "How do you loop through files?"]], [Plain [Str "How would you create a project setup script?"]], [Plain [Str "What does ", Code ("", [], []) "REM", Str " mean?"]], [Plain [Str "How do you add debug output?"]]], HorizontalRule, Header 4 ("next-steps", ["unnumbered", "unlisted"], []) [Str "Next Steps"], BulletList [[Plain [Str "Complete all exercises"]], [Plain [Str "Review all CMD lessons"]], [Plain [Str "Take the ", Strong [Str "CMD_Unit_Test: Comprehensive Practice & Assessment"]]]]]