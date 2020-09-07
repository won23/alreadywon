import { Box, Flex, FlexProps } from '@chakra-ui/core';
import Head from 'next/head';
import Navbar from './Navbar';

export interface ILayoutProps {
  home?: boolean;
  children?: any;
}

export default function Layout(props: ILayoutProps) {
  const siteTitle = "Tim Won's Website";

  const navFlexSetting: FlexProps = {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    wrap: 'wrap',
    maxW: '48rem',
    margin: '2rem auto 6rem',
  };
  return (
    <Box>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A personal site about me" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {props.home ? (
        <Box
          backgroundImage={{
            xs: "url('/images/background_mobile.jpg')",
            md: "url('/images/background.jpeg')",
          }}
          backgroundPosition={{ xs: 'top', md: 'center' }}
          backgroundRepeat="no-repeat"
          height="100vh"
          backgroundSize={{ xs: '300% auto', md: '100% auto' }}
        >
          <main> {props.children}</main>
        </Box>
      ) : (
        <Box>
          <Navbar></Navbar>
          <Flex {...navFlexSetting}>
            <main> {props.children}</main>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
