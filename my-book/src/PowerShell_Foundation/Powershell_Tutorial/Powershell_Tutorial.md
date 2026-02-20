# PowerShell Tutorial 

Estimated time: 30–45 minutes

**Learning Objectives**
- Launch PowerShell and identify the prompt
- Understand and use basic path notation (`~`, `./`, `../`)
- Use `pwd`, `ls -n`, and `cd` to navigate the filesystem
- Open files in an external editor and run simple commands

**Materials**
- A computer with PowerShell installed
- Access to a text editor (Notepad, VS Code)

## Pre-Requisite Knowledge
- Typing and basic text-editing skills
- Familiarity with file/folder concepts and basic OS navigation
- Basic screen-reading familiarity (if applicable)

## What is PowerShell?

PowerShell is a cross-platform command-line shell and scripting language that runs on Windows, Linux, and macOS. It lets you control your computer with text commands instead of a graphical user interface (GUI). In this course we use PowerShell to run CLI tools (like OpenSCAD, slicers, or 3DMake), move files, and automate repetitive tasks.

## What we'll do and why

You'll use PowerShell to run CLI programs, navigate the filesystem, and manipulate files — tasks that are especially efficient when using a keyboard or a screen reader.

## Quick tutorial & core concepts

### Paths and navigation

* `~` — home directory
* `.` — current directory
* `..` — parent directory
* `./` — current directory shortcut
* `../` — parent directory shortcut
* Use **Tab** to autocomplete files and folders (try typing `~/D` then press Tab)

Paths typically use `\` on Windows and `/` on Unix-like systems; PowerShell accepts `/` in most contexts.

### Useful commands (examples)

```powershell
pwd                # show current directory
ls -n              # list names only (screen-reader friendly)
cd path/to/dir     # change directory
whoami             # current user
```

### Wildcards

* `*` matches zero or more characters
* `?` matches a single character

Use `ls -n *.scad` to filter by extension, for example.

## Common operations

### File and folder manipulation

```powershell
mkdir my-folder          # create folder
cp -r src dest           # copy (use -r for directories)
mv oldname newname       # rename or move
rm file                  # remove file
ni filename.txt          # create new file (New-Item alias)
```

### Input, output, and piping

```powershell
echo 'hello' | clip      # copy to clipboard
command > output.txt     # redirect output to file
command > $null          # discard/suppress output
```

Use `|` to pipe output and `>` to redirect into files.

### Editing and running programs

```powershell
notepad.exe file.txt     # open in Notepad (Windows)
code file.txt            # open in VS Code (if in PATH)
& './script.ps1'         # call operator to run a script or executable
```

On Linux/macOS, use `./myapp` for local executables where appropriate.

## Screen-reader friendly tips

- Prefer `ls -n` for name-only output.
- Filter lists with `-af` (files) or `-ad` (directories): `ls -n -af ~/Documents`.
- Redirect very long outputs to a file and open it in an editor.

## Error handling and control

- Abort a running command: `Ctrl+C`
- View history: Up/Down arrows or `Get-History`
- Clear screen: `clear`
- If an error is long, read the first few lines for the gist and copy short snippets into an editor to examine.

## Environment variables & PATH

Environment variables configure your session. `PATH` tells the shell where to find executables.

```powershell
echo $env:PATH
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:/mytools", "Machine")
```

Setting machine-level environment variables requires Administrator privileges.

### Running PowerShell as Administrator

1. Press **Windows+X** and choose **Windows PowerShell (Admin)**.
2. If a UAC dialog appears, press **Alt+Y** to accept.

## Running CLI applications and archives

To extract ZIP archives:

```powershell
Expand-Archive -Path file.zip -DestinationPath folder
```

## Aliases and cross-platform notes

PowerShell provides aliases (`ls`, `cp`, `mv`) mapping to cmdlets (`Get-ChildItem`, `Copy-Item`, `Move-Item`). They make PowerShell feel familiar but can behave differently than native Linux tools. Concepts transfer to WSL, macOS, and Linux, but watch path and permission differences.

## Step-by-step Tasks (Hands-on)
1. Open PowerShell; listen for the prompt and current path.
2. Run `pwd` to confirm your location.
3. Run `ls -n` in your home directory and note the output.
4. Practice `cd Documents`, `cd ../`, and `cd ~` to move between folders.
5. Create and open a file: `ni example.txt ; notepad.exe example.txt` (or `code example.txt`).

## Checkpoints
- After step 3 you should be able to state your current directory.
- After step 5 you should be able to create and open a text file from PowerShell.

## Quick Quiz (10 questions)
1. What command prints your current directory?
2. What does `~` represent?
3. How do you list only names with `ls`?
4. How do you go up one directory level?
5. How would you open `notes.txt` in Notepad from PowerShell?
6. True or False: The pipe operator `|` sends output to a file.
7. Explain why running commands with elevated privileges (as Administrator) might be necessary.
8. What is the difference between running a script with `./script.ps1` versus `& './script.ps1'`?
9. Describe how you would handle a very long command output when using a screen reader.
10. What does the `PATH` environment variable do, and why is it important when running programs like OpenSCAD?

## Extension Problems
1. Create a folder `OpenSCAD_Projects` in Documents and verify its contents.
2. Create three files named `a.scad`, `b.scad`, `c.scad` and list them with a wildcard.
3. Save `ls -n ~/Documents` output to `doc_list.txt` and open it.
4. Try tab-completion in a deeply nested folder and note behavior.
5. Capture `pwd` output into a file and open it: `pwd > cwd.txt ; notepad.exe cwd.txt`.
6. Build an automated setup script that creates a complete project directory structure, initializes placeholder files, and generates a README.
7. Create a PowerShell cheat sheet for your most-used commands; organize by category (navigation, files, scripting, troubleshooting).
8. Write a non-visual tutorial for PowerShell basics; use audio descriptions and keyboard-only navigation as the primary learning method.
9. Develop a workflow automation script: combines multiple PowerShell concepts (folders, aliases, piping) to solve a real 3D printing task.
10. Create a PowerShell proficiency self-assessment: list all concepts covered, provide test commands for each, and reflect on what you learned.

## References
- Microsoft. (2024). *Accessibility in PowerShell ISE*. https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise
- Microsoft. (2024). *Learn PowerShell scripting language*. https://learn.microsoft.com/powershell/scripting/overview
- Microsoft. (2024). *Environment variables and PATH configuration*. https://learn.microsoft.com/powershell/scripting/learn/shell/using-aliases

## Helpful Resources
- Accessibility in PowerShell ISE (Microsoft): https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise
- Learn PowerShell (Microsoft Docs): https://learn.microsoft.com/powershell/scripting/overview
- Environment Variables & PATH: https://poshcode.gitbook.io/powershell-faq/src/getting-started/environment-variables
- Alias Reference: https://learn.microsoft.com/powershell/scripting/learn/shell/using-aliases

