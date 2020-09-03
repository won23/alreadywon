import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import '../styles/global.css';

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
