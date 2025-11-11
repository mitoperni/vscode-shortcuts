import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import StatCard from '../components/common/StatCard'
import { getAllShortcuts } from '../data/shortcutsData'
import { Keyboard, GitBranch, Gamepad2, Globe, BookOpen } from 'lucide-react'

const Home = () => {
  const { t } = useTranslation()
  const { favorites, learned, practiceStats } = useAppContext()

  const totalShortcuts = getAllShortcuts().length
  const progressPercentage = Math.round((learned.length / totalShortcuts) * 100)
  const practiceAccuracy = practiceStats.total > 0
    ? Math.round((practiceStats.correct / practiceStats.total) * 100)
    : 0

  return (
    <div className="container d-flex flex-column justify-content-center min-vh-100">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <div className="mb-4">
          <Keyboard size={64} strokeWidth={1.5} className="text-primary" />
        </div>
        <h1 className="display-3 fw-bold mb-3">
          {t('common.appTitle')}
        </h1>
        <p className="lead text-muted mb-5" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
          {t('home.hero.subtitle')}
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link to="/shortcuts" className="btn btn-outline-primary btn-lg d-inline-flex align-items-center gap-2 px-4">
            <BookOpen size={20} />
            {t('home.hero.learnShortcuts')}
          </Link>
          <Link to="/git" className="btn btn-outline-success btn-lg d-inline-flex align-items-center gap-2 px-4">
            <GitBranch size={20} />
            {t('home.hero.gitCommands')}
          </Link>
          <Link to="/practice" className="btn btn-outline-warning btn-lg d-inline-flex align-items-center gap-2 px-4">
            <Gamepad2 size={20} />
            {t('home.hero.practiceMode')}
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 text-center">
            <div className="card-body">
              <div className="mb-3 d-flex justify-content-center">
                <Keyboard size={48} strokeWidth={1.5} />
              </div>
              <h5 className="card-title">{t('home.features.shortcuts.title')}</h5>
              <p className="card-text text-muted">
                {t('home.features.shortcuts.description')}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 text-center">
            <div className="card-body">
              <div className="mb-3 d-flex justify-content-center">
                <GitBranch size={48} strokeWidth={1.5} />
              </div>
              <h5 className="card-title">{t('home.features.git.title')}</h5>
              <p className="card-text text-muted">
                {t('home.features.git.description')}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 text-center">
            <div className="card-body">
              <div className="mb-3 d-flex justify-content-center">
                <Gamepad2 size={48} strokeWidth={1.5} />
              </div>
              <h5 className="card-title">{t('home.features.practice.title')}</h5>
              <p className="card-text text-muted">
                {t('home.features.practice.description')}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 text-center">
            <div className="card-body">
              <div className="mb-3 d-flex justify-content-center">
                <Globe size={48} strokeWidth={1.5} />
              </div>
              <h5 className="card-title">{t('home.features.bilingual.title')}</h5>
              <p className="card-text text-muted">
                {t('home.features.bilingual.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
