import createMDX from '@next/mdx';

const withMDX = createMDX({
  // MDX 플러그인 설정
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // static export에서 필요
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://heo-it.github.io/' : undefined,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

// 개발 환경 로깅
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('nextConfig:', nextConfig);

export default withMDX(nextConfig);
