# Windows Command Prompt (CMD) for Screen Reader Users - Complete Curriculum Overview {#cmd_foundation_cmd_curriculum_overview-cmd_curriculum_overview}

**Welcome!** This curriculum teaches you how to use Windows Command Prompt (CMD) as a screen reader user, starting from zero experience and building to practical skill levels.

**Last Updated:** February 2026  
**Total Duration:** 30-45 hours of instruction and practice (for screen reader users)  
**Target Users:** Screen reader users — NVDA, JAWS, Windows Narrator, and Dolphin SuperNova are all covered throughout this curriculum.

*Note: Time estimates reflect the additional time needed for screen reader navigation, text-to-speech processing, and careful keyboard-based workflows.*  
**Alternate to:** PowerShell curriculum (same concepts, different command syntax)

---

## Why Learn Windows Command Prompt (CMD)?

### For Everyone

- **Speed:** Text commands are often faster than clicking through menus.
- **Simplicity:** CMD has fewer commands than PowerShell, but they are straightforward.
- **Accessibility:** CMD works reliably with all major screen readers.
- **Precision:** Exact control over what your computer does.

### For 3D Printing (Our Focus)

- **Batch Operations:** Process multiple 3D models at once.
- **Accessibility:** Many 3D design tools are scriptable from CMD.
- **Reproducibility:** Same settings, every time.
- **Integration:** Connect OpenSCAD and other tools together.

### For Screen Reader Users Specifically

- **Great Accessibility:** CMD works well with NVDA, JAWS, Windows Narrator, and Dolphin SuperNova.
- **No Mouse Needed:** Everything is keyboard-based.
- **Text-Based:** Output is naturally readable by screen readers.
- **Stability:** Unlike GUIs, terminal interactions are consistent.
- **Simpler Syntax:** CMD commands are more straightforward than PowerShell for beginners.

---

## Curriculum Structure

### Phase 1: Absolute Beginner → Comfortable User

| Lesson                           | Duration    | What You Will Learn                           |
|----------------------------------|-------------|-----------------------------------------------|
| **CMD-Pre: Your First Terminal** | 1.5-2 hours | Opening CMD, first commands, basic navigation |
| **CMD-0: Getting Started**       | 1.5 hours   | Paths, shortcuts, command basics              |
| **CMD-1: Navigation**            | 2-2.5 hours | Moving around the file system confidently     |

**Goal:** You can navigate to any folder and see what is in it with your screen reader.

### Phase 2: Intermediate User → Power User

| Lesson                                       | Duration    | What You Will Learn                      |
|----------------------------------------------|-------------|------------------------------------------|
| **CMD-2: File & Folder Manipulation**        | 2.5-3 hours | Create, copy, move, delete files/folders |
| **CMD-3: Input, Output & Redirection**       | 2.5-3 hours | Redirect output, pipe commands           |
| **CMD-4: Environment Variables & Shortcuts** | 2-2.5 hours | Automate settings, create shortcuts      |
| **CMD-5: Filling in the Gaps**               | 2-2.5 hours | Batch files, history, debugging          |

**Goal:** You can create folders, manage files, and combine commands to accomplish complex tasks.

### Phase 3: Professional Skills

| Lesson                         | Duration    | What You Will Learn                    |
|--------------------------------|-------------|----------------------------------------|
| **CMD-6: Advanced Techniques** | 2.5-3 hours | Scripting, loops, automation workflows |
| **CMD Unit Test**              | 2.5-4 hours | Comprehensive assessment               |

---

## How to Use This Curriculum

### If You Have Never Used a Terminal Before

**Start here and go in order:**

1. Do **CMD-Pre: Your First Terminal**.
2. Continue with CMD-0, CMD-1, and so on.

Do not skip steps — each lesson builds on the previous one.

### If You Have Used a Terminal Before (But Not with a Screen Reader)

1. Quickly review **CMD-Pre** (it has the screen reader focus you need).
2. Move to **CMD-0** for deeper path understanding.

### If You Are Experienced with Terminal and Screen Readers

1. Jump to the specific lesson you need (CMD-2, CMD-3, etc.).
2. Use the **Quick Reference** sections.
3. Skip exercises and take the quizzes to verify knowledge.

---

## How Each Lesson Is Structured

Every lesson contains:

1. ## Learning Objectives — What you will be able to do after the lesson

2. **Key Commands** — The important ones to memorize.
3. **Step-by-Step Examples** — How to actually do it.
4. **Practice Exercises** — Hands-on work (critical: do not skip these).
5. **Quiz Questions** — Check your understanding.
6. **Extension Problems** — Go deeper if interested.

**How to get through each lesson:**

1. Read the learning objectives.
2. Do the step-by-step examples alongside (type the commands yourself).
3. Complete the practice exercises.
4. Take the quiz honestly.
5. Try extension problems if you have time.
6. Move to the next lesson when you can answer the quiz questions confidently.

**Estimated time:** 2-3 hours per lesson for screen reader users, depending on practice time.

---

## Screen Reader Tips Throughout the Curriculum

All four screen readers are covered in each lesson:

