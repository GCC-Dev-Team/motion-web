/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [{ hostname: '*.hn-bkt.clouddn.com' }]
  }
}

module.exports = nextConfig
