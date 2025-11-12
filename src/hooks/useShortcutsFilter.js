import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { getAllShortcuts } from '../data/shortcutsData'

export const useShortcutsFilter = (favorites) => {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('category')
  const [showFilters, setShowFilters] = useState(false)

  // Filter shortcuts
  const filterShortcuts = (shortcuts) => {
    let filtered = [...shortcuts]

    // Filter by category
    if (selectedCategory === 'favorites') {
      filtered = filtered.filter((s) => favorites.includes(s.id))
    } else if (selectedCategory !== 'all') {
      filtered = filtered.filter((s) => s.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (s) =>
          t(`shortcuts.${s.action}`).toLowerCase().includes(search) ||
          t(`descriptions.${s.action}`).toLowerCase().includes(search) ||
          s.windows.toLowerCase().includes(search) ||
          s.mac.toLowerCase().includes(search)
      )
    }

    return filtered
  }

  // Sort shortcuts
  const sortShortcuts = (shortcuts) => {
    const sorted = [...shortcuts]

    switch (sortBy) {
      case 'name':
        return sorted.sort((a, b) =>
          t(`shortcuts.${a.action}`).localeCompare(t(`shortcuts.${b.action}`))
        )
      case 'relevance':
        // Sort by relevance score (higher is better)
        return sorted.sort((a, b) => {
          // If searching, boost items that match in the title
          if (searchTerm) {
            const searchLower = searchTerm.toLowerCase()
            const aTitle = t(`shortcuts.${a.action}`).toLowerCase()
            const bTitle = t(`shortcuts.${b.action}`).toLowerCase()

            const aInTitle = aTitle.includes(searchLower)
            const bInTitle = bTitle.includes(searchLower)

            // If one matches in title and other doesn't, prioritize the match
            if (aInTitle && !bInTitle) return -1
            if (!aInTitle && bInTitle) return 1
          }

          // Otherwise sort by relevance score
          const aRelevance = a.relevance || 0
          const bRelevance = b.relevance || 0
          return bRelevance - aRelevance
        })
      case 'category':
      default:
        return sorted.sort((a, b) => a.category.localeCompare(b.category))
    }
  }

  // Get filtered and sorted shortcuts
  const filteredShortcuts = useMemo(() => {
    const allShortcuts = getAllShortcuts()
    const filtered = filterShortcuts(allShortcuts)
    return sortShortcuts(filtered)
  }, [searchTerm, selectedCategory, sortBy, favorites, t])

  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
  }

  // Check if any filters are active
  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'all'

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    showFilters,
    setShowFilters,
    filteredShortcuts,
    clearAllFilters,
    hasActiveFilters
  }
}
