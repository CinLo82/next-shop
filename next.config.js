/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.lorem.space',
        port:"",
        pathname:"/image/**",
      },
      {
        protocol: 'https',
        hostname: 'placeimg.com',
        port:"",
        pathname:"/image/**",
      },
      {
        protocol: 'https',
        hostname: 'wixmp.com',
        port:"",
        pathname:"/image/**",
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port:"",
        pathname:"/image/**",
      },
      {
        protocol: 'https',
        hostname: 'empresas.blogthinkbig.com',
        port:"",
        pathname:"/image/**",
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port:"",
        pathname:"/image/**",
      },
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
        port:"",
        pathname:"/image/**",
      },
      {
        protocol: 'https',
        hostname: 'scontent.fxry1-2.fna.fbcdn.net',
        port:"",
        pathname:"/image/**",
      },
    ],
    unoptimized: true,
    domains: [
      'api.lorem.space', 
      'placeimg.com', 
      'wixmp.com', 
      'romapy'
    ],
  },
  
};

module.exports = nextConfig
