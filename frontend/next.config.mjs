const imagesRemoteHostname = process.env.STRAPI_HOSTNAME.toLowerCase()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.OUTPUT === "standalone" ? "standalone" : undefined,
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
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 80],
  },
}

export default nextConfig
