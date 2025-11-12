/**
 * Keyboard utility functions for normalizing and converting key inputs
 */

/**
 * Normalize key names for consistent comparison across different browsers/OS
 * @param {string} key - The raw key from keyboard event
 * @param {string} os - The operating system ('windows' or 'mac')
 * @param {string} code - The physical key code from keyboard event
 * @returns {string} Normalized key name
 */
export const normalizeKey = (key, os, code) => {
  // Handle Dead keys using the physical key code
  if (key === 'Dead' && code) {
    const deadKeyMap = {
      'Backquote': '`',
      'Quote': '´',
      'BracketLeft': '¨',
      'KeyN': '~'
    }
    if (deadKeyMap[code]) {
      return deadKeyMap[code]
    }
  }

  const keyMap = {
    'Control': 'Ctrl',
    'Meta': os === 'mac' ? '⌘' : 'Ctrl',
    'ArrowUp': '↑',
    'ArrowDown': '↓',
    'ArrowLeft': '←',
    'ArrowRight': '→',
    ' ': 'Space',
    'Delete': 'Del',
    'Tab': 'Tab'
  }
  return keyMap[key] || key
}

/**
 * Convert an array of pressed keys to a shortcut string format
 * @param {string[]} keys - Array of pressed keys
 * @returns {string} Formatted shortcut string (e.g., "Ctrl+Shift+K")
 */
export const keysToShortcut = (keys) => {
  if (keys.length === 0) return ''

  const modifierOrder = ['Ctrl', '⌃', '⌘', 'Alt', '⌥', '⇧', 'Shift']
  const modifiers = keys
    .filter(k => modifierOrder.includes(k))
    .sort((a, b) => modifierOrder.indexOf(a) - modifierOrder.indexOf(b))
  const regularKeys = keys.filter(k => !modifierOrder.includes(k))

  return [...modifiers, ...regularKeys].join('+')
}

/**
 * Extract modifier keys from a keyboard event
 * @param {KeyboardEvent} event - The keyboard event
 * @param {string} os - The operating system ('windows' or 'mac')
 * @returns {string[]} Array of active modifier keys
 */
export const getModifierKeys = (event, os) => {
  const modifiers = []

  // Control key (⌃ on Mac)
  if (event.ctrlKey && !event.metaKey) {
    modifiers.push(os === 'mac' ? '⌃' : 'Ctrl')
  }

  // Command/Meta key (⌘ on Mac, Windows key on Windows)
  if (event.metaKey) {
    modifiers.push(os === 'mac' ? '⌘' : 'Ctrl')
  }

  // Alt/Option key
  if (event.altKey) {
    modifiers.push(os === 'mac' ? '⌥' : 'Alt')
  }

  // Shift key
  if (event.shiftKey) {
    modifiers.push(os === 'mac' ? '⇧' : 'Shift')
  }

  return modifiers
}

/**
 * Check if a key is a modifier key
 * @param {string} key - The key to check
 * @returns {boolean} True if the key is a modifier
 */
export const isModifierKey = (key) => {
  return ['Control', 'Meta', 'Alt', 'Option', 'Shift', 'Cmd', 'Ctrl', '⌃', '⌘', '⌥', '⇧'].includes(key)
}

/**
 * Check if an event should be ignored for shortcut capture
 * @param {KeyboardEvent} event - The keyboard event
 * @returns {boolean} True if the event should be ignored
 */
export const shouldIgnoreEvent = (event) => {
  // Ignore Tab only if no modifiers are pressed (to allow Ctrl+Tab, Shift+Tab, etc.)
  if (event.key === 'Tab' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey) {
    return true
  }

  // Always ignore Escape and clicks on buttons
  return event.key === 'Escape' || event.target.tagName === 'BUTTON'
}