- **NVDA** — Free, excellent terminal support. Available at [https://www.nvaccess.org/](https://www.nvaccess.org/)
- **JAWS** — Commercial, powerful, widely used in workplaces. Available at [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)
- **Windows Narrator** — Free, built into Windows, minimal setup required.
- **Dolphin SuperNova** — Commercial, with optional magnification. Available at [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)

If your screen reader is not listed in a specific tip, refer to the **Screen Reader Accessibility Guide** for equivalent commands across all four readers.

---

## Quick Start Guide (First 45-60 Minutes)

**If you have 45-60 minutes right now:**

1. Open Command Prompt (Windows key → type `cmd` → Enter).
2. Run these commands:

   ```cmd
   cd
   dir /B
   cd Documents
   cd
   ```

3. Notice how your screen reader reads each output.
4. Create a file:

   ```cmd
   echo I am learning CMD > learning.txt
   type learning.txt
   ```

That is the core experience. Now read CMD-Pre for the full explanation.

---

## Common Questions Before Starting

### Q: PowerShell or CMD? Which should I learn?

Both teach the same fundamental concepts. CMD has simpler syntax and is better for beginners. PowerShell is more powerful and better for advanced automation. This curriculum is CMD; there is a separate PowerShell curriculum if you want that pathway. **Choose one and stick with it.**

### Q: What if I use a screen reader not listed here?

The fundamentals work the same across all screen readers. Check your screen reader's documentation for the equivalent of these functions: "read current line," "read from here to end," and "move through output line by line." All screen readers have these capabilities.

### Q: I am intimidated. Is this really for me?

Yes. This curriculum is designed specifically for people with no terminal experience AND who use screen readers. You start with absolute basics and build up. There is nothing to be afraid of — the terminal cannot hurt your computer just by navigating and listing files.

### Q: How long will this take?

Realistically:

- Minimum (lessons only, no exercises): 15-18 hours.
- Normal (lessons and exercises): 30-45 hours.
- With extension problems: 45-60 hours or more.

Spread it over weeks or months. Go at your pace.

### Q: What if I forget things?

That is normal. Solutions:

1. Come back to this overview page.
2. Jump back to the relevant lesson for a quick review.
3. Use the quiz questions to self-test.
4. Check the Screen Reader Accessibility Guide for troubleshooting.

---

## Important Rules

### Rule 1: Always Know Where You Are

Every session, first thing:

```cmd
cd
```

If you do not know your path, you will get lost. Do not move until you know where you are.

### Rule 2: Check Before You Delete

Before deleting anything:

```cmd
dir /B
```

Make sure you are deleting the right thing. Deleted files may not be recoverable from the command line.

### Rule 3: Use `dir /B` for Listings

The `/B` flag gives a clean, one-per-line listing that is easy for all screen readers to follow:

```cmd
dir /B
```

### Rule 4: When Output Is Confusing, Redirect to a File

```cmd
dir /B > output.txt
notepad.exe output.txt
```

This is always clearer for all screen readers than reading terminal output directly.

### Rule 5: Save Everything You Create

Create a practice folder and keep everything there:

```cmd
mkdir my-practice-folder
cd my-practice-folder
```

---

## Troubleshooting: "Nothing Works!"

1. **Cannot hear CMD at all?**
   - Make sure your screen reader is running BEFORE opening CMD.
   - Try **Alt+Tab** to cycle to the CMD window.
   - Restart both your screen reader and CMD.

2. **Commands not working?**
   - Check spelling carefully.
   - Make sure you pressed Enter.
   - Try `help` for a list of available commands.
   - Try `command /?` (for example, `dir /?`) for help on a specific command.

3. **Cannot read the output?**
   - Redirect to file: `command > output.txt`
   - Open in Notepad: `notepad.exe output.txt`
   - This works with all four screen readers.

4. **Something ran forever?**
   - Press **Ctrl+C** to stop it.

5. **JAWS stopped working?**
   - If using JAWS in demo mode, the session limit is approximately 40 minutes. Restart your computer to reset the demo.

6. **Completely confused?**
   - Go back to CMD-Pre and start over.
   - Work through every single exercise slowly.
   - Ask an instructor or peer for help.

---

## Resources

### Official Documentation

- **Windows CMD Reference:** [https://example.com](https://example.com)
- **Microsoft Learn:** [https://example.com](https://example.com)

### Screen Reader Guides

- **NVDA:** [https://www.nvaccess.org/](https://www.nvaccess.org/)
- **JAWS:** [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)
- **Windows Narrator:** [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator)
- **Dolphin SuperNova:** [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)

---

## Curriculum Map

```plaintext
START HERE
    |
CMD-Pre: Your First Terminal  (absolute beginner entry point)
    |
CMD-0: Getting Started        (paths and navigation foundations)
    |
CMD-1: Navigation             (comfortable moving around)
    |
CMD-2: File & Folder          (create, move, delete)
    |
CMD-3: Input & Output         (redirect commands)
    |
CMD-4: Variables & Shortcuts  (automation foundations)
    |
CMD-5: Filling in the Gaps    (batch files and history)
    |
CMD-6: Advanced Techniques    (scripts, loops, workflows)
    |
CMD Unit Test                 (comprehensive assessment)
    |
NEXT: 3D Printing Integration Lessons
```

---

**Questions? Feedback? Stuck?** Refer back to this page and try the Troubleshooting section. All the tools you need are here.

**Now open CMD-Pre and get started!**

