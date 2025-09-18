/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir: `out/${process.env.PAGES_BASE_PATH}`,
  basePath: process.env.PAGES_BASE_PATH
}

export default nextConfig
