import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../context/AppContext'
import { getAllShortcuts } from '../data/shortcutsData'
import { useKeyboardCapture } from '../hooks/useKeyboardCapture'
import PracticeStart from '../components/practice/PracticeStart'
import PracticeActive from '../components/practice/PracticeActive'

const Practice = () => {
  const { t } = useTranslation()
  const { practiceStats, updatePracticeStats } = useAppContext()

  const [practiceMode, setPracticeMode] = useState(false)
  const [practiceOS, setPracticeOS] = useState(() => {
    // Load OS from localStorage on mount
    return localStorage.getItem('practiceOS') || ''
  })
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const [lastQuestion, setLastQuestion] = useState(null)

  // Use custom hook for keyboard capture
  const {
    capturedShortcuts,
    pressedKeys,
    currentAnswer,
    clear: clearKeyboardInput
  } = useKeyboardCapture(practiceMode && !feedback, practiceOS)

  // Save OS to localStorage whenever it changes
  useEffect(() => {
    if (practiceOS) {
      localStorage.setItem('practiceOS', practiceOS)
    }
  }, [practiceOS])

  const generateQuestion = () => {
    const allShortcuts = getAllShortcuts()
    let randomShortcut

    // Don't repeat the last question
    do {
      randomShortcut = allShortcuts[Math.floor(Math.random() * allShortcuts.length)]
    } while (lastQuestion && randomShortcut.id === lastQuestion.id && allShortcuts.length > 1)

    setLastQuestion(randomShortcut)
    setCurrentQuestion(randomShortcut)
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
    if (!currentQuestion || !currentAnswer.trim()) return

    const correctAnswer = practiceOS === 'windows' ? currentQuestion.windows : currentQuestion.mac
    const isCorrect = currentAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()

    setFeedback({
      isCorrect,
      correctAnswer
    })

    updatePracticeStats(isCorrect)

    // Generate new question after a delay
    setTimeout(() => {
      generateQuestion()
      clearKeyboardInput()
    }, 2000)
  }

  const skipQuestion = () => {
    generateQuestion()
    clearKeyboardInput()
  }

  const exitPractice = () => {
    setPracticeMode(false)
    setCurrentQuestion(null)
    clearKeyboardInput()
    // Clear OS from localStorage when exiting practice
    localStorage.removeItem('practiceOS')
    setPracticeOS('')
  }

  // Reset when new question
  useEffect(() => {
    clearKeyboardInput()
  }, [currentQuestion])

  return (
    <div className="container my-4">
      {!practiceMode ? (
        <PracticeStart
          practiceOS={practiceOS}
          setPracticeOS={setPracticeOS}
          onStart={startPractice}
          practiceStats={practiceStats}
        />
      ) : (
        <PracticeActive
          practiceOS={practiceOS}
          currentQuestion={currentQuestion}
          capturedShortcuts={capturedShortcuts}
          pressedKeys={pressedKeys}
          currentAnswer={currentAnswer}
          feedback={feedback}
          practiceStats={practiceStats}
          onCheckAnswer={checkAnswer}
          onClear={clearKeyboardInput}
          onSkip={skipQuestion}
          onExit={exitPractice}
        />
      )}
    </div>
  )
}

export default Practice
