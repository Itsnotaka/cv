/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/x",
        destination: "https://x.com/d2ac__",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/itsnotaka",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/nameisdaniel/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
