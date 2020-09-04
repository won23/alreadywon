import {
  Box,
  Flex,
  Heading,
  FlexProps,
  Text,
  Icon,
  PseudoBox,
  Link,
} from '@chakra-ui/core';
import NextLink from 'next/link';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/Gi';
const NavItem = (props) => (
  <NextLink href={props.href}>
    <Link>
      <PseudoBox
        mr={6}
        mt={{ base: 4, md: 0 }}
        display="block"
        fontWeight="semibold"
        _hover={{ fontWeight: 'bold' }}
        fontSize="xl"
      >
        <PseudoBox>{props.children}</PseudoBox>
      </PseudoBox>
    </Link>
  </NextLink>
);

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  const [show, setShow] = useState(false);

  const navFlexSetting: FlexProps = {
    as: 'nav',
    color: 'white',
    px: '6rem',
    py: 4,
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
    <Flex {...navFlexSetting}>
      <Box mr={6}>
        <NextLink href="/">
          <Link>{/* <Heading>Tim Won</Heading> */}</Link>
        </NextLink>
      </Box>

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
      >
        {navItems.map((navItem, index) => (
          <NavItem key={index} href={navItem.path}>
            {navItem.name}
          </NavItem>
        ))}
      </Box>
    </Flex>
  );
}
