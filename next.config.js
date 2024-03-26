// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     remotePatterns: [{ hostname: '*.hn-bkt.clouddn.com' }]
//   }
// }
//
// module.exports = nextConfig

//使用docker构建镜像需要设置的
/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
};
