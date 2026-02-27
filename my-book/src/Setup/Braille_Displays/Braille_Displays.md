# Using a Braille Display with the Curriculum {#setup_braille_displays-braille_displays}

Many blind and low-vision programmers prefer tactile output alongside or instead of speech. A refreshable braille display presents terminal text as a row (or multiple rows) of braille cells and allows you to read at your own pace, re-read lines without interrupting speech, and work quietly. This page covers how to connect and configure a braille display with each screen reader used in this curriculum.

---

## How a Braille Display Works with a Terminal

A refreshable braille display uses small pins that rise and fall to form braille characters. When connected to a computer and paired with a screen reader, the display shows the line of text where the screen reader's focus or review cursor is located. You can pan left and right across a long line or press routing buttons to move the screen reader cursor to a specific position.

In a terminal environment:
- The display shows the current command line (what you are typing).
- After running a command, you can use your screen reader's review cursor and the display's pan keys to read through the output line by line.
- Routing keys (small buttons above or below each braille cell) let you move the cursor directly to that point in the text — useful for re-running or editing commands from history.

---

## Connecting a Braille Display

### USB Connection
1. Plug the display's USB cable into your computer.
2. Windows will attempt to install drivers automatically. If the display is not recognized, install the vendor's driver software first (see vendor links at the end of this page).
3. Open your screen reader's braille settings and select the connected display.

