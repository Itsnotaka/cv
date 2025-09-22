import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "om32oh4l85.ufs.sh",
        pathname: "/f/*",
      },
    ],
  },
};

export default nextConfig;
