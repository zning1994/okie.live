import '@/styles/globals.css'
import { useEffect, useRef, useState } from "react";
import Head from 'next/head';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaUserAlt, FaBuilding, FaTicketAlt, FaChartLine } from "react-icons/fa";

// 使用 Google Fonts 的 Playfair Display 和 Montserrat 字体
import { Playfair_Display, Montserrat } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// 导入国际化系统
import { useI18n } from '@/lib/i18n';
import type { TranslationKey } from '@/lib/i18n';

export default function Home() {
  // 使用i18n国际化系统
  const { language, setLanguage, t, initLanguage } = useI18n();
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  
  // 鼠标悬停效果状态
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  // 语言初始化由 LanguageDetector 组件处理
  
  // 页面滚动动画效果
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('animate-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // 初始触发一次
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 语言切换动画效果
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // 特性卡片悬停效果
  const featureCardVariants = {
    hover: { 
      y: -10, 
      boxShadow: '0 15px 30px rgba(224, 106, 75, 0.15)',
      transition: { duration: 0.3 }
    }
  };

  // 特性列表
  const features: Array<{
    icon: React.ReactNode;
    titleKey: TranslationKey;
    descKey: TranslationKey;
  }> = [
    {
      icon: <FaCalendarAlt className="text-3xl text-[#e06a4b]" />,
      titleKey: 'features.scheduling.title',
      descKey: 'features.scheduling.description'
    },
    {
      icon: <FaUserAlt className="text-3xl text-[#e06a4b]" />,
      titleKey: 'features.profiles.title',
      descKey: 'features.profiles.description'
    },
    {
      icon: <FaBuilding className="text-3xl text-[#e06a4b]" />,
      titleKey: 'features.venues.title',
      descKey: 'features.venues.description'
    },
    {
      icon: <FaTicketAlt className="text-3xl text-[#e06a4b]" />,
      titleKey: 'features.ticketing.title',
      descKey: 'features.ticketing.description'
    },
    {
      icon: <FaChartLine className="text-3xl text-[#e06a4b]" />,
      titleKey: 'features.analytics.title',
      descKey: 'features.analytics.description'
    }
  ];

  // 自动轮播特性
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <>
      <Head>
        <title>{t('site.title')}</title>
        <meta 
          name="description" 
          content={t('site.description')} 
        />
      </Head>
      <div
        className={`${montserrat.className} min-h-screen flex flex-col items-center relative overflow-hidden bg-primary-bg-light`}
      >
        {/* 导航栏 */}
        <nav className="w-full py-5 px-8 flex justify-between items-center z-10 bg-white/90 backdrop-blur-sm border-b border-primary/10">
          <div className="flex items-center">
            <h1 className={`${playfair.className} text-2xl font-bold text-primary`}>
              {t('site.name')}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLanguage("zh")}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${language === "zh" ? "bg-primary text-white" : "bg-primary-bg-medium text-primary"}`}
            >
              中文
            </button>
            <button 
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${language === "en" ? "bg-primary text-white" : "bg-primary-bg-medium text-primary"}`}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage("ja")}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${language === "ja" ? "bg-primary text-white" : "bg-primary-bg-medium text-primary"}`}
            >
              日本語
            </button>
          </div>
        </nav>

        {/* 主内容区 */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-8 py-16 flex flex-col items-center z-10">
          {/* 标题和介绍 */}
          <motion.div 
            className="text-center mb-10 animate-on-scroll"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 text-primary`}>
              {t('site.name')}
            </h1>
            <p className="text-xl md:text-2xl text-[#333] mb-8 font-medium">
              {t('site.description')}
            </p>
            {/* <p className="text-lg max-w-3xl mx-auto text-[#555] leading-relaxed">
              {t('site.slogan')}
            </p> */}
          </motion.div>

          {/* 特性展示 */}
          <div className="w-full mb-12 animate-on-scroll">
            {/* <h2 className={`${playfair.className} text-3xl font-bold text-center mb-12 text-gray-800`}>
              {t('features.title')}
            </h2> */}
            <div className="hidden md:block relative w-full max-w-sm mx-auto h-64 mb-8">
              {/* 桌面版轮播特性 */}
              <div className="relative w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ${currentFeatureIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentFeatureIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-primary-bg-light flex items-center justify-center mb-6">
                        {feature.icon}
                      </div>
                      <h3 className={`${playfair.className} text-3xl font-bold mb-4 text-gray-800`}>
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-gray-600 max-w-lg text-lg">
                        {t(feature.descKey)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* 轮播指示器 */}
              <div className="flex justify-center mt-6 gap-3">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentFeatureIndex ? "bg-primary" : "bg-gray-300"}`}
                    onClick={() => setCurrentFeatureIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 轮播特性（移动端） */}
          <div className="md:hidden w-full mb-16 animate-on-scroll">
            <div className="bg-white p-8 rounded-lg border border-primary/10 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeatureIndex}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 p-4 bg-primary/10 rounded-full">
                    {features[currentFeatureIndex].icon}
                  </div>
                  <h3 className={`${playfair.className} text-xl font-bold mb-3 text-gray-800`}>
                    {t(features[currentFeatureIndex].titleKey)}
                  </h3>
                  <p className="text-gray-600">
                    {t(features[currentFeatureIndex].descKey)}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-center mt-6 gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentFeatureIndex ? "bg-primary" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentFeatureIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA 按钮 */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="btn-primary">
              {t('cta.getStarted')}
            </button>
            <button className="btn-secondary">
              {t('cta.learnMore')}
            </button>
          </motion.div>
        </main>

        {/* 页脚 */}
        <footer className="w-full py-8 bg-white border-t border-primary/10 z-10">
          <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-6 md:mb-0">
              © {t('site.copyright')}
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                {t('footer.about_us')}
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                {t('footer.contact_us')}
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                {t('footer.privacy_policy')}
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* 全局样式已移至 globals.css */}
    </>
  );
}
