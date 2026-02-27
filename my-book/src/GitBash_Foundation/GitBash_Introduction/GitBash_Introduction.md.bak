# Git Bash Introduction - Screen-Reader Friendly (JAWS/NVDA) {#gitbash_foundation_gitbash_introduction-gitbash_introduction}

Estimated time: 20-30 minutes

Target audience: Users who are new to the command line and use screen readers.

Learning Goals
- Open and identify the Git Bash prompt
- Run basic commands: `pwd`, `ls -1`, `cd`, `touch`, `cat`, `echo`
- Redirect and page through long outputs for screen readers
- Use `--help` and `which` to discover more about commands

## Starting Git Bash

Windows
1. Press Windows, type `Git Bash`, then press Enter.
2. Git Bash opens a terminal window. You'll hear the prompt announced by your screen reader.

When Git Bash starts you will hear the prompt and usually your current path. The default prompt looks something like:
```
YourName@COMPUTER MINGW64 ~
$
```

## Essential Commands - Short List

- `pwd` - print working directory (where you are now)
- `ls -1` - list file and folder names one per line (recommended for screen readers)
- `cd <path>` - change directory
- `touch <filename>` - create an empty file
- `cat <file>` - show file contents
- `echo <text>` - print text

Quick examples:

```bash
pwd
ls -1
cd Documents
touch notes.txt
echo "hello" > notes.txt
cat notes.txt
```

## Paging Long Outputs for Screen Readers

- If an output is long, redirect to a file and open it in an editor:
  ```bash
  some-command > output.txt
  notepad output.txt
  ```
- Or pipe to `less`: `some-command | less` (press Space to advance, Q to quit).
- For very long listings: `ls -1 > list.txt && notepad list.txt`

## Help and Discovery

- `command --help` shows help: `ls --help` or `grep --help`
- `man command` shows the manual page (pipe it to a file for easy reading): `man ls > lshelp.txt && notepad lshelp.txt`
- `which <name>` locates a program: `which openscad`

## Running Scripts and Executables

- Make a script executable: `chmod +x script.sh`
- Run a script in the current directory: `./script.sh`
- Run an executable by full path: `'/c/Program Files/OpenSCAD/openscad.exe'`

## Screen Reader Specific Tips (JAWS, NVDA)

- Use `ls -1` to avoid cluttered, multi-column listings
- Redirect large outputs to a text file and open it in an editor your screen reader handles well
- If output stops being announced, try moving focus with Alt+Tab and back, or briefly pressing Ctrl or Shift to force announcement

## Git Bash vs Windows Command Prompt

| Task              | Git Bash         | Command Prompt        |
|-------------------|------------------|-----------------------|
| List files        | `ls -1`          | `dir`                 |
| Show current path | `pwd`            | `cd`                  |
| Read a file       | `cat file.txt`   | `type file.txt`       |
| Create file       | `touch file.txt` | `type nul > file.txt` |
| Copy file         | `cp src dest`    | `copy src dest`       |
| Move/rename       | `mv old new`     | `move old new`        |
| Delete file       | `rm file.txt`    | `del file.txt`        |

Git Bash uses Unix commands that also work on Linux and macOS.

## Suggested Learning Path

1. Open Git Bash, run `pwd`, `ls -1`, `cd` into Documents.
2. Create a file with `touch test.txt`, add a line with `echo "hi" > test.txt`, and read it with `cat test.txt`.
3. Use `ls --help` and redirect output to a file to read comfortably.

## Hands-On: Explore the Terminal (Beginner)

1. Run `pwd` and speak or note the output.
2. Run `ls -1` in your home directory. If the list is long, save it: `ls -1 > listing.txt && notepad listing.txt`
3. Create a folder and file: `mkdir GBPractice && cd GBPractice && touch notes.txt`
4. Add a line: `echo "My first note" > notes.txt && cat notes.txt`

## Extension Exercises

1. Use wildcards to list only `.scad` files: `ls *.scad`. Proceed to search for other types of files.
2. Save a long command's output and search it with `grep`.
3. Create a small script (`chmod +x`, then `./`) that prints a timestamp and test it.
4. Build a project template generator: write a script that creates a folder structure for a new 3D printing project.
5. Create a personalized `.bashrc` with aliases for frequently used commands; test it after restarting Git Bash.
6. Write a Bash script that combines multiple concepts: navigates folders, creates files, and performs file operations.
7. Create a screen-reader navigation guide for Git Bash; test with an actual screen reader if available.
8. Build a data analysis script: read a text or CSV file, filter and process data, and generate a report.
9. Develop a troubleshooting aide: common Git Bash error messages, their causes, and solutions.
10. Design a comprehensive Git Bash learning portfolio: document skills developed, commands mastered, scripts created, and practical applications.

## Quick Quiz (10 questions)

1. What command shows your current directory?
2. How do you list names only, one per line, for screen readers?
3. How do you create an empty file?
4. How do you run a script in the current directory?
5. How do you page through long output?
6. True or False: Git Bash commands also work on Linux and macOS.
7. What does the `~` symbol represent in a Git Bash path?
8. Explain why redirecting output to a file (e.g., `command > output.txt`) is helpful for screen reader users.
9. What is the difference between `--help` and `man` in Git Bash?
10. Describe a practical scenario where you would use piping (`|`) in Git Bash.

## References

- Git for Windows. (2024). *Git Bash documentation*. [https://gitforwindows.org/](https://gitforwindows.org/)
- GNU. (2024). *Bash reference manual*. [https://www.gnu.org/software/bash/manual/bash.html](https://www.gnu.org/software/bash/manual/bash.html)
- The Linux Documentation Project. (2024). *Bash Beginners Guide*. [https://tldp.org/LDP/Bash-Beginners-Guide/html/](https://tldp.org/LDP/Bash-Beginners-Guide/html/)


Other Screen Readers

Dolphin SuperNova (commercial) and Windows Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://example.com](https://example.com) and [https://example.com](https://example.com) for vendor documentation.
<!--pagebreak-->

