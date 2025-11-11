import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const GitCommandCard = ({ command }) => {
  const { t } = useTranslation()

  return (
    <div className="card h-100 git-card">
      <div className="card-body">
        {/* Git Command - Most Important */}
        <div className="git-command-wrapper">
          <code className="git-command user-select-all">
            {command.command}
          </code>
        </div>

        {/* Description */}
        <p className="text-muted small mb-0 mt-3">
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
