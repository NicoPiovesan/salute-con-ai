import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, 
  },
  trailingSlash: true, 
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',

};

export default nextConfig;
