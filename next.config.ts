import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  basePath: isGithubPages ? '/jordan-lima.github.io' : undefined,
  assetPrefix: isGithubPages ? '/jordan-lima.github.io/' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
