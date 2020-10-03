import { extendTheme } from '@chakra-ui/core';
import { mode } from '@chakra-ui/theme-tools';

const overrides = {
  fonts: {
    body: "'Raleway', sans-serif",
    heading: "'Raleway', sans-serif",
    mono: 'Menlo, monospace',
  },
  mode: {
    light: {
      background: 'white',
      color: '#1A202C', //gray 800
      panelBackground: 'gray.200',
      codeBackground: '#1A202C', //gray 800
    },
    dark: {
      background: '#1A202C', //gray 800
      panelBackground: 'gray.700',
      color: '#F7FAFC', //gray 50
      codeBackground: '#2D3748',
    },
  },
  mdx: {
    h1: {
      fontSize: { base: 'xl', md: '3xl' },
    },
    h2: {
      fontSize: { base: 'lg', md: '2xl' },
    },
    h3: {
      fontSize: { base: 'md', md: 'xl' },
    },
    h4: {
      fontSize: { base: 'sm', md: 'lg' },
    },
    ol: {
      fontSize: { base: '.8rem', md: '1rem' },
    },
    ul: {
      fontSize: { base: '.8rem', md: '1rem' },
    },
    code: {
      fontSize: { base: '.8rem', md: '1rem' },
    },
    codeBlock: {
      fontSize: { base: '.8rem', md: '1rem' },
    },
    a: {
      color: 'blue.500',
      fontWeight: 'semibold',
    },
    p: {
      fontSize: { base: '.8rem', md: '1rem' },
    },
    hr: {
      my: '1rem',
    },
  },
  useSystemColorMode: false,
  initialColorMode: 'dark',
  // fontSizes: {
  //   xs: "12px",
  //   sm: "14px",
  //   md: "16px",
  //   lg: "18px",
  //   xl: "20px",
  //   "2xl": "24px",
  //   "3xl": "28px",
  //   "4xl": "36px",
  //   "5xl": "48px",
  //   "6xl": "64px",
  // },
  // fontWeights: {
  //   normal: 400,
  //   medium: 500,
  //   bold: 700,
  // },
  // lineHeights: {
  //   normal: "normal",
  //   none: "1",
  //   shorter: "1.25",
  //   short: "1.375",
  //   base: "1.5",
  //   tall: "1.625",
  //   taller: "2",
  // },
  // letterSpacings: {
  //   tighter: "-0.05em",
  //   tight: "-0.025em",
  //   normal: "0",
  //   wide: "0.025em",
  //   wider: "0.05em",
  //   widest: "0.1em",
  // },
};

export default extendTheme(overrides);
