# PS-5: Filling in the Gaps — Control Flow, Profiles, and Useful Tricks 



Estimated time: 30–45 minutes

**Learning Objectives**
- Use history and abort commands (`history`, `Ctrl+C`)
- Inspect and edit your PowerShell profile for persistent settings
- Run programs by full path using the `&` operator
- Handle common screen reader edge cases when using the terminal

**Materials**
- PowerShell and an editor (Notepad/ VS Code)

Step-by-step Tasks
1. Run several simple commands (e.g., `pwd`, `ls -n`, `echo hi`) then run `history` to view them.
2. Use `Invoke-History <n>` to re-run a previous command (replace `<n>` with a history number).
3. Practice aborting a long-running command with `Ctrl + C` (for example, `ping 8.8.8.8`).
4. Open your profile: `notepad.exe $PROFILE`; if it doesn't exist, create it: `ni $PROFILE -Force`.
5. Add a persistent alias line to your profile (example: `Set-Alias -Name preview -Value openscad`), save, and reopen PowerShell to verify.

Checkpoints
- After step 2 you can re-run a recent command by history number.
- After step 5 your alias should persist across sessions.

## Quiz — Lesson PS.5

1. How do you view the command history?
2. Which key combination aborts a running command?
3. What does `echo $PROFILE` show?
4. How does the `&` operator help run executables?
5. What is one strategy if terminal output stops being announced by your screen reader?
6. True or False: Using `Ctrl+C` permanently deletes any files created by the command you abort.
7. Explain the difference between `history` and `Get-History` in PowerShell.
8. If you place code in your profile but it doesn't take effect after opening a new PowerShell window, what should you verify?
9. Write a command that would run a program at the path `C:\Program Files\OpenSCAD\openscad.exe` directly.
10. Describe a practical workflow scenario where having keyboard shortcuts (aliases) in your profile would save time.
11. Explain how to re-run the 5th command from your history, and what would happen if that command had file operations (creates/deletes).
12. Design a profile initialization strategy that separates utilities for different projects; explain how you would switch between them.
13. Walk through a troubleshooting workflow: your screen reader stops announcing output after running a long command. What steps would you take to diagnose and resolve the issue?
14. Create a safety checkpoint system: before any destructive operation (mass delete, overwrite), how would you use profile functions and history to verify the command is correct?
15. Develop a comprehensive capstone scenario: integrate everything from PS-0 through PS-5 (navigation, file operations, piping, environment setup, history) to design an automated 3D printing project workflow with error handling and logging.

## Extension Problems
1. Add an alias and an environment variable change to your profile and document the behavior after reopening PowerShell.
2. Create a short script that automates creating a project folder and an initial .scad file.
3. Experiment with running OpenSCAD by full path using `&` and by placing it in PATH; compare results.
4. Practice redirecting `Get-Help` output to a file and reading it in Notepad for screen reader clarity.
5. Document three screen reader troubleshooting steps you used and when they helped.
6. Build a comprehensive PowerShell profile that includes aliases, environment variables, and helper functions for your 3D printing workflow.
7. Create a script that troubleshoots common PowerShell issues (module loading, permission errors, command not found); test at least three scenarios.
8. Write a PowerShell function that coordinates multiple tasks: creates a project folder, starts OpenSCAD, and opens slicing software.
9. Design a screen-reader accessibility guide for PowerShell: document commands, outputs, and accessible navigation patterns.
10. Develop an advanced PowerShell workflow: implement error handling, logging, and confirmation prompts for risky operations.
11. Implement a "undo" system using history: create a function that logs destructive commands (rm, mv, cp -Force) and allows you to review/rollback the last operation.
12. Build a profile debugger: create a script that compares two PowerShell sessions' environment states (variables, aliases, functions) to identify what loaded/failed to load.
13. Develop a multi-project profile manager: design a system where you can switch entire environments (paths, aliases, variables) for different 3D printing projects by running a single command.
14. Create a comprehensive accessibility analyzer: write a script that tests whether key PowerShell commands produce screen-reader-friendly output; document workarounds for commands that don't.
15. Design a complete capstone project: build an integrated automation suite that manages a 3D printing workflow (project setup, file organization, CAD/slicing tool automation, output logging, error recovery, and audit trails) with full error handling and documentation.

## References

- Microsoft. (2024). *PowerShell history and recall functionality*. https://learn.microsoft.com/powershell/scripting/learn/shell/using-history
- Microsoft. (2024). *Understanding and creating PowerShell profiles*. https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles
- Microsoft. (2024). *The call operator (&) for running executables*. https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_operators#call-operator-

## Helpful Resources

- [PowerShell History and Recall](https://learn.microsoft.com/powershell/scripting/learn/shell/using-history)
- [Understanding Profiles](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles)
- [Invoke-History Cmdlet Reference](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/invoke-history)
- [The Call Operator (&)](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_operators#call-operator-)
- [Screen Reader Tips and Tricks](https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise)

