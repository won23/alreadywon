import { Box, Flex } from '@chakra-ui/core';
import Head from 'next/head';
import Navbar from './Navbar';

export interface ILayoutProps {
  children: any;
}

export default function Layout(props: ILayoutProps) {
  const siteTitle = "Tim Won's Website";

  return (
    <Box>
      <Navbar></Navbar>
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
      <Flex></Flex>
      <main> {props.children}</main>
    </Box>
  );
}
