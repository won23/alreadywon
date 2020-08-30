// eslint-disable-next-line no-unused-vars
import {
  Flex,
  Heading,
  FlexProps,
  Box,
  Text,
  Link,
  Menu,
  Button,
} from '@chakra-ui/core';
import { useState } from 'react';
const MenuItems = (props) => (
  <Link href={props.link}>
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {props.children}
    </Text>
  </Link>
);

export interface INavProps {}

export default function Nav(props: INavProps) {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const flexSettings: FlexProps = {
    bg: 'teal.500',
    w: '100%',
    px: 3,
    py: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    direction: 'row',
    ...props,
  };

  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Cats',
      link: '/cats',
    },
  ];
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Tim's Blog
        </Heading>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={2}
      >
        {navItems.map((item, index) => {
          return (
            <MenuItems key={index} link={item.link}>
              {item.name}
            </MenuItems>
          );
        })}
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          Create account
        </Button>
      </Box>
    </Flex>
  );
}
