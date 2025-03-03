import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This base path should match your GitHub repository name
  // e.g., if your repo is user/my-project, use '/my-project'
  basePath: process.env.NODE_ENV === 'production' ? '/virtual-menu' : '',
};

export default nextConfig;
