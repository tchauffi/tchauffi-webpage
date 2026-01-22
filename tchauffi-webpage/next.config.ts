import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Uncomment and set if deploying to a subpath (e.g., /tchauffi-webpage)
  // basePath: "/tchauffi-webpage",
};

export default nextConfig;
