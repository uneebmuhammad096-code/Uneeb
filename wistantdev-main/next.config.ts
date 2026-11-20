import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },

  async headers() {
    return [
      {
        source: '/cv/:path*',
        headers: [{key: 'X-Robots-Tag', value: 'noindex, nofollow'}],
      },
    ];
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
