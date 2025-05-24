import '../styles/globals.css'
import { useEffect, useRef, useState } from "react";
import Head from 'next/head';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaUserAlt, FaBuilding, FaTicketAlt, FaChartLine } from "react-icons/fa";

// 使用 Google Fonts 的 Playfair Display 和 Montserrat 字体
import { Playfair_Display, Montserrat } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Home() {
  const [language, setLanguage] = useState<"zh" | "en">("zh");
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  
  // 鼠标悬停效果状态
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
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
  const features = [
    {
      icon: <FaCalendarAlt className="text-3xl text-[#e06a4b]" />,
      titleZh: "排期管理",
      titleEn: "Smart Scheduling",
      descZh: "高效管理演出档期，避免冲突",
      descEn: "Efficiently manage performance schedules and avoid conflicts"
    },
    {
      icon: <FaUserAlt className="text-3xl text-[#e06a4b]" />,
      titleZh: "艺人档案",
      titleEn: "Talent Profiles",
      descZh: "完整记录艺人信息与演出历史",
      descEn: "Complete artist information and performance history"
    },
    {
      icon: <FaBuilding className="text-3xl text-[#e06a4b]" />,
      titleZh: "场地对接",
      titleEn: "Venue Integration",
      descZh: "便捷查询和预订演出场地",
      descEn: "Easily search and book performance venues"
    },
    {
      icon: <FaTicketAlt className="text-3xl text-[#e06a4b]" />,
      titleZh: "票务系统",
      titleEn: "Ticketing System",
      descZh: "无缝对接各大票务平台",
      descEn: "Seamless integration with major ticketing platforms"
    },
    {
      icon: <FaChartLine className="text-3xl text-[#e06a4b]" />,
      titleZh: "数据分析",
      titleEn: "Data Insights",
      descZh: "全面的演出数据统计与分析",
      descEn: "Comprehensive performance data statistics and analysis"
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
        <title>{language === "zh" ? "欧奇演界 - 一站式演出生态平台" : "OkieLive - Orchestrating the World of Performance"}</title>
        <meta 
          name="description" 
          content={language === "zh" 
            ? "欧奇演界是一款面向全球演出行业的一站式演出管理与协作平台，支持多角色协同管理。" 
            : "OkieLive is an all-in-one performance management and collaboration platform for the global live entertainment industry."
          } 
        />
      </Head>
      <div
        className={`${montserrat.className} min-h-screen flex flex-col items-center relative overflow-hidden bg-okie-bg-light`}
      >
        {/* 导航栏 */}
        <nav className="w-full py-5 px-8 flex justify-between items-center z-10 bg-white/90 backdrop-blur-sm border-b border-okie-primary/10">
          <div className="flex items-center">
            <h1 className={`${playfair.className} text-2xl font-bold text-okie-primary`}>
              {language === "zh" ? "欧奇演界" : "OkieLive"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => {
                setLanguage("zh");
              }}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${language === "zh" ? "bg-okie-primary text-white" : "bg-okie-bg-medium text-okie-primary"}`}
            >
              中文
            </button>
            <button 
              onClick={(e) => {
                setLanguage("en");
              }}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${language === "en" ? "bg-okie-primary text-white" : "bg-okie-bg-medium text-okie-primary"}`}
            >
              English
            </button>
          </div>
        </nav>

        {/* 主内容区 */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-8 py-16 flex flex-col items-center z-10">
          {/* 标题和介绍 */}
          <motion.div 
            className="text-center mb-16 animate-on-scroll"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 text-okie-primary`}>
              {language === "zh" ? "欧奇演界" : "OkieLive"}
            </h1>
            <p className="text-xl md:text-2xl text-[#333] mb-8 font-medium">
              {language === "zh" ? "艺人、场地、主办方，一站式演出生态平台" : "A Unified Platform for Artists, Venues, and Organizers"}
            </p>
            <p className="text-lg max-w-3xl mx-auto text-[#555] leading-relaxed">
              {language === "zh" 
                ? "欧奇演界是一款面向全球演出行业的一站式演出管理与协作平台，支持多角色协同管理，包括艺人、经纪人、场地方、主办方及票务方等。平台提供排期管理、艺人档案、合同流转、票务对接、数据统计等全流程数字化工具，助力演出活动高效落地与专业运营。" 
                : "OkieLive is an all-in-one performance management and collaboration platform designed for the global live entertainment industry. It empowers artists, agents, venues, organizers, and ticketing partners to work seamlessly through smart scheduling, talent profiles, contract workflows, ticketing integration, and data insights — enabling efficient execution and professional operations for every event."}
            </p>
          </motion.div>

          {/* 特性展示 */}
          <div className="w-full mb-20 animate-on-scroll">
            <h2 className={`${playfair.className} text-3xl font-bold text-center mb-12 text-gray-800`}>
              {language === "zh" ? "核心功能" : "Core Features"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-okie-primary/10 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover="hover"
                  variants={featureCardVariants}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-okie-primary/10 rounded-full">
                      {feature.icon}
                    </div>
                    <h3 className={`${playfair.className} text-xl font-bold mb-3 text-gray-800`}>
                      {language === "zh" ? feature.titleZh : feature.titleEn}
                    </h3>
                    <p className="text-gray-600">
                      {language === "zh" ? feature.descZh : feature.descEn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 轮播特性（移动端） */}
          <div className="md:hidden w-full mb-16 animate-on-scroll">
            <div className="bg-white p-8 rounded-lg border border-okie-primary/10 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeatureIndex}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 p-4 bg-okie-primary/10 rounded-full">
                    {features[currentFeatureIndex].icon}
                  </div>
                  <h3 className={`${playfair.className} text-xl font-bold mb-3 text-gray-800`}>
                    {language === "zh" 
                      ? features[currentFeatureIndex].titleZh 
                      : features[currentFeatureIndex].titleEn}
                  </h3>
                  <p className="text-gray-600">
                    {language === "zh" 
                      ? features[currentFeatureIndex].descZh 
                      : features[currentFeatureIndex].descEn}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-center mt-6 gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentFeatureIndex ? "bg-okie-primary" : "bg-gray-300"
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
              {language === "zh" ? "立即体验" : "Get Started"}
            </button>
            <button className="btn-secondary">
              {language === "zh" ? "了解更多" : "Learn More"}
            </button>
          </motion.div>
        </main>

        {/* 页脚 */}
        <footer className="w-full py-8 bg-white border-t border-okie-primary/10 z-10">
          <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-6 md:mb-0">
              © 2025 OkieLive. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-600 hover:text-okie-primary transition-colors">
                {language === "zh" ? "关于我们" : "About Us"}
              </a>
              <a href="#" className="text-gray-600 hover:text-okie-primary transition-colors">
                {language === "zh" ? "联系我们" : "Contact Us"}
              </a>
              <a href="#" className="text-gray-600 hover:text-okie-primary transition-colors">
                {language === "zh" ? "隐私政策" : "Privacy Policy"}
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* 全局样式已移至 globals.css */}
    </>
  );
}
