import { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Search, X } from 'lucide-react'
import PropTypes from 'prop-types'

const SearchBar = ({ searchTerm, onSearchChange, onClear }) => {
  const { t } = useTranslation()
  const searchInputRef = useRef(null)

  // Keyboard shortcut Cmd/Ctrl+K to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleClear = () => {
    onClear()
    searchInputRef.current?.focus()
  }

  return (
    <div className="position-relative">
      <div className="input-group input-group-lg">
        <span className="input-group-text bg-transparent border-end-0">
          <Search size={20} className="text-muted" />
        </span>
        <input
          ref={searchInputRef}
          type="text"
          className="form-control border-start-0 ps-0"
          placeholder={`${t("common.search")} (Ctrl+K / ⌘K)`}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
}

export default SearchBar
