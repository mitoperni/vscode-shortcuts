import { useTranslation } from 'react-i18next'
import { CheckCircle2, X, PartyPopper } from 'lucide-react'

const PracticeFeedback = ({ feedback }) => {
  const { t } = useTranslation()

  if (!feedback) return null

  return (
    <div
      className={`alert ${
        feedback.isCorrect ? 'alert-success' : 'alert-danger'
      } practice-feedback mb-3`}
      role="alert"
    >
      {feedback.isCorrect ? (
        <div className="text-center d-flex align-items-center justify-content-center gap-2">
          <CheckCircle2 size={24} className="text-success" />
          <strong className="fs-5">{t('practice.correct')}</strong>
          <PartyPopper size={24} className="text-warning" />
        </div>
      ) : (
        <div className="text-center">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <X size={24} className="text-danger" />
            <strong className="fs-5">{t('practice.incorrect')}</strong>
          </div>
          <div className="mt-2">
            Correct answer:{' '}
            <kbd className="ms-2">{feedback.correctAnswer}</kbd>
          </div>
        </div>
      )}
    </div>
  )
}

export default PracticeFeedback
