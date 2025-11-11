import { useAppContext } from '../../context/AppContext'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const ShortcutCard = ({ shortcut }) => {
  const { t } = useTranslation()
  const { os, favorites, learned, toggleFavorite, toggleLearned } = useAppContext()

  const isFavorite = favorites.includes(shortcut.id)
  const isLearned = learned.includes(shortcut.id)

  return (
    <div className={`card h-100 shortcut-card ${isLearned ? 'learned-shortcut' : ''}`}>
      <div className="card-body">
        {/* Keyboard Shortcut - Most Important */}
        <div className="shortcut-key">
          <kbd className="user-select-all">
            {os === 'windows' ? shortcut.windows : shortcut.mac}
          </kbd>
        </div>

        {/* Title and Action Buttons */}
        <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
          <h6 className="mb-0 flex-grow-1">{t(`shortcuts.${shortcut.action}`)}</h6>
          <div className="d-flex gap-2">
            <button
              className="btn btn-link p-0 favorite-btn"
              onClick={() => toggleFavorite(shortcut.id)}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? '⭐' : '☆'}
            </button>
            <button
              className="btn btn-link p-0 learned-btn"
              onClick={() => toggleLearned(shortcut.id)}
              aria-label={isLearned ? 'Mark as not learned' : 'Mark as learned'}
            >
              {isLearned ? '✅' : '⬜'}
            </button>
          </div>
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
