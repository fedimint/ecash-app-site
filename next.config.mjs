/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  // basePath: process.env.PAGES_BASE_PATH
}

export default nextConfig
