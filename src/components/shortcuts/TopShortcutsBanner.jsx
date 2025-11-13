import { useTranslation } from 'react-i18next'
import { getTopShortcuts } from '../../data/shortcutsData'
import ShortcutCard from './ShortcutCard'

const TopShortcutsBanner = () => {
  const { t } = useTranslation()
  const topShortcuts = getTopShortcuts(12)

  // Group shortcuts into slides of 3 for desktop
  const groupShortcuts = (shortcuts, size) => {
    const groups = []
    for (let i = 0; i < shortcuts.length; i += size) {
      groups.push(shortcuts.slice(i, i + size))
    }
    return groups
  }

  const desktopSlides = groupShortcuts(topShortcuts, 3)

  return (
    <div className="mb-4">
      {/* Title */}
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-star-fill text-warning me-2 fs-5"></i>
        <h5 className="mb-0 fw-bold">
          {t('shortcuts.topShortcuts')}
        </h5>
      </div>

      {/* Carousel */}
      <div id="topShortcutsCarousel" className="carousel slide">
        {/* Indicators */}
        <div className="carousel-indicators">
          {desktopSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#topShortcutsCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {desktopSlides.map((group, slideIndex) => (
            <div
              key={slideIndex}
              className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}
            >
              <div className="row g-3 px-5 pb-4">
                {group.map((shortcut) => (
                  <div key={shortcut.id} className="col-12 col-md-6 col-lg-4">
                    <ShortcutCard shortcut={shortcut} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#topShortcutsCarousel"
          data-bs-slide="prev"
          style={{
            width: '30px',
            height: '30px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            opacity: 0.8,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#topShortcutsCarousel"
          data-bs-slide="next"
          style={{
            width: '30px',
            height: '30px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            opacity: 0.8,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default TopShortcutsBanner
