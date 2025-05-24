/* eslint-disable */

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useI18n } from '@/lib/i18n';

interface SeoHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export default function SeoHead({
  title,
  description,
  ogImage = '/og-image.png',
  canonicalUrl,
  noindex = false
}: SeoHeadProps) {
  const { t, language } = useI18n();
  const router = useRouter();
  
  // 使用传入的标题或默认标题
  const pageTitle = title || t('site.title');
  // 使用传入的描述或默认描述
  const pageDescription = description || t('site.description');
  // 网站基础URL
  const baseUrl = 'https://okie.live';
  // 当前页面的完整URL
  const currentUrl = canonicalUrl || `${baseUrl}${router.asPath}`;
  
  // 获取备用语言URLs
  const alternateLanguages = {
    en: `${baseUrl}${router.pathname}?lang=en`,
    zh: `${baseUrl}${router.pathname}?lang=zh`,
    ja: `${baseUrl}${router.pathname}?lang=ja`
  };

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      
      {/* 规范链接 */}
      <link rel="canonical" href={currentUrl} />
      
      {/* 备用语言链接 */}
      <link rel="alternate" hrefLang="en" href={alternateLanguages.en} />
      <link rel="alternate" hrefLang="zh" href={alternateLanguages.zh} />
      <link rel="alternate" hrefLang="ja" href={alternateLanguages.ja} />
      <link rel="alternate" hrefLang="x-default" href={alternateLanguages.en} />
      
      {/* 基本元标签 */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'zh' ? 'zh_CN' : 'ja_JP'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* 网站图标 */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* 语言标记 */}
      <meta httpEquiv="content-language" content={language} />
    </Head>
  );
}
