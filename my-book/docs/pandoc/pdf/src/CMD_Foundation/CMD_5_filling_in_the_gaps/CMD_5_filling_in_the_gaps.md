[Header 3 ("cmd_foundation_cmd_5_filling_in_the_gaps-cmd_5_filling_in_the_gaps", [], []) [Str "CMD-5: Filling in the Gaps - Batch Files & Advanced Techniques"], Para [Strong [Str "Duration:"], Str " 2 hours (for screen reader users)", LineBreak, Strong [Str "Prerequisites:"], Str " CMD-Pre through CMD-4"], Para [Strong [Str "Learning Objectives:"]], BulletList [[Plain [Str "Create and run batch files"]], [Plain [Str "Write simple batch scripts"]], [Plain [Str "Automate repetitive tasks"]], [Plain [Str "Understand command history and debugging"]]], HorizontalRule, Header 4 ("batch-files-basics", ["unnumbered", "unlisted"], []) [Str "Batch Files Basics"], Para [Str "A batch file (", Code ("", [], []) ".bat", Str ") contains multiple commands that run in sequence."], Header 5 ("creating-a-simple-batch-file", ["unnumbered", "unlisted"], []) [Str "Creating a Simple Batch File"], Para [Strong [Str "File: backup.bat"]], CodeBlock ("", ["batch"], []) "@echo off
echo Starting backup...
copy *.scad backup\\
echo Backup complete!
pause
", Para [Str "Run it:"], CodeBlock ("", ["cmd"], []) "backup.bat
", Header 5 ("batch-file-commands", ["unnumbered", "unlisted"], []) [Str "Batch File Commands"], CodeBlock ("", ["batch"], []) "@echo off           :: Don't show commands, only output
echo Message        :: Print text
pause               :: Wait for user to press a key
::                  :: Comment line
", HorizontalRule, Header 4 ("variables-in-batch-files", ["unnumbered", "unlisted"], []) [Str "Variables in Batch Files"], CodeBlock ("", ["batch"], []) "@echo off
set folder=%USERPROFILE%\\Documents\\3DModels
cd %folder%
dir /B > filelist.txt
echo Done
", HorizontalRule, Header 4 ("practice-exercises", ["unnumbered", "unlisted"], []) [Str "Practice Exercises"], Header 5 ("exercise-1-create-simple-batch-file", ["unnumbered", "unlisted"], []) [Str "Exercise 1: Create Simple Batch File"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Open Notepad: ", Code ("", [], []) "notepad.exe backup.bat"]], [Plain [Str "Type:"]]], CodeBlock ("", ["batch"], []) "@echo off
echo Creating backup folder...
mkdir backup-current
echo Copying files...
copy *.txt backup-current\\
echo Done!
pause
", OrderedList (3, DefaultStyle, DefaultDelim) [[Plain [Str "Save as: ", Code ("", [], []) "backup.bat"]], [Plain [Str "Run: ", Code ("", [], []) "backup.bat"]]], Para [Strong [Str "Goal:"], Str " Create and run a batch file."], Header 5 ("exercise-2-batch-file-with-variables", ["unnumbered", "unlisted"], []) [Str "Exercise 2: Batch File with Variables"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create file: ", Code ("", [], []) "notepad.exe organize.bat"]], [Plain [Str "Type:"]]], CodeBlock ("", ["batch"], []) "@echo off
set source=%USERPROFILE%\\Downloads
set dest=%USERPROFILE%\\Documents\\DownloadedFiles
echo Moving files from %source% to %dest%...
mkdir %dest%
move %source%\\* %dest%\\
echo Done!
", OrderedList (3, DefaultStyle, DefaultDelim) [[Plain [Str "Save and run"]]], Para [Strong [Str "Goal:"], Str " Use variables in batch files."], HorizontalRule, Header 4 ("checkpoint-questions", ["unnumbered", "unlisted"], []) [Str "Checkpoint Questions"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What does ", Code ("", [], []) "@echo off", Str " do?"]], [Plain [Str "How do you create a batch file?"]], [Plain [Str "How do you run a batch file?"]], [Plain [Str "What does ", Code ("", [], []) "pause", Str " do?"]], [Plain [Str "How do you use variables in batch files?"]]], HorizontalRule, Header 4 ("screen-reader-accessibility-in-command-prompt", ["unnumbered", "unlisted"], []) [Str "Screen Reader Accessibility in Command Prompt"], Header 5 ("best-practices", ["unnumbered", "unlisted"], []) [Str "Best Practices"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "Save output to files"], Str " - always easier to read"]], [Plain [Strong [Str "Use clear, simple command names"], Str " - easier to remember"]], [Plain [Strong [Str "Create batch files for complex operations"], Str " - safer and repeatable"]], [Plain [Strong [Str "Test carefully"], Str " - especially with ", Code ("", [], []) "delete", Str " or ", Code ("", [], []) "move", Str " commands"]], [Plain [Strong [Str "Keep backups"], Str " - always important"]]], HorizontalRule, Header 4 ("advanced-command-prompt-tips", ["unnumbered", "unlisted"], []) [Str "Advanced Command Prompt Tips"], Header 5 ("finding-files", ["unnumbered", "unlisted"], []) [Str "Finding Files"], CodeBlock ("", ["cmd"], []) "dir /S /B *.scad          :: Find all .scad files recursively
", Header 5 ("getting-help", ["unnumbered", "unlisted"], []) [Str "Getting Help"], CodeBlock ("", ["cmd"], []) "help                      :: List all commands
help cd                   :: Help for specific command
dir /?                    :: Alternative help syntax
", Header 5 ("checking-file-types", ["unnumbered", "unlisted"], []) [Str "Checking File Types"], CodeBlock ("", ["cmd"], []) "file type.txt             :: Show file information (if available)
assoc .scad               :: Show program associated with .scad
", HorizontalRule, Header 4 ("next-steps", ["unnumbered", "unlisted"], []) [Str "Next Steps"], BulletList [[Plain [Str "Complete all exercises"]], [Plain [Str "Review all previous lessons"]], [Plain [Str "Move to ", Strong [Str "CMD_Unit_Test: Comprehensive Practice"]]]]]