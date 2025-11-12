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
  // UI States - Initialize directly from localStorage to prevent flash
  const [os, setOs] = useState(() => {
    return localStorage.getItem('os') || 'windows'
  })

  // User Data States (saved to LocalStorage)
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
  })

  // Practice Mode States
  const [practiceStats, setPracticeStats] = useState(() => {
    return JSON.parse(localStorage.getItem('practiceStats') || '{"correct":0,"total":0}')
  })

  useEffect(() => {
    localStorage.setItem('os', os)
  }, [os])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

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

  const updatePracticeStats = (isCorrect) => {
    setPracticeStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }))
  }

  const value = {
    // States
    os,
    favorites,
    practiceStats,
    // Setters
    setOs,
    setFavorites,
    setPracticeStats,
    // Actions
    toggleFavorite,
    updatePracticeStats
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
