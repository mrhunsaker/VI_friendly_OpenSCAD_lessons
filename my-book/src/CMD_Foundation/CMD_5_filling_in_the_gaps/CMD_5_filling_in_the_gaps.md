# CMD-5: Filling in the Gaps - Control Flow, Startup Scripts, and Useful Tricks

Estimated time: 30-45 minutes

## Learning Objectives

- Use history and abort commands (`doskey /history`, `F7`, `Ctrl+C`)
- Inspect and edit your CMD autorun script for persistent settings
- Run programs by full path using the `start` or call operator
- Handle common screen reader edge cases when using the terminal

## Materials

- Command Prompt and an editor (Notepad/VS Code)

## Step-by-step Tasks

1. Run several simple commands (e.g., `cd`, `dir /B`, `echo hi`) then press `F7` or run `doskey /history` to view them.
2. Use `F8` to search back through history, or use the up-arrow to re-run a previous command.
3. Practice aborting a long-running command with `Ctrl + C` (for example, `ping 8.8.8.8`).
4. Open your autorun script: `notepad.exe autorun.bat`; if it doesn't exist, create it with `echo. > autorun.bat`.
5. Add a persistent alias line to your autorun script (example: `doskey preview=openscad $*`), save, and configure CMD to use it by registering it in the registry (advanced).

## Checkpoints

- After step 2 you can re-run a recent command from history.
- After step 5 your alias should persist across CMD sessions.

## Quiz - Lesson CMD.5

1. How do you view the command history in CMD?
2. Which key combination aborts a running command?
3. What does `echo %CMDCMDLINE%` show?
4. How does the `start` command help run executables?
5. What is one strategy if terminal output stops being announced by your screen reader?
6. True or False: Using `Ctrl+C` permanently deletes any files created by the command you abort.
7. Explain the difference between pressing `F7` and running `doskey /history` in CMD.
8. If you add a doskey macro to your autorun script but it doesn't take effect after opening a new CMD window, what should you verify?
9. Write a command that would run a program at the path `C:\Program Files\OpenSCAD\openscad.exe` directly.
10. Describe a practical workflow scenario where having keyboard shortcuts (doskey macros) in your autorun script would save time.
11. Explain how to re-run the 5th command from your history using `F7` and selection, and what would happen if that command had file operations (creates/deletes).
12. Design an autorun initialization strategy that separates utilities for different projects; explain how you would switch between them.
13. Walk through a troubleshooting workflow: your screen reader stops announcing output after running a long command. What steps would you take to diagnose and resolve the issue?
14. Create a safety checkpoint system: before any destructive operation (mass delete, overwrite), how would you use autorun macros and history to verify the command is correct?
15. Develop a comprehensive capstone scenario: integrate everything from CMD-0 through CMD-5 (navigation, file operations, piping, environment setup, history) to design an automated 3D printing project workflow with error handling and logging.

## Extension Problems

1. Add a doskey macro and an environment variable change to your autorun script and document the behavior after reopening CMD.
2. Create a short batch script that automates creating a project folder and an initial `.scad` file.
3. Experiment with running OpenSCAD by full path using `start` and by placing it in PATH; compare results.
4. Practice redirecting `help` output to a file and reading it in Notepad for screen reader clarity.
5. Document three screen reader troubleshooting steps you used and when they helped.
6. Build a comprehensive CMD autorun script that includes aliases, environment variables, and helper macros for your 3D printing workflow.
7. Create a batch script that troubleshoots common CMD issues (missing commands, permission errors, command not found); test at least three scenarios.
8. Write a batch script that coordinates multiple tasks: creates a project folder, starts OpenSCAD, and opens a notes file.
9. Design a screen-reader accessibility guide for CMD: document commands, outputs, and accessible navigation patterns.
10. Develop an advanced CMD workflow: implement error handling, logging, and confirmation prompts for risky operations.
11. Implement an "undo" system using history: create a batch script that logs destructive commands (`del`, `move`, `copy /Y`) and allows you to review the last operation.
12. Build an autorun debugger: create a script that compares two CMD sessions' environment states (variables, aliases, macros) to identify what loaded/failed to load.
13. Develop a multi-project autorun manager: design a system where you can switch entire environments (paths, aliases, variables) for different 3D printing projects by running a single script.
14. Create a comprehensive accessibility analyzer: write a batch script that tests whether key CMD commands produce screen-reader-friendly output; document workarounds for commands that don't.
15. Design a complete capstone project: build an integrated automation suite that manages a 3D printing workflow (project setup, file organization, CAD/slicing tool automation, output logging, error recovery, and audit trails) with full error handling and documentation.

## References

- Microsoft. (2024). *CMD history and recall functionality*. [https://example.com](https://example.com)
- Microsoft. (2024). *Using CMD autorun scripts*. [https://example.com](https://example.com)
- Microsoft. (2024). *The START command for running executables*. [https://example.com](https://example.com)

## Helpful Resources

- [DOSKEY History and Recall](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/doskey)
- [CMD Autorun Scripts](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd)
- [START Command Reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/start)
- [CMD History Navigation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/)
- [Screen Reader Tips for CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands-glossary)

