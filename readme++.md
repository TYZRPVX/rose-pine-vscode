# Local Development & Installation

## Quick Start

```bash
git clone https://github.com/rose-pine/vscode.git
cd vscode
npm install
npm run build
```

## Install Locally

### Option 1 — Symlink (recommended for development)

```bash
ln -s "$(pwd)" ~/.vscode/extensions/rose-pine
```

Restart VS Code, then select a theme from the command palette (`Cmd+Shift+P` / `Ctrl+Shift+P` → "Color Theme").

### Option 2 — Debug (F5)

Open this repo in VS Code, press `F5`. A new Extension Development Host window opens with the themes available.

### Option 3 — VSIX Package

```bash
npm install -g @vscode/vsce
vsce package
code --install-extension rose-pine-*.vsix
```

## Available Themes

| Theme                   | Style           |
| ----------------------- | --------------- |
| Rosé Pine               | Dark            |
| Rosé Pine Moon          | Dark            |
| Rosé Pine Dawn          | Light           |
| Rosé Pine Bordered      | Dark + borders  |
| Rosé Pine Moon Bordered | Dark + borders  |
| Rosé Pine Dawn Bordered | Light + borders |

Each theme also has a **(no italics)** variant (except bordered).

## Rebuild After Changes

```bash
npm run build
```

This runs Pinecone to regenerate base themes, then `scripts/build-bordered.js` to produce bordered variants, then Prettier.

Use `npm run watch` during development for auto-rebuild on template changes (bordered variants need a manual `node scripts/build-bordered.js` after).
