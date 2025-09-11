const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  basePath: undefined,
  assetPrefix: undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;