const imagesRemoteHostname = process.env.STRAPI_HOSTNAME.toLowerCase()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.OUTPUT === "standalone" ? "standalone" : undefined,
  experimental: {
    missingSuspenseWithCSRBailout: true,
    // serverActions: {
    //   allowedOrigins: ["thefinalpath.net", "localhost:3000"],
    //   allowedForwardedHosts: ["thefinalpath.net", "localhost:3000"],
    // },
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: imagesRemoteHostname,
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: imagesRemoteHostname,
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
}

export default nextConfig
