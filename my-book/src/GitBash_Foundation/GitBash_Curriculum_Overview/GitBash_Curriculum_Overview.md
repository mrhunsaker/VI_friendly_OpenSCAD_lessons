# Git Bash Curriculum Overview {#gitbash_foundation_gitbash_curriculum_overview-gitbash_curriculum_overview}

Total Duration: 20-25 hours (for screen reader users)  
Target Audience: Screen reader users, accessibility-first learners  
Prerequisites: Basic Windows computer familiarity

*Note: Time estimates reflect the additional time needed for screen reader navigation, text-to-speech processing, and careful keyboard-based workflows.*

## What is Git Bash?

Git Bash is a Unix/bash shell that runs natively on Windows. It provides the same powerful command-line tools as macOS and Linux while keeping you on Windows.

Why learn Git Bash?
- Cross-platform compatibility: Same commands work on Windows, macOS, and Linux
- Professional standard: Developers worldwide use bash
- Accessibility: Git Bash is 100% screen reader compatible with NVDA and JAWS
- Powerful: Access to Unix tools that Windows Command Prompt and PowerShell can't match
- 3D printing workflows: Essential for OpenSCAD scripting and automation
- Future-proof: Learning bash makes you adaptable to any computer system

## Curriculum Structure

### Part 1 (Intro): Comparing Command Line Interfaces

Start here if you're new to terminals:
- [Command Line Interface Selection Guide](../Command_Line_Interface_Selection.md) - Decision guide comparing PowerShell, CMD, and Git Bash
- Learn which option fits your learning style
- Understand when to use each tool

## Core Curriculum (11 Lessons)

The main curriculum teaches you to use Git Bash for real work.

### Foundation Level (Lessons Pre - 1)

#### GitBash-Pre: Your First Terminal (1.5-2.5 hours)
What you'll learn:
- How to open and close Git Bash
- Understanding the prompt and what it tells you
- Your first commands: `pwd`, `ls`, `cd`
- How to navigate folders safely
- Screen reader accessibility features

Key Skills:
- Know your current location (`pwd`)
- List what's around you (`ls`)
- Move to different folders (`cd`)
- Use Tab completion (Game-changer for screen reader users!)
- Redirect output to files for easier reading

Hands-On Work:
- Open Git Bash 5 times from different methods
- Navigate to 10 different locations
- List contents in 5 different folders
- Create your first test file
- Read it back with a screen reader

#### GitBash-0: Getting Started - Layout, Paths, and the Shell (1-1.5 hours)
What you'll learn:
- Unix-style paths vs Windows paths
- Absolute vs relative paths
- Understanding the prompt
- Path shortcuts: `~`, `.`, `..`
- Windows drive letters in bash (`/c/` for C:)

Key Skills:
- Convert Windows paths to Git Bash format
- Navigate using both absolute and relative paths
- Understand path structure: `/c/Users/Name/Documents`
- Recognize shortcuts in paths

Hands-On Work:
- Navigate to 5 Windows locations using bash equivalents
- Create a map of paths you use frequently
- Practice relative paths in a deep folder structure
- Document your project folder paths

#### GitBash-1: Navigation - Moving Around Your File System (1.5-2.5 hours)
What you'll learn:
- Mastering `cd` for folder navigation
- Tab completion strategies
- Going up levels with `..`
- Creating folder structures
- Using shortcuts efficiently

Key Skills:
- Navigate confidently to any location
- Use Tab completion without looking
- Create and organize folder structures
- Jump between frequently-used locations

Hands-On Work:
- Create a 5-level folder structure and navigate it
- Navigate 20+ different locations
- Build a "favorites" list of important paths
- Time yourself: navigate blindly using only commands

### Intermediate Level (Lessons 2 - 4)

