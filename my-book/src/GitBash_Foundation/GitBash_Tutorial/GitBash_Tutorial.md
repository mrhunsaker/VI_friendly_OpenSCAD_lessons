# Git Bash Tutorial {#gitbash_foundation_gitbash_tutorial-gitbash_tutorial}

Estimated time: 30-45 minutes

**Learning Objectives**
- Launch Git Bash and identify the prompt
- Understand and use basic path notation (`~`, `./`, `../`)
- Use `pwd`, `ls -1`, and `cd` to navigate the filesystem
- Open files in an external editor and run simple commands

**Materials**
- A computer with Git Bash installed (install via https://git-scm.com/)
- Access to a text editor (Notepad, VS Code)

## Pre-Requisite Knowledge
- Typing and basic text-editing skills
- Familiarity with file/folder concepts and basic OS navigation
- Basic screen-reading familiarity (if applicable)

---

## What is Git Bash?

Git Bash is a free terminal application for Windows that provides a **Bash** (Unix shell) environment. It is installed as part of **Git for Windows**. When you open Git Bash, you can use Unix commands like `ls`, `cat`, `grep`, and `echo` - the same commands used on Linux and macOS - right on your Windows computer.

Git Bash is useful for:
- Running CLI programs (like OpenSCAD, slicers, or 3DMake)
- Navigating the filesystem with keyboard-only commands
- Automating repetitive tasks with scripts
- Accessibility: works cleanly with NVDA, JAWS, and other screen readers

---

## What We'll Do and Why

You'll use Git Bash to run CLI programs, navigate the filesystem, and manipulate files - tasks that are especially efficient when using a keyboard or a screen reader.

---

## Quick Tutorial & Core Concepts

### Paths and Navigation

* `~` - home directory (e.g., `/c/Users/YourName`)
* `.` - current directory
* `..` - parent directory
* `./` - current directory shortcut (used to run scripts: `./script.sh`)
* `../` - parent directory shortcut
* Use **Tab** to autocomplete files and folders

Git Bash uses forward slashes (`/`) for paths, just like Linux. Your Windows `C:\Users\YourName` folder is accessible as `/c/Users/YourName` or simply `~`.

### Useful Commands (Examples)

```bash
pwd                # show current directory
ls -1              # list files, one per line (screen-reader friendly)
cd path/to/dir     # change directory
whoami             # current user
```

### Wildcards

* `*` matches zero or more characters
* `?` matches a single character

Use `ls *.scad` to filter by extension, for example.

---

## Common Operations

### File and Folder Manipulation

```bash
mkdir my-folder          # create folder
mkdir -p a/b/c           # create nested folders at once
cp -r src dest           # copy (use -r for directories)
mv oldname newname       # rename or move
rm file                  # remove file
rm -r folder             # remove folder and contents
touch filename.txt       # create new empty file
```

### Input, Output, and Piping

```bash
echo 'hello' | clip      # copy to clipboard
command > output.txt     # redirect output to file
command >> output.txt    # append output to file
command > /dev/null      # discard/suppress output
```

Use `|` to pipe output and `>` to redirect into files.

### Editing and Running Programs

```bash
notepad file.txt         # open in Notepad (Windows)
code file.txt            # open in VS Code (if in PATH)
./script.sh              # run a script in the current directory
chmod +x script.sh       # make a script executable
```

---

## Screen-Reader Friendly Tips

- Prefer `ls -1` for name-only, one-per-line output.
- Filter lists with `grep`: `ls -1 ~/Documents | grep "\.scad$"` (files only ending in .scad).
- Redirect very long outputs to a file and open it in an editor.

---

## Error Handling and Control

- Abort a running command: `Ctrl+C`
- View history: Up/Down arrows or `history`
- Clear screen: `clear` (or `Ctrl+L`)
- If an error is long, read the first few lines for the gist and copy short snippets into a file to examine.

---

## Environment Variables & PATH

Environment variables configure your session. `PATH` tells the shell where to find executables.

```bash
echo $PATH
echo $HOME
echo $USER
```

To add a directory to PATH for the current session:
```bash
export PATH="$PATH:/path/to/my/tools"
```

To make it permanent, add that line to `~/.bashrc`.

---

## Running CLI Applications and Archives

To extract ZIP archives in Git Bash:

```bash
# Unzip a file
unzip file.zip -d destinationfolder

# Or use Windows' built-in tool (from Git Bash):
powershell.exe Expand-Archive -Path file.zip -DestinationPath folder
```

---

## Aliases and Cross-Platform Notes

Git Bash provides Unix commands that work identically on Linux and macOS. This means your Git Bash skills transfer directly if you ever work on a Mac or Linux system.

Useful aliases to add to `~/.bashrc`:
```bash
alias ll='ls -la'
alias la='ls -1a'
alias ..='cd ..'
alias ...='cd ../..'
```

---

## Step-by-step Tasks (Hands-On)
1. Open Git Bash; listen for the prompt and current path.
2. Run `pwd` to confirm your location.
3. Run `ls -1` in your home directory and note the output.
4. Practice `cd Documents`, `cd ../`, and `cd ~` to move between folders.
5. Create and open a file: `touch example.txt && notepad example.txt` (or `code example.txt`).

## Checkpoints
- After step 3 you should be able to state your current directory.
- After step 5 you should be able to create and open a text file from Git Bash.

---

## Quick Quiz (10 questions)
1. What command prints your current directory?
2. What does `~` represent?
3. How do you list only names, one per line?
4. How do you go up one directory level?
5. How would you open `notes.txt` in Notepad from Git Bash?
6. True or False: The pipe operator `|` sends output to a file.
7. Explain why running a script requires `chmod +x` first.
8. What is the difference between running a script with `./script.sh` versus `bash script.sh`?
9. Describe how you would handle a very long command output when using a screen reader.
10. What does the `PATH` environment variable do, and why is it important when running programs like OpenSCAD?

---

## Extension Problems
1. Create a folder `OpenSCADProjects` in Documents and verify its contents.
2. Create three files named `a.scad`, `b.scad`, `c.scad` and list them with a wildcard.
3. Save `ls -1 ~/Documents` output to `doclist.txt` and open it.
4. Try tab-completion in a deeply nested folder and note behavior.
5. Capture `pwd` output into a file and open it: `pwd > cwd.txt && notepad cwd.txt`.
6. Build an automated setup script that creates a complete project directory structure, initializes placeholder files, and generates a README.
7. Create a Git Bash cheat sheet for your most-used commands; organize by category (navigation, files, scripting, troubleshooting).
8. Write a non-visual tutorial for Git Bash basics; use audio descriptions and keyboard-only navigation as the primary learning method.
9. Develop a workflow automation script: combines multiple Git Bash concepts (folders, aliases, piping) to solve a real 3D printing task.
10. Create a Git Bash proficiency self-assessment: list all concepts covered, provide test commands for each, and reflect on what you learned.

---

## References
- Git for Windows. (2024). *Git Bash*. https://gitforwindows.org/
- GNU. (2024). *Bash reference manual*. https://www.gnu.org/software/bash/manual/bash.html
- The Linux Documentation Project. (2024). *Bash Beginners Guide*. https://tldp.org/LDP/Bash-Beginners-Guide/html/

## Helpful Resources
- [Git for Windows](https://gitforwindows.org/)
- [Bash Reference Manual (GNU)](https://www.gnu.org/software/bash/manual/bash.html)
- [Bash Beginners Guide](https://tldp.org/LDP/Bash-Beginners-Guide/html/)
- [GNU Coreutils](https://www.gnu.org/software/coreutils/manual/)
