import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import '../styles/global.css';
import customTheme from '../styles/theme';

interface IProps {
  [key: string]: any;
}

export default function App({ Component, pageProps }: IProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