#### GitBash-2: File and Folder Manipulation (2-2.5 hours)
What you'll learn:
- Creating files and folders: `mkdir`, `touch`, `echo > file`
- Copying files: `cp`
- Moving and renaming: `mv`
- Deleting safely: `rm` (with caution!)
- Listing with details: `ls -l`
- Checking file sizes: `du`, `wc`

Key Skills:
- Create organized folder structures
- Copy files to new locations
- Rename files safely
- Delete files and folders
- Understand file properties and sizes

Hands-On Work:
- Create 20+ files and organize into folders
- Copy entire folder structures
- Rename 10 files at once
- Practice safe deletion with confirmation
- Build a file organization system for 3D printing projects

#### GitBash-3: Input, Output & Piping (2-2.5 hours)
What you'll learn:
- Redirecting output: `>`, `>>`
- Reading files: `cat`, `less`
- Searching text: `grep`
- Sorting data: `sort`
- Counting lines: `wc`
- Piping commands together: `|`
- Combining tools for powerful workflows

Key Skills:
- Save command output to files
- Search through text efficiently
- Sort and organize data
- Combine multiple commands into workflows
- Debug by redirecting output to files

Hands-On Work:
- Create data files and search through them
- Sort lists of file names and information
- Pipe 10+ different command combinations
- Create scripts that redirect output to files
- Build a file-processing workflow

#### GitBash-4: Environment Variables & Aliases (1.5-2 hours)
What you'll learn:
- Understanding environment variables: `echo $PATH`, `echo $HOME`
- Setting variables: `export MYVAR="value"`
- Creating aliases: `alias ll="ls -la"`
- Editing `.bashrc` configuration file
- Making changes permanent

Key Skills:
- Understand the `$PATH` and why it matters
- Create shortcuts for long commands
- Set up your shell environment
- Make your configuration permanent

Hands-On Work:
- View all your environment variables
- Create 5 useful aliases
- Modify your `.bashrc` file
- Test variables from different locations
- Build a custom shell environment

### Advanced Level (Lessons 5 - 6)

#### GitBash-5: Filling in the Gaps - Shell Profiles, History, and Debugging (2-2.5 hours)
What you'll learn:
- Using command history: `history`, `!`, reverse search
- Debugging commands with `set -x`
- Understanding `.bashrc` vs `.bashprofile`
- Viewing and modifying history
- Finding and fixing mistakes

Key Skills:
- Reuse previous commands efficiently
- Debug scripts and workflows
- Configure shell startup behavior
- Learn from your command history

Hands-On Work:
- Review your command history
- Create a custom history system
- Debug 5 failing commands
- Set up a personalized `.bashrc`
- Create aliases for common debugging tasks

#### GitBash-6: Advanced Terminal Techniques - Scripts, Functions & Professional Workflows (2.5-3.5 hours)
What you'll learn:
- Writing bash scripts (`.sh` files)
- Creating functions for reuse
- Using loops: `for`, `while`
- Conditional statements: `if`, `else`
- Professional script structure
- Error handling and logging

Key Skills:
- Write programs in bash
- Create reusable functions
- Automate repetitive tasks
- Handle errors gracefully
- Professional-grade scripts

Hands-On Work:
- Write 5 useful bash scripts
- Create 3 reusable functions
- Build loops that process files
- Write scripts with error checking
- Create a file backup automation system

### Comprehensive Assessment (2.5-5 hours)

#### GitBash Unit Test & Practice
What you'll do:
- 30 practical exercises covering all skills
- Real-world scenarios with 3D printing workflows
- Debugging challenges
- Script writing projects
- Performance optimization tasks

Success Criteria:
- Complete all 30 exercises correctly
- Debug 5 failing scripts
- Write 2 advanced automation scripts
- Pass all checkpoint tests

## Lesson Progression Map

