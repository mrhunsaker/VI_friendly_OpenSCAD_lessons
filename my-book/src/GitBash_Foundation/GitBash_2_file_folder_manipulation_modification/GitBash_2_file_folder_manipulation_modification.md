# GitBash-2: File and Folder Manipulation

Estimated time: 30-45 minutes

## Learning Objectives
- Create, copy, move, and delete files and folders from Git Bash
- Use `touch`, `mkdir`, `cp`, `mv`, `rm`, and `rmdir` safely
- Understand when operations are permanent and how to confirm results

## Materials
- Git Bash
- Small practice folder for exercises

## Step-by-step Tasks
1. Create a practice directory: `mkdir ~/Documents/GitBash_Practice` and `cd` into it.
2. Create two files: `touch file1.txt` and `touch file2.txt`.
3. Copy `file1.txt` to `file1_backup.txt` with `cp` and confirm with `ls -1`.
4. Rename `file2.txt` to `notes.txt` using `mv` and confirm.
5. Delete `file1.txt` with `rm` and verify the backup remains.

## Checkpoints
- After step 3 you should see both the original and the backup file.

## Quiz - Lesson GitBash.2

1. How do you create an empty file from Git Bash?
2. What command copies a file?
3. How do you rename a file?
4. What does `rm -r` do?
5. Why is `rm` potentially dangerous?
6. True or False: `cp` requires the `-r` flag to copy both files and folders.
7. Explain the difference between `rm` and `rmdir`.
8. If you delete a file with `rm`, can you recover it from Git Bash?
9. Write a command that would copy an entire folder and all its contents to a new location.
10. Describe a practical safety check you would perform before running `rm -r` on a folder.
11. What happens if you `cp` a file to a destination where a file with the same name already exists? How would you handle this safely?
12. Compare `mv old_name.txt new_name.txt` vs `mv old_name.txt ~/Documents/new_name.txt`. What is the key difference?
13. Design a workflow to safely delete 50 files matching the pattern `*.bak` from a folder containing 500 files. What commands and verifications would you use?
14. Explain how you could back up all `.scad` files from a project folder into a timestamped backup folder in one command.
15. When organizing a 3D printing project, you need to move completed designs to an archive folder and delete failed prototypes. How would you structure this as a safe, auditable process?

## Extension Problems
1. Create a folder tree and copy it to a new location with `cp -r`.
2. Write a one-line command that creates three files named `a`, `b`, `c` and lists them.
3. Move a file into a new folder and confirm the move.
4. Use wildcards to delete files matching a pattern in a safe test folder.
5. Export a listing of the practice folder to `practice_listing.txt`.
6. Create a backup shell script that copies all `.scad` files from your project folder to a backup folder with timestamp naming.
7. Build a safe deletion workflow: list files matching a pattern, verify count, then delete with confirmation; document the steps.
8. Write a bash script that organizes files by extension into subfolders; test it on a sample folder tree.
9. Create a file operation audit trail: log all copy, move, and delete operations to a text file for review.
10. Develop a project template generator: a bash script that creates a standard folder structure for a new 3D printing project with essential subfolders.
11. Implement a file conflict handler: write a bash script that handles cases where `cp` would overwrite an existing file by renaming the existing file with a timestamp before copying.
12. Create a batch rename operation: use a script to rename all files in a folder from `old_prefix_*` to `new_prefix_*`; test with actual files and verify the results.
13. Build a folder comparison tool: list all files in two folders and identify which files exist in one but not the other; output to a report.
14. Write a destructive operation validator: before executing `rm -r`, create a script that lists exactly what will be deleted, shows file counts by type, and requires explicit user confirmation to proceed.
15. Design a complete project lifecycle workflow: create folders for active projects, completed designs, and archive; include move operations between folders, backup steps, and verification that all files arrive intact.

## References

- GNU. (2024). *touch command reference*. [https://example.com](https://example.com)
- GNU. (2024). *cp and mv commands*. [https://example.com](https://example.com)
- GNU. (2024). *File system operations guide*. [https://example.com](https://example.com)

## Helpful Resources

- [touch Command Reference](https://www.gnu.org/software/coreutils/manual/html_node/touch-invocation.html)
- [cp Command Reference](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html)
- [mv Command Reference](https://www.gnu.org/software/coreutils/manual/html_node/mv-invocation.html)
- [rm Command Reference](https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html)
- [Safe Deletion Practices](https://linuxcommand.org/lc3lts0050.php)

