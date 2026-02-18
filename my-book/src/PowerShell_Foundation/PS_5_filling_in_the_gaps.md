# PS-5: Filling in the Gaps — Control Flow, Profiles, and Useful Tricks

**Duration:** 1 class period
**Prerequisite:** PS-4 (Environment Variables and Aliases)

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Use `history` and `Ctrl + C` effectively
- Clear the screen with `clear`
- Use `man` (Get-Help) to look up any command
- Understand what the PowerShell profile is and how to add persistent settings
- Run programs with `&` (the call operator)
- Handle a few common screen reader edge cases

---

## Commands Covered

| Command | What It Does |
|---------|-------------|
| `history` | Show a list of recently run commands |
| `Ctrl + C` | Abort a running command |
| `clear` | Clear the terminal screen |
| `Get-Help commandname` | Show documentation for any command |
| `exit` | Close the PowerShell window |
| `& "path\to\program.exe"` | Run a program by its full path |
| `whoami` | Print your current username |

---

## `history` — Command History

`history` shows a numbered list of commands you have typed in the current session.

```powershell
history
```

You can re-run any command from history by pressing `Up Arrow` to cycle through recent commands. You can also use `Invoke-History` with a number:

```powershell
# Re-run command number 5 from history
Invoke-History 5
```

---

## `Ctrl + C` — Aborting Commands

If a command is running and taking too long, or you started the wrong command, press `Ctrl + C` to abort it.

This is safe to use — it stops the command cleanly without closing PowerShell.

```powershell
# Start something that takes time, then press Ctrl + C to stop it
ping 8.8.8.8
```

---

## `clear` — Clearing the Screen

`clear` clears all the text from the terminal window. It does not delete any files or undo anything — it just clears the visual display.

```powershell
clear
```

Useful when the screen has accumulated a lot of output and you want a clean start.

---

## `Get-Help` — Looking Up Commands

`Get-Help` (aliased to `man` or `help`) shows documentation for any PowerShell command.

```powershell
# Get help for the ls command (Get-ChildItem)
Get-Help ls

# Get detailed help
Get-Help ls -Detailed

# Get examples only
Get-Help ls -Examples
```

For screen readers, piping to a text file and opening it in Notepad is often more readable than reading the help output directly:

```powershell
Get-Help ls -Examples > help_output.txt
notepad.exe help_output.txt
```

---

## `exit` — Closing PowerShell

```powershell
exit
```

Closes the current PowerShell window. If a script is running, `exit` ends it and closes the shell.

---

## `&` — Running Programs by Path

The `&` call operator runs a program when you give it the full path. This is useful when a program is not in your PATH.

```powershell
# Run OpenSCAD with a file if it's not in PATH
& "C:\Program Files\OpenSCAD\openscad.exe" myfile.scad

# Run VSCode
& "C:\Users\YourName\AppData\Local\Programs\Microsoft VS Code\Code.exe"
```

---

## `whoami` — Current User

```powershell
whoami
```

Prints your current username in `DOMAIN\username` format. Useful to confirm which user account you are running as.

---

## The PowerShell Profile

The **profile** is a `.ps1` script file that runs automatically every time you open PowerShell. You can put persistent aliases, environment variable changes, and custom settings there.

Find your profile file path:
```powershell
echo $PROFILE
```

Open or create your profile in Notepad:
```powershell
notepad.exe $PROFILE
```

If the file doesn't exist yet, create it:
```powershell
ni $PROFILE -Force
notepad.exe $PROFILE
```

### Adding a Persistent Alias

Add this line to your profile file and save:
```powershell
Set-Alias -Name preview -Value openscad
```

Now `preview` works as an alias for `openscad` every time you open PowerShell.

---

## Screen Reader Edge Cases

### When Output Stops Being Read

Occasionally PowerShell output stops being announced. Try:
1. Press `Enter` once (empty command) to trigger a new prompt announcement
2. Click once in the terminal window to refocus
3. Press `Alt + Tab` away and back

### Navigating Long Output

When a command produces many lines of output, use `| more` to page through it:

```powershell
ls -n ~/Documents | more
```

Press `Space` to advance one page, `Enter` to advance one line, `Q` to quit.

### Copying Output to Read Later

Pipe any output to a text file, then open it in Notepad where it is easier to navigate:

```powershell
ls -n ~/Documents > file_list.txt
notepad.exe file_list.txt
```

---

## Full OpenSCAD Workflow from PowerShell

Now that you know all the PowerShell basics, here is the complete workflow:

```powershell
# 1. Navigate to your OpenSCAD projects folder
cd ~/Documents/OpenSCAD_Projects

# 2. Create a new file
ni project2.scad

# 3. Open it in VSCode
code project2.scad
# (Edit your code in VSCode, then press Ctrl + Shift + B to preview in OpenSCAD)

# 4. When happy, export STL using the VSCode Export task
# OR export from the command line:
openscad -o project2.stl project2.scad

# 5. Confirm the STL was created
ls -n *.stl

# 6. Open PrusaSlicer with the STL
& "C:\Program Files\PrusaSlicer\prusa-slicer.exe" project2.stl
```

---

## Check for Understanding

1. How do you abort a command that is currently running?
2. What does the PowerShell profile do?
3. How would you look up the examples for the `mv` command?
4. If OpenSCAD is not in your PATH, how can you still run it from the command line?
5. How would you make an alias permanent so it works every time you open PowerShell?
