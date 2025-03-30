import createMDX from '@next/mdx';

const withMDX = createMDX({
  // TODO - Markdown 플러그인 설정
});

export default withMDX((phase) => {
  const isDev = phase === process.env.NODE_ENV;
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: 'export',
    assetPrefix: isDev ? undefined : 'https://heo-it.github.io/',
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  };
  return nextConfig;
});
