import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../context/AppContext'
import ShortcutCard from '../components/shortcuts/ShortcutCard'
import StatCard from '../components/common/StatCard'
import { getAllShortcuts, categories, getCategoryCount } from '../data/shortcutsData'
import { Star } from 'lucide-react'

const Shortcuts = () => {
  const { t } = useTranslation()
  const { os, setOs, favorites } = useAppContext()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter shortcuts
  const filterShortcuts = () => {
    let filtered = getAllShortcuts()

    // Filter by category
    if (selectedCategory === 'favorites') {
      filtered = filtered.filter(s => favorites.includes(s.id))
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

  const filteredShortcuts = filterShortcuts()

  return (
    <div className="container my-4">
      {/* OS Toggle */}
      <div className="mb-4 text-center">
        <div className="btn-group btn-group-lg" role="group">
          <button
            className={`btn ${
              os === "windows" ? "btn-primary" : "btn-outline-primary"
            } d-flex align-items-center gap-2`}
            onClick={() => setOs("windows")}
          >
            <i class="bi bi-windows"></i>
            {t("common.windows")}
          </button>
          <button
            className={`btn ${
              os === "mac" ? "btn-primary" : "btn-outline-primary"
            } d-flex align-items-center gap-2`}
            onClick={() => setOs("mac")}
          >
            <i class="bi bi-apple"></i>
            {t("common.mac")}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder={t("common.search")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filters */}
      <div className="mb-4">
        <div className="d-flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm ${
                selectedCategory === cat ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {t(`filters.${cat}`)} ({getCategoryCount(cat, favorites)})
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      {(searchTerm || selectedCategory !== "all") && (
        <div className="alert alert-info mb-4">
          {filteredShortcuts.length} {t("common.results")}
        </div>
      )}

      {/* Shortcuts Grid */}
      <div className="row g-3">
        {filteredShortcuts.length > 0 ? (
          filteredShortcuts.map((shortcut) => (
            <div key={shortcut.id} className="col-12 col-md-6 col-lg-4">
              <ShortcutCard shortcut={shortcut} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning text-center">
              {t("common.noResults")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shortcuts
