# CMD Unit Test - Comprehensive Assessment

Estimated time: 60-90 minutes

## Key Learning Outcomes Assessed

By completing this unit test, you will demonstrate:

1. Understanding of file system navigation and path concepts
2. Proficiency with file and folder manipulation commands
3. Ability to redirect and pipe command output
4. Knowledge of environment variables and aliases
5. Screen-reader accessibility best practices in terminal environments
6. Problem-solving and command chaining skills

## Target Audience

Users who have completed CMD-0 through CMD-6 and need to demonstrate mastery of Command Prompt fundamentals.

## Instructions

Complete all sections below. For multiple choice, select the best answer. For short answers, write one to two sentences. For hands-on tasks, capture evidence (screenshots or output files) and submit alongside your answers.

---

## Part A: Multiple Choice Questions (20 questions)

Select the best answer for each question. Each question is worth 1 point.

1. What is the primary purpose of the `PATH` environment variable?
   - A) Store your home directory location
   - B) Tell the shell where to find executable programs
   - C) Configure the visual appearance of the terminal
   - D) Store the current working directory name

2. Which command shows your current working directory in CMD?
   - A) `dir /B`
   - B) `cd` (with no arguments)
   - C) `pwd`
   - D) `whoami`

3. What does `%USERPROFILE%` represent in CMD?
   - A) The root directory
   - B) The current directory
   - C) The parent directory
   - D) Your home directory

4. How do you list only file names (not full details) in a screen-reader-friendly way?
   - A) `dir`
   - B) `dir /B`
   - C) `dir /L`
   - D) `type /B`

5. Which command creates a new empty file in CMD?
   - A) `mkdir filename`
   - B) `echo. > filename`
   - C) `touch filename`
   - D) `new filename`

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

8. Which command copies a file in CMD?
   - A) `move`
   - B) `del`
   - C) `copy`
   - D) `cd`

9. How do you rename a file from `oldname.txt` to `newname.txt` in CMD?
   - A) `copy oldname.txt newname.txt`
   - B) `move oldname.txt newname.txt`
   - C) `rename oldname.txt newname.txt`
   - D) Both B and C are correct

10. What is the purpose of `find` in CMD piping?
    - A) Find files in a directory
    - B) Search for text patterns within output
    - C) Find a string to copy to clipboard
    - D) Find which shell to use

11. Which key allows you to autocomplete a path in CMD?
    - A) `Ctrl + A`
    - B) `Ctrl + E`
    - C) `Tab`
    - D) `Space`

12. How do you copy text to the Windows clipboard from CMD?
    - A) `type filename > clipboard`
    - B) `type filename | clip`
    - C) `copy filename`
    - D) `type filename | paste`

13. What does `where openscad` do?
    - A) Opens the OpenSCAD application
    - B) Gets help about the openscad command
    - C) Locates the full path of the openscad executable
    - D) Lists all available commands

14. Which wildcard matches any single character?
    - A) `*`
    - B) `?`
    - C) `%`
    - D) `#`

15. What is the purpose of the `start` command?
    - A) Run a script or executable, optionally in a new window
    - B) Execute all commands in parallel
    - C) Combine multiple commands
    - D) Create an alias

16. How do you create a temporary alias (macro) in CMD?
    - A) `alias preview='openscad'`
    - B) `doskey preview=openscad $*`
    - C) `set preview=openscad`
    - D) `macro preview openscad`

17. How can doskey macros be made to persist across CMD sessions?
    - A) They are automatically saved
    - B) By adding them to a startup batch script registered as an autorun
    - C) By using the Windows Control Panel
    - D) Doskey macros cannot be made permanent

18. How do you abort a long-running command in CMD?
    - A) Press `Escape`
    - B) Press `Ctrl + X`
    - C) Press `Ctrl + C`
    - D) Press `Alt + F4`

19. What command shows the history of previously run commands in CMD?
    - A) `history`
    - B) `doskey /history`
    - C) `F7` (opens history popup)
    - D) Both B and C are correct

