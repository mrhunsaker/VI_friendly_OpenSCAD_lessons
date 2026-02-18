# Getting Started with PowerShell

Welcome to the brief guide on getting started with Microsoft **PowerShell**. In this lesson, you will learn the basics of PowerShell, a powerful command-line shell, scripting language, and configuration management framework. The goal is to help you get up and running with PowerShell so that you can use it for various tasks, including 3D printing and slicing your models independently. So let's get started!

## Pre-Requisite Knowledge
Before diving into PowerShell, ensure that you have some basic knowledge and skills, including:

- Typing skills
- Text editing skills
- Basic Windows navigation skills
- Basic screen reading skills
- Basic knowledge of what a computer operating system is and its features (e.g., file/folders/applications/shortcuts/file extensions, etc.)
- Basic knowledge of computer hardware (hard drive/USB and other peripheral ports/cloud vs. local storage)
- Basic understanding of variables and parameters
- Basic internet navigation skills and familiarity with URL structure

## What is PowerShell?
PowerShell is a cross-platform task automation solution that consists of a command-line shell, a scripting language, and a configuration management framework. Unlike graphical user interfaces (GUIs) that rely on mouse interactions, PowerShell allows you to control your computer using text commands entered through a keyboard. We will be learning PowerShell in the context of its [Linux aliases](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_aliases?view=powershell-7.3) (do not worry if that does not make any sense right now) so these commands run on Windows, Linux, and macOS, making it versatile and widely accessible.

### What will we do with it and why should we use it?
In this tutorial, we will use PowerShell to run various programs from their command-line interfaces (CLIs). A command-line interface is a text-based way of interacting with an application. Additionally, we will leverage PowerShell to navigate and manipulate files and folders on our computer. This text-based navigation is efficient and can be particularly helpful for users who are visually impaired. By the end of this lesson, you will understand the power and utility of the command-line shell.

## Tutorial

### Launching PowerShell
To begin, launch PowerShell by pressing the Windows key and searching for "PowerShell" or by using the Windows+X shortcut menu. Upon launching, PowerShell will read a header with copyright information and detect if a screen reader is active. Then, it will announce your current location in the computer, indicating that you are in a command-line shell.

### Understanding Paths
In PowerShell, locations in your computer are referred to as "paths," which are addresses to folders or files. A path looks like `C:\Users\name\`, similar to a URL for web addresses. Paths are structured by separating folder and file names with either forward or backslashes and are sometimes surrounded by quotes if a file or folder name has a space in it (for instance "C:/Users/name/file with a space.txt" is correct but without quotes would not work). The **root directory** is typically `C:\` or the C drive. For instance, `C:\Users` is the path to all the folders containing user profiles on the C: drive. From your user account (the user name you log in with) you can access all of your files including but not limited to your documents and downloads.

PowerShell defaults to your home directory which is where all of the user name you logged in with's files are, it can be represented by `~`, which saves you from typing `C:\Users\name\` every time you want to use your files.

### Navigating with PowerShell
You can navigate using the `cd` command, which stands for "change directory." Use `.` and `..` as shortcuts to represent the current and parent directories, respectively. Follow along with this example code:
```
# Let's start in the user's home directory
cd ~

# Change into the "Documents" folder
cd Documents

# Now let's go back to the parent directory (i.e., the home directory)
cd ..

# Now let;s change into the "Downloads folder"
cd Downloads

# Now let's go back to the home directory using the shortcut (i.e., "~")
cd ~

# Print the current directory after returning to the home directory
echo "Current Directory:"
pwd
```

### Listing Files and Folders
The `ls` command stands for "list" and shows the files and folders in the current directory. By default, it displays a table with attributes, last write time, file size, and names. Use `-n`, `-ad`, or `-af` flags to filter and display only names or directories.

### Autocompletion and Wildcards
PowerShell supports autocompletion using the tab key. Pressing tab will cycle through the files in the directory you are located in based upon what you type. It will also add quotes around paths to files that have spaces. You can also use wildcards like `*` (matching zero or more characters) and `?` (matching a single character) for pattern-based searching.

### Copying, Moving, Creating, and Removing Files and Folders
Use commands like `mv`, `cp`, `mkdir`, `rm`, and `rmdir` to manipulate files and folders. Be cautious when using these commands, as they can delete data permanently. For instance try out the following:
```
# Let's start in the user's home directory
cd ~

# Change into the "Documents" folder
cd Documents

# Create a new directory called "SampleFolder"
mkdir SampleFolder

# List the contents of "SampleFolder" it will be empty
ls .\SampleFolder

# Copy a file from downloads

# Move "File1.txt" to a new location "SampleFolder\SubFolder1"
mv .\SampleFolder\File1.txt .\SampleFolder\SubFolder1\File1.txt

# Copy "File2.txt" to a new location "SampleFolder\SubFolder2"
cp .\SampleFolder\File2.txt .\SampleFolder\SubFolder2\File2.txt

# List the contents of "SampleFolder" to see the changes after moving and copying
ls .\SampleFolder

# Remove "File1.txt" from "SampleFolder"
rm .\SampleFolder\SubFolder1\File1.txt

# Remove "SubFolder1" from "SampleFolder"
rmdir .\SampleFolder\SubFolder1

# List the contents of "SampleFolder" after the removal
ls .\SampleFolder
```

### Input, Output, and Piping
Commands in PowerShell can take input, produce output, and be connected using pipes (`|`). You can use `echo` to display text, `>` to redirect output to a file, and `|` to send the output of one command as input to another.

### Environment Variables and the PATH Variable
Environment variables store settings and preferences for the current user. The PATH variable tells PowerShell where to find executable files. You can view and modify environment variables using PowerShell commands.

## Additional Resources
For more in-depth learning and advanced usage of PowerShell, consider exploring the following helpful resources:

- [Accessibility in PowerShell ISE by Microsoft](https://learn.microsoft.com/en-us/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise?view=powershell-7.3)
- [Learn PowerShell by Microsoft](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.3)
- [Setting the PATH Variable in PowerShell](https://poshcode.gitbook.io/powershell-faq/src/getting-started/environment-variables)
- [PowerShell Aliases](https://learn.microsoft.com/en-us/powershell/scripting/learn/shell/using-aliases?view=powershell-7.3)
- [Linux Commands Cheat Sheet](https://www.guru99.com/linux-commands-cheat-sheet.html)
- [PowerShell Cheat Sheet](https://www.theochem.ru.nl/~pwormer/teachmat/PS_cheat_sheet.html)
- [Learn PowerShell on GitHub](https://github.com/PowerShell/PowerShell/tree/master/docs/learning-powershell)
- [PowerShell Tutorial on Guru99](https://www.guru99.com/powershell-tutorial.html)

Remember, practice is the best way to learn PowerShell effectively. Enjoy your journey into the world of PowerShell and discover the power and flexibility it offers for managing your computer tasks efficiently!