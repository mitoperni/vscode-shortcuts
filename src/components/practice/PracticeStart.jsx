import { useTranslation } from 'react-i18next'
import {
  Gamepad2,
  FileEdit,
  Keyboard,
  CheckCircle2,
  BarChart3,
  Play,
  AlertCircle
} from 'lucide-react'
import PracticeStats from './PracticeStats'

const PracticeStart = ({ practiceOS, setPracticeOS, onStart, practiceStats }) => {
  const { t } = useTranslation()

  return (
    <div className="practice-start text-center">
      <h2 className="display-5 fw-bold mb-3">
        <Gamepad2 className="me-2" size={40} />
        {t('practice.title')}
      </h2>
      <p className="lead mb-4">{t('practice.subtitle')}</p>

      {/* Beta Notice */}
      <div className="alert alert-warning d-flex align-items-start gap-3 mx-auto mb-4" style={{ maxWidth: '700px' }}>
        <AlertCircle size={24} className="flex-shrink-0 mt-1" />
        <div className="text-start">
          <strong>Beta</strong>
          <p className="mb-0">
            {t('practice.betaNotice')}{' '}
            <a
              href="https://github.com/mitoperni"
              target="_blank"
              rel="noopener noreferrer"
              className="alert-link fw-bold"
            >
              {t('practice.betaUsername')}
            </a>
          </p>
        </div>
      </div>

      <div className="card mb-4 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <h5 className="card-title mb-3">{t('practice.howItWorks')}</h5>
          <ul className="list-unstyled text-start">
            <li className="mb-2 d-flex align-items-center gap-2">
              <FileEdit size={18} className="text-primary" />
              {t('practice.step1')}
            </li>
            <li className="mb-2 d-flex align-items-center gap-2">
              <Keyboard size={18} className="text-info" />
              {t('practice.step2')}
            </li>
            <li className="mb-2 d-flex align-items-center gap-2">
              <CheckCircle2 size={18} className="text-success" />
              {t('practice.step3')}
            </li>
            <li className="mb-2 d-flex align-items-center gap-2">
              <BarChart3 size={18} className="text-warning" />
              {t('practice.step4')}
            </li>
          </ul>
        </div>
      </div>

      <h5 className="mb-3">{t('practice.selectOS')}</h5>
      <div className="btn-group btn-group-lg mb-4" role="group">
        <button
          className={`btn ${
            practiceOS === 'windows'
              ? 'btn-secondary'
              : 'btn-outline-secondary'
          } d-flex align-items-center gap-2`}
          onClick={() => setPracticeOS('windows')}
        >
          <i className="bi bi-windows"></i>
          {t('common.windows')}
        </button>
        <button
          className={`btn ${
            practiceOS === 'mac' ? 'btn-secondary' : 'btn-outline-secondary'
          } d-flex align-items-center gap-2`}
          onClick={() => setPracticeOS('mac')}
        >
          <i className="bi bi-apple"></i>
          {t('common.mac')}
        </button>
      </div>

      <button
        className="btn btn-success btn-lg mb-4 d-block mx-auto d-flex align-items-center gap-2 justify-content-center"
        onClick={onStart}
        style={{ minWidth: '200px' }}
      >
        <Play size={20} />
        {t('practice.start')}
      </button>

      <PracticeStats stats={practiceStats} />
    </div>
  )
}

export default PracticeStart
