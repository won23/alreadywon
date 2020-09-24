const withMdxEnhanced = require('next-mdx-enhanced');
var link = require('rehype-autolink-headings');
var slug = require('rehype-slug');
const emoji = require('remark-emoji');
const image = require('remark-images');
const imageWrap = require('remark-unwrap-images');
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
  remarkPlugins: [[emoji, { emoticon: true }], image, imageWrap],
  rehypePlugins: [slug, [link, linkOptions]],
  usesSrc: true,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
})(nextConfig);
