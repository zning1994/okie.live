/* eslint-disable */
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { Playfair_Display, Montserrat } from "next/font/google";

// 导入国际化系统
import { useI18n } from '@/lib/i18n';

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Header() {
  // 使用i18n国际化系统
  const { language, setLanguage, t } = useI18n();

  return (
    <nav className={`w-full py-3 sm:py-5 px-4 sm:px-8 flex justify-between items-center z-10 bg-white/90 backdrop-blur-sm border-b border-primary/10 ${playfair.className} ${montserrat.className}`}>
      <div className="flex items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/okielivelogo.png"
            alt="OkieLive Logo"
            width={160}
            height={40}
            className="w-[140px] sm:w-[200px] h-auto object-contain"
          />
        </Link>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative group">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'zh' | 'en' | 'ja')}
            className="appearance-none px-2 sm:px-3 py-1.5 sm:py-2 text-sm sm:text-base rounded-md hover:bg-gray-100 flex items-center gap-2 pr-7 sm:pr-8 cursor-pointer"
          >
            <option value="zh">简体中文</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
          <svg 
            className="w-3 h-3 sm:w-4 sm:h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <button 
          className="px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-md bg-primary text-white hover:bg-primary/90 transition-colors whitespace-nowrap">
          {t('cta.getStarted')}
        </button>
      </div>
    </nav>
  );
}
