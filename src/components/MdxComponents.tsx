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
} from '@chakra-ui/core';
import React from 'react';
import CodeBlock from './Codeblock';
import Zoom from 'react-medium-image-zoom';
import customTheme from 'src/styles/theme';

const MDXComponents = {
  h1: (props) => <Heading as="h1" fontSize="3xl" mb={'1.5rem'} {...props} />,
  h2: (props) => <Heading as="h2" fontSize="2xl" mb={'1.5rem'} {...props} />,
  h3: (props) => <Heading as="h3" fontSize="xl" mb={'1.5rem'} {...props} />,
  h4: (props) => <Heading as="h4" fontSize="lg" mb={'1.5rem'} {...props} />,
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
