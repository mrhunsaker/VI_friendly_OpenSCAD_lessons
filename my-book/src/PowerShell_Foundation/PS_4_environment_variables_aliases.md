# PS-4: Environment Variables, PATH, and Aliases

**Duration:** 1 class period
**Prerequisite:** PS-3 (Input, Output, and Piping)

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain what an environment variable is
- Read the value of environment variables with `echo $env:`
- Explain what the PATH variable does
- Add a folder to the PATH variable so a CLI program can be found
- Understand what aliases are and how to use them

---

## What Are Environment Variables?

When PowerShell launches, it loads a set of named values called **environment variables**. These are settings that programs can read to understand the user's preferences and system configuration.

Environment variables are referenced with a `$` prefix. In PowerShell, user environment variables are accessed with `$env:VARNAME`.

### Common Environment Variables

| Variable | What It Contains |
|---------|----------------|
| `$env:USERNAME` | Your Windows login name |
| `$env:USERPROFILE` | Full path to your home directory |
| `$env:COMPUTERNAME` | Your computer's name |
| `$env:PATH` | A list of folders where PowerShell looks for programs |
| `$env:TEMP` | Location of temporary files |

### Reading a Variable

```powershell
echo $env:USERNAME
echo $env:USERPROFILE
echo $env:COMPUTERNAME
```

---

## The PATH Variable

The **PATH** variable is the most important environment variable for command-line work. It is a semicolon-separated list of folder paths. When you type a command like `openscad` or `code`, PowerShell searches every folder listed in PATH to find an executable with that name.

```powershell
# Display your current PATH (it's a long list)
echo $env:PATH
```

This is why you can type `openscad` and have it work — as long as the OpenSCAD install folder is in your PATH, PowerShell finds it automatically. Without PATH, you would have to type the full path every time:

```powershell
# Without PATH — exhausting
"C:\Program Files\OpenSCAD\openscad.exe" myfile.scad

# With PATH — convenient
openscad myfile.scad
```

### Adding a Folder to PATH

If a program is installed but not found, you may need to add its folder to PATH. This requires running PowerShell **as administrator**.

```powershell
# Add a folder to PATH permanently (run as administrator)
[Environment]::SetEnvironmentVariable(
    "Path",
    $env:Path + ";C:\Path\To\Your\Program\Folder",
    "Machine"
)
```

After running this, close and reopen PowerShell for the change to take effect.

### Verifying a Program Is in PATH

```powershell
# Check if a command can be found
Get-Command openscad
Get-Command code
```

If the command is found, it will show the path to the executable. If not, you will get an error.

---

## Running PowerShell as Administrator

Some commands (like modifying system-wide environment variables) require administrator privileges.

1. Press `Windows + X`
2. Select **Windows PowerShell (Admin)** or **Terminal (Admin)**
3. A User Account Control dialog appears — press `Alt + Y` to confirm
4. You now have an elevated shell

Use administrator mode only when specifically needed — everyday work should be done in a regular shell.

---

## Aliases

An **alias** is a short name for a longer command. PowerShell has many built-in aliases. Most of the Linux-style commands we use in this curriculum (`ls`, `cd`, `cp`, `mv`, `rm`) are actually aliases for longer PowerShell commands.

```powershell
# See what a command is aliased to
Get-Alias ls
Get-Alias cd
Get-Alias cp
```

### Creating Your Own Alias

```powershell
# Create an alias for a command you use often
# (This only lasts for the current session)
Set-Alias -Name preview -Value openscad
```

Now `preview myfile.scad` does the same as `openscad myfile.scad`.

**Note:** Aliases created with `Set-Alias` only last for the current PowerShell session. To make them permanent, add them to your PowerShell profile file — this is an advanced topic covered in PS-5.

---

## Practice

```powershell
# 1. Print your username
echo $env:USERNAME

# 2. Print your home directory path
echo $env:USERPROFILE

# 3. Print the PATH variable and count roughly how many entries it has
echo $env:PATH

# 4. Check whether openscad is in your PATH
Get-Command openscad

# 5. Check whether code (VSCode) is in your PATH
Get-Command code

# 6. Look up what the built-in alias "cat" points to
Get-Alias cat
```

---

## Check for Understanding

1. What is an environment variable?
2. What does the PATH variable do?
3. If you type `openscad myfile.scad` and get "command not found," what might be the problem?
4. What does `Get-Command openscad` tell you?
5. Why do most everyday tasks not require running PowerShell as administrator?
