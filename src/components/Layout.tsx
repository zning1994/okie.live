import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useI18n } from '@/lib/i18n';

// 使用 Google Fonts 的 Playfair Display 和 Montserrat 字体
import { Playfair_Display, Montserrat } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const { t } = useI18n();
  
  // 使用传入的标题或默认标题
  const pageTitle = title || t('site.title');
  // 使用传入的描述或默认描述
  const pageDescription = description || t('site.description');

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={`flex flex-col min-h-screen ${playfair.className} ${montserrat.className}`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
