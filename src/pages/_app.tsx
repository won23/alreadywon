import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import '../styles/global.css';
import customTheme from '../styles/theme';
import Router from 'next/router';
import * as gtag from 'src/lib/gtag'; //https://hoangtrinhj.com/using-google-analytics-with-next-js
interface IProps {
  [key: string]: any;
}
// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageView(url));

export default function App({ Component, pageProps }: IProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