```
Pre: First Terminal (accessibility focus)
  v
GitBash-0: Paths & Layout (foundations)
  v
GitBash-1: Navigation (mastery)
  v
GitBash-2: Files & Folders (basic manipulation)
  v
GitBash-3: Piping & Redirection (powerful combinations)
  v
GitBash-4: Variables & Aliases (customization)
  v
GitBash-5: History & Debugging (refinement)
  v
GitBash-6: Scripts & Functions (advanced)
  v
Unit Test & Practice (comprehensive)
```

## Command Reference by Lesson

### GitBash-Pre
- `pwd` - Show current location
- `ls` - List files
- `cd` - Change directory
- `echo "text" >` - Create files
- `cat` - Read files

### GitBash-0
- `pwd` - Current location
- `ls` - List contents
- `cd ~` - Go home
- `cd ..` - Go up
- `cd /path` - Go to path

### GitBash-1
- `cd FolderName` - Enter folder
- `cd ..` - Go up one level
- `cd ~` - Go home
- `ls` - List contents
- Tab completion (Press Tab)

### GitBash-2
- `mkdir FolderName` - Create folder
- `touch FileName` - Create file
- `cp Source Dest` - Copy file
- `mv Source Dest` - Move/rename
- `rm FileName` - Delete file
- `rmdir FolderName` - Delete empty folder
- `ls -l` - List with details

### GitBash-3
- `cat FileName` - Display file
- `grep "text" File` - Search
- `sort FileName` - Sort lines
- `wc` - Count words/lines
- `command > file` - Redirect output
- `command | other` - Pipe commands
- `less FileName` - Read page by page

### GitBash-4
- `echo $VAR` - Show variable
- `export VAR="value"` - Set variable
- `alias name="command"` - Create shortcut
- `.bashrc` - Edit startup file
- `source ~/.bashrc` - Reload config

### GitBash-5
- `history` - Show past commands
- `!CommandNumber` - Rerun command
- `Ctrl+R` - Search history
- `set -x` - Debug mode
- `.bashrc` vs `.bashprofile` - Config files

### GitBash-6
- `#!/bin/bash` - Script header
- `function name() {}` - Define function
- `for var in list; do` - Loops
- `if [condition]; then` - Conditionals
- `source script.sh` - Run script
- `$1, $2` - Arguments

## Accessibility Features Throughout

Every lesson includes:
- Screen reader-tested examples using NVDA and JAWS
- Text-based output - No graphics, all linear text
- Tab completion strategies - Optimized for speech feedback
- File redirection methods - Save output when needed
- Keyboard-only workflows - No mouse required
- Practical tips for both NVDA and JAWS users

## Time Breakdown

| Component   | Time          |
|-------------|---------------|
| GitBash-Pre | 1.5-2.5 hours |
| GitBash-0   | 1-1.5 hours   |
| GitBash-1   | 1.5-2.5 hours |
| GitBash-2   | 2-2.5 hours   |
| GitBash-3   | 2-2.5 hours   |
| GitBash-4   | 1.5-2 hours   |
| GitBash-5   | 2-2.5 hours   |
| GitBash-6   | 2.5-3.5 hours |
| Unit Test   | 2.5-5 hours   |
| Total       | 20-25 hours   |

## Learning Approach

### Core Teaching Method

1. Understand WHY - Each lesson starts with purpose
2. Learn WHAT - Commands and concepts
3. Practice HOW - Hands-on exercises
4. Master IT - Checkpoint questions and real-world work

### Recommended Pace

- Fast track: Complete in 2-3 weeks (2-3 hours daily)
- Standard pace: Complete in 8-12 weeks (2-3 hours, 3x per week)
- Self-paced: Work at your own speed with breaks

### Best Practices

- Take breaks between lessons
- Do all practice exercises - don't skip
- Answer checkpoint questions before moving on
- Review previous lessons if stuck
- Use screen reader at full speed once comfortable

## Prerequisites & Assumptions

