const strapiInternalUrl =
  process.env.STRAPI_INTERNAL_URL ??
  (process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5000"
    : "http://strapi:5000")

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.OUTPUT === "standalone" ? "standalone" : undefined,
  async rewrites() {
    return [
      {
        // Only public uploads are exposed through the frontend origin. API and
        // admin routes remain available exclusively on the internal backend.
        source: "/cms/uploads/:path*",
        destination: `${strapiInternalUrl}/uploads/:path*`,
      },
    ]
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 80],
  },
}

export default nextConfig
