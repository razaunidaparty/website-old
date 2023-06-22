/** @type {import('next').NextConfig} */
const nextConfig = {
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
