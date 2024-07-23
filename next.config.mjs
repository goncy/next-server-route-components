/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Prevent effects running twice in development
  experimental: {
    ppr: true // To get React latest version
  },
};

export default nextConfig;
