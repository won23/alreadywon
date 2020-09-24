const withMdxEnhanced = require('next-mdx-enhanced');
var link = require('rehype-autolink-headings');
var slug = require('rehype-slug');
const linkOptions = {
  behavior: 'wrap',
};

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
  rehypePlugins: [slug, [link, linkOptions]],
  usesSrc: true,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
})(nextConfig);
