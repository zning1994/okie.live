import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'
import type { TranslationKey } from '@/lib/i18n';
import Layout from '@/components/layout/Layout'

export default function Privacy() {
  // 始终调用 useI18n，确保 hooks 顺序一致
  const { t } = useI18n()
  
  // 使用客户端检测来处理 SSR
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Layout title={t('footer.privacy_policy')}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{t('footer.privacy_policy')}</h1>
        <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.collection.title')}</h2>
          <p className="mb-4">{t('privacy.collection.description')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.usage.title')}</h2>
          <p className="mb-4">{t('privacy.usage.description')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.sharing.title')}</h2>
          <p className="mb-4">{t('privacy.sharing.description')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.security.title')}</h2>
          <p className="mb-4">{t('privacy.security.description')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('privacy.contact.title')}</h2>
          <p className="mb-4">{t('privacy.contact.description')}</p>
        </section>
        </div>
      </div>
    </Layout>
  )
}
