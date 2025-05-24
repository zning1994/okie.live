import { useEffect, useRef } from "react";
import Image from "next/image";
import Head from 'next/head';

// 使用 Google Fonts 的 Nunito 字体
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

// 樱花花瓣图片（请将图片复制到 public/assets/sakura.png）
const SAKURA_IMG = "/assets/sakura.png";


export default function Home() {
  // 用于管理页面上弹出的 okie 字样
  const okieContainerRef = useRef<HTMLDivElement>(null);

  // 樱花花瓣动效
  useEffect(() => {
    const sakuraContainer = document.createElement("div");
    sakuraContainer.style.position = "fixed";
    sakuraContainer.style.top = "0";
    sakuraContainer.style.left = "0";
    sakuraContainer.style.width = "100vw";
    sakuraContainer.style.height = "100vh";
    sakuraContainer.style.pointerEvents = "none";
    sakuraContainer.style.zIndex = "0";
    document.body.appendChild(sakuraContainer);

    function createSakuraPetal() {
      // 每次生成2~3个花瓣
      const count = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < count; i++) {
        const petal = document.createElement("img");
        petal.src = SAKURA_IMG;
        petal.style.position = "absolute";
        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.top = "-40px";
        petal.style.width = 24 + Math.random() * 16 + "px";
        petal.style.opacity = String(0.7 + Math.random() * 0.3);
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        petal.style.pointerEvents = "none";
        sakuraContainer.appendChild(petal);

        const duration = 6 + Math.random() * 4;
        const translateX = (Math.random() - 0.5) * 100;
        petal.animate([
          { transform: petal.style.transform, top: petal.style.top, left: petal.style.left },
          { transform: `rotate(${Math.random() * 360}deg)`, top: window.innerHeight + 40 + "px", left: `calc(${petal.style.left} + ${translateX}px)` }
        ], {
          duration: duration * 1000,
          easing: "linear"
        });
        setTimeout(() => {
          sakuraContainer.removeChild(petal);
        }, duration * 1000);
      }
    }
    const sakuraInterval = setInterval(createSakuraPetal, 120);
    return () => {
      clearInterval(sakuraInterval);
      document.body.removeChild(sakuraContainer);
    };
  }, []);

  // 多语言点击词
  const okieWords = [
    "okie", // 英文
    "おきー", // 日语
    "欧气" // 中文
  ];
  // 点击页面时弹出 okie 动效
  function handleClick(e: React.MouseEvent) {
    const container = okieContainerRef.current;
    if (!container) return;
    const okie = document.createElement("div");
    okie.innerText = okieWords[Math.floor(Math.random() * okieWords.length)];
    okie.className = "okie-bounce";
    okie.style.position = "absolute";
    okie.style.left = e.clientX - 20 + "px";
    okie.style.top = e.clientY - 30 + "px";
    okie.style.fontSize = "2rem";
    okie.style.fontWeight = "bold";
    okie.style.color = "#ff7eb9";
    okie.style.textShadow = "0 2px 8px #fff5, 0 1px 0 #fff";
    okie.style.pointerEvents = "none";
    okie.style.userSelect = "none";
    okie.style.zIndex = "10";
    container.appendChild(okie);
    setTimeout(() => {
      okie.style.opacity = "0";
      okie.style.transform = "translateY(-40px) scale(1.3)";
    }, 100);
    setTimeout(() => {
      container.removeChild(okie);
    }, 1000);
  }

  return (
    <>
      <Head>
        <title>A cute website - okie.live</title>
      </Head>
      <div
        className={
          `${nunito.className} min-h-screen flex flex-col items-center justify-center relative overflow-hidden` +
          " bg-gradient-to-b from-pink-100 via-blue-100 to-purple-100"
        }
      style={{ fontFamily: "Nunito, sans-serif", cursor: "pointer" }}
      onClick={handleClick}
    >
      {/* okie 弹出字样容器 */}
      <div ref={okieContainerRef} className="fixed inset-0 pointer-events-none z-20" />
      {/* JK 少女插画（可替换为本地图片或 SVG） */}
      <div className="z-10 flex flex-col items-center">
        <Image
          src="https://png.pngtree.com/png-clipart/20221222/ourmid/pngtree-manga-two-dimensional-character-uniform-girl-cartoon-element-png-image_6503957.png"
          alt="JK少女"
          width={260}
          height={340}
          style={{ borderRadius: "1.5rem", boxShadow: "0 4px 32px #ffb5e5aa" }}
          priority
        />
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-pink-500 drop-shadow-lg tracking-wide flex flex-col items-center">
          <span>欢迎来到 okie.live！</span>
          <span className="text-lg text-blue-500 mt-1">Welcome to okie.live!</span>
          <span className="text-lg text-purple-500 mt-1">おきーへようこそ！</span>
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-purple-500 font-semibold flex flex-col items-center">
          <span>在这里发现可爱的世界~</span>
          <span className="text-base text-blue-500 mt-1">Discover a cute world here~</span>
          <span className="text-base text-purple-500 mt-1">ここで可愛い世界を見つけよう〜</span>
        </p>
        {/* 三语点击提示 */}
        <div className="mt-8 text-sm text-gray-500 animate-pulse select-none">
          <div>点击屏幕有惊喜！</div>
          <div>Click the screen for a surprise!</div>
          <div>画面をクリックしてサプライズ！</div>
        </div>
      </div>
      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #ffe3f3 0%, #cce7ff 100%);
        }
        .okie-bounce {
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          will-change: transform, opacity;
        }
      `}</style>
    </div>
    </>
  );
}
