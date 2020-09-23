import { Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/core';
import React from 'react';

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" {...props} />,
  h2: (props) => <Heading as="h1" size="lg" {...props} />,
  h3: (props) => <Heading as="h1" size="md" {...props} />,
  p: (props) => <Text as="p" {...props} />,
  ul: (props) => (
    <List as="ul" styleType="disc" spacing={4} mb={'1rem'} {...props} />
  ),
  ol: (props) => (
    <List as="ol" styleType="decimal" spacing={4} mb={'1rem'} {...props} />
  ),
  li: (props) => <ListItem {...props} />,
};

export default MDXComponents;
