import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Code,
  Image,
  Box,
  useColorMode,
} from '@chakra-ui/core';
import React from 'react';
import CodeBlock from './Codeblock';
import Zoom from 'react-medium-image-zoom';
import customTheme from 'src/styles/theme';

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" mb={'.5rem'} {...props} />,
  h2: (props) => <Heading as="h1" size="lg" mb={'.5rem'} {...props} />,
  h3: (props) => <Heading as="h1" size="md" mb={'.5rem'} {...props} />,
  p: (props) => <Text as="p" {...props} />,
  ul: (props) => (
    <List as="ul" styleType="disc" spacing={1} mb={'1rem'} {...props} />
  ),
  ol: (props) => (
    <List as="ol" styleType="decimal" spacing={1} mb={'1rem'} {...props} />
  ),
  li: (props) => <ListItem {...props} />,
  inlineCode: (props) => <Code as="code" {...props} />,
  code: (props) => <CodeBlock code={props.children.trim()} {...props} />,
  img: (props) => {
    const { colorMode } = useColorMode();
    return (
      <Zoom overlayBgColorEnd={customTheme.mode[colorMode].background}>
        <Image
          {...props}
          objectFit="cover"
          fallbackSrc="http://placekitten.com/300/300"
          mx="auto"
          my="1rem"
          maxW={{ xs: 'sm', sm: 'lg' }}
        />
      </Zoom>
    );
  },
};

export default MDXComponents;
