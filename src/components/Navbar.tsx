import {
  Box,
  Flex,
  Heading,
  FlexProps,
  PseudoBox,
  PseudoBoxProps,
  useColorMode,
  Button,
  IconButton,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import DarkMode from './DarkMode';
export interface INavItemProps {
  href: string;
  children?;
  handleNavItemClicked?: Function;
  handleColormodeClicked?: Function;
}
export interface INavbarProps {}

const NavItem = (props: INavItemProps) => {
  const navItemStyle: PseudoBoxProps = {
    px: '1rem',
    py: '1rem',
    width: '100%',
    cursor: 'pointer',
    border: { xs: '1px', sm: 'none' },
    color: 'gray.500',
  };

  const hoverStyle: PseudoBoxProps = {
    color: '#F7FAFC',
    textShadow: '0 0 15px #F7FAFC',
    transition: 'all 0.2s ease-in-out',
  };

  return (
    <Box
      {...navItemStyle}
      onClick={() => props.handleNavItemClicked(props.href)}
    >
      <PseudoBox
        display="block"
        _hover={{ fontWeight: 'semibold', ...hoverStyle }}
        fontSize="xl"
      >
        {props.children}
      </PseudoBox>
    </Box>
  );
};

export default function Navbar(props: INavbarProps) {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const navFlexSetting: FlexProps = {
    as: 'nav',
    py: 4,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px',
    borderColor: 'gray.500',
  };
  const { colorMode, toggleColorMode } = useColorMode();
  const navItems: { name: string; path: string }[] = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'About',
      path: '/about',
    },
  ];
  const homeHoverStyle: PseudoBoxProps = {
    textShadow: '0 0 15px #F7FAFC',
    // text-shadow: 0 0 5px #ff0000;
    // boxShadow: '0 0 25px #F7FAFC',
    // borderRadius: '4rem',
    transition: 'all .5s ease-in-out',
    // padding: '1rem',
    // box-shadow: 0 0 15px #d35400;
    // text-shadow: 0 0 15px #d35400;
  };
  const handleNavItemClicked = (href: string) => {
    setShow(!show);
    router.push(href);
  };

  const handleToggle = (): void => {
    setShow(!show);
  };

  return (
    <Box>
      <Flex {...navFlexSetting}>
        <Box flex={1}></Box>

        <Box flex={1} textAlign="center" width="100%">
          <NextLink href="/">
            <PseudoBox _hover={{ ...homeHoverStyle }}>
              <Heading as="h1" size="xl" cursor="pointer">
                TW
              </Heading>
            </PseudoBox>
          </NextLink>
        </Box>
        <Flex flex={1} justifyContent="center">
          <Box
            display={{ xs: 'block', sm: 'none' }}
            onClick={handleToggle}
            cursor="pointer"
            my="auto"
          >
            <GiHamburgerMenu />
          </Box>
          <Box
            display={['none', 'flex']}
            width="auto"
            alignItems={'center'}
            height={'auto'}
          >
            {navItems.map((navItem, index) => (
              <NavItem
                key={index}
                href={navItem.path}
                handleNavItemClicked={handleNavItemClicked}
              >
                {navItem.name}
              </NavItem>
            ))}
          </Box>
          <DarkMode
            size={30}
            style={{ alignSelf: 'center', marginLeft: '1rem' }}
          ></DarkMode>
        </Flex>
      </Flex>
      <Box
        display={{ xs: show ? 'block' : 'none', sm: 'none' }}
        width={'full'}
        alignItems={'center'}
        height={'100vh'}
      >
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            href={navItem.path}
            handleNavItemClicked={handleNavItemClicked}
          >
            {navItem.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
}
