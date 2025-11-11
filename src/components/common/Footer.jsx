import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-body-tertiary text-center py-4 border-top">
      <div className="container">
        <p className="mb-2">{t('footer.madeWith')}</p>
        <p className="text-muted mb-0">{t('footer.tip')}</p>
      </div>
    </footer>
  )
}

export default Footer
