import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'
import Layout from '@/components/Layout'

export default function About() {
  // 始终调用 useI18n，确保 hooks 顺序一致
  const { t } = useI18n()
  
  // 使用客户端检测来处理 SSR
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Layout title={t('footer.about_us')}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{t('footer.about_us')}</h1>
        <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('site.name')}</h2>
          <p className="mb-4">{t('site.description')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('features.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">{t('features.scheduling.title')}</h3>
              <p>{t('features.scheduling.description')}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">{t('features.profiles.title')}</h3>
              <p>{t('features.profiles.description')}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">{t('features.venues.title')}</h3>
              <p>{t('features.venues.description')}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">{t('features.analytics.title')}</h3>
              <p>{t('features.analytics.description')}</p>
            </div>
          </div>
        </section>
        </div>
      </div>
    </Layout>
  )
}
