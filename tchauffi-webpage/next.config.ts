import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/tchauffi-webpage",
  assetPrefix: "/tchauffi-webpage",
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
