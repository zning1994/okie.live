/* eslint-disable */
import { create } from 'zustand'
import { persist, PersistStorage, StorageValue } from 'zustand/middleware'

// 支持的语言类型：中文、英文、日文
type Language = 'zh' | 'en' | 'ja'

// 翻译键定义
export type TranslationKey = 
  // 网站基本信息
  | 'site.title'
  | 'site.description'
  | 'site.slogan'
  | 'site.copyright'
  | 'site.name'
  
  // 导航
  | 'nav.home'
  | 'nav.features'
  | 'nav.about'
  | 'nav.contact'
  | 'nav.language'
  
  // 按钮和操作
  | 'action.get_started'
  | 'action.learn_more'
  | 'cta.getStarted'
  | 'cta.learnMore'
  | 'cta.tryNow'
  
  // 页脚
  | 'footer.about_us'
  | 'footer.contact_us'
  | 'footer.privacy_policy'
  | 'footer.terms'
  | 'footer.copyright'
  
  // 特性部分
  | 'features.title'
  | 'features.scheduling.title'
  | 'features.scheduling.description'
  | 'features.profiles.title'
  | 'features.profiles.description'
  | 'features.venues.title'
  | 'features.venues.description'
  | 'features.ticketing.title'
  | 'features.ticketing.description'
  | 'features.analytics.title'
  | 'features.analytics.description'

  // 联系表单
  | 'contact.name'
  | 'contact.email'
  | 'contact.message'
  | 'contact.submit'

  // 隐私政策
  | 'privacy.collection.title'
  | 'privacy.collection.description'
  | 'privacy.usage.title'
  | 'privacy.usage.description'
  | 'privacy.sharing.title'
  | 'privacy.sharing.description'
  | 'privacy.security.title'
  | 'privacy.security.description'
  | 'privacy.contact.title'
  | 'privacy.contact.description'

// 翻译内容类型
type Translations = {
  [K in Language]: {
    [T in TranslationKey]: string
  }
}

// i18n Store 接口
interface I18nStore {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
  initLanguage: () => void
}

