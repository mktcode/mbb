import type { NextConfig } from "next";

const adapterPath = process.env.BUILD_WINDOWS ? import.meta.resolve("next-bun-compile") : undefined;

const nextConfig: NextConfig = {
  output: "export",
  adapterPath,
  images: {
    unoptimized: true,
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
