import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import NextLink from 'next/link';
import Date from '../../components/Date';
import { Box, Link, Heading, Text } from '@chakra-ui/core';
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Box as="article">
        <Heading as="h1">{postData.title}</Heading>
        <Date dateString={postData.date} />
        <Box dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></Box>
      </Box>
      <Box mt={['3rem', 0, 0]}>
        <Link as={NextLink} href="/blog">
          <a>← Back to blog</a>
        </Link>
      </Box>
    </Layout>
  );
}
