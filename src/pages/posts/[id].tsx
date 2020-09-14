import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import NextLink from 'next/link';
import Date from '../../components/Date';
import { Box, Link, Heading, Text } from '@chakra-ui/core';
import Reference from '../../components/Reference';
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
      <Box as="article" mb="1rem">
        <Heading as="h1">{postData.title}</Heading>
        <Box
          mt="1rem"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></Box>
      </Box>
      <Reference link={{ href: '/blog' }}>← Back to blog</Reference>
    </Layout>
  );
}
