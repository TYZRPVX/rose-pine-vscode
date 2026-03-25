import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const themesDir = join(__dirname, '..', 'themes')

const variants = [
	{
		input: 'rose-pine-color-theme.json',
		output: 'rose-pine-bordered-color-theme.json',
		name: 'Rosé Pine Bordered',
	},
	{
		input: 'rose-pine-moon-color-theme.json',
		output: 'rose-pine-moon-bordered-color-theme.json',
		name: 'Rosé Pine Moon Bordered',
	},
	{
		input: 'rose-pine-dawn-color-theme.json',
		output: 'rose-pine-dawn-bordered-color-theme.json',
		name: 'Rosé Pine Dawn Bordered',
	},
]

const borderColors = {
	'rose-pine-color-theme.json': {
		border: '#26233a',
		accent: '#ebbcba',
		muted: '#6e6a86',
	},
	'rose-pine-moon-color-theme.json': {
		border: '#393552',
		accent: '#ea9a97',
		muted: '#817c9c',
	},
	'rose-pine-dawn-color-theme.json': {
		border: '#f2e9e1',
		accent: '#d7827e',
		muted: '#9893a5',
	},
}

const borderPatches = (colors) => ({
	'activityBar.border': colors.border,
	'sideBar.border': colors.border,
	'editorGroup.border': colors.border,
	'editorGroupHeader.tabsBorder': colors.border,
	'tab.border': colors.border,
	'panel.border': colors.border,
	'statusBar.border': colors.border,
	'titleBar.border': colors.border,
	'editorOverviewRuler.border': colors.border,
	'editorWidget.border': colors.border,
	'editorStickyScroll.border': colors.border,
	'sideBarStickyScroll.border': colors.border,
	'terminalStickyScroll.border': colors.border,
	'terminal.border': colors.border,
	'commandCenter.border': colors.border,
	'commandCenter.inactiveBorder': colors.border,
	'widget.border': colors.border,
	'editorHoverWidget.border': colors.border,
	'editorSuggestWidget.border': colors.border,
	'panelStickyScroll.border': colors.border,
	'sideBarSectionHeader.border': colors.border,
	'menu.border': colors.border,
	'multiDiffEditor.border': colors.border,
	'inlineChat.border': colors.border,
	'inlineChatInput.border': colors.border,
	'tab.activeBorderTop': colors.accent,
	'tab.unfocusedActiveBorderTop': colors.muted,
	'panelTitle.activeBorder': colors.accent,
})

for (const variant of variants) {
	const inputPath = join(themesDir, variant.input)
	const outputPath = join(themesDir, variant.output)

	const theme = JSON.parse(readFileSync(inputPath, 'utf-8'))
	const patches = borderPatches(borderColors[variant.input])

	theme.name = variant.name
	Object.assign(theme.colors, patches)

	writeFileSync(outputPath, JSON.stringify(theme, null, '\t') + '\n')
	console.log(`  wrote ${variant.output}`)
}
