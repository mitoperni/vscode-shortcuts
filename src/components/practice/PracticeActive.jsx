import { useTranslation } from 'react-i18next'
import {
  Monitor,
  Apple,
  CheckCircle2,
  Eraser,
  SkipForward,
  XCircle
} from 'lucide-react'
import PracticeInputArea from './PracticeInputArea'
import PracticeFeedback from './PracticeFeedback'

const PracticeActive = ({
  practiceOS,
  currentQuestion,
  capturedShortcuts,
  pressedKeys,
  currentAnswer,
  feedback,
  practiceStats,
  onCheckAnswer,
  onClear,
  onSkip,
  onContinue,
  onExit
}) => {
  const { t } = useTranslation()

  const practiceAccuracy = practiceStats.total > 0
    ? Math.round((practiceStats.correct / practiceStats.total) * 100)
    : 0

  return (
    <div className="practice-active">
      <div className="card mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <span className="badge bg-secondary fs-6 px-3 py-2 d-inline-flex align-items-center gap-2">
              {practiceOS === "windows" ? (
                <>
                  <i className="bi bi-windows"></i>
                  Windows
                </>
              ) : (
                <>
                  <i className="bi bi-apple"></i>
                  Mac
                </>
              )}
            </span>
          </div>

          {currentQuestion && (
            <>
              <h5 className="text-center text-muted mb-3">
                {t("practice.question")}
              </h5>
              <h3 className="text-center mb-3 fw-bold">
                {t(`shortcuts.${currentQuestion.action}`)}
              </h3>
              <p className="text-center text-muted mb-4 fst-italic">
                {t(`descriptions.${currentQuestion.action}`)}
              </p>

              <PracticeInputArea
                capturedShortcuts={capturedShortcuts}
                pressedKeys={pressedKeys}
                feedback={feedback}
              />

              <PracticeFeedback feedback={feedback} />

              <div className="d-flex gap-2 justify-content-center mb-3 flex-wrap">
                {feedback ? (
                  <button
                    className="btn btn-primary btn-lg d-flex align-items-center gap-2"
                    onClick={onContinue}
                  >
                    <SkipForward size={20} />
                    {t("practice.continue") || "Continuar"}
                  </button>
                ) : (
                  <>
                    <button
                      className="btn btn-success btn-lg d-flex align-items-center gap-2"
                      onClick={onCheckAnswer}
                      disabled={!currentAnswer.trim()}
                    >
                      <CheckCircle2 size={20} />
                      {t("practice.verify") || "Verificar"}
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-lg d-flex align-items-center gap-2"
                      onClick={onClear}
                      disabled={!currentAnswer.trim()}
                    >
                      <Eraser size={20} />
                      {t("practice.clear") || "Limpiar"}
                    </button>
                    <button
                      className="btn btn-secondary btn-lg d-flex align-items-center gap-2"
                      onClick={onSkip}
                    >
                      <SkipForward size={20} />
                      {t("practice.skip") || "Saltar"}
                    </button>
                  </>
                )}
                <button
                  className="btn btn-danger btn-lg d-flex align-items-center gap-2"
                  onClick={onExit}
                >
                  <XCircle size={20} />
                  {t("practice.exit") || "Salir"}
                </button>
              </div>

              <div className="text-center">
                <small className="text-muted">
                  {t("practice.correctAnswers")}: {practiceStats.correct} /{" "}
                  {practiceStats.total} ({practiceAccuracy}%)
                </small>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PracticeActive
