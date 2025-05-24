import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'
import Layout from '@/components/layout/Layout'

export default function Contact() {
  // 始终调用 useI18n，确保 hooks 顺序一致
  const { t } = useI18n()
  
  // 使用客户端检测来处理 SSR
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Layout title={t('footer.contact_us')}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{t('footer.contact_us')}</h1>
        <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t('contact.name')}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t('contact.email')}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t('contact.submit')}
            </button>
          </div>
        </form>
        </div>
      </div>
    </Layout>
  )
}
