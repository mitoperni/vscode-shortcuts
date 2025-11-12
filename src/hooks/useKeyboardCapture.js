import { useState, useEffect } from 'react'
import {
  normalizeKey,
  keysToShortcut,
  getModifierKeys,
  isModifierKey,
  shouldIgnoreEvent
} from '../utils/keyboardUtils'

/**
 * Custom hook for capturing keyboard shortcuts
 * @param {boolean} isActive - Whether the capture is currently active
 * @param {string} os - The operating system ('windows' or 'mac')
 * @returns {Object} Capture state and methods
 */
export const useKeyboardCapture = (isActive, os) => {
  const [capturedShortcuts, setCapturedShortcuts] = useState([])
  const [pressedKeys, setPressedKeys] = useState([])
  const [currentAnswer, setCurrentAnswer] = useState('')

  // Handle keyboard events
  useEffect(() => {
    if (!isActive) return

    const handleKeyDown = (e) => {
      if (shouldIgnoreEvent(e)) return
      e.preventDefault()

      const key = normalizeKey(e.key, os)
      const modifiers = getModifierKeys(e, os)
      const newKeys = [...modifiers]

      // Add the main key if it's not a modifier
      if (!isModifierKey(key)) {
        newKeys.push(key.length === 1 ? key.toUpperCase() : key)
      }

      setPressedKeys(newKeys)
    }

    const handleKeyUp = (e) => {
      if (shouldIgnoreEvent(e)) return
      e.preventDefault()

      // When all keys are released, add the shortcut to the sequence
      setTimeout(() => {
        if (!e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey) {
          setPressedKeys(currentKeys => {
            if (currentKeys.length > 0) {
              const shortcut = keysToShortcut(currentKeys)
              setCapturedShortcuts(prev => {
                const updated = [...prev, shortcut]
                setCurrentAnswer(updated.join(' '))
                return updated
              })
            }
            return []
          })
        }
      }, 50)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [isActive, os])

  const clear = () => {
    setCapturedShortcuts([])
    setPressedKeys([])
    setCurrentAnswer('')
  }

  return {
    capturedShortcuts,
    pressedKeys,
    currentAnswer,
    clear
  }
}
