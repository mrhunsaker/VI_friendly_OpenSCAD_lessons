# GitBash-5: Filling in the Gaps - Shell Profiles, History, and Useful Tricks

Estimated time: 30-45 minutes

## Learning Objectives
- Use history and abort commands (`history`, `Ctrl+R`, `Ctrl+C`)
- Inspect and edit your `.bashrc` profile for persistent settings
- Run programs by full path using `./` or absolute paths
- Handle common screen reader edge cases when using the terminal

## Materials
- Git Bash and an editor (Notepad/VS Code)

## Step-by-step Tasks
1. Run several simple commands (e.g., `pwd`, `ls -1`, `echo hi`) then run `history` to view them.
2. Use `!<n>` to re-run a previous command by its history number (replace `<n>` with a history number).
3. Practice aborting a long-running command with `Ctrl + C` (for example, `ping google.com`).
4. Open your profile: `notepad.exe ~/.bashrc`; if it doesn't exist, create it: `touch ~/.bashrc`.
5. Add a persistent alias line to your profile (example: `alias preview='openscad'`), save, and run `source ~/.bashrc` or reopen Git Bash to verify.

## Checkpoints
- After step 2 you can re-run a recent command by history number.
- After step 5 your alias should persist across sessions.

## Quiz - Lesson GitBash.5

1. How do you view the command history in Git Bash?
2. Which key combination aborts a running command?
3. What does `echo $BASH_VERSION` show?
4. How does `./` help run scripts and executables in the current directory?
5. What is one strategy if terminal output stops being announced by your screen reader?
6. True or False: Using `Ctrl+C` permanently deletes any files created by the command you abort.
7. Explain the difference between `history` and `Ctrl+R` (reverse history search) in Git Bash.
8. If you add an alias to `.bashrc` but it doesn't take effect after opening a new Git Bash window, what should you verify?
9. Write a command that would run a script at the path `~/scripts/openscad_runner.sh` directly.
10. Describe a practical workflow scenario where having keyboard shortcuts (aliases) in your `.bashrc` would save time.
11. Explain how to re-run the 5th command from your history using `!5`, and what would happen if that command had file operations (creates/deletes).
12. Design a `.bashrc` initialization strategy that separates utilities for different projects; explain how you would switch between them.
13. Walk through a troubleshooting workflow: your screen reader stops announcing output after running a long command. What steps would you take to diagnose and resolve the issue?
14. Create a safety checkpoint system: before any destructive operation (mass delete, overwrite), how would you use `.bashrc` functions and history to verify the command is correct?
15. Develop a comprehensive capstone scenario: integrate everything from GitBash-0 through GitBash-5 (navigation, file operations, piping, environment setup, history) to design an automated 3D printing project workflow with error handling and logging.

## Extension Problems
1. Add an alias and an environment variable change to your `.bashrc` and document the behavior after reopening Git Bash.
2. Create a short bash script that automates creating a project folder and an initial `.scad` file.
3. Experiment with running OpenSCAD by full path using `./` and by placing it in PATH; compare results.
4. Practice redirecting `man ls` output to a file and reading it in Notepad for screen reader clarity.
5. Document three screen reader troubleshooting steps you used and when they helped.
6. Build a comprehensive `.bashrc` that includes aliases, environment variables, and helper functions for your 3D printing workflow.
7. Create a bash script that troubleshoots common Git Bash issues (module loading, permission errors, command not found); test at least three scenarios.
8. Write a bash function that coordinates multiple tasks: creates a project folder, starts OpenSCAD, and opens a notes file.
9. Design a screen-reader accessibility guide for Git Bash: document commands, outputs, and accessible navigation patterns.
10. Develop an advanced Git Bash workflow: implement error handling, logging, and confirmation prompts for risky operations.
11. Implement an "undo" system using history: create a function that logs destructive commands (`rm`, `mv`, `cp`) and allows you to review the last operation.
12. Build a `.bashrc` debugger: create a script that compares two Git Bash sessions' environment states (variables, aliases, functions) to identify what loaded/failed to load.
13. Develop a multi-project profile manager: design a system where you can switch entire environments (paths, aliases, variables) for different 3D printing projects by running a single command.
14. Create a comprehensive accessibility analyzer: write a bash script that tests whether key Git Bash commands produce screen-reader-friendly output; document workarounds for commands that don't.
15. Design a complete capstone project: build an integrated automation suite that manages a 3D printing workflow (project setup, file organization, CAD/slicing tool automation, output logging, error recovery, and audit trails) with full error handling and documentation.

## References

- GNU. (2024). *Bash history and recall functionality*. [https://example.com](https://example.com)
- GNU. (2024). *Understanding and creating Bash profiles*. [https://example.com](https://example.com)
- GNU. (2024). *Running scripts and executables in Bash*. [https://example.com](https://example.com)

## Helpful Resources

- [Bash History and Recall](https://www.gnu.org/software/bash/manual/htmlnode/Bash-History-Facilities.html)
- [Understanding .bashrc](https://www.gnu.org/software/bash/manual/htmlnode/Bash-Startup-Files.html)
- [history Command Reference](https://www.gnu.org/software/bash/manual/htmlnode/Bash-History-Builtins.html)
- [Running Scripts with ./](https://www.gnu.org/software/bash/manual/htmlnode/Executing-Scripts.html)
- [Screen Reader Tips and Tricks](https://www.nvaccess.org/documentation/)

