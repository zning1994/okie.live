import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <title>A cute website - okie.live</title>
        <meta name="title" content="A cute website - okie.live" />
        <meta name="description" content="A cute website" />
        <meta name="keywords" content="okie, okie.live, cute, website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
