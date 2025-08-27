import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  //basePath: '/lp', // いくつかの画像のURLも変える必要あり
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
