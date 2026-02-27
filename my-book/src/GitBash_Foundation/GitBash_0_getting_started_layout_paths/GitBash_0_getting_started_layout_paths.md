# GitBash-0: Getting Started - Layout, Paths, and the Shell

Estimated time: 20-30 minutes

## Learning Objectives
- Launch Git Bash and locate the prompt
- Understand Unix-style path notation and shortcuts (`~`, `./`, `../`)
- Use tab completion to navigate quickly

## Materials
- Computer with Git Bash installed
- Editor (Notepad/VS Code)

## Step-by-step Tasks
1. Open Git Bash and note the prompt (it includes the current path).
2. Run `pwd` and say or note the printed path.
3. Use `ls` to list names in your home directory.
4. Practice `cd Documents`, `cd ../` and `cd ~` until comfortable.
5. Try tab-completion: type `cd ~/D` and press Tab.

## Checkpoints
- Confirm you can state your current path and move to `Documents`.

## Quiz - Lesson GitBash.0

1. What is a path?
2. What does `~` mean?
3. How do you autocomplete a path?
4. How do you go up one directory?
5. What command lists file names?
6. True or False: Git Bash uses backslashes (`\`) in paths like Windows CMD.
7. Explain the difference between an absolute path and a relative path.
8. If you are in `/c/Users/YourName/Documents` and you type `cd ../`, where do you end up?
9. What happens when you press Tab while typing a folder name in Git Bash?
10. Describe a practical reason why understanding paths is important for a 3D printing workflow.
11. What does `./` mean in a path, and when would you use it?
12. If a folder path contains spaces (e.g., `My Projects`), how do you navigate to it with `cd`?
13. Explain what the prompt `YourName@COMPUTER MINGW64 ~/Documents $` tells you about your current state.
14. How would you navigate to your home directory from any location using a single command?
15. What is the advantage of using relative paths (like `../`) versus absolute paths in automation scripts?

## Extension Problems
1. Create a nested folder and practice `cd` into it by typing partial names and using Tab.
2. Use `ls -la` to list all files including hidden ones in a folder.
3. Save `pwd` output to a file and open it in Notepad.
4. Try `cd` into a folder whose name contains spaces; observe how quotes are handled.
5. Create a short note file and open it from Git Bash.
6. Build a folder structure that mirrors your project organization; navigate to each level and document the path.
7. Create a script that prints your current path and the total number of files in it; run it from different locations.
8. Investigate special paths (e.g., `$HOME`, `$USER`); write down what each contains and when you'd use them.
9. Compare absolute vs. relative paths by navigating to the same folder using each method; explain which is easier for automation.
10. Create a bash function that changes to a frequently-used folder and lists its contents in one command; test it from different starting locations.
11. Navigate to three different locations and at each one note the prompt, the path from `pwd`, and verify you understand what each shows.
12. Create a complex folder tree (at least 5 levels deep) and navigate it using only relative paths; verify your location at each step.
13. Document all shortcuts you know (`~`, `./`, `../`, `$HOME`) and demonstrate each one works as expected.
14. Write a guide for a peer on how to understand the Git Bash prompt and path notation without using GUI file explorer.
15. Create a troubleshooting flowchart: if someone says "I don't know where I am," what commands do you give them to find out?

## References

- GNU. (2024). *Bash Manual*. [https://example.com](https://example.com)
- Git SCM. (2024). *Git Bash documentation*. [https://example.com](https://example.com)
- Linux Foundation. (2024). *The Linux Command Line*. [https://example.com](https://example.com)

## Helpful Resources

- [Bash Manual - Navigation](https://www.gnu.org/software/bash/manual/htmlnode/Bourne-Shell-Builtins.html)
- [Git Bash Basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [Linux Path Guide](https://linuxcommand.org/lc3lts0020.php)
- [Understanding Bash Prompts](https://www.gnu.org/software/bash/manual/htmlnode/Controlling-the-Prompt.html)
- [Tab Completion in Bash](https://www.gnu.org/software/bash/manual/htmlnode/Commands-For-Completion.html)

