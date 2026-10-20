# Contributing

Thanks for your interest! Contributions of all sizes are welcome: bug reports, ideas, docs and code.

## Reporting bugs
Open an issue and include:
- Chrome version and operating system
- Steps to reproduce
- Expected vs. actual behavior
- Whether the tab was `youtube.com` or `music.youtube.com`

## Suggesting features
Open an issue describing the problem you want solved before writing code. Keep in mind the project goal: **small, private, dependency-free**.

## Development setup
No build step is needed.
1. Fork and clone the repository.
2. Open `chrome://extensions`, enable **Developer mode**.
3. Click **Load unpacked** and select the project folder.
4. After editing code, click the reload icon on the extension card and refresh your YouTube tab.

## Pull request guidelines
- Keep PRs focused on a single change.
- Do not add runtime dependencies or analytics/tracking of any kind.
- Do not request new permissions without a strong reason, and explain it in the PR.
- Update `README.md` / `README.tr.md` and `CHANGELOG.md` when behavior changes.
- Manually test: slider, presets, shortcuts, pinned tab, reset, and navigating to a new video.

## Code style
- Plain JavaScript (ES2020+), Manifest V3.
- 2-space indentation, semicolons, descriptive names.

## License
By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
