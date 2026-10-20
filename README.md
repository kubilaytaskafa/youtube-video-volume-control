# 🎧 YouTube Fine Volume (YouTube Hassas Ses)

> Set the volume of a YouTube tab with **1% precision** (even 0.5%), per tab, with keyboard shortcuts.
> Perfect for quiet background music while you study, read or watch a lecture.

🇹🇷 [Türkçe README](README.tr.md)

## Why?
YouTube's own volume slider is too coarse at the low end. If you play lo-fi or relaxing music in the background and want it at **1–2%** while a lecture plays in another tab, you spend ages fiddling with the slider. This extension fixes that.

## Features
- 🎚️ Volume from 0–100% in 0.5% steps (slider, number input and presets: 1, 2, 3, 5, 10, 25, 50, 100)
- 🗂️ **Per-tab**: music tab at 2%, lecture tab at 100%
- ⌨️ **Keyboard shortcuts**: `Ctrl+Shift+↑` / `Ctrl+Shift+↓` change volume by 1% (`Command+Shift+↑/↓` on macOS)
- 📌 **Pin a target tab**: adjust the music tab from any other tab
- 🔁 Setting persists across videos (YouTube is not allowed to reset it)
- 🔢 Toolbar badge shows the current volume
- 🔒 No data collection, no network requests, no dependencies
- Works on `youtube.com` and `music.youtube.com`

## Installation
### From source (recommended for now)
1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome (or any Chromium browser: Edge, Brave, Opera, Vivaldi).
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the project folder.
5. Pin the extension to the toolbar.
6. Refresh any already-open YouTube tabs once.

## Usage
1. Open your music tab on YouTube, click the extension icon.
2. Move the slider, type a value or press a preset (e.g. **%2**).
3. Click **📌 Pin this tab as shortcut target** once.
4. From any tab, press `Ctrl+Shift+↑` / `Ctrl+Shift+↓` to change the pinned tab's volume by 1%.
5. **Reset** gives volume control back to YouTube.

You can change the shortcuts at `chrome://extensions/shortcuts`.

## How it works
- A content script (`content.js`) sets `HTMLMediaElement.volume` on the page's media elements and re-applies it when YouTube changes it.
- The value is stored in the tab's `sessionStorage`, so it is per tab and disappears when the tab closes.
- A service worker (`background.js`) handles the keyboard commands and remembers the pinned tab in `chrome.storage.session`.
- The popup (`popup.html`, `popup.js`) is the UI.

## Privacy
This extension collects **no** data, makes **no** network requests and uses no analytics. The only permission is `storage` (to remember the pinned tab for the current browser session). It runs only on YouTube pages.

## Project structure
```
├── manifest.json      # Manifest V3
├── background.js      # keyboard commands, pinned tab
├── content.js         # applies the volume on YouTube pages
├── popup.html / .js   # popup UI
├── LICENSE            # MIT
├── CONTRIBUTING.md
├── CHANGELOG.md
└── README.md / README.tr.md
```

## Contributing
Issues and pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License
[MIT](LICENSE) © 2026 Kubilay Taşkafa

## Author
**Created by [Kubilay Taşkafa](https://www.linkedin.com/in/KULLANICI-ADIN)** — if this extension helps you focus, feel free to connect on LinkedIn or give the repo a ⭐.

---
*This project is not affiliated with or endorsed by YouTube or Google.*