// 翻译内容
const translations: Translations = {
  // 英文
  en: {
    // 网站基本信息
    'site.title': 'OkieLive - Orchestrating the World of Performance',
    'site.description': 'A Unified Platform for Artists, Venues, and Organizers',
    'site.slogan': 'OkieLive – Orchestrating the World of Performance.',
    'site.copyright': ' 2025 Okie.live. All rights reserved.',
    'site.name': 'OkieLive',
    
    // 导航
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    
    // 按钮和操作
    'action.get_started': 'Get Started',
    'action.learn_more': 'Learn More',
    'cta.getStarted': 'Get Started',
    'cta.learnMore': 'Learn More',
    'cta.tryNow': 'Try Now',
    
    // 页脚
    'footer.about_us': 'About Us',
    'footer.contact_us': 'Contact Us',
    'footer.privacy_policy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': ' 2025 OkieLive. All rights reserved.',
    
    // 特性部分
    'features.title': 'Core Features',
    'features.scheduling.title': 'Smart Scheduling',
    'features.scheduling.description': 'Efficiently manage performance schedules and avoid conflicts',
    'features.profiles.title': 'Talent Profiles',
    'features.profiles.description': 'Complete artist information and performance history',
    'features.venues.title': 'Venue Integration',
    'features.venues.description': 'Easily search and book performance venues',
    'features.ticketing.title': 'Ticketing System',
    'features.ticketing.description': 'Seamless integration with major ticketing platforms',
    'features.analytics.title': 'Data Insights',
    'features.analytics.description': 'Comprehensive performance data statistics and analysis',

    // 联系表单
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',

    // 隐私政策
    'privacy.collection.title': 'Information Collection',
    'privacy.collection.description': 'We collect information that you provide directly to us, including when you create an account, make a booking, or contact us for support.',
    'privacy.usage.title': 'How We Use Your Information',
    'privacy.usage.description': 'We use the information we collect to provide, maintain, and improve our services, and to communicate with you.',
    'privacy.sharing.title': 'Information Sharing',
    'privacy.sharing.description': 'We do not share your personal information with third parties except as described in this privacy policy.',
    'privacy.security.title': 'Data Security',
    'privacy.security.description': 'We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.',
    'privacy.contact.title': 'Contact Us',
    'privacy.contact.description': 'If you have any questions about this Privacy Policy, please contact us.'
  },
  
  // 中文
  zh: {
    // 网站基本信息
    'site.title': '欧奇演界 - 一站式演出生态平台',
    'site.description': '艺人、场地、主办方。一站式演出生态平台',
    'site.slogan': '欧奇演界 · 一站式演出生态平台',
    'site.copyright': '  2025 Okie.live. All rights reserved.',
    'site.name': 'OkieLive',
    
    // 导航
    'nav.home': '首页',
    'nav.features': '功能',
    'nav.about': '关于',
    'nav.contact': '联系',
    'nav.language': '语言',
    
    // 按钮和操作
    'action.get_started': '立即体验',
    'action.learn_more': '了解更多',
    'cta.getStarted': '立即体验',
    'cta.learnMore': '了解更多',
    'cta.tryNow': '立即体验',
    
    // 页脚
    'footer.about_us': '关于我们',
    'footer.contact_us': '联系我们',
    'footer.privacy_policy': '隐私政策',

    // 联系表单
    'contact.name': '姓名',
    'contact.email': '邮箱',
    'contact.message': '留言',
    'contact.submit': '发送消息',

    // 隐私政策
    'privacy.collection.title': '信息收集',
    'privacy.collection.description': '我们收集您直接提供给我们的信息，包括当您创建账户、进行预订或联系我们寻求支持时。',
    'privacy.usage.title': '信息使用方式',
    'privacy.usage.description': '我们使用收集的信息来提供、维护和改进我们的服务，并与您进行沟通。',
    'privacy.sharing.title': '信息共享',
    'privacy.sharing.description': '除本隐私政策所述情况外，我们不会与第三方共享您的个人信息。',
    'privacy.security.title': '数据安全',
    'privacy.security.description': '我们采取合理措施来帮助保护您的个人信息免遭丢失、盗窃、滥用和未经授权的访问。',
    'privacy.contact.title': '联系我们',
    'privacy.contact.description': '如果您对本隐私政策有任何疑问，请联系我们。',
    'footer.terms': '服务条款',
    'footer.copyright': ' 2025 欧奇演界. ',
    
    // 特性部分
    'features.title': '核心功能',
    'features.scheduling.title': '排期管理',
    'features.scheduling.description': '高效管理演出档期，避免冲突',
    'features.profiles.title': '艺人档案',
    'features.profiles.description': '完整记录艺人信息与演出历史',
    'features.venues.title': '场地对接',
    'features.venues.description': '便捷查询和预订演出场地',
    'features.ticketing.title': '票务系统',
    'features.ticketing.description': '无缝对接各大票务平台',
    'features.analytics.title': '数据分析',
    'features.analytics.description': '全面的演出数据统计与分析'
  },
  
  // 日文
  ja: {
    // 网站基本信息
    'site.title': 'OkieLive - パフォーマンスの世界を調和させる',
    'site.description': 'アーティスト、会場、主催者のための統合プラットフォーム',

    // 联系表单
    'contact.name': '名前',
    'contact.email': 'メールアドレス',
    'contact.message': 'メッセージ',
    'contact.submit': 'メッセージを送信',

    // 隐私政策
    'privacy.collection.title': '情報収集',
    'privacy.collection.description': 'アカウントの作成、予約、サポートのお問い合わせなど、お客様から直接提供される情報を収集します。',
    'privacy.usage.title': '情報の使用方法',
    'privacy.usage.description': '収集した情報は、サービスの提供、維持、改善、およびお客様とのコミュニケーションに使用します。',
    'privacy.sharing.title': '情報の共有',
    'privacy.sharing.description': 'このプライバシーポリシーに記載されている場合を除き、個人情報を第三者と共有することはありません。',
    'privacy.security.title': 'データセキュリティ',
    'privacy.security.description': '個人情報の紛失、盗難、不正使用、不正アクセスから保護するための適切な措置を講じています。',
    'privacy.contact.title': 'お問い合わせ',
    'privacy.contact.description': 'このプライバシーポリシーについてご質問がある場合は、お問い合わせください。',
    'site.slogan': 'OkieLive · パフォーマンスの世界を調和させる',
    'site.copyright': ' 2025 Okie.live. All rights reserved.',
    'site.name': 'OkieLive',
    
    // 导航
    'nav.home': 'ホーム',
    'nav.features': '機能',
    'nav.about': '会社概要',
    'nav.contact': 'お問い合わせ',
    'nav.language': '言語',
    
    // 按钮和操作
    'action.get_started': '今すぐ始める',
    'action.learn_more': '詳細を見る',
    'cta.getStarted': '今すぐ始める',
    'cta.learnMore': '詳細を見る',
    'cta.tryNow': '今すぐ試す',
    
    // 页脚
    'footer.about_us': '会社概要',
    'footer.contact_us': 'お問い合わせ',
    'footer.privacy_policy': 'プライバシーポリシー',
    'footer.terms': '利用規約',
    'footer.copyright': '© 2025 OkieLive. 全著作権所有。',
    
    // 特性部分
    'features.title': '主な機能',
    'features.scheduling.title': 'スマートスケジューリング',
    'features.scheduling.description': '公演スケジュールを効率的に管理し、競合を回避',
    'features.profiles.title': 'タレントプロフィール',
    'features.profiles.description': 'アーティスト情報と公演履歴を完全に記録',
    'features.venues.title': '会場連携',
    'features.venues.description': '公演会場の簡単な検索と予約',
    'features.ticketing.title': 'チケットシステム',
    'features.ticketing.description': '主要なチケットプラットフォームとのシームレスな連携',
    'features.analytics.title': 'データ分析',
    'features.analytics.description': '包括的な公演データの統計と分析'
  }
}

