/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/portfolio-site', // Add this if you're deploying to GitHub Pages
}

export default nextConfig
