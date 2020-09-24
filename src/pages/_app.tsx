import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import 'react-medium-image-zoom/dist/styles.css';
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
  const [mounted, setMounted] = useState(false); // a hack to fix color mode temporarily

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        {mounted && <Component {...pageProps} />}
      </ColorModeProvider>
    </ThemeProvider>
  );
}
