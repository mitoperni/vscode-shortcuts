import { useTranslation } from 'react-i18next'
import { useAppContext } from '../context/AppContext'
import ShortcutCard from '../components/shortcuts/ShortcutCard'
import SearchBar from '../components/shortcuts/filters/SearchBar'
import FilterControls from '../components/shortcuts/filters/FilterControls'
import CategoryFilters from '../components/shortcuts/filters/CategoryFilters'
import ActiveFilters from '../components/shortcuts/filters/ActiveFilters'
import TopShortcutsBanner from '../components/shortcuts/TopShortcutsBanner'
import { useShortcutsFilter } from '../hooks/useShortcutsFilter'
import { getAllShortcuts, categories } from '../data/shortcutsData'

const Shortcuts = () => {
  const { t } = useTranslation()
  const { os, setOs, favorites } = useAppContext()

  const {
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
  } = useShortcutsFilter(favorites)

  return (
    <div className="container my-4">
      {/* Top 10 Most Used Shortcuts Banner */}
      {!hasActiveFilters && <TopShortcutsBanner />}

      {/* Search and Filter Bar - Sticky */}
      <div className="pt-3 pb-3 mb-4" style={{ zIndex: 1020 }}>
        {/* OS Toggle & Search Bar */}
        <div className="mb-3 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
          {/* OS Toggle */}
          <div className="btn-group btn-group-lg" role="group">
            <button
              className={`btn ${
                os === "windows" ? "btn-secondary" : "btn-outline-secondary"
              } d-flex align-items-center gap-2`}
              onClick={() => setOs("windows")}
            >
              <i className="bi bi-windows"></i>
              {t("common.windows")}
            </button>
            <button
              className={`btn ${
                os === "mac" ? "btn-secondary" : "btn-outline-secondary"
              } d-flex align-items-center gap-2`}
              onClick={() => setOs("mac")}
            >
              <i className="bi bi-apple"></i>
              {t("common.mac")}
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-grow-1 w-100">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onClear={() => setSearchTerm("")}
            />
          </div>
        </div>

        {/* Filter Controls */}
        <FilterControls
          sortBy={sortBy}
          onSortChange={setSortBy}
          showFilters={showFilters}
          onToggleFilters={() => setShowFilters(!showFilters)}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={clearAllFilters}
        />

        {/* Category Filters - Collapsible */}
        {showFilters && (
          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        {/* Active Filters Badges */}
        <ActiveFilters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onClearSearch={() => setSearchTerm("")}
          onClearCategory={() => setSelectedCategory("all")}
        />

        {/* Results Count - Only show when filtering */}
        {hasActiveFilters && (
          <div className="alert alert-light border mb-0 d-flex justify-content-between align-items-center py-2">
            <span>
              <strong>{filteredShortcuts.length}</strong> {t("common.results")}
              {filteredShortcuts.length !== getAllShortcuts().length && (
                <span className="text-muted ms-2">
                  ({t("common.of")} {getAllShortcuts().length})
                </span>
              )}
            </span>
          </div>
        )}
      </div>

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
