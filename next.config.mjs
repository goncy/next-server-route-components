/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    ppr: true
  },
  typescript: {
    ignoreBuildErrors: true // Returning a Promise as JSX
  }
};

export default nextConfig;
