import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'

/**
 * VS Code Shortcuts Bootcamp - Main Application Component
 *
 * This is a complete React application built with:
 * - React Hooks (useState, useEffect)
 * - Bootstrap 5.3 for styling
 * - react-i18next for internationalization (EN/ES)
 * - LocalStorage for data persistence
 *
 * Features:
 * - 88 VS Code shortcuts (Windows & Mac)
 * - 51 Git commands
 * - Search and filtering
 * - Favorites and progress tracking
 * - Interactive practice mode
 * - Dark/Light theme
 * - Responsive design
 */
function App() {
  // i18next hook for translations: t() = translate, i18n = language manager
  const { t, i18n } = useTranslation()

  // ========== React State Management ==========
  // All application state is managed with useState hooks

  // UI States
  const [theme, setTheme] = useState('dark')                    // 'dark' or 'light'
  const [os, setOs] = useState('windows')                        // 'windows' or 'mac'
  const [activeTab, setActiveTab] = useState('shortcuts')        // 'shortcuts', 'git', or 'practice'

  // Filter States
  const [searchTerm, setSearchTerm] = useState('')               // Search input value
  const [selectedCategory, setSelectedCategory] = useState('all') // Selected filter category

  // User Data States (saved to LocalStorage)
  const [favorites, setFavorites] = useState([])                 // Array of favorite shortcut IDs
  const [learned, setLearned] = useState([])                     // Array of learned shortcut IDs

  // Practice Mode States
  const [practiceMode, setPracticeMode] = useState(false)        // Is practice mode active?
  const [practiceOS, setPracticeOS] = useState('')               // OS selected for practice
  const [currentQuestion, setCurrentQuestion] = useState(null)   // Current practice question
  const [userAnswer, setUserAnswer] = useState('')               // User's answer input
  const [feedback, setFeedback] = useState(null)                 // Feedback after answer
  const [practiceStats, setPracticeStats] = useState({ correct: 0, total: 0 }) // Practice statistics
  const [lastQuestion, setLastQuestion] = useState(null)         // To avoid repeating questions

  // Shortcuts data structure
  const shortcutsData = {
    essentials: [
      { id: 'commandPalette-essentials', action: 'commandPalette', windows: 'Ctrl+Shift+P', mac: '⇧⌘P', category: 'essentials' },
      { id: 'quickOpen-essentials', action: 'quickOpen', windows: 'Ctrl+P', mac: '⌘P', category: 'essentials' },
      { id: 'save-essentials', action: 'save', windows: 'Ctrl+S', mac: '⌘S', category: 'essentials' },
      { id: 'saveAll-essentials', action: 'saveAll', windows: 'Ctrl+K S', mac: '⌥⌘S', category: 'essentials' },
      { id: 'find-essentials', action: 'find', windows: 'Ctrl+F', mac: '⌘F', category: 'essentials' },
      { id: 'replace-essentials', action: 'replace', windows: 'Ctrl+H', mac: '⌥⌘F', category: 'essentials' },
      { id: 'commentLine-essentials', action: 'commentLine', windows: 'Ctrl+/', mac: '⌘/', category: 'essentials' },
      { id: 'undo-essentials', action: 'undo', windows: 'Ctrl+Z', mac: '⌘Z', category: 'essentials' },
      { id: 'redo-essentials', action: 'redo', windows: 'Ctrl+Y', mac: '⇧⌘Z', category: 'essentials' },
      { id: 'terminal-essentials', action: 'terminal', windows: 'Ctrl+`', mac: '⌃`', category: 'essentials' }
    ],
    editing: [
      { id: 'cutLine-editing', action: 'cutLine', windows: 'Ctrl+X', mac: '⌘X', category: 'editing' },
      { id: 'copyLine-editing', action: 'copyLine', windows: 'Ctrl+C', mac: '⌘C', category: 'editing' },
      { id: 'moveLine-editing', action: 'moveLine', windows: 'Alt+↑/↓', mac: '⌥↑/↓', category: 'editing' },
      { id: 'copyLineUpDown-editing', action: 'copyLineUpDown', windows: 'Shift+Alt+↑/↓', mac: '⇧⌥↑/↓', category: 'editing' },
      { id: 'deleteLine-editing', action: 'deleteLine', windows: 'Ctrl+Shift+K', mac: '⇧⌘K', category: 'editing' },
      { id: 'insertLineBelow-editing', action: 'insertLineBelow', windows: 'Ctrl+Enter', mac: '⌘Enter', category: 'editing' },
      { id: 'insertLineAbove-editing', action: 'insertLineAbove', windows: 'Ctrl+Shift+Enter', mac: '⇧⌘Enter', category: 'editing' },
      { id: 'jumpToBracket-editing', action: 'jumpToBracket', windows: 'Ctrl+Shift+\\', mac: '⇧⌘\\', category: 'editing' },
      { id: 'indent-editing', action: 'indent', windows: 'Ctrl+] / Ctrl+[', mac: '⌘] / ⌘[', category: 'editing' },
      { id: 'goToLineStart-editing', action: 'goToLineStart', windows: 'Home / End', mac: 'Home / End', category: 'editing' },
      { id: 'goToFileStart-editing', action: 'goToFileStart', windows: 'Ctrl+Home', mac: '⌘↑', category: 'editing' },
      { id: 'goToFileEnd-editing', action: 'goToFileEnd', windows: 'Ctrl+End', mac: '⌘↓', category: 'editing' },
      { id: 'foldRegion-editing', action: 'foldRegion', windows: 'Ctrl+Shift+[', mac: '⌥⌘[', category: 'editing' },
      { id: 'unfoldRegion-editing', action: 'unfoldRegion', windows: 'Ctrl+Shift+]', mac: '⌥⌘]', category: 'editing' }
    ],
    navigation: [
      { id: 'goToLine-navigation', action: 'goToLine', windows: 'Ctrl+G', mac: '⌃G', category: 'navigation' },
      { id: 'goToFile-navigation', action: 'goToFile', windows: 'Ctrl+P', mac: '⌘P', category: 'navigation' },
      { id: 'goToSymbol-navigation', action: 'goToSymbol', windows: 'Ctrl+Shift+O', mac: '⇧⌘O', category: 'navigation' },
      { id: 'showAllSymbols-navigation', action: 'showAllSymbols', windows: 'Ctrl+T', mac: '⌘T', category: 'navigation' },
      { id: 'problemsPanel-navigation', action: 'problemsPanel', windows: 'Ctrl+Shift+M', mac: '⇧⌘M', category: 'navigation' },
      { id: 'nextError-navigation', action: 'nextError', windows: 'F8', mac: 'F8', category: 'navigation' },
      { id: 'previousError-navigation', action: 'previousError', windows: 'Shift+F8', mac: '⇧F8', category: 'navigation' },
      { id: 'navigateHistory-navigation', action: 'navigateHistory', windows: 'Ctrl+Shift+Tab', mac: '⌃⇧Tab', category: 'navigation' },
      { id: 'goBackForward-navigation', action: 'goBackForward', windows: 'Alt+← / →', mac: '⌃- / ⌃⇧-', category: 'navigation' }
    ],
    search: [
      { id: 'findInFile-search', action: 'findInFile', windows: 'Ctrl+F', mac: '⌘F', category: 'search' },
      { id: 'replaceInFile-search', action: 'replaceInFile', windows: 'Ctrl+H', mac: '⌥⌘F', category: 'search' },
      { id: 'findNext-search', action: 'findNext', windows: 'F3', mac: '⌘G', category: 'search' },
      { id: 'findPrevious-search', action: 'findPrevious', windows: 'Shift+F3', mac: '⇧⌘G', category: 'search' },
      { id: 'selectAllMatches-search', action: 'selectAllMatches', windows: 'Alt+Enter', mac: '⌥Enter', category: 'search' },
      { id: 'addSelection-search', action: 'addSelection', windows: 'Ctrl+D', mac: '⌘D', category: 'search' },
      { id: 'findInFiles-search', action: 'findInFiles', windows: 'Ctrl+Shift+F', mac: '⇧⌘F', category: 'search' },
      { id: 'replaceInFiles-search', action: 'replaceInFiles', windows: 'Ctrl+Shift+H', mac: '⇧⌘H', category: 'search' }
    ],
    multicursor: [
      { id: 'insertCursor-multicursor', action: 'insertCursor', windows: 'Alt+Click', mac: '⌥+Click', category: 'multicursor' },
      { id: 'insertCursorUpDown-multicursor', action: 'insertCursorUpDown', windows: 'Ctrl+Alt+↑/↓', mac: '⌥⌘↑/↓', category: 'multicursor' },
      { id: 'undoCursor-multicursor', action: 'undoCursor', windows: 'Ctrl+U', mac: '⌘U', category: 'multicursor' },
      { id: 'cursorAtLineEnd-multicursor', action: 'cursorAtLineEnd', windows: 'Shift+Alt+I', mac: '⇧⌥I', category: 'multicursor' },
      { id: 'selectLine-multicursor', action: 'selectLine', windows: 'Ctrl+L', mac: '⌘L', category: 'multicursor' },
      { id: 'selectAllOccurrences-multicursor', action: 'selectAllOccurrences', windows: 'Ctrl+Shift+L', mac: '⇧⌘L', category: 'multicursor' },
      { id: 'selectAllInstances-multicursor', action: 'selectAllInstances', windows: 'Ctrl+F2', mac: '⌘F2', category: 'multicursor' },
      { id: 'expandSelection-multicursor', action: 'expandSelection', windows: 'Shift+Alt+→', mac: '⌃⇧⌘→', category: 'multicursor' },
      { id: 'shrinkSelection-multicursor', action: 'shrinkSelection', windows: 'Shift+Alt+←', mac: '⌃⇧⌘←', category: 'multicursor' }
    ],
    code: [
      { id: 'triggerSuggest-code', action: 'triggerSuggest', windows: 'Ctrl+Space', mac: '⌃Space', category: 'code' },
      { id: 'triggerParameterHints-code', action: 'triggerParameterHints', windows: 'Ctrl+Shift+Space', mac: '⇧⌘Space', category: 'code' },
      { id: 'formatDocument-code', action: 'formatDocument', windows: 'Shift+Alt+F', mac: '⇧⌥F', category: 'code' },
      { id: 'formatSelection-code', action: 'formatSelection', windows: 'Ctrl+K Ctrl+F', mac: '⌘K ⌘F', category: 'code' },
      { id: 'goToDefinition-code', action: 'goToDefinition', windows: 'F12', mac: 'F12', category: 'code' },
      { id: 'peekDefinition-code', action: 'peekDefinition', windows: 'Alt+F12', mac: '⌥F12', category: 'code' },
      { id: 'quickFix-code', action: 'quickFix', windows: 'Ctrl+.', mac: '⌘.', category: 'code' },
      { id: 'showReferences-code', action: 'showReferences', windows: 'Shift+F12', mac: '⇧F12', category: 'code' },
      { id: 'renameSymbol-code', action: 'renameSymbol', windows: 'F2', mac: 'F2', category: 'code' }
    ],
    files: [
      { id: 'newFile-files', action: 'newFile', windows: 'Ctrl+N', mac: '⌘N', category: 'files' },
      { id: 'openFile-files', action: 'openFile', windows: 'Ctrl+O', mac: '⌘O', category: 'files' },
      { id: 'saveFile-files', action: 'saveFile', windows: 'Ctrl+S', mac: '⌘S', category: 'files' },
      { id: 'saveAs-files', action: 'saveAs', windows: 'Ctrl+Shift+S', mac: '⇧⌘S', category: 'files' },
      { id: 'saveAllFiles-files', action: 'saveAllFiles', windows: 'Ctrl+K S', mac: '⌥⌘S', category: 'files' },
      { id: 'closeFile-files', action: 'closeFile', windows: 'Ctrl+F4', mac: '⌘W', category: 'files' },
      { id: 'closeAll-files', action: 'closeAll', windows: 'Ctrl+K Ctrl+W', mac: '⌘K ⌘W', category: 'files' },
      { id: 'reopenClosed-files', action: 'reopenClosed', windows: 'Ctrl+Shift+T', mac: '⇧⌘T', category: 'files' },
      { id: 'copyPath-files', action: 'copyPath', windows: 'Ctrl+K P', mac: '⌘K P', category: 'files' }
    ],
    display: [
      { id: 'fullScreen-display', action: 'fullScreen', windows: 'F11', mac: '⌃⌘F', category: 'display' },
      { id: 'zoomIn-display', action: 'zoomIn', windows: 'Ctrl+=', mac: '⌘=', category: 'display' },
      { id: 'zoomOut-display', action: 'zoomOut', windows: 'Ctrl+-', mac: '⇧⌘-', category: 'display' },
      { id: 'toggleSidebar-display', action: 'toggleSidebar', windows: 'Ctrl+B', mac: '⌘B', category: 'display' },
      { id: 'showExplorer-display', action: 'showExplorer', windows: 'Ctrl+Shift+E', mac: '⇧⌘E', category: 'display' },
      { id: 'showSearch-display', action: 'showSearch', windows: 'Ctrl+Shift+F', mac: '⇧⌘F', category: 'display' },
      { id: 'showSourceControl-display', action: 'showSourceControl', windows: 'Ctrl+Shift+G', mac: '⌃⇧G', category: 'display' },
      { id: 'showDebug-display', action: 'showDebug', windows: 'Ctrl+Shift+D', mac: '⇧⌘D', category: 'display' },
      { id: 'showExtensions-display', action: 'showExtensions', windows: 'Ctrl+Shift+X', mac: '⇧⌘X', category: 'display' },
      { id: 'zenMode-display', action: 'zenMode', windows: 'Ctrl+K Z', mac: '⌘K Z', category: 'display' }
    ],
    debug: [
      { id: 'toggleBreakpoint-debug', action: 'toggleBreakpoint', windows: 'F9', mac: 'F9', category: 'debug' },
      { id: 'startContinue-debug', action: 'startContinue', windows: 'F5', mac: 'F5', category: 'debug' },
      { id: 'stop-debug', action: 'stop', windows: 'Shift+F5', mac: '⇧F5', category: 'debug' },
      { id: 'stepInto-debug', action: 'stepInto', windows: 'F11', mac: 'F11', category: 'debug' },
      { id: 'stepOut-debug', action: 'stepOut', windows: 'Shift+F11', mac: '⇧F11', category: 'debug' },
      { id: 'stepOver-debug', action: 'stepOver', windows: 'F10', mac: 'F10', category: 'debug' }
    ],
    terminal: [
      { id: 'showTerminal-terminal', action: 'showTerminal', windows: 'Ctrl+`', mac: '⌃`', category: 'terminal' },
      { id: 'newTerminal-terminal', action: 'newTerminal', windows: 'Ctrl+Shift+`', mac: '⌃⇧`', category: 'terminal' },
      { id: 'copySelection-terminal', action: 'copySelection', windows: 'Ctrl+C', mac: '⌘C', category: 'terminal' },
      { id: 'paste-terminal', action: 'paste', windows: 'Ctrl+V', mac: '⌘V', category: 'terminal' }
    ]
  }

  // Git commands data structure
  const gitCommands = {
    basics: [
      { command: 'git init', desc: 'init' },
      { command: 'git clone <url>', desc: 'clone' },
      { command: 'git status', desc: 'status' },
      { command: 'git diff', desc: 'diff' },
      { command: 'git add <file>', desc: 'add' },
      { command: 'git add .', desc: 'addAll' },
      { command: 'git commit -m "message"', desc: 'commit' },
      { command: 'git log', desc: 'log' },
      { command: 'git log --oneline', desc: 'logOneline' }
    ],
    sync: [
      { command: 'git remote -v', desc: 'remote' },
      { command: 'git remote add origin <url>', desc: 'remoteAdd' },
      { command: 'git fetch origin', desc: 'fetch' },
      { command: 'git pull origin <branch>', desc: 'pull' },
      { command: 'git push origin <branch>', desc: 'push' },
      { command: 'git push -u origin main', desc: 'pushUpstream' },
      { command: 'git push --force', desc: 'pushForce' }
    ],
    branching: [
      { command: 'git branch', desc: 'branch' },
      { command: 'git branch -r', desc: 'branchRemote' },
      { command: 'git branch <name>', desc: 'branchCreate' },
      { command: 'git checkout <branch>', desc: 'checkout' },
      { command: 'git switch <branch>', desc: 'switch' },
      { command: 'git checkout -b <branch>', desc: 'checkoutCreate' },
      { command: 'git branch -m <newname>', desc: 'branchRename' },
      { command: 'git branch -d <branch>', desc: 'branchDelete' },
      { command: 'git push origin --delete <branch>', desc: 'branchDeleteRemote' }
    ],
    merge: [
      { command: 'git merge <branch>', desc: 'merge' },
      { command: 'git merge --abort', desc: 'mergeAbort' },
      { command: 'git branch --merged', desc: 'branchMerged' }
    ],
    stash: [
      { command: 'git stash', desc: 'stash' },
      { command: 'git stash save "message"', desc: 'stashSave' },
      { command: 'git stash list', desc: 'stashList' },
      { command: 'git stash apply', desc: 'stashApply' },
      { command: 'git stash pop', desc: 'stashPop' },
      { command: 'git stash drop stash@{0}', desc: 'stashDrop' },
      { command: 'git stash clear', desc: 'stashClear' }
    ],
    undo: [
      { command: 'git restore <file>', desc: 'restore' },
      { command: 'git restore --staged <file>', desc: 'restoreStaged' },
      { command: 'git reset --soft HEAD~1', desc: 'resetSoft' },
      { command: 'git reset --hard HEAD~1', desc: 'resetHard' },
      { command: 'git revert <commit>', desc: 'revert' },
      { command: 'git reset --hard <commit>', desc: 'resetToCommit' }
    ],
    advanced: [
      { command: 'git diff <branch1>..<branch2>', desc: 'diffBranches' },
      { command: 'git blame <file>', desc: 'blame' },
      { command: 'git clean -fd', desc: 'clean' },
      { command: 'git tag', desc: 'tag' },
      { command: 'git tag -a v1.0 -m "Version 1.0"', desc: 'tagCreate' },
      { command: 'git cherry-pick <commit>', desc: 'cherryPick' },
      { command: 'git rebase <branch>', desc: 'rebase' }
    ]
  }

  // Get all shortcuts as flat array
  const getAllShortcuts = () => {
    return Object.values(shortcutsData).flat()
  }

  // LocalStorage - Load on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    const savedOS = localStorage.getItem('os') || 'windows'
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const savedLearned = JSON.parse(localStorage.getItem('learned') || '[]')
    const savedPracticeStats = JSON.parse(localStorage.getItem('practiceStats') || '{"correct":0,"total":0}')

    setTheme(savedTheme)
    setOs(savedOS)
    setFavorites(savedFavorites)
    setLearned(savedLearned)
    setPracticeStats(savedPracticeStats)
  }, [])

  // LocalStorage - Save on change
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-bs-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('os', os)
  }, [os])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem('learned', JSON.stringify(learned))
  }, [learned])

  useEffect(() => {
    localStorage.setItem('practiceStats', JSON.stringify(practiceStats))
  }, [practiceStats])

  // Helper functions
  const toggleFavorite = (shortcutId) => {
    setFavorites(prev =>
      prev.includes(shortcutId)
        ? prev.filter(id => id !== shortcutId)
        : [...prev, shortcutId]
    )
  }

  const toggleLearned = (shortcutId) => {
    setLearned(prev =>
      prev.includes(shortcutId)
        ? prev.filter(id => id !== shortcutId)
        : [...prev, shortcutId]
    )
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  // Filter shortcuts
  const filterShortcuts = () => {
    let filtered = getAllShortcuts()

    // Filter by category
    if (selectedCategory === 'favorites') {
      filtered = filtered.filter(s => favorites.includes(s.id))
    } else if (selectedCategory === 'learned') {
      filtered = filtered.filter(s => learned.includes(s.id))
    } else if (selectedCategory !== 'all') {
      filtered = filtered.filter(s => s.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(s =>
        t(`shortcuts.${s.action}`).toLowerCase().includes(search) ||
        t(`descriptions.${s.action}`).toLowerCase().includes(search) ||
        s.windows.toLowerCase().includes(search) ||
        s.mac.toLowerCase().includes(search)
      )
    }

    return filtered
  }

  // Practice mode functions
  const startPractice = () => {
    if (!practiceOS) {
      alert(t('practice.selectOSFirst'))
      return
    }
    setPracticeMode(true)
    generateQuestion()
  }

  const generateQuestion = () => {
    const allShortcuts = getAllShortcuts()
    let randomShortcut

    // Don't repeat the last question
    do {
      randomShortcut = allShortcuts[Math.floor(Math.random() * allShortcuts.length)]
    } while (lastQuestion && randomShortcut.id === lastQuestion.id && allShortcuts.length > 1)

    setLastQuestion(randomShortcut)
    setCurrentQuestion(randomShortcut)
    setUserAnswer('')
    setFeedback(null)
  }

  const checkAnswer = () => {
    if (!currentQuestion || !userAnswer.trim()) return

    const correctAnswer = practiceOS === 'windows' ? currentQuestion.windows : currentQuestion.mac
    const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()

    setFeedback({
      isCorrect,
      correctAnswer
    })

    setPracticeStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }))

    // Generate new question after a delay
    setTimeout(() => {
      generateQuestion()
    }, 2000)
  }

  const skipQuestion = () => {
    generateQuestion()
  }

  const exitPractice = () => {
    setPracticeMode(false)
    setCurrentQuestion(null)
    setUserAnswer('')
    setFeedback(null)
    setPracticeOS('')
  }

  // Handle Enter key in practice mode
  const handlePracticeKeyPress = (e) => {
    if (e.key === 'Enter' && !feedback) {
      checkAnswer()
    }
  }

  // Get category counts
  const getCategoryCount = (category) => {
    if (category === 'all') return getAllShortcuts().length
    if (category === 'favorites') return favorites.length
    if (category === 'learned') return learned.length
    return getAllShortcuts().filter(s => s.category === category).length
  }

  // Calculate statistics
  const totalShortcuts = getAllShortcuts().length
  const learnedCount = learned.length
  const progressPercentage = Math.round((learnedCount / totalShortcuts) * 100)
  const practiceAccuracy = practiceStats.total > 0
    ? Math.round((practiceStats.correct / practiceStats.total) * 100)
    : 0

  return (
    <div className="app" data-bs-theme={theme}>
      {/* Header */}
      <header className="navbar navbar-expand-lg sticky-top bg-body-tertiary border-bottom shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">⌨️ {t('common.appTitle')}</span>
          <div className="d-flex gap-2">
            {/* Language Switcher */}
            <div className="btn-group btn-group-sm" role="group">
              <button
                className={`btn ${i18n.language === 'en' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => changeLanguage('en')}
              >
                🇬🇧 EN
              </button>
              <button
                className={`btn ${i18n.language === 'es' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => changeLanguage('es')}
              >
                🇪🇸 ES
              </button>
            </div>
            {/* Theme Toggle */}
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <ul className="nav nav-tabs container-fluid bg-body-tertiary border-bottom">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'shortcuts' ? 'active' : ''}`}
            onClick={() => setActiveTab('shortcuts')}
          >
            ⌨️ {t('navigation.shortcuts')}
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'git' ? 'active' : ''}`}
            onClick={() => setActiveTab('git')}
          >
            🔧 {t('navigation.git')}
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'practice' ? 'active' : ''}`}
            onClick={() => setActiveTab('practice')}
          >
            🎮 {t('navigation.practice')}
          </button>
        </li>
      </ul>

      {/* Main Content */}
      <main className="container my-4">
        {/* VS Code Shortcuts Tab */}
        {activeTab === 'shortcuts' && (
          <>
            {/* Bootstrap Statistics Cards */}
            <div className="row g-3 mb-4">
              {/* Favorites Card */}
              <div className="col-md-4">
                <div className="card text-center border-primary border-2 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">⭐ {t('stats.favorites')}</h5>
                    <p className="card-text display-4 fw-bold text-primary">{favorites.length}</p>
                  </div>
                </div>
              </div>
              {/* Learned Card */}
              <div className="col-md-4">
                <div className="card text-center border-success border-2 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">✅ {t('stats.learned')}</h5>
                    <p className="card-text display-4 fw-bold text-success">{learnedCount}/{totalShortcuts}</p>
                  </div>
                </div>
              </div>
              {/* Progress Card */}
              <div className="col-md-4">
                <div className="card text-center border-info border-2 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">📊 {t('stats.progress')}</h5>
                    <p className="card-text display-4 fw-bold text-info">{progressPercentage}%</p>
                    {/* Bootstrap Progress Bar */}
                    <div className="progress" style={{height: '12px'}} role="progressbar" aria-label="Learning progress" aria-valuenow={progressPercentage} aria-valuemin="0" aria-valuemax="100">
                      <div
                        className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                        style={{width: `${progressPercentage}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* OS Toggle */}
            <div className="mb-4 text-center">
              <div className="btn-group btn-group-lg" role="group">
                <button
                  className={`btn ${os === 'windows' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setOs('windows')}
                >
                  🪟 {t('common.windows')}
                </button>
                <button
                  className={`btn ${os === 'mac' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setOs('mac')}
                >
                  🍎 {t('common.mac')}
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder={t('common.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="mb-4 category-filters">
              <div className="d-flex flex-wrap gap-2">
                {['all', 'favorites', 'learned', 'essentials', 'editing', 'navigation', 'search', 'multicursor', 'code', 'files', 'display', 'debug', 'terminal'].map(cat => (
                  <button
                    key={cat}
                    className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {t(`filters.${cat}`)} ({getCategoryCount(cat)})
                  </button>
                ))}
              </div>
            </div>

            {/* Shortcuts Grid */}
            <div className="row g-3">
              {filterShortcuts().map(shortcut => (
                <div key={shortcut.id} className="col-12 col-md-6 col-lg-4">
                  {/* Bootstrap Card Component */}
                  <div className={`card h-100 ${learned.includes(shortcut.id) ? 'learned-shortcut' : ''}`}>
                    <div className="card-body">
                      {/* EL ATAJO - LO MÁS IMPORTANTE */}
                      <kbd className="user-select-all">{os === 'windows' ? shortcut.windows : shortcut.mac}</kbd>

                      {/* Título y botones */}
                      <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                        <h6 className="mb-0">{t(`shortcuts.${shortcut.action}`)}</h6>
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-link p-0 favorite-btn"
                            onClick={() => toggleFavorite(shortcut.id)}
                          >
                            {favorites.includes(shortcut.id) ? '⭐' : '☆'}
                          </button>
                          <button
                            className="btn btn-link p-0 learned-btn"
                            onClick={() => toggleLearned(shortcut.id)}
                          >
                            {learned.includes(shortcut.id) ? '✅' : '⬜'}
                          </button>
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-muted small mb-0">
                        {t(`descriptions.${shortcut.action}`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Git Commands Tab */}
        {activeTab === 'git' && (
          <>
            <div className="text-center mb-4">
              <h2>{t('git.title')}</h2>
              <p className="text-muted">{t('git.subtitle')}</p>
            </div>

            {/* Git Commands by Category */}
            {Object.entries(gitCommands).map(([category, commands]) => (
              <div key={category} className="mb-5">
                {/* Category Title */}
                <h4 className="mb-3 fw-bold text-primary">{t(`git.categories.${category}`)}</h4>
                {/* Bootstrap Grid for Commands */}
                <div className="row g-3">
                  {commands.map((cmd, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                      {/* Bootstrap Card for Each Command */}
                      <div className="card h-100">
                        <div className="card-body">
                          {/* EL COMANDO - LO MÁS IMPORTANTE */}
                          <code className="git-command user-select-all">
                            {cmd.command}
                          </code>

                          {/* Descripción */}
                          <p className="text-muted small mb-0 mt-3">
                            {t(`git.descriptions.${cmd.desc}`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Workflow Section */}
            <div className="card mt-5">
              <div className="card-body">
                <h4 className="card-title mb-3">{t('git.workflow.title')}</h4>
                <ol className="workflow-list">
                  <li><code>git checkout main && git pull origin main</code> - {t('git.workflow.step1')}</li>
                  <li><code>git checkout -b feature/new-feature</code> - {t('git.workflow.step2')}</li>
                  <li><code>git add . && git commit -m "description"</code> - {t('git.workflow.step3')}</li>
                  <li><code>git merge main</code> - {t('git.workflow.step4')}</li>
                  <li><code>git push -u origin feature/new-feature</code> - {t('git.workflow.step5')}</li>
                  <li>{t('git.workflow.step6')}</li>
                  <li><code>git checkout main && git pull && git branch -d feature/new-feature</code> - {t('git.workflow.step7')}</li>
                </ol>
              </div>
            </div>
          </>
        )}

        {/* Practice Mode Tab */}
        {activeTab === 'practice' && (
          <>
            {!practiceMode ? (
              <div className="practice-start text-center">
                <h2 className="mb-3">{t('practice.title')}</h2>
                <p className="lead mb-4">{t('practice.subtitle')}</p>

                <div className="card mb-4 mx-auto" style={{maxWidth: '600px'}}>
                  <div className="card-body">
                    <h5 className="card-title">{t('practice.howItWorks')}</h5>
                    <ul className="list-unstyled text-start mt-3">
                      <li className="mb-2">{t('practice.step1')}</li>
                      <li className="mb-2">{t('practice.step2')}</li>
                      <li className="mb-2">{t('practice.step3')}</li>
                      <li className="mb-2">{t('practice.step4')}</li>
                    </ul>
                  </div>
                </div>

                <h5 className="mb-3">{t('practice.selectOS')}</h5>
                <div className="btn-group btn-group-lg mb-4" role="group">
                  <button
                    className={`btn ${practiceOS === 'windows' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setPracticeOS('windows')}
                  >
                    🪟 {t('common.windows')}
                  </button>
                  <button
                    className={`btn ${practiceOS === 'mac' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setPracticeOS('mac')}
                  >
                    🍎 {t('common.mac')}
                  </button>
                </div>

                <button
                  className="btn btn-primary btn-lg mb-4"
                  onClick={startPractice}
                >
                  {t('practice.start')}
                </button>

                <div className="card mx-auto" style={{maxWidth: '400px'}}>
                  <div className="card-body">
                    <h6 className="card-title">{t('practice.statistics')}</h6>
                    <p className="mb-1">{t('practice.correctAnswers')}: {practiceStats.correct} / {practiceStats.total}</p>
                    <p className="mb-0">{t('practice.accuracy')}: {practiceAccuracy}%</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="practice-active">
                <div className="card mx-auto" style={{maxWidth: '600px'}}>
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <span className="badge bg-primary">
                        {practiceOS === 'windows' ? '🪟 Windows' : '🍎 Mac'}
                      </span>
                    </div>

                    {currentQuestion && (
                      <>
                        <h5 className="text-center mb-3">{t('practice.question')}</h5>
                        <h3 className="text-center mb-2">{t(`shortcuts.${currentQuestion.action}`)}</h3>
                        <p className="text-center text-muted mb-4">
                          ({t(`descriptions.${currentQuestion.action}`)})
                        </p>

                        <input
                          type="text"
                          className="form-control form-control-lg mb-3"
                          placeholder={t('practice.placeholder')}
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          onKeyPress={handlePracticeKeyPress}
                          disabled={feedback !== null}
                        />

                        {/* Bootstrap Alert for Feedback */}
                        {feedback && (
                          <div className={`alert ${feedback.isCorrect ? 'alert-success' : 'alert-danger'} practice-feedback`} role="alert">
                            {feedback.isCorrect ? (
                              <><strong>✅</strong> {t('practice.correct')}</>
                            ) : (
                              <><strong>❌</strong> {t('practice.incorrect')} <kbd className="ms-1">{feedback.correctAnswer}</kbd></>
                            )}
                          </div>
                        )}

                        <div className="d-flex gap-2 justify-content-center mb-3">
                          <button
                            className="btn btn-success"
                            onClick={checkAnswer}
                            disabled={!userAnswer.trim() || feedback !== null}
                          >
                            {t('practice.verify')}
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={skipQuestion}
                            disabled={feedback !== null}
                          >
                            {t('practice.skip')}
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={exitPractice}
                          >
                            {t('practice.exit')}
                          </button>
                        </div>

                        <div className="text-center">
                          <small className="text-muted">
                            {t('practice.correctAnswers')}: {practiceStats.correct} / {practiceStats.total}
                          </small>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-body-tertiary text-center py-4 mt-5 border-top">
        <div className="container">
          <p className="mb-2">{t('footer.madeWith')}</p>
          <p className="text-muted mb-0">{t('footer.tip')}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
