```markdown
# PowerShell Introduction — Screen-reader friendly (JAWS/NVDA)

Estimated time: 20–30 minutes

**Target audience:** Users who are new to the command line and use screen readers.

**Learning Goals**
- Open and identify the PowerShell prompt
- Run basic commands: `pwd`, `ls -n`, `cd`, `ni`, `cat`, `echo`
- Redirect and page through long outputs for screen readers
- Use `Get-Help` and `Get-Command` to learn more

## Starting PowerShell

Windows
1. Press **Windows**, type `PowerShell`, then press **Enter**.
2. If you need elevated rights, press **Windows+X** then choose **Windows PowerShell (Admin)**.

macOS / Linux
1. Open Terminal.app (macOS) or your preferred terminal (Linux).
2. Type `pwsh` and press Enter (PowerShell Core / pwsh must be installed).

When PowerShell starts you will hear the prompt and usually your current path. The default prompt often includes `PS` followed by the path, e.g., `PS C:\Users\YourName>`.

## Essential commands — short list

- `pwd` — print working directory (where you are now)
- `ls -n` — list file and folder names only (recommended for screen readers)
- `cd <path>` — change directory
- `ni <filename>` — create a file (alias for New-Item)
- `cat <file>` — show file contents
- `echo <text>` — print text

Quick examples:

```powershell
pwd
ls -n
cd Documents
ni notes.txt
echo "hello" > notes.txt
cat notes.txt
```

## Paging long outputs for screen readers

- If an output is long, redirect to a file and open it in an editor: `some-command > output.txt ; notepad.exe output.txt`.
- Or pipe to `more`: `some-command | more` (press Space to advance pages, Q to quit).
- For very long listings prefer `ls -n | Out-File -FilePath list.txt -Encoding utf8` then open `list.txt`.

## Help and discovery

- `Get-Help <command>` shows help: `Get-Help ls` or `Get-Help Get-ChildItem`.
- `Get-Command <name>` locates a program or cmdlet: `Get-Command openscad`.

Tip: Redirect `Get-Help` into a file for easier reading: `Get-Help Get-Command | Out-File help.txt ; notepad.exe help.txt`.

## Running scripts and executables

- Use the call operator `&` to run files with spaces or when PowerShell might treat them differently: `& "./script.ps1"`.
- To run an executable by path: `& 'C:\Program Files\OpenSCAD\openscad.exe'`.

## Screen reader specific tips (JAWS, NVDA)

- Use `ls -n` to avoid cluttered, multi-column listings.
- Redirect large outputs to a text file and open it in an editor that your screen reader handles well.
- If output stops being announced, try moving focus with `Alt+Tab` and back, or briefly pressing `Ctrl` or `Shift` to force announcement.

## Suggested learning path

1. Open PowerShell, run `pwd`, `ls -n`, `cd` into Documents.
2. Create a file with `ni test.txt`, add a line with `echo "hi" > test.txt`, and read it with `cat test.txt`.
3. Use `Get-Help ls` and redirect output to a file to read comfortably.

## Hands-on: Explore the terminal (Beginner)

1. Run `pwd` and speak or note the output.
2. Run `ls -n` in your home directory. If the list is long, save it: `ls -n > listing.txt ; notepad.exe listing.txt`.
3. Create a folder and file: `mkdir PS_Practice ; cd PS_Practice ; ni notes.txt`.
4. Add a line: `echo "My first note" > notes.txt ; cat notes.txt`.

## Extension Exercises

1. Use wildcards to list only `.scad` files: `ls -n *.scad`.
2. Save a long command's output and search it with `Select-String`.
3. Create a small script that prints a timestamp and test it with `&`.

## Quick Quiz (5 questions)

1. What command shows your current directory?
2. How do you list names only for screen readers?
3. How do you create an empty file?
4. What operator runs a script or executable by path?
5. How do you page through long output?

## References

- PowerShell docs: https://learn.microsoft.com/powershell/
- Using Out-File: https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/out-file

```