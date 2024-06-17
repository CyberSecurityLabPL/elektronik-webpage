/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.OUTPUT ? process.env.OUTPUT : undefined,
  experimental: {
    missingSuspenseWithCSRBailout: false,
    serverActions: {
      allowedOrigins: ["thefinalpath.net", "localhost:3000"],
      allowedForwardedHosts: ["thefinalpath.net", "localhost:3000"]
    }
  },
  images: {
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
