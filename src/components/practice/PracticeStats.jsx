import { useTranslation } from 'react-i18next'

const PracticeStats = ({ stats }) => {
  const { t } = useTranslation()

  const accuracy = stats.total > 0
    ? Math.round((stats.correct / stats.total) * 100)
    : 0

  return (
    <div className="card mx-auto" style={{ maxWidth: '400px' }}>
      <div className="card-body">
        <h6 className="card-title mb-3">{t('practice.statistics')}</h6>
        <div className="d-flex justify-content-around">
          <div className="text-center">
            <div className="display-6 text-success">{stats.correct}</div>
            <small className="text-muted">{t('practice.correct')}</small>
          </div>
          <div className="text-center">
            <div className="display-6 text-primary">{stats.total}</div>
            <small className="text-muted">Total</small>
          </div>
          <div className="text-center">
            <div className="display-6 text-info">{accuracy}%</div>
            <small className="text-muted">{t('practice.accuracy')}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticeStats
