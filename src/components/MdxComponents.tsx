import { Flex, Image, useColorMode, chakra, Alert } from '@chakra-ui/react';
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
      pointerEvents="auto"
      {...props}
    >
      {props.children}
      <chakra.a
        aria-label="anchor"
        color="gray.300"
        fontWeight="normal"
        opacity={0}
        ml="0.375rem"
        href={`#${props.id}`}
      >
        #
      </chakra.a>
    </chakra.h2>
  );
};

const MDXComponents = {
  h1: (props) => (
    <LinkedHeading apply="mdx.h1" as="h1" mb={'1.5rem'} {...props} />
  ),
  h2: (props) => (
    <LinkedHeading apply="mdx.h2" as="h2" mb={'1.5rem'} {...props} />
  ),
  h3: (props) => (
    <LinkedHeading apply="mdx.h3" as="h3" mb={'1.5rem'} {...props} />
  ),
  h4: (props) => (
    <LinkedHeading apply="mdx.h4" as="h4" mb={'1.5rem'} {...props} />
  ),
  p: (props) => <chakra.p apply="mdx.p" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  ul: (props) => (
    <chakra.ul
      styleType="disc"
      apply="mdx.ul"
      spacing={1}
      ml={'1rem'}
      mb={'1rem'}
      {...props}
    />
  ),
  ol: (props) => (
    <chakra.ol
      apply="mdx.ol"
      styleType="decimal"
      spacing={1}
      ml={'1rem'}
      mb={'1rem'}
      {...props}
    />
  ),
  li: (props) => <chakra.li apply="mdx.ul" {...props} />,
  inlineCode: (props) => <chakra.code apply="mdx.code" as="code" {...props} />,
  code: (props) => (
    <CodeBlock apply="mdx.codeBlock" code={props.children.trim()} {...props} />
  ),
  blockquote: (props) => (
    <Alert
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  ),
  a: (props) => <chakra.a apply="mdx.a" mb={0} {...props} />,
  img: (props) => {
    const { colorMode } = useColorMode();
    return (
      <Flex justifyContent="center" w="100%">
        <Zoom overlayBgColorEnd={customTheme.mode[colorMode].background}>
          <Image
            {...props}
            zIndex={0}
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
