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
import { useRouter } from 'next/router';

export function TagItem({ tag, uniqueTagCount, onClick, selected }) {
  return (
    <Link
      onClick={() => onClick(tag)}
      fontWeight={selected ? 'bold' : 'normal'}
    >
      {tag} ({uniqueTagCount})
    </Link>
  );
}

export interface ITagListProps {
  uniqueTagCount: { [key: string]: number };
  selectedTags: string[];
}

export default function TagList({
  uniqueTagCount,
  selectedTags,
}: ITagListProps) {
  const router = useRouter();
  function addTagToUri(tag) {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((item) => item !== tag)
      : [...selectedTags, tag];
    router.push({
      query: { tag: newTags },
    });
  }

  return (
    <Box minW="10rem" display={{ base: 'none', sm: 'block' }}>
      <Heading mb="2rem">Tags</Heading>

      <List styleType="disc">
        {Object.keys(uniqueTagCount).map((tag, index) => {
          return (
            <ListItem key={index} fontSize="sm">
              <TagItem
                tag={tag}
                uniqueTagCount={uniqueTagCount[tag]}
                onClick={addTagToUri}
                selected={selectedTags.includes(tag) ? true : false}
              ></TagItem>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
