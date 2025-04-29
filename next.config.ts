import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["png.pngtree.com", "pngimg.com"],
    unoptimized: true,
  },
  output: "export",
  distDir: "out",
};

export default nextConfig;
