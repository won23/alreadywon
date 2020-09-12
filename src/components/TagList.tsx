import * as React from 'react';
import {
  Box,
  Heading,
  Badge,
  List,
  ListItem,
  Link,
  Flex,
} from '@chakra-ui/core';
import { IPost } from '../lib/posts';

export interface ITagListProps {
  tagRemoveHandler;
  tagClickHandler;
  posts: IPost[];
  view: string | string[];
  uniqueTagCount: { [key: string]: number };
}

export default function TagList({
  tagClickHandler,
  tagRemoveHandler,
  posts,
  view,
  uniqueTagCount,
}: ITagListProps) {
  return (
    <Box minW="10rem" display={{ xs: 'none', sm: 'block' }}>
      <Heading mb="2rem">Tags</Heading>
      <Box minH="3rem">
        {view ? (
          <>
            <Heading fontSize="xs" display="inline">
              {' '}
              Viewing:{' '}
            </Heading>
            <Badge
              alignSelf="center"
              color="blue.500"
              cursor="pointer"
              onClick={() => tagRemoveHandler(view)}
            >
              {view}
            </Badge>
          </>
        ) : (
          <Heading fontSize="xs">Viewing all posts</Heading>
        )}
      </Box>

      <List styleType="disc">
        {Object.keys(uniqueTagCount).map((tag, index) => {
          return (
            <ListItem key={index} fontSize="sm">
              <Link onClick={() => tagClickHandler(tag)}>
                {tag} ({uniqueTagCount[tag]})
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
