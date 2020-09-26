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
    borderColor: 'gray.100',
    role: 'group',
    color: 'gray.500',
  };

  return (
    <PseudoBox
      {...navItemStyle}
      onClick={() => props.handleNavItemClicked(props.href)}
    >
      <PseudoBox
        display="block"
        // fontWeight="semibold"
        _hover={{ fontWeight: 'semibold' }}
        _groupHover={{ color: 'black' }}
        fontSize="xl"
      >
        {props.children}
      </PseudoBox>
    </PseudoBox>
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
            <Heading as="h1" size="xl" cursor="pointer">
              TW
            </Heading>
          </NextLink>
        </Box>
        <Flex flex={1} justifyContent="center">
          <Box
            display={{ xs: 'block', sm: 'none' }}
            onClick={handleToggle}
            cursor="pointer"
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
            {colorMode === 'light' ? (
              <IconButton
                aria-label="Night mode"
                icon="moon"
                onClick={toggleColorMode}
                variant="ghost"
              ></IconButton>
            ) : (
              <IconButton
                variant="ghost"
                aria-label="Light mode"
                icon="sun"
                onClick={toggleColorMode}
              ></IconButton>
            )}
          </Box>
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
