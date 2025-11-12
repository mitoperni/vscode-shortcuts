import { useTranslation } from 'react-i18next'
import { Search } from 'lucide-react'
import PropTypes from 'prop-types'
import { getCategoryIcon } from '../../../utils/categoryIcons'

const ActiveFilters = ({
  searchTerm,
  selectedCategory,
  onClearSearch,
  onClearCategory
}) => {
  const { t } = useTranslation()

  if (!searchTerm && selectedCategory === 'all') {
    return null
  }

  return (
    <div className="d-flex flex-wrap gap-2 align-items-center mb-2">
      <small className="text-muted fw-bold">{t('common.activeFilters')}:</small>

      {searchTerm && (
        <span className="badge text-bg-primary rounded-pill d-flex align-items-center gap-1">
          <Search size={12} />
          &quot;{searchTerm}&quot;
          <button
            type="button"
            className="btn-close btn-close-white"
            style={{ fontSize: '0.6rem' }}
            onClick={onClearSearch}
            aria-label="Clear search"
          />
        </span>
      )}

      {selectedCategory !== 'all' && (
        <span className="badge text-bg-info rounded-pill d-flex align-items-center gap-1">
          {getCategoryIcon(selectedCategory)} {t(`filters.${selectedCategory}`)}
          <button
            type="button"
            className="btn-close btn-close-white"
            style={{ fontSize: '0.6rem' }}
            onClick={onClearCategory}
            aria-label="Clear category"
          />
        </span>
      )}
    </div>
  )
}

ActiveFilters.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onClearSearch: PropTypes.func.isRequired,
  onClearCategory: PropTypes.func.isRequired
}

export default ActiveFilters
