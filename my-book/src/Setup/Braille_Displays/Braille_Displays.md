
# Using a Braille Display with the Curriculum

Refreshingly, many blind and low-vision coders prefer tactile output in addition to speech. A refreshable braille display presents terminal text as tactile braille cells and can be used alongside or instead of spoken output while working through this curriculum.

## Braille terminal mode

Most modern braille displays support a "braille terminal" or "braille output" mode that exposes the active computer's text output to the display over USB or Bluetooth. When the display is connected and the host computer's screen reader is configured to use it, the display will show the current line, allow pan/scroll by cell or line, and often provide routing keys and function buttons for quick navigation.

## Practical notes

- **Connection:** Connect via USB or Bluetooth according to the device vendor's instructions. Ensure the display's power and pairing state are correct before opening your terminal. Some displays require a companion driver or vendor utility on the host.
- **Screen reader support:** Configure your Windows or Linux screen reader to use the braille display. Most mainstream screen readers include braille support or can interoperate with system braille services; follow the vendor documentation for enabling braille output.
- **Terminal behavior:** Braille displays reflect the terminal buffer and the current focus. Use your screen reader's review/virtual cursor or the display's pan keys to move through lines of terminal output, and use the shell history (Up arrow) to recall commands — the braille display will show the recalled command when the shell line is focused.

## Compatibility and notetakers

- **Important:** this curriculum and the `3dMake` tooling are tested on Windows and Linux. BrailleNote Touch+ and BrailleSense family devices run Android as their primary OS and are not supported as standalone authoring environments for `3dMake`.
- **Workaround:** BrailleNote Touch+ and BrailleSense devices can function as a braille terminal when connected to a computer (USB or Bluetooth) and used with the host machine's terminal and screen reader. In that configuration they present the same tactile output as other refreshable displays and work for coding workflows when the host system is supported.

## Troubleshooting tips

- **No output:** verify the connection, power, and pairing; restart the terminal or screen reader, and consult vendor docs for drivers or firmware updates.
- **Navigation out of sync:** try toggling the display's terminal mode, restart the screen reader, or open the terminal in a different emulator (Windows Terminal, PowerShell, or a Linux terminal) to compare behavior.

This page aims to give a practical overview — follow your braille display vendor and screen reader documentation for device-specific setup and advanced configuration.

## Vendor setup pages

- [HumanWare](https://www.humanware.com) — Braille displays & BrailleNote/BrailleSense products
- [Freedom Scientific](https://www.freedomscientific.com) — Focus Blue braille displays and related tools
- [HIMS](https://hims-inc.com) — BrailleSense family
- [Dolphin](https://www.dolphinuk.com) — SuperNova and related accessibility tools

## Connecting a braille display to common screen readers (general steps)

- **JAWS:** Connect the display via USB or Bluetooth, then open JAWS Settings Center and look for the Braille / Braille Settings area (or the Braille Manager). Select the connected display and enable braille output; test in a terminal window. If the display requires a vendor driver, install it first.
- **NVDA:** Connect the display and open the NVDA menu → Preferences → Braille display (or use NVDA's braille settings). NVDA generally detects many displays; choose the device and enable braille output. Install vendor drivers if needed.
- **Windows Narrator:** Connect the display, then open Settings → Accessibility → Narrator → Braille (or related braille options) and enable braille output. Narrator will use the Windows braille services to route output to the display.
- **Dolphin / SuperNova:** Connect the display via USB/Bluetooth, then open SuperNova settings and enable braille output, selecting the connected device. Dolphin provides driver/utility support for specific displays where required.

## Notes

- These instructions are intentionally high-level — vendor drivers, firmware, and exact setting names can vary. If a device is not detected, install or update the vendor's drivers/utilities and consult the vendor setup pages listed above.
- When testing, open a terminal (Windows Terminal, Command Prompt, PowerShell, or a Linux terminal), run a few commands (for example `dir` / `ls`) and use the display's pan keys or your screen reader's review cursor to confirm tactile output and navigation.

## Multiline Braille Displays

Multiline braille displays present several lines of braille at once (often 1–4 lines or more), which can greatly improve readability and code navigation compared with single-line displays. Seeing multiple lines simultaneously helps with indentation, matching braces, and maintaining context while reading or editing source files.

### Examples (short notes)

- **Monarch (AOPH / HumanWare):** A multiline form factor intended for users who need a larger tactile viewport for text and code. Multiline displays like this are useful for reviewing blocks of code, comparing nearby lines, and reducing the need to pan frequently. Confirm vendor drivers and screen reader support for your platform.
- **DotPad X:** A modern braille device that supports multiline braille output and notetaker features; it can be used as a terminal display when connected to a host. Its multiline capability helps programmers scan code and terminal output more quickly than single-line displays.
- **Graphitti line (Orgit Scientific):** Orgit Scientific's Graphitti/Graphitti-style multiline displays are designed for tactile reading with expanded line counts. Multiline displays from vendors like Orgit are helpful in development workflows where seeing surrounding lines improves comprehension.

### Considerations for multiline devices

- **Drivers & compatibility:** Multiline displays sometimes require updated drivers or vendor utilities and may depend on BRLTTY or specific screen reader braille backends on Linux. On Windows, ensure your chosen screen reader and the device drivers are configured to expose multiline output.
- **Layout & ergonomics:** Multiline displays are larger and less portable than single-line models; check the physical layout (routing keys, panning buttons, and function keys) to ensure they meet your navigation preferences.
- **Cost:** Multiline displays are typically more expensive than single-line displays. Factor budget and how much multiline reading will speed up your workflow when deciding.
