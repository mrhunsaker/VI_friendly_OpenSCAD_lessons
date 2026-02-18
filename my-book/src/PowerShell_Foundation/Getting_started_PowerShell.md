# Getting Started with PowerShell

This guide introduces Microsoft PowerShell with a focus on practical tasks students will use to manage files, run command-line tools, and support 3D printing workflows. It emphasizes keyboard-driven, screen-reader-friendly techniques and gives reproducible examples you can try in class.

## Prerequisites

*   Typing and basic text-editing skills
*   Basic file-system knowledge (files, folders, paths)
*   Familiarity with using a screen reader (helpful but not required)
*   Basic understanding of variables and parameters

## What is PowerShell?

PowerShell is a cross-platform command-line shell and scripting language that runs on Windows, Linux, and macOS. It lets you control your computer with text commands instead of a graphical UI. In this course we use PowerShell to run CLI tools (like OpenSCAD, slicers, or 3DMake), move files, and automate repetitive tasks.

## Quick Tutorial and Core Concepts

Open PowerShell (Windows+X → choose **PowerShell**, or search from Start). When it opens, you are placed in your current user’s home directory (abbreviated `~`).

### Paths and Navigation

*   `~` — home directory
*   `.` — current directory
*   `..` — parent directory
*   Use **Tab** to autocomplete files and folders (try typing `~/D` then press Tab)

### Useful Commands (Examples)

```powershell
pwd                # show current directory
ls -n              # list names only (screen-reader friendly)
cd path/to/dir     # change directory
whoami             # current user
```

**Tip:** On Windows PowerShell, backslashes (`\`) are standard, but most PowerShell commands accept forward slashes as well.

## Common Operations

### File and Folder Manipulation

```powershell
mkdir my-folder          # create folder
cp -r src dest           # copy (use -r for directories)
mv oldname newname       # rename or move
rm file                  # remove file
```

### Input, Output, and Piping

```powershell
echo 'hello' | clip      # copy to clipboard
command > output.txt     # redirect output to file
command > $null          # discard output (suppress output)
```

### Editing and Running Programs

*   Open files in Notepad or another editor:

    ```powershell
    notepad.exe file.txt
    ```

*   Use the call operator `&` to run executables or scripts:

    ```powershell
    & './script.ps1'
    ```

## Screen-Reader-Friendly Tips

*   Use `ls -n` to list names only.

*   Filter results with `-af` (files) or `-ad` (directories):

    ```powershell
    ls -n -af ~/Documents
    ```

*   For very large outputs, redirect to a file and open it in an editor.

## Error Handling and Control

*   Abort a running command: **Ctrl+C**
*   View command history: Up/Down arrows
*   Clear the screen: `clear`

If you encounter an error, read the first few lines for context, then re-run the command or copy the command into your editor for debugging.

## Environment Variables and PATH

Environment variables store configuration for your session.  
The **PATH** variable tells PowerShell where to find executables.

```powershell
echo $env:PATH
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\mytools", "Machine")
```

> **Note:** Setting system-level environment variables requires running PowerShell as Administrator.

### Running PowerShell as Administrator

1.  Press **Windows+X**.
2.  Choose **Windows PowerShell (Admin)**.
3.  If a User Account Control dialog appears, press **Alt+Y** to accept.

## Running CLI Applications and ZIP Archives

To extract ZIP archives:

```powershell
Expand-Archive -Path file.zip -DestinationPath folder
```

See Microsoft Docs for full usage.

## Other Shells and Aliases

PowerShell provides many Linux-style aliases (e.g., `ls`, `cp`, `mv`) to make cross-platform use easier.  
Concepts are transferable to WSL, macOS, and Linux, but be mindful of differences in permissions and available commands.

## Aliases

Aliases are shortcuts for longer PowerShell cmdlets.  
Examples:

```powershell
ls   # alias for Get-ChildItem
cp   # alias for Copy-Item
mv   # alias for Move-Item
```

Aliases make PowerShell feel similar to Linux shells, but they are **not** the same commands and may behave differently.

## Running Apps & Call Operator

*   Use `&` to run local executables:

    ```powershell
    & "C:\Tools\myapp.exe"
    ```

*   Use `./myapp` on Linux/macOS (not Windows unless using PowerShell Core and the file is executable).

## Additional Notes on the Command-Line Environment

When you launch PowerShell, you run it as your current Windows user.  
Environment variables control many aspects of system behavior.

### Checking Environment Variables

```powershell
echo $env:PATH
echo $env:USERNAME
```

### Permanently Adding a Folder to PATH

```powershell
[Environment]::SetEnvironmentVariable(
  "Path",
  $env:Path + ";C:\YourFolder",
  "Machine"
)
```

Requires Administrator.

### Steps to Run PowerShell as Administrator

1.  Press **Windows+X**.
2.  Choose **Windows PowerShell (Admin)**.
3.  Use Alt+Tab to switch to the UAC prompt (if focus does not move automatically).
4.  Press **Alt+Y** to accept.

## Package Managers?

Topics you may explore later:

*   `winget` (Windows)
*   `apt` (Linux)
*   `pip` (Python)

## Other Shells and Alternative Usage

Many commands shown are *aliases*, not core PowerShell cmdlets.  
This design makes knowledge portable to other shells such as:

*   WSL (Windows Subsystem for Linux)
*   macOS Terminal
*   Linux Bash shells

Learn more about aliases:  
<https://learn.microsoft.com/powershell/scripting/learn/shell/using-aliases>

## Helpful Resources

*   **Accessibility in PowerShell ISE**  
    <https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise>

*   **Learn PowerShell (Microsoft Docs)**  
    <https://learn.microsoft.com/powershell/scripting/overview>

*   **Environment Variables & PATH**  
    <https://poshcode.gitbook.io/powershell-faq/src/getting-started/environment-variables>

*   **Alias Reference**  
    <https://learn.microsoft.com/powershell/scripting/learn/shell/using-aliases>

*   **Linux Commands Cheat Sheet**  
    <https://www.guru99.com/linux-commands-cheat-sheet.html>

*   **PowerShell Cheat Sheet**  
    <https://www.theochem.ru.nl/~pwormer/teachmat/PS_cheat_sheet.html>

*   **Learning PowerShell (GitHub)**  
    <https://github.com/PowerShell/PowerShell/tree/master/docs/learning-powershell>

*   **Guru99 PowerShell Tutorial**  
    <https://www.guru99.com/powershell-tutorial.html>

*   **PowerShell for Beginners (eBook)**  
    <https://f.hubspotusercontent20.net/hubfs/4890073/PowerShell%20for%20Beginners%20eBook.pdf>

