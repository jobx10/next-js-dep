
/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export', 
  reactStrictMode: true,
  basePath: '/next-js-dep', // Replace with your GitHub repository name
  assetPrefix: '/next-js-dep/', // Replace with your GitHub repository name
  
    trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
