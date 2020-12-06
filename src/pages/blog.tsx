import Layout from '../layouts';
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
  Flex,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import TagList from 'src/components/TagList';
import { useRouter } from 'next/router';
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
  const [tags, setTags] = useState([]);
  const router = useRouter();
  const { tag: queryTag }: { tag?: string[] } = router.query;
  useEffect(() => {
    const formattedTags = queryTag
      ? Array.isArray(queryTag)
        ? queryTag
        : [queryTag]
      : [];
    setTags(formattedTags);
    if (formattedTags) {
      const filtered = allPostsData.filter((item) => {
        return formattedTags.every((tag) => item.tags.includes(tag));
      });
      setPosts(filtered);
    } else {
      setPosts(allPostsData);
    }
  }, [queryTag]);

  return (
    <Layout pageTitle="Blog">
      <Grid gridTemplateColumns={'1fr auto auto'} width="100%" height="100%">
        <Box>
          <Heading as="h1" mb="2rem">
            Thoughts... and Other Stuff
          </Heading>

          {posts.length ? (
            posts.map(({ id, title, description }) => {
              return (
                <Box key={id} mb={'1.25rem'}>
                  <Heading as="h2" fontSize="md">
                    <NextLink href={`/posts/${id}`}>
                      <Link>{title}</Link>
                    </NextLink>
                  </Heading>
                  <Text fontSize="sm"> {description}</Text>
                </Box>
              );
            })
          ) : (
            <Flex
              fontSize="xl"
              minH="10rem"
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <Text textAlign="center" fontSize="5rem">
                  👀
                </Text>
                Nothing to see here. Try removing some filters!
              </Box>
            </Flex>
          )}
        </Box>
        <Box display={{ base: 'none', sm: 'block' }}>
          <Divider orientation="vertical" mx="3rem" minHeight="10rem"></Divider>
        </Box>
        <TagList uniqueTagCount={uniqueTagCount} selectedTags={tags}></TagList>
      </Grid>
    </Layout>
  );
}