20. How do you make an environment variable permanent in CMD (for all future sessions)?
    - A) Use `set` in the terminal every time
    - B) Use `setx` to write it to the registry
    - C) Use the Windows Control Panel only
    - D) Environment variables cannot be made permanent in CMD

---

## Part B: Short Answer Questions (10 questions)

Answer each question in one to two sentences. Each question is worth 2 points.

1. Explain the difference between absolute and relative paths. Give one example of each.

2. Why is `dir /B` preferred over `dir` for screen reader users? Describe what flag you would add to list only files.

3. What is the purpose of redirecting output to a file, and give an example of when you would use `>` instead of `>>`?

4. Describe what would happen if you ran `rmdir /S /Q C:\Documents\my_folder` and why this command should be used carefully.

5. How would you search for all files with a `.scad` extension in your current directory? Write the command.

6. Explain what happens when you pipe the output of `dir /B` into `clip`. What would you do next?

7. What is an environment variable, and give one example of how you might use it in CMD.

8. If a program is not in your `PATH`, what two methods could you use to run it from CMD?

9. Describe how you would open a file in Notepad and also add a line to it from CMD.

10. What is one strategy you would use if your screen reader stops announcing terminal output while using CMD?

---

## Part C: Hands-On Tasks (10 tasks)

Complete each task and capture evidence (screenshots, output files, or command transcripts). Each task is worth 3 points.

### Tasks 1-5: File System and Navigation

1. Create a folder structure `%USERPROFILE%\Documents\CMD_Assessment\Projects` using a single command. Capture the `dir /B` output showing the creation.

2. Create five files named `project_1.scad`, `project_2.scad`, `project_3.txt`, `notes_1.txt`, and `notes_2.txt` inside the `Projects` folder. Use wildcards to list only `.scad` files, then capture the output.

3. Copy the entire `Projects` folder to `Projects_Backup` using `xcopy /E /I`. Capture the `dir /B` output showing both folders exist.

4. Move (rename) `project_1.scad` to `project_1_final.scad`. Capture the `dir /B` output showing the renamed file.

5. Delete `notes_1.txt` and `notes_2.txt` using a single `del` command with wildcards. Capture the final `dir /B` output.

### Tasks 6-10: Advanced Operations and Scripting

1. Create a file called `my_data.txt` with at least four lines using `echo` and `>>`. Then read it with `type my_data.txt` and capture the output.

2. Use `find` to search for a keyword (e.g., "project") in `my_data.txt` and pipe the results to `clip`. Paste the results into Notepad and capture a screenshot.

3. List all files in the `Projects` folder and redirect the output to `projects_list.txt`. Open it in Notepad and capture a screenshot of the file.

4. Create a temporary `doskey` alias called `mydir` that runs `dir /B`, test it, and capture the output. Then explain what would be required to make it persistent.

5. Run `help dir` and redirect the output to `help_output.txt`. Open the file in Notepad and capture a screenshot showing at least the first page of help content.

---

## Grading Rubric

| Section         | Questions | Points Each | Total  |
|-----------------|-----------|-------------|--------|
| Multiple Choice | 20        | 1           | 20     |
| Short Answer    | 10        | 2           | 20     |
| Hands-On Tasks  | 10        | 3           | 30     |
| **Total**       | **40**    | -           | **70** |

**Passing Score:** 49 points (70%)

---

## Helpful Resources for Review

- [CMD Command Reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands-glossary)
- [Navigation and File System](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd)
- [Using Pipes and Filtering](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/find)
- [DOSKEY and Aliases](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/doskey)
- [Screen Reader Accessibility Tips](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/)

---

## Submission Checklist

- [ ] All 20 multiple choice questions answered
- [ ] All 10 short answer questions answered (1-2 sentences each)
- [ ] All 10 hands-on tasks completed with evidence captured
- [ ] Files/screenshots organized and labeled clearly
- [ ] Submission includes this checklist
<!--pagebreak-->
