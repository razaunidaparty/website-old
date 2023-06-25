/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.wccftech.com/**",
        port: "",
        // pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
