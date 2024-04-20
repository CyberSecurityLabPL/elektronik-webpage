/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.OUTPUT ? process.env.OUTPUT : undefined 
};

export default nextConfig;
