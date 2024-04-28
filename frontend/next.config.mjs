/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.OUTPUT ? process.env.OUTPUT : undefined,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["api.thefinalpath.net"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.thefinalpath.net",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.thefinalpath.net",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
}

export default nextConfig
