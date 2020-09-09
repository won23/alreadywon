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
} from '@chakra-ui/core';
export async function getStaticProps(): Promise<{ props }> {
  const data = getSortedPostsData();
  console.log('data', data);
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
  return (
    <Layout>
      <Grid gridTemplateColumns={'1fr auto auto'} width="100%" height="100%">
        <Box>
          <Heading as="h1" mb="2rem">
            Thoughts and Other Stuff
          </Heading>
          {allPostsData?.map(({ id, date, title, description }) => {
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
        <Box minW="10rem" display={{ xs: 'none', sm: 'block' }}>
          <Heading mb="2rem">Tags</Heading>
          <List styleType="disc">
            {Object.keys(uniqueTagCount).map((tag) => {
              return (
                <ListItem fontSize="sm">
                  <Link>
                    {tag} ({uniqueTagCount[tag]})
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Grid>
    </Layout>
  );
}
