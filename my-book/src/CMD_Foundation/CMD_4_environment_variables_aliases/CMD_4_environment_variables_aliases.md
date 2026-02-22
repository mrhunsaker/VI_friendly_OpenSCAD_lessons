# CMD-4: Environment Variables & Aliases

**Duration:** 2 hours (for screen reader users)  
**Prerequisites:** CMD-Pre through CMD-3

**Learning Objectives:**
- Understand environment variables
- Use variables in commands
- Create custom shortcuts
- Manage system paths

---

## Environment Variables

Environment variables store information your system and programs use.

### Common Variables

```cmd
%USERPROFILE%          :: Your home directory
%USERNAME%             :: Your username
%COMPUTERNAME%         :: Your computer name
%TEMP%                 :: Temporary folder
%PATH%                 :: Where system looks for executables
```

### Using Variables

```cmd
cd %USERPROFILE%       :: Go to home directory
echo %USERNAME%        :: Show your username
dir %TEMP%             :: Show temp folder
```

### Viewing All Variables

```cmd
set                    :: List all environment variables
set | find "USER"      :: Find variables containing "USER"
```

---

## Creating Shortcuts with Doskey

Create command aliases:

```cmd
doskey ll=dir /B
doskey home=cd %USERPROFILE%
doskey myproject=cd C:\Users\%USERNAME%\Documents\MyProject
```

Now you can use:
```cmd
ll                     :: Instead of dir /B
home                   :: Instead of cd %USERPROFILE%
myproject              :: Go directly to project folder
```

---

## Batch Files for Shortcuts

Create a `.bat` file for complex shortcuts:

**File: go-to-project.bat**
```batch
@echo off
cd C:\Users\%USERNAME%\Documents\3DProjects
dir /B
```

Run it:
```cmd
go-to-project.bat
```

---

## Practice Exercises

### Exercise 1: Use Variables

1. Run: `echo %USERPROFILE%`
2. Run: `cd %USERPROFILE%`
3. Run: `echo %USERNAME%`
4. Run: `dir %USERPROFILE%\Documents`

**Goal:** Comfortable using variables.

### Exercise 2: Create Shortcuts

1. Run: `doskey home=cd %USERPROFILE%`
2. Run: `home` (should take you to home directory)
3. Create another: `doskey docs=cd %USERPROFILE%\Documents`
4. Run: `docs` (should go to Documents)

**Goal:** Create useful shortcuts.

---

## Checkpoint Questions

1. What is an environment variable?
2. What does `%USERPROFILE%` represent?
3. How do you view all environment variables?
4. How do you create a doskey alias?
5. Why are shortcuts useful?

---

## Next Steps

- Complete exercises
- Move to **CMD-5: Filling in the Gaps**

