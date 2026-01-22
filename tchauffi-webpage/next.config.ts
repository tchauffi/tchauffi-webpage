import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/tchauffi-webpage",
  assetPrefix: "/tchauffi-webpage",
};

export default nextConfig;
