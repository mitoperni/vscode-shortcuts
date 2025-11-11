import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { Keyboard, GitBranch, Gamepad2, Sun, Moon } from 'lucide-react'

const Header = () => {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useAppContext()
  const location = useLocation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const navItems = [
    { path: '/shortcuts', label: t('navigation.shortcuts'), icon: Keyboard },
    { path: '/git', label: t('navigation.git'), icon: GitBranch },
    { path: '/practice', label: t('navigation.practice'), icon: Gamepad2 },
  ]

  return (
    <header className="sticky-top shadow-sm">
      {/* Main Navigation Bar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container-fluid px-4">
          {/* Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <span className="fw-bold">{t("common.appTitle")}</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Items & Controls */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.path} className="nav-item">
                    <Link
                      to={item.path}
                      className={`nav-link px-3 d-flex align-items-center ${
                        location.pathname === item.path
                          ? "active fw-semibold"
                          : ""
                      }`}
                    >
                      <IconComponent size={18} className="me-2" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right Side Controls */}
            <div className="d-flex align-items-center gap-3">
              {/* Language Switcher */}
              <div
                className="d-flex gap-1"
                role="group"
                aria-label="Language selector"
              >
                <button
                  className={`btn btn-sm px-3 ${
                    i18n.language === "en"
                      ? "btn-secondary"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => changeLanguage("en")}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  className={`btn btn-sm px-3 ${
                    i18n.language === "es"
                      ? "btn-secondary"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => changeLanguage("es")}
                  aria-label="Cambiar a Español"
                >
                  ES
                </button>
              </div>

              {/* Theme Toggle */}
              <button
                className="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center"
                onClick={toggleTheme}
                title={
                  theme === "dark"
                    ? t("common.lightMode")
                    : t("common.darkMode")
                }
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                style={{ width: "38px", height: "38px", padding: "0" }}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header
