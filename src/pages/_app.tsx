import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LanguageDetector from '@/components/language-detector'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LanguageDetector />
      <Component {...pageProps} />
    </>
  )
}
