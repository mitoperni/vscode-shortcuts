import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../context/AppContext'
import { getAllShortcuts } from '../data/shortcutsData'
import { CheckCircle2, X, Monitor, Apple } from 'lucide-react'

const Practice = () => {
  const { t } = useTranslation()
  const { practiceStats, updatePracticeStats } = useAppContext()

  const [practiceMode, setPracticeMode] = useState(false)
  const [practiceOS, setPracticeOS] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [lastQuestion, setLastQuestion] = useState(null)

  const practiceAccuracy = practiceStats.total > 0
    ? Math.round((practiceStats.correct / practiceStats.total) * 100)
    : 0

  const generateQuestion = () => {
    const allShortcuts = getAllShortcuts()
    let randomShortcut

    // Don't repeat the last question
    do {
      randomShortcut = allShortcuts[Math.floor(Math.random() * allShortcuts.length)]
    } while (lastQuestion && randomShortcut.id === lastQuestion.id && allShortcuts.length > 1)

    setLastQuestion(randomShortcut)
    setCurrentQuestion(randomShortcut)
    setUserAnswer('')
    setFeedback(null)
  }

  const startPractice = () => {
    if (!practiceOS) {
      alert(t('practice.selectOSFirst'))
      return
    }
    setPracticeMode(true)
    generateQuestion()
  }

  const checkAnswer = () => {
    if (!currentQuestion || !userAnswer.trim()) return

    const correctAnswer = practiceOS === 'windows' ? currentQuestion.windows : currentQuestion.mac
    const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()

    setFeedback({
      isCorrect,
      correctAnswer
    })

    updatePracticeStats(isCorrect)

    // Generate new question after a delay
    setTimeout(() => {
      generateQuestion()
    }, 2000)
  }

  const skipQuestion = () => {
    generateQuestion()
  }

  const exitPractice = () => {
    setPracticeMode(false)
    setCurrentQuestion(null)
    setUserAnswer('')
    setFeedback(null)
    setPracticeOS('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !feedback) {
      checkAnswer()
    }
  }

  return (
    <div className="container my-4">
      {!practiceMode ? (
        <div className="practice-start text-center">
          <h2 className="display-5 fw-bold mb-3">{t('practice.title')}</h2>
          <p className="lead mb-4">{t('practice.subtitle')}</p>

          <div className="card mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            <div className="card-body">
              <h5 className="card-title mb-3">{t('practice.howItWorks')}</h5>
              <ul className="list-unstyled text-start">
                <li className="mb-2 d-flex align-items-center gap-2">
                  <CheckCircle2 size={18} className="text-success" />
                  {t('practice.step1')}
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <CheckCircle2 size={18} className="text-success" />
                  {t('practice.step2')}
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <CheckCircle2 size={18} className="text-success" />
                  {t('practice.step3')}
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <CheckCircle2 size={18} className="text-success" />
                  {t('practice.step4')}
                </li>
              </ul>
            </div>
          </div>

          <h5 className="mb-3">{t('practice.selectOS')}</h5>
          <div className="btn-group btn-group-lg mb-4" role="group">
            <button
              className={`btn ${practiceOS === 'windows' ? 'btn-primary' : 'btn-outline-primary'} d-flex align-items-center gap-2`}
              onClick={() => setPracticeOS('windows')}
            >
              <Monitor size={20} />
              {t('common.windows')}
            </button>
            <button
              className={`btn ${practiceOS === 'mac' ? 'btn-primary' : 'btn-outline-primary'} d-flex align-items-center gap-2`}
              onClick={() => setPracticeOS('mac')}
            >
              <Apple size={20} />
              {t('common.mac')}
            </button>
          </div>

          <button
            className="btn btn-success btn-lg mb-4 d-block mx-auto"
            onClick={startPractice}
            style={{ minWidth: '200px' }}
          >
            {t('practice.start')}
          </button>

          <div className="card mx-auto" style={{ maxWidth: '400px' }}>
            <div className="card-body">
              <h6 className="card-title mb-3">{t('practice.statistics')}</h6>
              <div className="d-flex justify-content-around">
                <div className="text-center">
                  <div className="display-6 text-success">{practiceStats.correct}</div>
                  <small className="text-muted">{t('practice.correct')}</small>
                </div>
                <div className="text-center">
                  <div className="display-6 text-primary">{practiceStats.total}</div>
                  <small className="text-muted">Total</small>
                </div>
                <div className="text-center">
                  <div className="display-6 text-info">{practiceAccuracy}%</div>
                  <small className="text-muted">{t('practice.accuracy')}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="practice-active">
          <div className="card mx-auto" style={{ maxWidth: '700px' }}>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <span className="badge bg-primary fs-6 px-3 py-2 d-inline-flex align-items-center gap-2">
                  {practiceOS === 'windows' ? (
                    <>
                      <Monitor size={18} />
                      Windows
                    </>
                  ) : (
                    <>
                      <Apple size={18} />
                      Mac
                    </>
                  )}
                </span>
              </div>

              {currentQuestion && (
                <>
                  <h5 className="text-center text-muted mb-3">{t('practice.question')}</h5>
                  <h3 className="text-center mb-3 fw-bold">
                    {t(`shortcuts.${currentQuestion.action}`)}
                  </h3>
                  <p className="text-center text-muted mb-4 fst-italic">
                    {t(`descriptions.${currentQuestion.action}`)}
                  </p>

                  <input
                    type="text"
                    className="form-control form-control-lg mb-3 text-center"
                    placeholder={t('practice.placeholder')}
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={feedback !== null}
                    autoFocus
                  />

                  {feedback && (
                    <div className={`alert ${feedback.isCorrect ? 'alert-success' : 'alert-danger'} practice-feedback mb-3`} role="alert">
                      {feedback.isCorrect ? (
                        <div className="text-center d-flex align-items-center justify-content-center gap-2">
                          <CheckCircle2 size={24} />
                          <strong className="fs-5">{t('practice.correct')}</strong>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                            <X size={24} />
                            <strong className="fs-5">{t('practice.incorrect')}</strong>
                          </div>
                          <div className="mt-2">
                            Correct answer: <kbd className="ms-2">{feedback.correctAnswer}</kbd>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="d-flex gap-2 justify-content-center mb-3">
                    <button
                      className="btn btn-success btn-lg"
                      onClick={checkAnswer}
                      disabled={!userAnswer.trim() || feedback !== null}
                    >
                      {t('practice.verify')}
                    </button>
                    <button
                      className="btn btn-secondary btn-lg"
                      onClick={skipQuestion}
                      disabled={feedback !== null}
                    >
                      {t('practice.skip')}
                    </button>
                    <button
                      className="btn btn-danger btn-lg"
                      onClick={exitPractice}
                    >
                      {t('practice.exit')}
                    </button>
                  </div>

                  <div className="text-center">
                    <small className="text-muted">
                      {t('practice.correctAnswers')}: {practiceStats.correct} / {practiceStats.total} ({practiceAccuracy}%)
                    </small>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Practice
