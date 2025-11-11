import PropTypes from 'prop-types'

const StatCard = ({ icon, title, value, subtitle, variant = 'primary', progressBar }) => {
  return (
    <div className={`card text-center border-${variant} border-2 shadow-sm h-100`}>
      <div className="card-body">
        <h5 className="card-title fw-semibold">
          {icon} {title}
        </h5>
        <p className={`card-text display-4 fw-bold text-${variant} mb-2`}>
          {value}
        </p>
        {subtitle && (
          <p className="text-muted small mb-2">{subtitle}</p>
        )}
        {progressBar && (
          <div className="progress" style={{ height: '12px' }} role="progressbar" aria-label={title}>
            <div
              className={`progress-bar bg-${variant} progress-bar-striped progress-bar-animated`}
              style={{ width: `${progressBar}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

StatCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subtitle: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger']),
  progressBar: PropTypes.number
}

export default StatCard
