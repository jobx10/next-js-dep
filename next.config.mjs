/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/next-js-dep', // Replace with your GitHub repository name
  assetPrefix: '/next-js-dep/', // Replace with your GitHub repository name
   output: 'export', 
    trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
