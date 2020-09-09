import Layout, { siteTitle } from '../components/Layout';
import { getSortedPostsData, IPost, ISortedPostData } from '../lib/posts';
import NextLink from 'next/link';
import {
  Box,
  Heading,
  Link,
  Text,
  Grid,
  List,
  ListItem,
  Divider,
  Badge,
} from '@chakra-ui/core';
import { useState, useEffect } from 'react';
import TagList from '../components/TagList';
export async function getStaticProps(): Promise<{ props }> {
  const data = getSortedPostsData();
  return {
    props: {
      data,
    },
  };
}

interface IProps {
  data?: ISortedPostData;
  children?;
}

export default function Blog({ data }: IProps) {
  const { allPostsData, uniqueTagCount } = data;
  const [posts, setPosts] = useState(allPostsData);
  const [view, setView] = useState('');

  const tagClickHandler = (tag) => {
    console.log('click');
    setView(tag);
  };

  const tagRemoveHandler = (tag) => {
    setView(null);
  };

  useEffect(() => {
    if (view) {
      const filtered = allPostsData.filter((item) => {
        return item.tags.includes(view);
      });
      setPosts(filtered);
    } else {
      setPosts(allPostsData);
    }
  }, [view]);

  return (
    <Layout>
      <Grid gridTemplateColumns={'1fr auto auto'} width="100%" height="100%">
        <Box>
          <Heading as="h1" mb="2rem">
            Thoughts and Other Stuff
          </Heading>

          {posts?.map(({ id, date, title, description }) => {
            return (
              <Box key={id}>
                <Heading as="h2" fontSize="md">
                  <NextLink href="/posts/[id]" as={`/posts/${id}`}>
                    <Link>{title}</Link>
                  </NextLink>
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {' '}
                  {description}
                </Text>
              </Box>
            );
          })}
        </Box>
        <Box display={{ xs: 'none', sm: 'block' }}>
          <Divider orientation="vertical" mx="3rem" minHeight="10rem"></Divider>
        </Box>
        <TagList
          posts={posts}
          uniqueTagCount={uniqueTagCount}
          tagClickHandler={tagClickHandler}
          tagRemoveHandler={tagRemoveHandler}
          view={view}
        ></TagList>
      </Grid>
    </Layout>
  );
}
