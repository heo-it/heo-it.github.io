export default (phase) => {
  const isDev = phase === process.env.NODE_ENV;
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: 'export',
    assetPrefix: isDev ? undefined : 'https://heo-it.github.io/',
  };
  return nextConfig;
};
