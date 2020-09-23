const withMdxEnhanced = require('next-mdx-enhanced');
const nextConfig = {
  distDir: 'nextjs',
  env: {
    FIREBASE_PROJECT_ID: 'already-won',
  },
  experimental: {
    sprFlushToDisk: false,
  },
};
module.exports = withMdxEnhanced({
  layoutPath: 'src/layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: true,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      console.log('frontMatter', frontMatter);
    },
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
})(nextConfig);
