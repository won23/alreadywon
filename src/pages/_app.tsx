import React from 'react';
import '../styles/global.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

interface IProps {
  [key: string]: any;
}

export default function App({ Component, pageProps }: IProps) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
