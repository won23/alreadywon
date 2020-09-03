import {
  Box,
  Flex,
  Heading,
  FlexProps,
  Link,
  Text,
  Icon,
  PseudoBox,
} from '@chakra-ui/core';
import Head from 'next/head';
import { useState } from 'react';
export const siteTitle = "Tim Won's Website";
import { GiHamburgerMenu } from 'react-icons/Gi';

export interface ILayoutProps {
  children: any;
}
const NavItem = (props) => (
  <Link href={props.link}>
    <PseudoBox
      mr={6}
      mt={{ base: 4, md: 0 }}
      display="block"
      _hover={{ fontWeight: 'semibold' }}
    >
      <PseudoBox>{props.children}</PseudoBox>
    </PseudoBox>
  </Link>
);

export default function Layout(props: ILayoutProps) {
  const [show, setShow] = useState(false);

  const navFlexSetting: FlexProps = {
    as: 'nav',
    color: 'white',
    px: 3,
    py: 4,
    bg: 'teal.500',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    wrap: 'wrap',
  };

  const navItems: { name: string; path: string }[] = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
  ];
  const handleToggle = (): void => {
    setShow(!show);
  };

  return (
    <Box>
      <Flex {...navFlexSetting}>
        <Flex mr={6}>
          <Heading>Tim Won</Heading>
        </Flex>

        <Box
          display={{ xs: 'block', sm: 'none' }}
          onClick={handleToggle}
          cursor="pointer"
        >
          <GiHamburgerMenu />
        </Box>
        <Box
          display={{ xs: show ? 'block' : 'none', sm: 'flex' }}
          width={{ xs: 'full', sm: 'auto' }}
          alignItems={'center'}
          flexGrow={2}
        >
          {navItems.map((navItem, index) => (
            <NavItem key={index} href={navItem.path}>
              {navItem.name}
            </NavItem>
          ))}
        </Box>
      </Flex>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
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
