/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      { source: "/experience", destination: "/background", permanent: true },
    ];
  },
};

export default nextConfig;
