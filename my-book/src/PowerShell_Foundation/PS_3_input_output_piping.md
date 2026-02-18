# PS-3: Input, Output, and Piping

**Duration:** 1 class period
**Prerequisite:** PS-2 (File and Folder Manipulation)

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Use `echo` to print text to the screen
- Use `cat` to read file contents
- Use `>` to redirect output into a file
- Use `|` (pipe) to send one command's output to another
- Copy output to the clipboard with `clip`
- Open files with a text editor from the command line

---

## Commands Covered

| Command | What It Does |
|---------|-------------|
| `echo "text"` | Print text to the screen |
| `cat filename` | Print the contents of a file |
| `> filename` | Redirect output into a file (overwrites) |
| `>> filename` | Append output to a file (adds to end) |
| `\|` | Pipe — send output from one command to the next |
| `clip` | Copy piped input to the Windows clipboard |
| `notepad.exe filename` | Open a file in Notepad |

---

## `echo` — Printing Text

`echo` prints text to the screen. It is useful for testing, for writing text into files, and for understanding how piping works.

```powershell
echo "Hello, World"
echo "This is a test"
```

---

## `cat` — Reading Files

`cat` prints the contents of a file to the screen.

```powershell
# Read a text file
cat ~/Documents/notes.txt

# Read an OpenSCAD file
cat ~/Documents/OpenSCAD_Projects/project0.scad
```

With a long file, use `cat filename | more` to read it page by page (press `Space` to advance, `Q` to quit).

---

## `>` — Redirecting Output to a File

The `>` symbol redirects output from the screen into a file instead.

```powershell
# Create a file with a single line
echo "Author: Your Name" > header.txt

# Confirm the file was created and has content
cat header.txt
```

**Warning:** `>` overwrites the file if it already exists. Use `>>` to append instead:

```powershell
echo "Date: 2025" >> header.txt
echo "Project: Floor Marker" >> header.txt
cat header.txt
```

---

## `|` — Piping

The pipe symbol `|` sends the output of one command to the input of the next. This lets you chain commands together.

```powershell
# List files and send the list to clip (copies to clipboard)
ls -n | clip

# Now paste with Ctrl + V anywhere
```

```powershell
# Search within a file's contents using Select-String (like grep)
cat project0.scad | Select-String "cube"
```

---

## `clip` — Copying to Clipboard

`clip` takes whatever is piped to it and puts it on the Windows clipboard.

```powershell
# Copy your current directory path to the clipboard
pwd | clip

# Copy a file listing to clipboard
ls -n | clip

# Copy the contents of a file to clipboard
cat notes.txt | clip
```

After any of these, press `Ctrl + V` in any application to paste.

---

## Opening Files in Notepad

```powershell
# Open a file in Notepad
notepad.exe ~/Documents/notes.txt

# Open a .scad file
notepad.exe ~/Documents/OpenSCAD_Projects/project0.scad

# Create a new file and open it
ni new_notes.txt
notepad.exe new_notes.txt
```

---

## Suppressing Output

Sometimes a command produces output you don't want to see. Use `> $null` to suppress it:

```powershell
# Run a command silently (no output shown)
some_command > $null
```

---

## Practice

```powershell
# 1. Create a folder and navigate into it
mkdir ~/Documents/PS3_Practice
cd ~/Documents/PS3_Practice

# 2. Create a simple text file using echo and >
echo "Line 1: This is my first line" > practice.txt
echo "Line 2: This is my second line" >> practice.txt
echo "Line 3: This is my third line" >> practice.txt

# 3. Read the file
cat practice.txt

# 4. Copy the file contents to the clipboard
cat practice.txt | clip

# 5. Open the file in Notepad, add a line, save and close
notepad.exe practice.txt

# 6. Read it again to confirm your addition
cat practice.txt

# 7. Clean up
cd ~/Documents
rm -r PS3_Practice
```

---

## Check for Understanding

1. What is the difference between `>` and `>>`?
2. What does the pipe `|` do?
3. How would you copy the output of `ls -n` to your clipboard?
4. How would you search for the word "cylinder" in an OpenSCAD file using `cat` and `Select-String`?
5. What would happen to a file that already has content if you used `>` to write to it?
