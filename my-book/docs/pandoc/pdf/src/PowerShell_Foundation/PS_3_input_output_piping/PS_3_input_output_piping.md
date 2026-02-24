[Header 3 ("powershell_foundation_ps_3_input_output_piping-ps_3_input_output_piping", [], []) [Str "PS-3: Input, Output, and Piping"], Para [Strong [Str "Duration:"], Str " 1 class period", SoftBreak, Strong [Str "Prerequisite:"], Str " PS-2 (File and Folder Manipulation)"], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson, you will be able to:"], BulletList [[Plain [Str "Use ", Code ("", [], []) "echo", Str " to print text to the screen"]], [Plain [Str "Use ", Code ("", [], []) "cat", Str " to read file contents"]], [Plain [Str "Use ", Code ("", [], []) ">", Str " to redirect output into a file"]], [Plain [Str "Use ", Code ("", [], []) "|", Str " (pipe) to send one command's output to another"]], [Plain [Str "Copy output to the clipboard with ", Code ("", [], []) "clip"]], [Plain [Str "Open files with a text editor from the command line"]]], HorizontalRule, Header 4 ("commands-covered", ["unnumbered", "unlisted"], []) [Str "Commands Covered"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, ColWidthDefault), (AlignDefault, ColWidthDefault)] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Command"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "What It Does"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "echo \"text\""]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Print text to the screen"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "cat filename"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Print the contents of a file"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "> filename"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Redirect output into a file (overwrites)"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) ">> filename"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Append output to a file (adds to end)"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "|"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Pipe - send output from one command to the next"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "clip"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Copy piped input to the Windows clipboard"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "notepad.exe filename"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Open a file in Notepad"]]]])] (TableFoot ("", [], []) []), HorizontalRule, Header 4 ("echo---printing-text", ["unnumbered", "unlisted"], []) [Code ("", [], []) "echo", Str " - Printing Text"], Para [Code ("", [], []) "echo", Str " prints text to the screen. It is useful for testing, for writing text into files, and for understanding how piping works."], CodeBlock ("", ["powershell"], []) "echo \"Hello, World\"
echo \"This is a test\"
", HorizontalRule, Header 4 ("cat---reading-files", ["unnumbered", "unlisted"], []) [Code ("", [], []) "cat", Str " - Reading Files"], Para [Code ("", [], []) "cat", Str " prints the contents of a file to the screen."], CodeBlock ("", ["powershell"], []) "# Read a text file
cat ~/Documents/notes.txt

# Read an OpenSCAD file
cat ~/Documents/OpenSCAD_Projects/project0.scad
", Para [Str "With a long file, use ", Code ("", [], []) "cat filename | more", Str " to read it page by page (press ", Code ("", [], []) "Space", Str " to advance, ", Code ("", [], []) "Q", Str " to quit)."], HorizontalRule, Header 4 ("---redirecting-output-to-a-file", ["unnumbered", "unlisted"], []) [Code ("", [], []) ">", Str " - Redirecting Output to a File"], Para [Str "The ", Code ("", [], []) ">", Str " symbol redirects output from the screen into a file instead."], CodeBlock ("", ["powershell"], []) "# Create a file with a single line
echo \"Author: Your Name\" > header.txt

# Confirm the file was created and has content
cat header.txt
", Para [Strong [Str "Warning:"], Str " ", Code ("", [], []) ">", Str " overwrites the file if it already exists. Use ", Code ("", [], []) ">>", Str " to append instead:"], CodeBlock ("", ["powershell"], []) "echo \"Date: 2025\" >> header.txt
echo \"Project: Floor Marker\" >> header.txt
cat header.txt
", HorizontalRule, Header 4 ("---piping", ["unnumbered", "unlisted"], []) [Code ("", [], []) "|", Str " - Piping"], Para [Str "The pipe symbol ", Code ("", [], []) "|", Str " sends the output of one command to the input of the next. This lets you chain commands together."], CodeBlock ("", ["powershell"], []) "# List files and send the list to clip (copies to clipboard)
ls -n | clip

# Now paste with Ctrl + V anywhere
", CodeBlock ("", ["powershell"], []) "# Search within a file's contents using Select-String (like grep)
cat project0.scad | Select-String \"cube\"
", HorizontalRule, Header 4 ("clip---copying-to-clipboard", ["unnumbered", "unlisted"], []) [Code ("", [], []) "clip", Str " - Copying to Clipboard"], Para [Code ("", [], []) "clip", Str " takes whatever is piped to it and puts it on the Windows clipboard."], CodeBlock ("", ["powershell"], []) "# Copy your current directory path to the clipboard
pwd | clip

# Copy a file listing to clipboard
ls -n | clip

# Copy the contents of a file to clipboard
cat notes.txt | clip
", Para [Str "After any of these, press ", Code ("", [], []) "Ctrl + V", Str " in any application to paste."], HorizontalRule, Header 4 ("opening-files-in-notepad", ["unnumbered", "unlisted"], []) [Str "Opening Files in Notepad"], CodeBlock ("", ["powershell"], []) "# Open a file in Notepad
notepad.exe ~/Documents/notes.txt

# Open a .scad file
notepad.exe ~/Documents/OpenSCAD_Projects/project0.scad

# Create a new file and open it
ni new_notes.txt
# PS-3: Input, Output, and Piping 

Estimated time: 25-40 minutes

**Learning Objectives**
- Use `echo`, `cat`, `>` and `>>` for basic IO
- Use `|` to pipe outputs between commands
- Copy command output to the clipboard with `clip`

**Materials**
- PowerShell
- Example text files for practice

Step-by-step Tasks
1. Create `practice.txt` with three lines using `echo` and `>`/`>>`.
2. Read the file with `cat practice.txt`.
3. Pipe the file into `Select-String` to search for a word.
4. Copy the file contents to clipboard with `cat practice.txt | clip`.
5. Redirect `ls -n` into `list.txt` and open it in Notepad.

Checkpoints
- After step 3 you should be able to find a keyword using piping.

## Quiz - Lesson PS.3

1. What is the difference between `>` and `>>`?
2. What does the pipe `|` do?
3. How do you copy output to the clipboard?
4. How would you page through long output?
5. How do you suppress output to nowhere?
6. True or False: The pipe operator `|` connects the output of one command to the input of another.
7. Explain why redirecting output to a file is useful for screen reader users.
8. Write a command that would search for the word \"sphere\" in all `.scad` files in a directory.
9. How would you count the number of lines in a file using PowerShell piping?
10. Describe a practical scenario in 3D printing where you would pipe or redirect command output.
11. What would be the difference in output between `echo \"test\" > file.txt` (run twice) vs `echo \"test\" >> file.txt` (run twice)? Show the expected file contents.
12. Design a three-step piping chain: read a file, filter for specific content, and save the results; explain what each pipe does.
13. You have a 500-line `.scad` file and need to find all instances of `sphere()` and count them. Write the command.
14. Explain how `clip` is particularly valuable for screen reader users when working with file paths or long output strings.
15. Describe how you would use pipes and redirection to create a timestamped backup report of all `.stl` files in a 3D printing project folder.

## Extension Problems
1. Use piping to count lines in a file (hint: `Select-String -Pattern '.' | Measure-Object`).
2. Save a long `ls -n` output and search it with `Select-String`.
3. Chain multiple pipes to filter and then save results.
4. Practice copying different command outputs to clipboard and pasting.
5. Create a small script that generates a report (counts of files by extension).
6. Build a data processing pipeline: read a CSV file, filter rows, and export results; document each step.
7. Write a script that pipes directory listing to Count occurrences of each file extension; create a summary report.
8. Create a log analysis command: read a log file, filter for errors, and save matching lines to a separate error log.
9. Design a piping workflow for 3D printing file management: find `.stl` files, extract their sizes, and generate a report.
10. Develop a reusable piping function library: create functions for common filtering, sorting, and reporting patterns; test each function with different inputs.
11. Build a complex filter pipeline: read a `.scad` file, extract lines containing specific geometry commands, count each type, and output a summary to both screen and file.
12. Create an interactive piping tool: build a script that accepts user input for a search term, pipes through multiple filters, and displays paginated results.
13. Develop a performance analysis tool: use piping to combine file listing, metadata extraction, and statistical reporting; export results to a dated report file.
14. Implement a comprehensive error-handling pipeline: read output, catch errors, log them separately, and generate a summary of successes vs failures.
15. Design and execute a real-world project backup workflow: use piping to verify file integrity, count files by type, generate a backup manifest, and create audit logs-all in one integrated command pipeline.

## References

- Microsoft. (2024). *Out-File cmdlet for redirection*. https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/out-file
- Microsoft. (2024). *Select-String piping reference*. https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/select-string
- Microsoft. (2024). *PowerShell pipeline concepts*. https://learn.microsoft.com/powershell/scripting/learn/shell/using-the-pipeline

## Helpful Resources

- [Using Out-File for Redirection](https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/out-file)
- [Piping and Select-String](https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/select-string)
- [Get-Content Cmdlet Reference](https://learn.microsoft.com/powershell/module/microsoft.powershell.management/get-content)
- [Measure-Object for Counting](https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/measure-object)
- [PowerShell Pipeline Concept](https://learn.microsoft.com/powershell/scripting/learn/shell/using-the-pipeline)
"]