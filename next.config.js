/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: '*.hn-bkt.clouddn.com' }]
  }
}

module.exports = nextConfig
