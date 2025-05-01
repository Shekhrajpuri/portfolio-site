/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-site' : '',
}

export default nextConfig