### Bluetooth Connection
1. Put the braille display into pairing mode (refer to the device's quick-start guide).
2. On Windows, go to **Settings → Bluetooth & devices → Add a device** and pair the display.
3. Once paired, open your screen reader's braille settings and select the display.

### Before Opening the Terminal
Always confirm the display is connected and showing output before opening your terminal. A quick test: open Notepad, type a few words, and verify they appear on the display. This confirms the screen reader is routing output correctly before you add the complexity of a terminal session.

---

## Configuring Each Screen Reader for Braille

### NVDA

NVDA includes built-in braille support for a wide range of displays without requiring separate vendor software for many devices.

1. Connect your display via USB or Bluetooth.
2. Open the NVDA menu: press **NVDA+N** (Insert+N or CapsLock+N depending on your modifier key setting).
3. Go to **Preferences → Settings → Braille** (or press **NVDA+Ctrl+B** as a shortcut on some versions).
4. In the **"Braille display"** dropdown, select your display from the list. NVDA supports automatic detection for many displays — you can also select **"Automatic"** and let NVDA detect it.
5. Set your preferred **braille output table** (e.g., Unified English Braille Grade 1 or Grade 2, or your country's national table).
6. Set **"Braille input table"** if you want to type commands using the display's braille keyboard (if equipped).
7. Enable **"Show cursor"** so you can see the caret position on the display.
8. Click **OK** and test by moving the cursor in Notepad.

**Recommended NVDA braille settings for terminal work:**
- Output table: Unified English Braille Grade 1 (uncontracted) is recommended for reading code — contractions in Grade 2 can make code harder to read.
- Cursor shape: Dots 7 and 8 (underline) is a common choice.
- Enable **"Word wrap"** to avoid cutting words at the display's edge.

**NVDA braille keyboard shortcut reference (while braille display is active):**

| Action                                  | NVDA Command                     |
|-----------------------------------------|----------------------------------|
| Pan braille display right               | Display's right pan key          |
| Pan braille display left                | Display's left pan key           |
| Toggle braille tethered to focus/review | NVDA+Ctrl+T                      |
| Move to previous braille line           | NVDA+Shift+Up (or display key)   |
| Move to next braille line               | NVDA+Shift+Down (or display key) |
| Open braille settings                   | NVDA+Ctrl+B (some versions)      |

---

### JAWS

JAWS supports a wide range of braille displays through its built-in braille manager and additional vendor drivers.

1. Connect your display via USB or Bluetooth.
2. Install the vendor's display driver if required (check the vendor's website — some displays work without a driver in JAWS, others need one).
3. Open the JAWS menu: press **Insert+F3** (or your JAWS key+F3).
4. Go to **Options → Basics → Braille** or use the **JAWS Settings Center** and search for **"Braille"**.
5. In Braille Settings, select your display model from the list.
6. Choose your **braille translation table** (e.g., English Unified Grade 1 for uncontracted, Grade 2 for contracted).
7. Configure **cursor routing** so that pressing a routing button on the display moves the JAWS cursor to that position.
8. Test in Notepad before moving to a terminal.

**JAWS braille settings for terminal work:**
- Use **Grade 1 (uncontracted) braille** for reading code and terminal output. Grade 2 contractions can make commands and file paths difficult to parse.
- Enable **"Show active cursor"** in JAWS braille settings.
- In the JAWS Settings Center, look for **"Braille for Applications"** — you can set different braille behavior for specific applications (e.g., a terminal vs. a word processor).

**Accessing braille settings:**
- **Insert+F3** → Options → Basics → Braille
- Or: **Insert+F2** (JAWS Manager) → Settings Center → search "braille"

---

### Windows Narrator

Windows Narrator supports braille output through the **Windows braille service** (Windows 10 version 1903 and later, and Windows 11).

1. Connect your display via USB or Bluetooth.
2. Install the vendor's display driver if required.
3. Open **Settings → Accessibility → Narrator → Braille** (Windows 11) or **Settings → Ease of Access → Narrator → Use Braille** (Windows 10).
4. Turn on **"Install braille"** (first-time setup may require downloading the braille translation component — approximately 70 MB).
5. Select your **display brand and model** from the list.
6. Choose a **braille table** (Grade 1 recommended for terminal work).
7. Test in Notepad before using in a terminal.

**Important Narrator braille notes:**
- Narrator's braille support uses the **BRLTTY** back-end on Windows, which supports most mainstream displays.
- If your display is not listed, check for a Windows Update or visit the display vendor's website for a Windows Narrator-compatible driver.
- Narrator's braille customization is less extensive than NVDA's or JAWS's. If you need more control, consider using NVDA (free) for braille-heavy work.
- The **braille display showing Narrator output** does not change the fact that Narrator's keyboard commands remain the same — your display shows what Narrator is currently reading.

---

### Dolphin SuperNova

Dolphin SuperNova includes integrated braille support as part of its screen reader editions (SuperNova Magnifier & Speech and SuperNova Screen Reader).

1. Connect your display via USB or Bluetooth.
2. Install the vendor's driver if required.
3. Open the **SuperNova Control Panel**: press **CapsLock+SpaceBar** or click the SuperNova icon in the taskbar.
4. Go to **Braille → Display** and select your display model from the list.
5. Go to **Braille → Translation** and select your braille table (Grade 1 / uncontracted recommended for code).
6. Go to **Braille → Settings** to configure cursor style, word wrap, and other options.
7. Click **Apply** and test in Notepad.

**Dolphin SuperNova braille tips for terminal work:**
- SuperNova supports a wide range of displays from Freedom Scientific (Focus), HumanWare (Brailliant, BrailleNote as terminal), HIMS, Optelec, and others.
- Use **Grade 1 (uncontracted)** braille for terminal and code work.
- SuperNova's **"Braille cursor tracking"** setting determines whether the braille display follows the text cursor or the screen review cursor — set this to **"Cursor"** when working in a terminal.
- Dolphin provides a **braille viewer** on screen (a visual representation of what is on the braille display) — useful when setting up or troubleshooting.

---

## Using the Braille Display in a Terminal

Once your display is configured, here is how to work in a terminal:

1. **Reading the prompt:** The display shows your current prompt (e.g., `C:\Users\YourName>` or `PS C:\>`). Pan right if the prompt is longer than your display width.
2. **Reading output:** After running a command, use your screen reader's review cursor commands (see the Screen Reader Accessibility Guide) to move through the output. The display shows one line at a time and updates as you move.
3. **Redirecting long output:** For long terminal output, redirect to a file and open in Notepad:
   ```
   command > output.txt
   notepad output.txt
   ```
   In Notepad, you can pan through the braille display comfortably without the output scrolling away.
4. **Using routing keys:** Press the routing key above a word or character to move your cursor to that position. This is especially useful for editing commands recalled from shell history.

---

## Braille Grade and Code

For all screen readers, use **Grade 1 (uncontracted) braille** when working in terminals and with code. Contracted braille (Grade 2) uses abbreviations designed for reading prose, and those contractions will make command names, file paths, and code syntax difficult or impossible to read correctly.

Example: In Grade 2, the letters "cd" might be represented as a contraction meaning something other than the Change Directory command. In Grade 1, `cd` is always shown as the letters c and d.

---

## Notetakers and BrailleNote / BrailleSense Devices

BrailleNote Touch+ (HumanWare) and BrailleSense (HIMS) devices run Android as their primary operating system. **They cannot run `3dMake` or Windows-based terminal workflows natively.** These devices are not supported as standalone authoring environments for this curriculum.

**Workaround — using them as braille terminals:** Both device families can function as a braille display when connected to a Windows computer via USB or Bluetooth. In that configuration:
- The device acts as a standard refreshable braille display.
- Your Windows screen reader (NVDA, JAWS, Narrator, or SuperNova) drives the output.
- Commands are typed on the Windows keyboard; the BrailleNote/BrailleSense shows the output as braille.

To set this up, refer to your device's documentation for "Terminal mode" or "PC connection mode" and then follow the screen reader braille configuration steps above for your chosen screen reader.

---

## Multiline Braille Displays

Standard refreshable braille displays show a single line of braille (typically 32, 40, or 80 cells). Multiline displays show several lines simultaneously, which can significantly improve the experience of reading code or terminal output because you can see context above and below the current line.

### Examples

**Monarch (APH / HumanWare partnership):**  
A multiline braille device developed by the American Printing House for the Blind (APH) in partnership with HumanWare. It presents multiple lines of braille and supports graphical braille output, making it useful for reviewing blocks of code, diagrams, and structured text. Confirm current driver and screen reader compatibility before purchase.

**DotPad (Dot Inc.):**  
A multiline braille and tactile graphics display. Its multiline capability allows programmers to scan several lines of code or terminal output at once. Useful for reviewing structured output without panning repeatedly. Check current Windows compatibility and screen reader support status.

**Graphiti and Graphiti Plus (Orbit Research):**  
Multiline tactile displays from Orbit Research designed for reading text and tactile graphics. Their expanded line count helps with reading code structure and terminal output. Check current driver support for NVDA, JAWS, Narrator, and SuperNova.

### Considerations for Multiline Displays

- **Driver and screen reader support:** Multiline displays are newer technology and support varies. Confirm that your chosen screen reader (NVDA, JAWS, Narrator, or SuperNova) has a driver for the specific device before purchase.
- **Size and portability:** Multiline displays are larger and heavier than single-line models. Consider your workspace and whether you need portability.
- **Cost:** Multiline displays are significantly more expensive than single-line displays. Evaluate whether the workflow benefit justifies the cost for your situation.
- **Learning curve:** Using a multiline display effectively — navigating across lines, understanding the spatial layout — requires some practice beyond what is needed for single-line displays.

---

## Troubleshooting

**Display shows nothing / no braille output:**
- Verify the USB or Bluetooth connection and check that the display is powered on.
- In your screen reader's braille settings, confirm the correct display model is selected.
- Try disconnecting and reconnecting. Restart the screen reader if needed.
- Install or reinstall the vendor's display driver.

**Display shows output but navigation is out of sync:**
- Toggle your screen reader's braille mode off and on (usually in the braille settings).
- Restart the screen reader (not the whole computer) and reopen the terminal.
- Try a different terminal emulator (Windows Terminal, Command Prompt, PowerShell) to see if the issue is terminal-specific.

**Display driver not found:**
- Go to the vendor's website (links below) and download the latest driver for your operating system version.
- Some displays require firmware updates to work with newer Windows versions.

**Routing keys not moving the cursor:**
- In your screen reader's braille settings, confirm that cursor routing is enabled.
- In NVDA, this is under Preferences → Settings → Braille → enable "Move system cursor when routing review cursor".
- In JAWS, check the routing settings in the JAWS braille configuration.

---

## Vendor Resources

| Vendor             | Products                                 | Support / Drivers                          |
|--------------------|------------------------------------------|--------------------------------------------|
| HumanWare          | Brailliant, BrailleNote Touch+           | [https://example.com](https://example.com) |
| Freedom Scientific | Focus Blue series                        | [https://example.com](https://example.com) |
| HIMS               | BrailleSense, Braille EDGE, Smart Beetle | [https://example.com](https://example.com) |
| Optelec            | Braille STAR, Easy Link                  | [https://example.com](https://example.com) |
| Orbit Research     | Graphiti, Orbit 20/40                    | [https://example.com](https://example.com) |
| APH                | Monarch                                  | [https://example.com](https://example.com) |
| Dot Inc.           | DotPad                                   | [https://example.com](https://example.com) |
| Dolphin            | GuideConnect, braille accessories        | [https://example.com](https://example.com) |

---

## Connecting a Braille Display: Summary Table

| Screen Reader     | Where to Find Braille Settings                              | Recommended Braille Table for Code     |
|-------------------|-------------------------------------------------------------|----------------------------------------|
| NVDA              | NVDA Menu → Preferences → Settings → Braille                | Unified English Braille Grade 1        |
| JAWS              | Insert+F3 → Options → Basics → Braille (or Settings Center) | English Braille Grade 1 (uncontracted) |
| Windows Narrator  | Settings → Accessibility → Narrator → Braille               | English Grade 1 (uncontracted)         |
| Dolphin SuperNova | CapsLock+SpaceBar → Braille → Display and Translation       | Grade 1 (uncontracted)                 |

This page gives a practical overview. Always consult your braille display vendor's documentation and your screen reader's braille guide for device-specific setup steps and advanced configuration options.