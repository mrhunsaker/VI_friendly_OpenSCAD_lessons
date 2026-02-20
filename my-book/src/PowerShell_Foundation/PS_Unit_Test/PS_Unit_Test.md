# PowerShell Unit Test — Comprehensive Assessment

Estimated time: 60–90 minutes

## Key Learning Outcomes Assessed

By completing this unit test, you will demonstrate:

1. Understanding of file system navigation and path concepts
2. Proficiency with file and folder manipulation commands
3. Ability to redirect and pipe command output
4. Knowledge of environment variables and aliases
5. Screen-reader accessibility best practices in terminal environments
6. Problem-solving and command chaining skills

## Target Audience:

Users who have completed PS-0 through PS-5 and need to demonstrate mastery of PowerShell fundamentals.

## Instructions:

Complete all sections below. For multiple choice, select the best answer. For short answers, write one to two sentences. For hands-on tasks, capture evidence (screenshots or output files) and submit alongside your answers.

---

## Part A: Multiple Choice Questions (20 questions)

Select the best answer for each question. Each question is worth 1 point.

1. What is the primary purpose of the `PATH` environment variable?
   - A) Store your home directory location
   - B) Tell the shell where to find executable programs
   - C) Configure the visual appearance of the terminal
   - D) Store the current working directory name

2. Which command prints your current working directory?
   - A) `ls -n`
   - B) `cd`
   - C) `pwd`
   - D) `whoami`

3. What does the `~` symbol represent in PowerShell paths?
   - A) The root directory
   - B) The current directory
   - C) The parent directory
   - D) The home directory

4. How do you list only file names (not full details) in a way that is screen-reader friendly?
   - A) `ls`
   - B) `ls -n`
   - C) `ls -l`
   - D) `cat -n`

5. Which command creates a new empty file?
   - A) `mkdir filename`
   - B) `ni filename`
   - C) `touch filename`
   - D) `echo filename`

6. What is the difference between `>` and `>>`?
   - A) `>` redirects to file, `>>` displays on screen
   - B) `>` overwrites a file, `>>` appends to a file
   - C) They do the same thing
   - D) `>` is for text, `>>` is for binary

7. What does the pipe operator `|` do?
   - A) Creates a folder
   - B) Sends the output of one command to the input of another
   - C) Deletes files matching a pattern
   - D) Lists all processes

8. Which command copies a file?
   - A) `mv`
   - B) `rm`
   - C) `cp`
   - D) `cd`

9. How do you rename a file from `oldname.txt` to `newname.txt`?
   - A) `cp oldname.txt newname.txt`
   - B) `mv oldname.txt newname.txt`
   - C) `rename oldname.txt newname.txt`
   - D) `rn oldname.txt newname.txt`

10. What is the purpose of `Select-String`?
    - A) Select files in a directory
    - B) Search for text patterns within a file
    - C) Select a string to copy to clipboard
    - D) Select which shell to use

11. Which key combination allows you to autocomplete a path in PowerShell?
    - A) `Ctrl + A`
    - B) `Ctrl + E`
    - C) `Tab`
    - D) `Space`

12. How do you copy text to the Windows clipboard from PowerShell?
    - A) `cat filename > clipboard`
    - B) `cat filename | clip`
    - C) `copy filename`
    - D) `cat filename | paste`

13. What does `Get-Command openscad` do?
    - A) Opens the OpenSCAD application
    - B) Gets help about the OpenSCAD command
    - C) Locates the full path of the openscad executable
    - D) Lists all available commands

14. Which wildcard matches any single character?
    - A) `*`
    - B) `?`
    - C) `%`
    - D) `#`

15. What is the purpose of the `&` call operator?
    - A) Run a script or executable by full path
    - B) Execute all commands in parallel
    - C) Combine multiple commands
    - D) Create an alias

16. How do you create a temporary alias for a command?
    - A) `alias preview='openscad'`
    - B) `Set-Alias -Name preview -Value openscad`
    - C) `New-Alias preview openscad`
    - D) `Alias preview = openscad`

17. Where is your PowerShell profile typically stored?
    - A) C:\Program Files\PowerShell\profile.ps1
    - B) The location returned by `echo $PROFILE`
    - C) ~/PowerShell/profile.ps1
    - D) ~/.bashrc

