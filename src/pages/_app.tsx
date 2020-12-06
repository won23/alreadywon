import { ChakraProvider } from '@chakra-ui/react';
import 'react-medium-image-zoom/dist/styles.css';
import {} from '@chakra-ui/react';
import '../styles/global.css';

import customTheme from '../styles/theme';
import Router from 'next/router';
import * as gtag from 'src/lib/gtag'; //https://hoangtrinhj.com/using-google-analytics-with-next-js
import { useState, useEffect } from 'react';
interface IProps {
  [key: string]: any;
}
// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageView(url));

export default function App({ Component, pageProps, children }: IProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
