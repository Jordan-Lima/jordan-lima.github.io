const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;