18. How do you abort a long-running command in PowerShell?
    - A) Press `Escape`
    - B) Press `Ctrl + X`
    - C) Press `Ctrl + C`
    - D) Press `Alt + F4`

19. What command shows the history of previously run commands?
    - A) `history`
    - B) `Get-History`
    - C) `Show-History`
    - D) Both A and B

20. How do you permanently set an alias so it persists across PowerShell sessions?
    - A) Use `Set-Alias` in the terminal every time
    - B) Add the `Set-Alias` line to your PowerShell profile
    - C) Use the Windows Control Panel
    - D) Aliases cannot be made permanent

---

## Part B: Short Answer Questions (10 questions)

Answer each question in one to two sentences. Each question is worth 2 points.

1. Explain the difference between absolute and relative paths. Give one example of each.

2. Why is `ls -n` preferred over `ls` for screen reader users? Describe what flag you would use to list only files.

3. What is the purpose of redirecting output to a file, and give an example of when you would use `>` instead of `>>`?

4. Describe what would happen if you ran `rm -r ~/Documents/my_folder` and why this command should be used carefully.

5. How would you search for all files with a `.scad` extension in your current directory? Write the command.

6. Explain what happens when you pipe the output of `ls -n` into `clip`. What would you do next?

7. What is an environment variable, and give one example of how you might use it in PowerShell.

8. If a program is not in your `PATH`, what two methods could you use to run it from PowerShell?

9. Describe how you would open a file in Notepad and also add a line to it from PowerShell.

10. What is one strategy you would use if your screen reader stops announcing terminal output while using PowerShell?

---

## Part C: Hands-On Tasks (10 tasks)

Complete each task and capture evidence (screenshots, output files, or command transcripts). Each task is worth 3 points.

### Tasks 1–5: File System and Navigation

1. Create a folder structure `~/Documents/PowerShell_Assessment/Projects` using a single command. Capture the `ls -n` output showing the creation.

2. Create five files named `project_1.scad`, `project_2.scad`, `project_3.txt`, `notes_1.txt`, and `notes_2.txt` inside the `Projects` folder. Use wildcards to list only `.scad` files, then capture the output.

3. Copy the entire `Projects` folder to `Projects_Backup` using `cp -r`. Capture the `ls -n` output showing both folders exist.

4. Move (rename) `project_1.scad` to `project_1_final.scad`. Capture the `ls -n` output showing the renamed file.

5. Delete `notes_1.txt` and `notes_2.txt` using a single `rm` command with wildcards. Capture the final `ls -n` output.

### Tasks 6–10: Advanced Operations and Scripting

6. Create a file called `my_data.txt` with at least four lines using `echo` and `>>`. Then read it with `cat my_data.txt` and capture the output.

7. Use `Select-String` to search for a keyword (e.g., "project") in `my_data.txt` and pipe the results to `clip`. Paste the results into Notepad and capture a screenshot.

8. List all files in the `Projects` folder and redirect the output to `projects_list.txt`. Open it in Notepad and capture a screenshot of the file.

9. Create a temporary alias called `myls` that runs `ls -n`, test it, and capture the output. Then explain what would be required to make it permanent.

10. Run `Get-Help Get-ChildItem` and redirect the output to `help_output.txt`. Open the file in Notepad and capture a screenshot showing at least the first page of help content.

---

## Grading Rubric

| Section | Questions | Points Each | Total |
| --------- | ----------- | ------------- | ------- |
| Multiple Choice | 20 | 1 | 20 |
| Short Answer | 10 | 2 | 20 |
| Hands-On Tasks | 10 | 3 | 30 |
| **Total** | **40** | — | **70** |

**Passing Score:** 49 points (70%)

---

## Helpful Resources for Review

- [PowerShell Command Reference](https://learn.microsoft.com/powershell/scripting/overview)
- [Navigation and File System](https://learn.microsoft.com/powershell/scripting/learn/shell/navigate-the-filesystem)
- [Using Pipes and Filtering](https://learn.microsoft.com/powershell/scripting/learn/shell/using-the-pipeline)
- [Profile and Aliases](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles)
- [Screen Reader Accessibility Tips](https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise)

---

## Submission Checklist

- [ ] All 20 multiple choice questions answered
- [ ] All 10 short answer questions answered (1–2 sentences each)
- [ ] All 10 hands-on tasks completed with evidence captured
- [ ] Files/screenshots organized and labeled clearly
- [ ] Submission includes this checklist

---

