import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  useClipboard,
  useColorMode,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import customTheme from 'src/styles/theme';

function CodeBlock(props) {
  const { colorMode } = useColorMode();
  return (
    <Highlight
      {...defaultProps}
      code={props.code}
      theme={vsDark}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          as={'pre'}
          fontSize={{ base: '.8rem', md: '1rem' }}
          style={{
            ...style,
            ...{
              whiteSpace: 'pre-wrap',
              padding: '1rem',
              marginTop: '2rem',
              marginBottom: '2rem',
              borderRadius: '.5rem',
              backgroundColor: customTheme.mode[colorMode].codeBackground,
            },
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {/* <LineNo>{i + 1}</LineNo> */}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  );
}

export default CodeBlock;