// 检测浏览器语言并返回支持的语言代码
const detectBrowserLanguage = (): Language => {
  try {
    if (typeof window === 'undefined') return 'en' // 服务器端渲染时默认英文
    
    // 尝试从 localStorage 获取存储的语言设置
    try {
      const storedLanguage = localStorage.getItem('okie-language')
      if (storedLanguage === 'zh' || storedLanguage === 'en' || storedLanguage === 'ja') {
        return storedLanguage as Language
      }
    } catch (e) {
      console.warn('Failed to access localStorage:', e)
    }
    
    // 检测浏览器语言
    try {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('zh')) {
        return 'zh'
      } else if (browserLang.startsWith('ja')) {
        return 'ja'
      }
    } catch (e) {
      console.warn('Failed to detect browser language:', e)
    }
    
    return 'en' // 默认英文
  } catch (e) {
    console.error('Error in detectBrowserLanguage:', e)
    return 'en' // 出错时默认英文
  }
}

// 创建基础 store
type SetState = (partial: Partial<I18nStore> | ((state: I18nStore) => Partial<I18nStore>)) => void
type GetState = () => I18nStore

const createBaseStore = (set: SetState, get: GetState) => ({
  language: 'en' as Language, // 初始默认值
  setLanguage: (lang: Language) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('okie-language', lang)
      }
    } catch (e) {
      console.warn('Failed to save language preference:', e)
    }
    set({ language: lang })
  },
  initLanguage: () => {
    // 只在客户端执行语言检测，服务器端始终使用默认语言
    if (typeof window !== 'undefined') {
      const detectedLang = detectBrowserLanguage()
      set({ language: detectedLang })
    }
  },
  t: (key: TranslationKey) => {
    const { language } = get()
    return translations[language][key] || key
  },
})

// 创建 store 并导出
export const useI18n = create(
  persist<I18nStore>(
    (set, get) => createBaseStore(set, get),
    {
      name: 'okie-language-storage',
      storage: typeof window !== 'undefined' 
        ? {
            getItem: (name: string): StorageValue<I18nStore> | null => {
              const str = localStorage.getItem(name);
              if (!str) return null
              try {
                return JSON.parse(str)
              } catch (_) {
                return null
              }
            },
            setItem: (name: string, value: StorageValue<I18nStore>): void => {
              localStorage.setItem(name, JSON.stringify(value))
            },
            removeItem: (name: string): void => {
              localStorage.removeItem(name)
            }
          } as PersistStorage<I18nStore>
        : {
            getItem: (_: string): StorageValue<I18nStore> | null => null,
            setItem: (_: string, __: StorageValue<I18nStore>): void => {},
            removeItem: (_: string): void => {}
          },
      onRehydrateStorage: () => (state) => {
        if (state) {
          console.log('Rehydrated language state:', state.language)
        } else {
          console.log('No stored language state, detecting browser language')
          const store = useI18n.getState()
          store.initLanguage()
        }
      },
    }
  )
)
