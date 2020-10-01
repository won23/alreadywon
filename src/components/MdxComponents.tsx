import {
  Heading,
  Text,
  List,
  ListItem,
  Flex,
  Code,
  Image,
  Box,
  useColorMode,
  Link,
  chakra,
} from '@chakra-ui/core';
import NextLink from 'next/router';
import React from 'react';
import CodeBlock from './Codeblock';
import Zoom from 'react-medium-image-zoom';
import customTheme from 'src/styles/theme';

const LinkedHeading = (props) => {
  return (
    <chakra.h2
      fontWeight="bold"
      css={{
        '&:hover a': { opacity: 1 },
      }}
      {...props}
    >
      <chakra.div pointerEvents="auto">
        {props.children}
        <chakra.a
          aria-label="anchor"
          color="blue.500"
          fontWeight="normal"
          opacity={0}
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </chakra.a>
      </chakra.div>
    </chakra.h2>
  );
};

const MDXComponents = {
  h1: (props) => (
    <LinkedHeading as="h1" fontSize="3xl" mb={'1.5rem'} {...props} />
  ),
  h2: (props) => (
    <LinkedHeading as="h2" fontSize="2xl" mb={'1.5rem'} {...props} />
  ),
  h3: (props) => (
    <LinkedHeading as="h3" fontSize="xl" mb={'1.5rem'} {...props} />
  ),
  h4: (props) => (
    <LinkedHeading as="h4" fontSize="lg" mb={'1.5rem'} {...props} />
  ),
  p: (props) => <Text as="p" {...props} />,
  ul: (props) => (
    <List
      as="ul"
      styleType="disc"
      spacing={1}
      ml={'1rem'}
      mb={'1rem'}
      {...props}
    />
  ),
  ol: (props) => (
    <List
      as="ol"
      styleType="decimal"
      spacing={1}
      ml={'1rem'}
      mb={'1rem'}
      {...props}
    />
  ),
  li: (props) => <ListItem {...props} />,
  inlineCode: (props) => <Code as="code" {...props} />,
  code: (props) => <CodeBlock code={props.children.trim()} {...props} />,
  a: (props) => <chakra.a apply="mdx.a" {...props} />,
  img: (props) => {
    const { colorMode } = useColorMode();
    return (
      <Flex justifyContent="center" w="100%">
        <Zoom overlayBgColorEnd={customTheme.mode[colorMode].background}>
          <Image
            {...props}
            objectFit="cover"
            fallbackSrc="http://placekitten.com/300/300"
            my="1rem"
            maxW={'xs'}
          />
        </Zoom>
      </Flex>
    );
  },
};

export default MDXComponents;
