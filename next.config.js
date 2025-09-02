/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // 环境变量配置
  env: {
    CUSTOM_KEY: 'power-market-system',
  },
  
  // 构建配置
  experimental: {
    esmExternals: false
  }
};

module.exports = nextConfig;
