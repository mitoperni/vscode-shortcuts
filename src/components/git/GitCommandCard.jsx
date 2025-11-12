import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const GitCommandCard = ({ command }) => {
  const { t } = useTranslation()

  return (
    <div className="card h-100">
      <div className="card-body">
        <code className="d-block text-white mb-3 user-select-all text-center py-3 fs-4">
          {command.command}
        </code>
        <p className="text-muted small mb-0">
          {t(`git.descriptions.${command.desc}`)}
        </p>
      </div>
    </div>
  )
}

GitCommandCard.propTypes = {
  command: PropTypes.shape({
    command: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
}

export default GitCommandCard
