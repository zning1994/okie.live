import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["png.pngtree.com", "pngimg.com"],
  },
};

export default nextConfig;
