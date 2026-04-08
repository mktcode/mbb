import type { NextConfig } from "next";

const isExport = process.env.EXPORT === 'true';

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
