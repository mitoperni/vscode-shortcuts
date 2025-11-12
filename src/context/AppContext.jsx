import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  // UI States
  const [theme, setTheme] = useState('dark')
  const [os, setOs] = useState('windows')

  // User Data States (saved to LocalStorage)
  const [favorites, setFavorites] = useState([])
  const [learnt, setLearnt] = useState([])

  // Practice Mode States
  const [practiceStats, setPracticeStats] = useState({ correct: 0, total: 0 })

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    const savedOS = localStorage.getItem('os') || 'windows'
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const savedLearnt = JSON.parse(localStorage.getItem('learnt') || '[]')
    const savedPracticeStats = JSON.parse(localStorage.getItem('practiceStats') || '{"correct":0,"total":0}')

    setTheme(savedTheme)
    setOs(savedOS)
    setFavorites(savedFavorites)
    setLearnt(savedLearnt)
    setPracticeStats(savedPracticeStats)
  }, [])

  // Save to LocalStorage on change
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
    localStorage.setItem('learnt', JSON.stringify(learnt))
  }, [learnt])

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

  const toggleLearnt = (shortcutId) => {
    setLearnt(prev =>
      prev.includes(shortcutId)
        ? prev.filter(id => id !== shortcutId)
        : [...prev, shortcutId]
    )
  }

  const updatePracticeStats = (isCorrect) => {
    setPracticeStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }))
  }

  const value = {
    // States
    theme,
    os,
    favorites,
    learnt,
    practiceStats,
    // Setters
    setTheme,
    setOs,
    setFavorites,
    setLearnt,
    setPracticeStats,
    // Actions
    toggleFavorite,
    toggleLearnt,
    updatePracticeStats
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
