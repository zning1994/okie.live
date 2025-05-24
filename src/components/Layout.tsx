/* eslint-disable */

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SeoHead from './SeoHead';

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
  return (
    <>
      <SeoHead title={title} description={description} />
      
      <div className={`flex flex-col min-h-screen ${montserrat.className} bg-primary-bg-light`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
