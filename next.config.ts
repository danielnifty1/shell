import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack to avoid Windows compatibility issues
  experimental: {
    turbo: false,
  },
  // Use standard webpack instead of SWC for better Windows compatibility
  swcMinify: false,
};

export default nextConfig;

