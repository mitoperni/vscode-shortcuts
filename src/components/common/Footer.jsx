import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-body-tertiary py-4 border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h6 className="fw-bold mb-2">{t('footer.project')}</h6>
            <p className="mb-1 small">
              <a
                href="https://github.com/mitoperni/vscode-shortcuts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t('footer.contribute')}
              </a>
            </p>
            <p className="text-muted small mb-0">© {new Date().getFullYear()} - v1.0</p>
          </div>

          <div className="col-md-4 text-center mb-3 mb-md-0">
            <h6 className="fw-bold mb-2">{t('footer.links')}</h6>
            <p className="mb-1 small">
              <a
                href="https://github.com/mitoperni/vscode-shortcuts/issues/new?labels=bug&template=bug_report.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t('footer.reportBug')}
              </a>
            </p>
            <p className="mb-0 small">
              <a
                href="https://github.com/mitoperni/vscode-shortcuts/issues/new?labels=enhancement&template=feature_request.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {t('footer.suggest')}
              </a>
            </p>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <h6 className="fw-bold mb-2">{t('footer.author')}</h6>
            <p className="mb-1 small">Miguel Toyas Pernichi</p>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://github.com/mitoperni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                aria-label="GitHub"
              >
                <i className="bi bi-github fs-5"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/migueltoyaspernichi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
