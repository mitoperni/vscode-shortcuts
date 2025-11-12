import { useAppContext } from '../../context/AppContext'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const ShortcutCard = ({ shortcut }) => {
  const { t } = useTranslation()
  const { os, favorites, toggleFavorite } = useAppContext()

  const isFavorite = favorites.includes(shortcut.id)

  return (
    <div className="card h-100 shortcut-card">
      <div className="card-body">
        {/* Title and Favorite Button */}
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h6 className="mb-0 flex-grow-1 fw-bold">{t(`shortcuts.${shortcut.action}`)}</h6>
          <button
            className="btn btn-outline-warning btn-sm px-2"
            onClick={() => toggleFavorite(shortcut.id)}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '⭐' : '☆'}
          </button>
        </div>

        {/* Keyboard Shortcut */}
        <div className="mb-3">
          <kbd className="user-select-all">
            {os === 'windows' ? shortcut.windows : shortcut.mac}
          </kbd>
        </div>

        {/* Description */}
        <p className="text-muted small mb-0">
          {t(`descriptions.${shortcut.action}`)}
        </p>
      </div>
    </div>
  )
}

ShortcutCard.propTypes = {
  shortcut: PropTypes.shape({
    id: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    windows: PropTypes.string.isRequired,
    mac: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired
}

export default ShortcutCard
