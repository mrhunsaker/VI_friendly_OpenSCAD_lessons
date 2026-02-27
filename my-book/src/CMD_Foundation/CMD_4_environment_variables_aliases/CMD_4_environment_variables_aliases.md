# CMD-4: Environment Variables, PATH, and Aliases

Estimated time: 30-45 minutes

## Learning Objectives

- Read environment variables with `%VARNAME%`
- Inspect and verify programs in the `PATH`
- Create temporary aliases with `doskey` and understand making them persistent via a startup script

## Materials

- Command Prompt

## Step-by-step Tasks

1. Show your username and home path with `echo %USERNAME%` and `echo %USERPROFILE%`.
2. Inspect `echo %PATH%` and identify whether `openscad` or `code` would be found.
3. Run `where openscad` and note the result.
4. Create a temporary alias: `doskey preview=openscad $*` and test `preview myfile.scad`.
5. Open your startup script (`notepad.exe autorun.bat`) and add the doskey line to make it persistent (advanced).

## Checkpoints

- After step 3 you can determine whether a program will be found by `PATH`.

## Quiz - Lesson CMD.4

1. How do you print an environment variable?
2. What is the purpose of `PATH`?
3. How do you check whether `openscad` is available?
4. How do you create a temporary alias in CMD?
5. Where would you make an alias permanent?
6. True or False: Environment variable names in CMD are case-sensitive.
7. Explain why having a program in your PATH is useful compared to always using its full file path.
8. Write a command that would create a doskey alias called `slicer` for the OpenSCAD executable.
9. What file or technique would you use to make a doskey alias persist across CMD sessions?
10. Describe a practical benefit of using the `%TEMP%` directory for temporary files in a 3D printing workflow.
11. You have a custom batch script at `C:\Scripts\backup_models.bat` that you want to run from anywhere as `backup-now`. What steps would you take to make this work?
12. Explain the difference between setting an environment variable in the current session with `set` vs. using `setx` for permanence.
13. Design a strategy for managing multiple 3D printing projects, each with different tool paths and directories; show how to structure environment variables for each.
14. If a program is not found by `where`, what are the possible reasons, and how would you troubleshoot?
15. Describe how you would verify that your CMD autorun script is loading correctly and how to debug issues if aliases or environment variables don't appear after opening a new CMD session.

## Extension Problems

1. Add a folder to PATH for a test program (describe steps; do not change system PATH without admin).
2. Create a short autorun snippet that sets two aliases and test re-opening CMD.
3. Use `where` to list the path for several common programs.
4. Explore `%TEMP%` and create a file there.
5. Save a copy of your current PATH to a text file and examine it in your editor.
6. Create a CMD autorun script that loads custom aliases and environment variables for your 3D printing workflow; test it in a new session.
7. Build a "project profile" batch script that sets environment variables for CAD, slicing, and print directories; switch between profiles for different projects.
8. Write a batch script that audits your current environment variables and creates a summary report of what's set and why.
9. Design a custom alias system using doskey for common 3D printing commands; document the aliases and their purposes.
10. Create a profile migration guide: document how to export and import your CMD aliases and variables across machines for consistent workflows.
11. Implement a safe PATH modification script: create a utility that allows you to add/remove directories from PATH for the current session only; show how to make it permanent with `setx`.
12. Build a comprehensive autorun framework: create separate `.bat` files for aliases, environment variables, and helper macros; have your main autorun load all of them.
13. Develop an environment validation tool: write a batch script that checks whether all required programs (OpenSCAD, slicers, etc.) are accessible via PATH; report findings and suggest fixes.
14. Create a project-switching alias system: design a batch script that changes all environment variables and aliases based on the current project; test switching between multiple projects.
15. Build a troubleshooting guide: create a batch script that exports your current environment state (variables, aliases, PATH) to a timestamped file, allowing you to compare states before and after changes.

## References

- Microsoft. (2024). *Environment variables in CMD*. [https://example.com](https://example.com)
- Microsoft. (2024). *DOSKEY command reference*. [https://example.com](https://example.com)
- Microsoft. (2024). *WHERE command reference*. [https://example.com](https://example.com)

## Helpful Resources

- [Environment Variables in CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/set)
- [Understanding the PATH Variable](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/path)
- [DOSKEY Alias Reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/doskey)
- [WHERE Command for Locating Programs](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/where)
- [SETX for Permanent Variables](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/setx)

