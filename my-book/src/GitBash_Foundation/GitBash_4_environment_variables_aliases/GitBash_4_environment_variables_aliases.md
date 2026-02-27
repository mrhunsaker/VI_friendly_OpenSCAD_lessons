# GitBash-4: Environment Variables, PATH, and Aliases

Estimated time: 30-45 minutes

## Learning Objectives
- Read environment variables with `$VARNAME`
- Inspect and verify programs in the `PATH`
- Create temporary aliases and understand making them persistent via `.bashrc`

## Materials
- Git Bash (with rights to edit `.bashrc`)

## Step-by-step Tasks
1. Show your username and home path with `echo $USER` and `echo $HOME`.
2. Inspect `echo $PATH` and identify whether `openscad` or `code` would be found.
3. Run `which openscad` and note the result.
4. Create a temporary alias: `alias preview='openscad'` and test `preview myfile.scad`.
5. Open your profile (`notepad.exe ~/.bashrc`) and add the alias line to make it persistent.

## Checkpoints
- After step 3 you can determine whether a program will be found by `PATH`.

## Quiz - Lesson GitBash.4

1. How do you print an environment variable?
2. What is the purpose of `PATH`?
3. How do you check whether `openscad` is available?
4. How do you create a temporary alias?
5. Where would you make an alias permanent?
6. True or False: Environment variables in bash are case-sensitive.
7. Explain why having a program in your PATH is useful compared to always using its full file path.
8. Write a command that would create an alias called `slicer` for the OpenSCAD executable.
9. What file would you edit to make an alias persist across Git Bash sessions?
10. Describe a practical benefit of using the `$TMPDIR` or `/tmp` directory for temporary files in a 3D printing workflow.
11. You have a custom script at `~/scripts/backup_models.sh` that you want to run from anywhere as `backup-now`. What steps would you take to make this work?
12. Explain the difference between setting an environment variable in the current session with `export` vs. adding it to `.bashrc` for permanence.
13. Design a `.bashrc` strategy for managing multiple 3D printing projects, each with different tool paths and directories; show how to structure environment variables for each.
14. If a program is not found by `which`, what are the possible reasons, and how would you troubleshoot?
15. Describe how you would verify that your `.bashrc` is loading correctly and how to debug issues if aliases or environment variables don't appear after restarting Git Bash.

## Extension Problems
1. Add a folder to PATH for a test program (describe steps; do not change system PATH without admin).
2. Create a short `.bashrc` snippet that sets two aliases and test re-opening Git Bash.
3. Use `which` to list the path for several common programs.
4. Explore `$TMPDIR` or `/tmp` and create a file there.
5. Save a copy of your current PATH to a text file and examine it in your editor.
6. Create a `.bashrc` script that loads custom aliases and environment variables for your 3D printing workflow; test it in a new session.
7. Build a "project profile" that sets environment variables for CAD, slicing, and print directories; switch between profiles for different projects.
8. Write a script that audits your current environment variables and creates a summary report of what's set and why.
9. Design a custom alias system for common 3D printing commands; document the aliases and their purposes.
10. Create a profile migration guide: document how to export and import your `.bashrc` across machines for consistent workflows.
11. Implement a safe PATH modification script: create a utility that allows you to add/remove directories from PATH for the current session only; show how to make it permanent in `.bashrc`.
12. Build a comprehensive `.bashrc` framework with modular sourcing: create separate `.sh` files for aliases, environment variables, and functions; have your main `.bashrc` source all of them.
13. Develop an environment validation tool: write a bash script that checks whether all required programs (OpenSCAD, slicers, etc.) are accessible via PATH; report findings and suggest fixes.
14. Create a project-switching alias system: design a function that changes all environment variables and aliases based on the current project; test switching between multiple projects.
15. Build a `.bashrc` troubleshooting guide: create a script that exports your current environment state (variables, aliases, PATH) to a timestamped file, allowing you to compare states before and after changes.

## References

- GNU. (2024). *Environment variables in Bash*. [https://example.com](https://example.com)
- GNU. (2024). *alias command reference*. [https://example.com](https://example.com)
- GNU. (2024). *Creating and using Bash profiles*. [https://example.com](https://example.com)

## Helpful Resources

- [Environment Variables in Bash](https://www.gnu.org/software/bash/manual/htmlnode/Environment.html)
- [Understanding the PATH Variable](https://linuxize.com/post/how-to-add-directory-to-path-in-linux/)
- [Bash alias Reference](https://www.gnu.org/software/bash/manual/htmlnode/Aliases.html)
- [Creating a Bash Profile (.bashrc)](https://www.gnu.org/software/bash/manual/htmlnode/Bash-Startup-Files.html)
- [which Command for Locating Programs](https://linux.die.net/man/1/which)

