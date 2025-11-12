/**
 * VS Code Shortcuts Data
 * 88 keyboard shortcuts organized by category
 */

export const shortcutsData = {
  essentials: [
    { id: 'commandPalette-essentials', action: 'commandPalette', windows: 'Ctrl+Shift+P', mac: '⇧+⌘+P', category: 'essentials' },
    { id: 'quickOpen-essentials', action: 'quickOpen', windows: 'Ctrl+P', mac: '⌘+P', category: 'essentials' },
    { id: 'save-essentials', action: 'save', windows: 'Ctrl+S', mac: '⌘+S', category: 'essentials' },
    { id: 'saveAll-essentials', action: 'saveAll', windows: 'Ctrl+K S', mac: '⌥+⌘+S', category: 'essentials' },
    { id: 'find-essentials', action: 'find', windows: 'Ctrl+F', mac: '⌘+F', category: 'essentials' },
    { id: 'replace-essentials', action: 'replace', windows: 'Ctrl+H', mac: '⌥+⌘+F', category: 'essentials' },
    { id: 'commentLine-essentials', action: 'commentLine', windows: 'Ctrl+/', mac: '⌘+/', category: 'essentials' },
    { id: 'undo-essentials', action: 'undo', windows: 'Ctrl+Z', mac: '⌘+Z', category: 'essentials' },
    { id: 'redo-essentials', action: 'redo', windows: 'Ctrl+Y', mac: '⇧+⌘+Z', category: 'essentials' },
    { id: 'terminal-essentials', action: 'terminal', windows: 'Ctrl+`', mac: '⌃+`', category: 'essentials' }
  ],
  editing: [
    { id: 'cutLine-editing', action: 'cutLine', windows: 'Ctrl+X', mac: '⌘+X', category: 'editing' },
    { id: 'copyLine-editing', action: 'copyLine', windows: 'Ctrl+C', mac: '⌘+C', category: 'editing' },
    { id: 'moveLine-editing', action: 'moveLine', windows: 'Alt+↑/↓', mac: '⌥+↑/↓', category: 'editing' },
    { id: 'copyLineUpDown-editing', action: 'copyLineUpDown', windows: 'Shift+Alt+↑/↓', mac: '⇧+⌥+↑/↓', category: 'editing' },
    { id: 'deleteLine-editing', action: 'deleteLine', windows: 'Ctrl+Shift+K', mac: '⇧+⌘+K', category: 'editing' },
    { id: 'insertLineBelow-editing', action: 'insertLineBelow', windows: 'Ctrl+Enter', mac: '⌘+Enter', category: 'editing' },
    { id: 'insertLineAbove-editing', action: 'insertLineAbove', windows: 'Ctrl+Shift+Enter', mac: '⇧+⌘+Enter', category: 'editing' },
    { id: 'jumpToBracket-editing', action: 'jumpToBracket', windows: 'Ctrl+Shift+\\', mac: '⇧+⌘+\\', category: 'editing' },
    { id: 'indent-editing', action: 'indent', windows: 'Ctrl+] / Ctrl+[', mac: '⌘+] / ⌘+[', category: 'editing' },
    { id: 'goToLineStart-editing', action: 'goToLineStart', windows: 'Home / End', mac: 'Home / End', category: 'editing' },
    { id: 'goToFileStart-editing', action: 'goToFileStart', windows: 'Ctrl+Home', mac: '⌘+↑', category: 'editing' },
    { id: 'goToFileEnd-editing', action: 'goToFileEnd', windows: 'Ctrl+End', mac: '⌘+↓', category: 'editing' },
    { id: 'foldRegion-editing', action: 'foldRegion', windows: 'Ctrl+Shift+[', mac: '⌥+⌘+[', category: 'editing' },
    { id: 'unfoldRegion-editing', action: 'unfoldRegion', windows: 'Ctrl+Shift+]', mac: '⌥+⌘+]', category: 'editing' }
  ],
  navigation: [
    { id: 'goToLine-navigation', action: 'goToLine', windows: 'Ctrl+G', mac: '⌃+G', category: 'navigation' },
    { id: 'goToFile-navigation', action: 'goToFile', windows: 'Ctrl+P', mac: '⌘+P', category: 'navigation' },
    { id: 'goToSymbol-navigation', action: 'goToSymbol', windows: 'Ctrl+Shift+O', mac: '⇧+⌘+O', category: 'navigation' },
    { id: 'showAllSymbols-navigation', action: 'showAllSymbols', windows: 'Ctrl+T', mac: '⌘+T', category: 'navigation' },
    { id: 'problemsPanel-navigation', action: 'problemsPanel', windows: 'Ctrl+Shift+M', mac: '⇧+⌘+M', category: 'navigation' },
    { id: 'nextError-navigation', action: 'nextError', windows: 'F8', mac: 'F8', category: 'navigation' },
    { id: 'previousError-navigation', action: 'previousError', windows: 'Shift+F8', mac: '⇧+F8', category: 'navigation' },
    { id: 'navigateHistory-navigation', action: 'navigateHistory', windows: 'Ctrl+Shift+Tab', mac: '⌃+⇧+Tab', category: 'navigation' },
    { id: 'goBackForward-navigation', action: 'goBackForward', windows: 'Alt+← / →', mac: '⌃+- / ⌃+⇧+-', category: 'navigation' }
  ],
  search: [
    { id: 'findInFile-search', action: 'findInFile', windows: 'Ctrl+F', mac: '⌘+F', category: 'search' },
    { id: 'replaceInFile-search', action: 'replaceInFile', windows: 'Ctrl+H', mac: '⌥+⌘+F', category: 'search' },
    { id: 'findNext-search', action: 'findNext', windows: 'F3', mac: '⌘+G', category: 'search' },
    { id: 'findPrevious-search', action: 'findPrevious', windows: 'Shift+F3', mac: '⇧+⌘+G', category: 'search' },
    { id: 'selectAllMatches-search', action: 'selectAllMatches', windows: 'Alt+Enter', mac: '⌥+Enter', category: 'search' },
    { id: 'addSelection-search', action: 'addSelection', windows: 'Ctrl+D', mac: '⌘+D', category: 'search' },
    { id: 'findInFiles-search', action: 'findInFiles', windows: 'Ctrl+Shift+F', mac: '⇧+⌘+F', category: 'search' },
    { id: 'replaceInFiles-search', action: 'replaceInFiles', windows: 'Ctrl+Shift+H', mac: '⇧+⌘+H', category: 'search' }
  ],
  multicursor: [
    { id: 'insertCursor-multicursor', action: 'insertCursor', windows: 'Alt+Click', mac: '⌥+Click', category: 'multicursor' },
    { id: 'insertCursorUpDown-multicursor', action: 'insertCursorUpDown', windows: 'Ctrl+Alt+↑/↓', mac: '⌥+⌘+↑/↓', category: 'multicursor' },
    { id: 'undoCursor-multicursor', action: 'undoCursor', windows: 'Ctrl+U', mac: '⌘+U', category: 'multicursor' },
    { id: 'cursorAtLineEnd-multicursor', action: 'cursorAtLineEnd', windows: 'Shift+Alt+I', mac: '⇧+⌥+I', category: 'multicursor' },
    { id: 'selectLine-multicursor', action: 'selectLine', windows: 'Ctrl+L', mac: '⌘+L', category: 'multicursor' },
    { id: 'selectAllOccurrences-multicursor', action: 'selectAllOccurrences', windows: 'Ctrl+Shift+L', mac: '⇧+⌘+L', category: 'multicursor' },
    { id: 'selectAllInstances-multicursor', action: 'selectAllInstances', windows: 'Ctrl+F2', mac: '⌘+F2', category: 'multicursor' },
    { id: 'expandSelection-multicursor', action: 'expandSelection', windows: 'Shift+Alt+→', mac: '⌃+⇧+⌘+→', category: 'multicursor' },
    { id: 'shrinkSelection-multicursor', action: 'shrinkSelection', windows: 'Shift+Alt+←', mac: '⌃+⇧+⌘+←', category: 'multicursor' }
  ],
  code: [
    { id: 'triggerSuggest-code', action: 'triggerSuggest', windows: 'Ctrl+Space', mac: '⌃+Space', category: 'code' },
    { id: 'triggerParameterHints-code', action: 'triggerParameterHints', windows: 'Ctrl+Shift+Space', mac: '⇧+⌘+Space', category: 'code' },
    { id: 'formatDocument-code', action: 'formatDocument', windows: 'Shift+Alt+F', mac: '⇧+⌥+F', category: 'code' },
    { id: 'formatSelection-code', action: 'formatSelection', windows: 'Ctrl+K Ctrl+F', mac: '⌘+K ⌘+F', category: 'code' },
    { id: 'goToDefinition-code', action: 'goToDefinition', windows: 'F12', mac: 'F12', category: 'code' },
    { id: 'peekDefinition-code', action: 'peekDefinition', windows: 'Alt+F12', mac: '⌥+F12', category: 'code' },
    { id: 'quickFix-code', action: 'quickFix', windows: 'Ctrl+.', mac: '⌘+.', category: 'code' },
    { id: 'showReferences-code', action: 'showReferences', windows: 'Shift+F12', mac: '⇧+F12', category: 'code' },
    { id: 'renameSymbol-code', action: 'renameSymbol', windows: 'F2', mac: 'F2', category: 'code' }
  ],
  files: [
    { id: 'newFile-files', action: 'newFile', windows: 'Ctrl+N', mac: '⌘+N', category: 'files' },
    { id: 'openFile-files', action: 'openFile', windows: 'Ctrl+O', mac: '⌘+O', category: 'files' },
    { id: 'saveFile-files', action: 'saveFile', windows: 'Ctrl+S', mac: '⌘+S', category: 'files' },
    { id: 'saveAs-files', action: 'saveAs', windows: 'Ctrl+Shift+S', mac: '⇧+⌘+S', category: 'files' },
    { id: 'saveAllFiles-files', action: 'saveAllFiles', windows: 'Ctrl+K S', mac: '⌥+⌘+S', category: 'files' },
    { id: 'closeFile-files', action: 'closeFile', windows: 'Ctrl+F4', mac: '⌘+W', category: 'files' },
    { id: 'closeAll-files', action: 'closeAll', windows: 'Ctrl+K Ctrl+W', mac: '⌘+K ⌘+W', category: 'files' },
    { id: 'reopenClosed-files', action: 'reopenClosed', windows: 'Ctrl+Shift+T', mac: '⇧+⌘+T', category: 'files' },
    { id: 'copyPath-files', action: 'copyPath', windows: 'Ctrl+K P', mac: '⌘+K P', category: 'files' }
  ],
  display: [
    { id: 'fullScreen-display', action: 'fullScreen', windows: 'F11', mac: '⌃+⌘+F', category: 'display' },
    { id: 'zoomIn-display', action: 'zoomIn', windows: 'Ctrl+=', mac: '⌘+=', category: 'display' },
    { id: 'zoomOut-display', action: 'zoomOut', windows: 'Ctrl+-', mac: '⇧+⌘+-', category: 'display' },
    { id: 'toggleSidebar-display', action: 'toggleSidebar', windows: 'Ctrl+B', mac: '⌘+B', category: 'display' },
    { id: 'showExplorer-display', action: 'showExplorer', windows: 'Ctrl+Shift+E', mac: '⇧+⌘+E', category: 'display' },
    { id: 'showSearch-display', action: 'showSearch', windows: 'Ctrl+Shift+F', mac: '⇧+⌘+F', category: 'display' },
    { id: 'showSourceControl-display', action: 'showSourceControl', windows: 'Ctrl+Shift+G', mac: '⌃+⇧+G', category: 'display' },
    { id: 'showDebug-display', action: 'showDebug', windows: 'Ctrl+Shift+D', mac: '⇧+⌘+D', category: 'display' },
    { id: 'showExtensions-display', action: 'showExtensions', windows: 'Ctrl+Shift+X', mac: '⇧+⌘+X', category: 'display' },
    { id: 'zenMode-display', action: 'zenMode', windows: 'Ctrl+K Z', mac: '⌘+K Z', category: 'display' }
  ],
  debug: [
    { id: 'toggleBreakpoint-debug', action: 'toggleBreakpoint', windows: 'F9', mac: 'F9', category: 'debug' },
    { id: 'startContinue-debug', action: 'startContinue', windows: 'F5', mac: 'F5', category: 'debug' },
    { id: 'stop-debug', action: 'stop', windows: 'Shift+F5', mac: '⇧+F5', category: 'debug' },
    { id: 'stepInto-debug', action: 'stepInto', windows: 'F11', mac: 'F11', category: 'debug' },
    { id: 'stepOut-debug', action: 'stepOut', windows: 'Shift+F11', mac: '⇧+F11', category: 'debug' },
    { id: 'stepOver-debug', action: 'stepOver', windows: 'F10', mac: 'F10', category: 'debug' }
  ],
  terminal: [
    { id: 'showTerminal-terminal', action: 'showTerminal', windows: 'Ctrl+`', mac: '⌃+`', category: 'terminal' },
    { id: 'newTerminal-terminal', action: 'newTerminal', windows: 'Ctrl+Shift+`', mac: '⌃+⇧+`', category: 'terminal' },
    { id: 'copySelection-terminal', action: 'copySelection', windows: 'Ctrl+C', mac: '⌘+C', category: 'terminal' },
    { id: 'paste-terminal', action: 'paste', windows: 'Ctrl+V', mac: '⌘+V', category: 'terminal' }
  ]
}

/**
 * Get all shortcuts as a flat array
 */
export const getAllShortcuts = () => {
  return Object.values(shortcutsData).flat()
}

/**
 * Get shortcuts by category
 */
export const getShortcutsByCategory = (category) => {
  return shortcutsData[category] || []
}

/**
 * Get count of shortcuts in a category
 */
export const getCategoryCount = (category, favorites = [], learnt = []) => {
  if (category === 'all') return getAllShortcuts().length
  if (category === 'favorites') return favorites.length
  if (category === 'learnt') return learnt.length
  return getAllShortcuts().filter(s => s.category === category).length
}

/**
 * Available categories
 */
export const categories = [
  'all',
  'favorites',
  'learnt',
  'essentials',
  'editing',
  'navigation',
  'search',
  'multicursor',
  'code',
  'files',
  'display',
  'debug',
  'terminal'
]
