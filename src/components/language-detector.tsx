'use client'

import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'

export default function LanguageDetector() {
  const { initLanguage } = useI18n()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    // 确保只在客户端运行一次
    if (!initialized && typeof window !== 'undefined') {
      console.log('Initializing language settings...')
      // 使用 setTimeout 确保在所有组件加载后运行
      setTimeout(() => {
        initLanguage()
        setInitialized(true)
        console.log('Language initialized')
      }, 0)
    }
  }, [initLanguage, initialized])

  // 这是一个纯功能组件，不渲染任何内容
  return null
}
