import { useTranslation } from 'react-i18next'
import GitCommandCard from '../components/git/GitCommandCard'
import { gitCommands } from '../data/gitCommandsData'

const Git = () => {
  const { t } = useTranslation()

  return (
    <div className="container my-4">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">{t('git.title')}</h2>
        <p className="lead text-muted">{t('git.subtitle')}</p>
      </div>

      {/* Git Commands by Category */}
      {Object.entries(gitCommands).map(([category, commands]) => (
        <div key={category} className="mb-5">
          {/* Category Title */}
          <h4 className="mb-3 fw-bold text-light border-bottom pb-2">
            {t(`git.categories.${category}`)}
          </h4>

          {/* Commands Grid */}
          <div className="row g-3">
            {commands.map((cmd, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <GitCommandCard command={cmd} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Git Workflow Section */}
      <div className="card mt-5 border-primary">
        <div className="card-body">
          <h4 className="card-title mb-4 fw-bold text-primary">
            {t('git.workflow.title')}
          </h4>
          <ol className="workflow-list">
            <li>
              <code>git checkout main && git pull origin main</code>
              <p className="text-muted mt-2">{t('git.workflow.step1')}</p>
            </li>
            <li>
              <code>git checkout -b feature/new-feature</code>
              <p className="text-muted mt-2">{t('git.workflow.step2')}</p>
            </li>
            <li>
              <code>git add . && git commit -m "description"</code>
              <p className="text-muted mt-2">{t('git.workflow.step3')}</p>
            </li>
            <li>
              <code>git merge main</code>
              <p className="text-muted mt-2">{t('git.workflow.step4')}</p>
            </li>
            <li>
              <code>git push -u origin feature/new-feature</code>
              <p className="text-muted mt-2">{t('git.workflow.step5')}</p>
            </li>
            <li>
              <p className="text-muted">{t('git.workflow.step6')}</p>
            </li>
            <li>
              <code>git checkout main && git pull && git branch -d feature/new-feature</code>
              <p className="text-muted mt-2">{t('git.workflow.step7')}</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Git