This curriculum assumes you:
- Have Git Bash installed (free from [https://git-scm.com](https://git-scm.com))
- Use a screen reader (NVDA, JAWS, or similar)
- Have Windows 10 or later
- Can use a keyboard efficiently
- Have a text editor (Notepad, VS Code, etc.)

## What You'll Be Able to Do

After completing this curriculum:

### Basic Skills (After Lesson 1)
- Navigate any folder on your computer
- List files to understand what's available
- Create and organize folders
- Find files quickly

### Intermediate Skills (After Lesson 4)
- Create, copy, move, and delete files
- Search through text for information
- Combine commands into powerful workflows
- Customize your terminal environment

### Advanced Skills (After Lesson 6)
- Write bash programs and scripts
- Automate repetitive tasks
- Build professional tools
- Solve complex problems
- Work efficiently across Windows, macOS, and Linux

## Assessment & Completion

### Unit Test (Comprehensive)
- 30 practical exercises
- Real-world 3D printing scenarios
- Script writing projects
- Performance: 90%+ correct = mastery

### Certification
Upon completion:
- Printable certificate of completion
- Skills assessment document
- Portfolio project (optional)

## Moving Forward

After completing this curriculum, you can:

### Use Git Bash Daily
- Automate 3D printing workflows
- Manage file systems efficiently
- Create custom tools

### Learn More
- Advanced bash scripting
- Using Git for version control
- Integrating with OpenSCAD
- Professional shell environments

### Transition to Other Systems
- Skills transfer to macOS Terminal
- Skills transfer to Linux systems
- Knowledge applies to cloud environments (AWS, Azure, GCP)

## Frequently Asked Questions

Q: Why Git Bash instead of PowerShell or CMD?
A: Git Bash gives you the same commands as macOS and Linux, making it a cross-platform skill that's more valuable long-term.

Q: How is this different from regular bash?
A: Git Bash is bash running on Windows. 100% compatible with standard bash. All commands work the same way.

Q: Will I need to use a mouse?
A: No! The entire curriculum is keyboard-based. Perfect for screen reader users.

Q: Can I take breaks between lessons?
A: Yes! Each lesson stands alone. You can take days or weeks between lessons.

Q: What if I get stuck?
A: Each lesson has extension problems for deeper learning and troubleshooting guides for common issues.

Q: Will this help with 3D printing?
A: Absolutely! Many lessons include 3D printing workflows and OpenSCAD automation examples.

## Support & Resources

- NVDA Screen Reader: [https://www.nvaccess.org/](https://www.nvaccess.org/)
- JAWS Screen Reader: [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)
- Bash Manual: [https://www.gnu.org/software/bash/manual/](https://www.gnu.org/software/bash/manual/)
- Git Bash Documentation: [https://git-scm.com/book/](https://git-scm.com/book/)
- Linux Command Reference: [https://linuxcommand.org/](https://linuxcommand.org/)

## Curriculum Philosophy

This curriculum is built on:
- Accessibility First - Every lesson designed for screen readers
- Practical Learning - Real commands, real workflows
- Progressive Complexity - Build skills systematically
- Hands-On Practice - Learn by doing
- Professional Standards - Industry-ready skills

## Ready to Begin?

Start with the [Command Line Interface Selection Guide](../Command_Line_Interface_Selection.md) to see why Git Bash might be the right choice for you.

Then proceed to GitBash-Pre: Your First Terminal to begin your journey!

Goal: You can navigate to any folder and see what's in it with your screen reader.

### Phase 2: Intermediate User -> Power User

| Lesson                                | Duration | What You'll Learn                        |
|---------------------------------------|----------|------------------------------------------|
| GB-2: File & Folder Manipulation      | 60 min   | Create, copy, move, delete files/folders |
| GB-3: Input, Output & Piping          | 60 min   | Chain commands together, redirect output |
| GB-4: Environment Variables & Aliases | 45 min   | Automate settings, create shortcuts      |
| GB-5: Filling in the Gaps             | 45 min   | Profiles, history, debugging             |

Goal: You can create folders, manage files, and combine commands to accomplish complex tasks.

### Phase 3: Professional Skills (Beyond Curriculum)

| Topic                       | When to Learn   |
|-----------------------------|-----------------|
| Shell scripting (.sh files) | After GB-5      |
| Functions & Loops           | After GB-5      |
| Error Handling              | After GB-5      |
| 3D Printing Integration     | After all above |

## How to Use This Curriculum

### If You've Never Used a Terminal Before
1. Read Screen Reader Accessibility Guide completely
2. Do GB-Pre: Your First Terminal exercises
3. Continue with GB-0, GB-1, etc.

### If You've Used a Terminal Before (But Not with a Screen Reader)
1. Skim Screen Reader Accessibility Guide
2. Quickly review GB-Pre
3. Move to GB-0 for deeper learning

### If You're Experienced with Terminal + Screen Reader
1. Jump to specific lessons you need (GB-2, GB-3, etc.)
2. Use the Quick Reference sections
3. Skip the practice exercises, do the quizzes to verify knowledge

## How Each Lesson is Structured

1. Learning Objectives - What you'll be able to do
2. Key Commands - The important ones to memorize
3. Step-by-Step Examples - How to actually do it
4. Practice Exercises - Hands-on work
5. Quiz Questions - Check your understanding
6. Extension Problems - Go deeper if interested

## Screen Reader Tips Throughout the Curriculum

Every lesson includes:
- [SR] symbols marking screen reader-specific sections
- Tips for NVDA and JAWS users separately
- Solutions for common accessibility issues
- Workarounds for long outputs

## Quick Start Guide (First 15 Minutes)

1. Open Git Bash (Start menu -> type Git Bash -> Enter)
2. Run these commands:
   ```bash
   pwd
   ls
   cd Documents
   pwd
   ```
3. See how your screen reader reads each output
4. Try Tab completion: type `cd D` and press Tab
5. Create a file:
   ```bash
   echo "I am learning Git Bash" > learning.txt
   cat learning.txt
   ```

## Important Rules

### Rule 1: Always Know Where You Are
```bash
pwd
```

### Rule 2: Check Before You Delete
```bash
ls
```

### Rule 3: Use `ls` for listings
```bash
ls
# or for one-per-line (screen reader friendly):
ls -1
```

### Rule 4: When Lost, Redirect to a File
```bash
command-name > output.txt
notepad output.txt
```

### Rule 5: Save Everything You Create
```bash
mkdir my-practice-folder
cd my-practice-folder
```

## Troubleshooting: "Nothing Works!"

1. Can't hear Git Bash? Make sure screen reader is running BEFORE Git Bash. Try Alt+Tab.
2. Commands not working? Check spelling. Make sure you pressed Enter.
3. Can't read the output? Redirect to file: `command > output.txt`, then `notepad output.txt`
4. Something ran forever? Press Ctrl+C to stop it.
5. Completely confused? Go back to GB-Pre and start over.

## Curriculum Map

```
START HERE v
+---- Screen Reader Accessibility Guide (reference throughout)
+---- GB-Pre: Your First Terminal (absolute beginner entry point)
+---- GB-0: Getting Started (paths & navigation foundations)
+---- GB-1: Navigation (comfortable moving around)
+---- GB-2: File & Folder Manipulation (create/move/delete)
+---- GB-3: Input, Output & Piping (chain commands)
+---- GB-4: Environment Variables & Aliases (automation)
+---- GB-5: Filling in the Gaps (profiles & history)
+---- GBUnitTest (comprehensive practice & assessment)
        v
    NEXT: 3D Printing Integration Lessons
        v
    ADVANCED: Bash Scripting
```

Questions? Stuck? Refer back to this page and the Screen Reader Accessibility Guide.

Now open GB-Pre and let's get started!


Other Screen Readers

Dolphin SuperNova (commercial) and Windows Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) and [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) for vendor documentation.

