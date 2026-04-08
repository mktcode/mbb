import type { NextConfig } from "next";

const isExport = process.env.EXPORT === 'true';

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
};

export default nextConfig;
