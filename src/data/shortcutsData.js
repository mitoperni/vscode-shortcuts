/**
 * VS Code Shortcuts Data
 * 120+ keyboard shortcuts organized by category with relevance scores
 * Relevance scale: 10 (most used) to 1 (rarely used)
 */

export const shortcutsData = {
  essentials: [
    { id: 'commandPalette-essentials', action: 'commandPalette', windows: 'Ctrl+Shift+P', mac: '⇧+⌘+P', category: 'essentials', relevance: 10 },
    { id: 'quickOpen-essentials', action: 'quickOpen', windows: 'Ctrl+P', mac: '⌘+P', category: 'essentials', relevance: 10 },
    { id: 'save-essentials', action: 'save', windows: 'Ctrl+S', mac: '⌘+S', category: 'essentials', relevance: 10 },
    { id: 'find-essentials', action: 'find', windows: 'Ctrl+F', mac: '⌘+F', category: 'essentials', relevance: 10 },
    { id: 'terminal-essentials', action: 'terminal', windows: 'Ctrl+`', mac: '⌃+`', category: 'essentials', relevance: 9 },
    { id: 'commentLine-essentials', action: 'commentLine', windows: 'Ctrl+/', mac: '⌘+/', category: 'essentials', relevance: 9 },
    { id: 'replace-essentials', action: 'replace', windows: 'Ctrl+H', mac: '⌥+⌘+F', category: 'essentials', relevance: 8 },
    { id: 'undo-essentials', action: 'undo', windows: 'Ctrl+Z', mac: '⌘+Z', category: 'essentials', relevance: 9 },
    { id: 'redo-essentials', action: 'redo', windows: 'Ctrl+Y', mac: '⇧+⌘+Z', category: 'essentials', relevance: 8 },
    { id: 'saveAll-essentials', action: 'saveAll', windows: 'Ctrl+K S', mac: '⌥+⌘+S', category: 'essentials', relevance: 7 },
    { id: 'settings-essentials', action: 'settings', windows: 'Ctrl+,', mac: '⌘+,', category: 'essentials', relevance: 6 },
    { id: 'keyboardShortcuts-essentials', action: 'keyboardShortcuts', windows: 'Ctrl+K Ctrl+S', mac: '⌘+K ⌘+S', category: 'essentials', relevance: 5 }
  ],
  editing: [
    { id: 'moveLine-editing', action: 'moveLine', windows: 'Alt+↑/↓', mac: '⌥+↑/↓', category: 'editing', relevance: 9 },
    { id: 'copyLineUpDown-editing', action: 'copyLineUpDown', windows: 'Shift+Alt+↑/↓', mac: '⇧+⌥+↑/↓', category: 'editing', relevance: 8 },
    { id: 'deleteLine-editing', action: 'deleteLine', windows: 'Ctrl+Shift+K', mac: '⇧+⌘+K', category: 'editing', relevance: 8 },
    { id: 'cutLine-editing', action: 'cutLine', windows: 'Ctrl+X', mac: '⌘+X', category: 'editing', relevance: 8 },
    { id: 'copyLine-editing', action: 'copyLine', windows: 'Ctrl+C', mac: '⌘+C', category: 'editing', relevance: 9 },
    { id: 'paste-editing', action: 'paste', windows: 'Ctrl+V', mac: '⌘+V', category: 'editing', relevance: 9 },
    { id: 'insertLineBelow-editing', action: 'insertLineBelow', windows: 'Ctrl+Enter', mac: '⌘+Enter', category: 'editing', relevance: 8 },
    { id: 'insertLineAbove-editing', action: 'insertLineAbove', windows: 'Ctrl+Shift+Enter', mac: '⇧+⌘+Enter', category: 'editing', relevance: 7 },
    { id: 'indent-editing', action: 'indent', windows: 'Ctrl+]', mac: '⌘+]', category: 'editing', relevance: 7 },
    { id: 'outdent-editing', action: 'outdent', windows: 'Ctrl+[', mac: '⌘+[', category: 'editing', relevance: 7 },
    { id: 'jumpToBracket-editing', action: 'jumpToBracket', windows: 'Ctrl+Shift+\\', mac: '⇧+⌘+\\', category: 'editing', relevance: 6 },
    { id: 'goToLineStart-editing', action: 'goToLineStart', windows: 'Home', mac: 'Home', category: 'editing', relevance: 7 },
    { id: 'goToLineEnd-editing', action: 'goToLineEnd', windows: 'End', mac: 'End', category: 'editing', relevance: 7 },
    { id: 'goToFileStart-editing', action: 'goToFileStart', windows: 'Ctrl+Home', mac: '⌘+↑', category: 'editing', relevance: 6 },
    { id: 'goToFileEnd-editing', action: 'goToFileEnd', windows: 'Ctrl+End', mac: '⌘+↓', category: 'editing', relevance: 6 },
    { id: 'foldRegion-editing', action: 'foldRegion', windows: 'Ctrl+Shift+[', mac: '⌥+⌘+[', category: 'editing', relevance: 6 },
    { id: 'unfoldRegion-editing', action: 'unfoldRegion', windows: 'Ctrl+Shift+]', mac: '⌥+⌘+]', category: 'editing', relevance: 6 },
    { id: 'foldAll-editing', action: 'foldAll', windows: 'Ctrl+K Ctrl+0', mac: '⌘+K ⌘+0', category: 'editing', relevance: 4 },
    { id: 'unfoldAll-editing', action: 'unfoldAll', windows: 'Ctrl+K Ctrl+J', mac: '⌘+K ⌘+J', category: 'editing', relevance: 4 },
    { id: 'trimTrailingWhitespace-editing', action: 'trimTrailingWhitespace', windows: 'Ctrl+K Ctrl+X', mac: '⌘+K ⌘+X', category: 'editing', relevance: 5 },
    { id: 'toggleWordWrap-editing', action: 'toggleWordWrap', windows: 'Alt+Z', mac: '⌥+Z', category: 'editing', relevance: 5 }
  ],
  navigation: [
    { id: 'goToLine-navigation', action: 'goToLine', windows: 'Ctrl+G', mac: '⌃+G', category: 'navigation', relevance: 9 },
    { id: 'goToFile-navigation', action: 'goToFile', windows: 'Ctrl+P', mac: '⌘+P', category: 'navigation', relevance: 10 },
    { id: 'goToSymbol-navigation', action: 'goToSymbol', windows: 'Ctrl+Shift+O', mac: '⇧+⌘+O', category: 'navigation', relevance: 8 },
    { id: 'showAllSymbols-navigation', action: 'showAllSymbols', windows: 'Ctrl+T', mac: '⌘+T', category: 'navigation', relevance: 7 },
    { id: 'goBack-navigation', action: 'goBack', windows: 'Alt+←', mac: '⌃+-', category: 'navigation', relevance: 8 },
    { id: 'goForward-navigation', action: 'goForward', windows: 'Alt+→', mac: '⌃+⇧+-', category: 'navigation', relevance: 7 },
    { id: 'nextError-navigation', action: 'nextError', windows: 'F8', mac: 'F8', category: 'navigation', relevance: 7 },
    { id: 'previousError-navigation', action: 'previousError', windows: 'Shift+F8', mac: '⇧+F8', category: 'navigation', relevance: 6 },
    { id: 'problemsPanel-navigation', action: 'problemsPanel', windows: 'Ctrl+Shift+M', mac: '⇧+⌘+M', category: 'navigation', relevance: 6 },
    { id: 'navigateEditorGroup-navigation', action: 'navigateEditorGroup', windows: 'Ctrl+1/2/3', mac: '⌘+1/2/3', category: 'navigation', relevance: 7 },
    { id: 'navigateHistory-navigation', action: 'navigateHistory', windows: 'Ctrl+Tab', mac: '⌃+Tab', category: 'navigation', relevance: 6 },
    { id: 'openRecent-navigation', action: 'openRecent', windows: 'Ctrl+R', mac: '⌃+R', category: 'navigation', relevance: 6 }
  ],
  search: [
    { id: 'findInFile-search', action: 'findInFile', windows: 'Ctrl+F', mac: '⌘+F', category: 'search', relevance: 10 },
    { id: 'findInFiles-search', action: 'findInFiles', windows: 'Ctrl+Shift+F', mac: '⇧+⌘+F', category: 'search', relevance: 9 },
    { id: 'replaceInFile-search', action: 'replaceInFile', windows: 'Ctrl+H', mac: '⌥+⌘+F', category: 'search', relevance: 8 },
    { id: 'addSelection-search', action: 'addSelection', windows: 'Ctrl+D', mac: '⌘+D', category: 'search', relevance: 9 },
    { id: 'findNext-search', action: 'findNext', windows: 'F3', mac: '⌘+G', category: 'search', relevance: 8 },
    { id: 'findPrevious-search', action: 'findPrevious', windows: 'Shift+F3', mac: '⇧+⌘+G', category: 'search', relevance: 7 },
    { id: 'selectAllMatches-search', action: 'selectAllMatches', windows: 'Alt+Enter', mac: '⌥+Enter', category: 'search', relevance: 7 },
    { id: 'replaceInFiles-search', action: 'replaceInFiles', windows: 'Ctrl+Shift+H', mac: '⇧+⌘+H', category: 'search', relevance: 6 },
    { id: 'toggleCaseSensitive-search', action: 'toggleCaseSensitive', windows: 'Alt+C', mac: '⌥+⌘+C', category: 'search', relevance: 5 },
    { id: 'toggleRegex-search', action: 'toggleRegex', windows: 'Alt+R', mac: '⌥+⌘+R', category: 'search', relevance: 5 },
    { id: 'toggleWholeWord-search', action: 'toggleWholeWord', windows: 'Alt+W', mac: '⌥+⌘+W', category: 'search', relevance: 5 }
  ],
  multicursor: [
    { id: 'addSelection-multicursor', action: 'addSelection', windows: 'Ctrl+D', mac: '⌘+D', category: 'multicursor', relevance: 9 },
    { id: 'selectAllOccurrences-multicursor', action: 'selectAllOccurrences', windows: 'Ctrl+Shift+L', mac: '⇧+⌘+L', category: 'multicursor', relevance: 9 },
    { id: 'insertCursor-multicursor', action: 'insertCursor', windows: 'Alt+Click', mac: '⌥+Click', category: 'multicursor', relevance: 8 },
    { id: 'insertCursorUpDown-multicursor', action: 'insertCursorUpDown', windows: 'Ctrl+Alt+↑/↓', mac: '⌥+⌘+↑/↓', category: 'multicursor', relevance: 8 },
    { id: 'selectAllInstances-multicursor', action: 'selectAllInstances', windows: 'Ctrl+F2', mac: '⌘+F2', category: 'multicursor', relevance: 7 },
    { id: 'columnSelection-multicursor', action: 'columnSelection', windows: 'Shift+Alt+Drag', mac: '⇧+⌥+Drag', category: 'multicursor', relevance: 7 },
    { id: 'selectLine-multicursor', action: 'selectLine', windows: 'Ctrl+L', mac: '⌘+L', category: 'multicursor', relevance: 7 },
    { id: 'cursorAtLineEnd-multicursor', action: 'cursorAtLineEnd', windows: 'Shift+Alt+I', mac: '⇧+⌥+I', category: 'multicursor', relevance: 6 },
    { id: 'undoCursor-multicursor', action: 'undoCursor', windows: 'Ctrl+U', mac: '⌘+U', category: 'multicursor', relevance: 6 },
    { id: 'expandSelection-multicursor', action: 'expandSelection', windows: 'Shift+Alt+→', mac: '⌃+⇧+⌘+→', category: 'multicursor', relevance: 5 },
    { id: 'shrinkSelection-multicursor', action: 'shrinkSelection', windows: 'Shift+Alt+←', mac: '⌃+⇧+⌘+←', category: 'multicursor', relevance: 5 }
  ],
  code: [
    { id: 'goToDefinition-code', action: 'goToDefinition', windows: 'F12', mac: 'F12', category: 'code', relevance: 9 },
    { id: 'quickFix-code', action: 'quickFix', windows: 'Ctrl+.', mac: '⌘+.', category: 'code', relevance: 9 },
    { id: 'triggerSuggest-code', action: 'triggerSuggest', windows: 'Ctrl+Space', mac: '⌃+Space', category: 'code', relevance: 9 },
    { id: 'formatDocument-code', action: 'formatDocument', windows: 'Shift+Alt+F', mac: '⇧+⌥+F', category: 'code', relevance: 8 },
    { id: 'renameSymbol-code', action: 'renameSymbol', windows: 'F2', mac: 'F2', category: 'code', relevance: 8 },
    { id: 'peekDefinition-code', action: 'peekDefinition', windows: 'Alt+F12', mac: '⌥+F12', category: 'code', relevance: 7 },
    { id: 'showReferences-code', action: 'showReferences', windows: 'Shift+F12', mac: '⇧+F12', category: 'code', relevance: 7 },
    { id: 'triggerParameterHints-code', action: 'triggerParameterHints', windows: 'Ctrl+Shift+Space', mac: '⇧+⌘+Space', category: 'code', relevance: 7 },
    { id: 'formatSelection-code', action: 'formatSelection', windows: 'Ctrl+K Ctrl+F', mac: '⌘+K ⌘+F', category: 'code', relevance: 6 },
    { id: 'goToImplementation-code', action: 'goToImplementation', windows: 'Ctrl+F12', mac: '⌘+F12', category: 'code', relevance: 6 },
    { id: 'showHover-code', action: 'showHover', windows: 'Ctrl+K Ctrl+I', mac: '⌘+K ⌘+I', category: 'code', relevance: 5 }
  ],
  files: [
    { id: 'saveFile-files', action: 'saveFile', windows: 'Ctrl+S', mac: '⌘+S', category: 'files', relevance: 10 },
    { id: 'newFile-files', action: 'newFile', windows: 'Ctrl+N', mac: '⌘+N', category: 'files', relevance: 8 },
    { id: 'openFile-files', action: 'openFile', windows: 'Ctrl+O', mac: '⌘+O', category: 'files', relevance: 7 },
    { id: 'closeFile-files', action: 'closeFile', windows: 'Ctrl+F4', mac: '⌘+W', category: 'files', relevance: 8 },
    { id: 'saveAs-files', action: 'saveAs', windows: 'Ctrl+Shift+S', mac: '⇧+⌘+S', category: 'files', relevance: 7 },
    { id: 'saveAllFiles-files', action: 'saveAllFiles', windows: 'Ctrl+K S', mac: '⌥+⌘+S', category: 'files', relevance: 6 },
    { id: 'reopenClosed-files', action: 'reopenClosed', windows: 'Ctrl+Shift+T', mac: '⇧+⌘+T', category: 'files', relevance: 7 },
    { id: 'closeAll-files', action: 'closeAll', windows: 'Ctrl+K Ctrl+W', mac: '⌘+K ⌘+W', category: 'files', relevance: 5 },
    { id: 'closeOthers-files', action: 'closeOthers', windows: 'Ctrl+K W', mac: '⌘+K W', category: 'files', relevance: 4 },
    { id: 'closeFolder-files', action: 'closeFolder', windows: 'Ctrl+K F', mac: '⌘+K F', category: 'files', relevance: 3 },
    { id: 'copyPath-files', action: 'copyPath', windows: 'Ctrl+K P', mac: '⌘+K P', category: 'files', relevance: 5 },
    { id: 'revealInExplorer-files', action: 'revealInExplorer', windows: 'Ctrl+K R', mac: '⌘+K R', category: 'files', relevance: 4 }
  ],
  display: [
    { id: 'toggleSidebar-display', action: 'toggleSidebar', windows: 'Ctrl+B', mac: '⌘+B', category: 'display', relevance: 9 },
    { id: 'showExplorer-display', action: 'showExplorer', windows: 'Ctrl+Shift+E', mac: '⇧+⌘+E', category: 'display', relevance: 8 },
    { id: 'togglePanel-display', action: 'togglePanel', windows: 'Ctrl+J', mac: '⌘+J', category: 'display', relevance: 8 },
    { id: 'splitEditor-display', action: 'splitEditor', windows: 'Ctrl+\\', mac: '⌘+\\', category: 'display', relevance: 8 },
    { id: 'showSearch-display', action: 'showSearch', windows: 'Ctrl+Shift+F', mac: '⇧+⌘+F', category: 'display', relevance: 7 },
    { id: 'showSourceControl-display', action: 'showSourceControl', windows: 'Ctrl+Shift+G', mac: '⌃+⇧+G', category: 'display', relevance: 7 },
    { id: 'showDebug-display', action: 'showDebug', windows: 'Ctrl+Shift+D', mac: '⇧+⌘+D', category: 'display', relevance: 6 },
    { id: 'showExtensions-display', action: 'showExtensions', windows: 'Ctrl+Shift+X', mac: '⇧+⌘+X', category: 'display', relevance: 6 },
    { id: 'zoomIn-display', action: 'zoomIn', windows: 'Ctrl+=', mac: '⌘+=', category: 'display', relevance: 5 },
    { id: 'zoomOut-display', action: 'zoomOut', windows: 'Ctrl+-', mac: '⌘+-', category: 'display', relevance: 5 },
    { id: 'resetZoom-display', action: 'resetZoom', windows: 'Ctrl+Numpad0', mac: '⌘+Numpad0', category: 'display', relevance: 3 },
    { id: 'fullScreen-display', action: 'fullScreen', windows: 'F11', mac: '⌃+⌘+F', category: 'display', relevance: 5 },
    { id: 'zenMode-display', action: 'zenMode', windows: 'Ctrl+K Z', mac: '⌘+K Z', category: 'display', relevance: 4 },
    { id: 'focusEditorGroup-display', action: 'focusEditorGroup', windows: 'Ctrl+1/2/3', mac: '⌘+1/2/3', category: 'display', relevance: 7 },
    { id: 'moveSidebarRight-display', action: 'moveSidebarRight', windows: 'Ctrl+Alt+B', mac: '⌘+⌥+B', category: 'display', relevance: 2 }
  ],
  debug: [
    { id: 'startContinue-debug', action: 'startContinue', windows: 'F5', mac: 'F5', category: 'debug', relevance: 8 },
    { id: 'toggleBreakpoint-debug', action: 'toggleBreakpoint', windows: 'F9', mac: 'F9', category: 'debug', relevance: 8 },
    { id: 'stepOver-debug', action: 'stepOver', windows: 'F10', mac: 'F10', category: 'debug', relevance: 7 },
    { id: 'stepInto-debug', action: 'stepInto', windows: 'F11', mac: 'F11', category: 'debug', relevance: 6 },
    { id: 'stepOut-debug', action: 'stepOut', windows: 'Shift+F11', mac: '⇧+F11', category: 'debug', relevance: 6 },
    { id: 'stop-debug', action: 'stop', windows: 'Shift+F5', mac: '⇧+F5', category: 'debug', relevance: 7 },
    { id: 'restart-debug', action: 'restart', windows: 'Ctrl+Shift+F5', mac: '⇧+⌘+F5', category: 'debug', relevance: 5 },
    { id: 'showDebugConsole-debug', action: 'showDebugConsole', windows: 'Ctrl+Shift+Y', mac: '⇧+⌘+Y', category: 'debug', relevance: 5 }
  ],
  terminal: [
    { id: 'showTerminal-terminal', action: 'showTerminal', windows: 'Ctrl+`', mac: '⌃+`', category: 'terminal', relevance: 9 },
    { id: 'newTerminal-terminal', action: 'newTerminal', windows: 'Ctrl+Shift+`', mac: '⌃+⇧+`', category: 'terminal', relevance: 7 },
    { id: 'copySelection-terminal', action: 'copySelection', windows: 'Ctrl+C', mac: '⌘+C', category: 'terminal', relevance: 8 },
    { id: 'paste-terminal', action: 'paste', windows: 'Ctrl+V', mac: '⌘+V', category: 'terminal', relevance: 8 },
    { id: 'clearTerminal-terminal', action: 'clearTerminal', windows: 'Ctrl+K', mac: '⌘+K', category: 'terminal', relevance: 6 },
    { id: 'killTerminal-terminal', action: 'killTerminal', windows: 'Ctrl+Shift+K', mac: '⌘+⌥+⌫', category: 'terminal', relevance: 4 },
    { id: 'scrollUp-terminal', action: 'scrollUp', windows: 'Ctrl+↑', mac: '⌘+↑', category: 'terminal', relevance: 5 },
    { id: 'scrollDown-terminal', action: 'scrollDown', windows: 'Ctrl+↓', mac: '⌘+↓', category: 'terminal', relevance: 5 },
    { id: 'focusTerminal-terminal', action: 'focusTerminal', windows: 'Ctrl+`', mac: '⌃+`', category: 'terminal', relevance: 7 }
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
 * Get shortcuts sorted by relevance (highest first)
 */
export const getShortcutsByRelevance = (shortcuts) => {
  return [...shortcuts].sort((a, b) => (b.relevance || 0) - (a.relevance || 0))
}

/**
 * Get top N most relevant shortcuts
 */
export const getTopShortcuts = (limit = 20) => {
  return getShortcutsByRelevance(getAllShortcuts()).slice(0, limit)
}

/**
 * Check if a shortcut contains special characters that require Option/Alt on Spanish keyboards
 * or ambiguous notation like "↑/↓" that represents multiple shortcuts
 * These characters cause issues in practice mode
 */
const hasProblematicCharacters = (shortcut) => {
  const problematicChars = ['[', ']', '{', '}', '\\', '`', '~', '´', '¨', '/']
  return problematicChars.some(char =>
    shortcut.windows.includes(char) || shortcut.mac.includes(char)
  )
}

/**
 * Get shortcuts safe for practice mode (no special chars, high relevance)
 * Filters out shortcuts with characters that require Option/Alt on Spanish keyboards
 * Only includes shortcuts with relevance >= 7
 */
export const getPracticeShortcuts = () => {
  return getAllShortcuts()
    .filter(s => s.relevance >= 7) // Only high-relevance shortcuts
    .filter(s => !hasProblematicCharacters(s)) // Exclude problematic shortcuts
}

/**
 * Get count of shortcuts in a category
 */
export const getCategoryCount = (category, favorites = []) => {
  if (category === 'all') return getAllShortcuts().length
  if (category === 'favorites') return favorites.length
  return getAllShortcuts().filter(s => s.category === category).length
}

/**
 * Available categories
 */
export const categories = [
  'all',
  'favorites',
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
