/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '/images/**',
        },
      ],
    },
};

module.exports = nextConfig