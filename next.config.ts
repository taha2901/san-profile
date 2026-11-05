import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for now — switch off when the backend / CMS is added.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
