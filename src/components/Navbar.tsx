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
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/Gi';

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

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
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
  );
}
