import {
  Box,
  Flex,
  Heading,
  FlexProps,
  BoxProps,
  useColorModeValue,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import navItems from 'src/configs/nav.config';
import DarkMode from './DarkMode';
export interface INavbarProps {}
export interface INavItemProps {
  href: string;
  children?;
  handleNavItemClicked?: Function;
  handleColormodeClicked?: Function;
  scrolled: boolean;
}

export interface INavContentProps {
  scrolled;
}

export default function Navbar(props: INavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const bg = useColorModeValue('white', 'gray.800');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const stickyStyles: CSSProperties = {
    top: 0,
    width: '100%',
    transition: '.32s',
    position: 'sticky',
  };
  const fixedStyles: CSSProperties = {
    ...stickyStyles,
    transition: '.25s',
    fontSize: '.5rem',
    position: 'fixed',
    maxHeight: '40px',
    zIndex: 9999,
  };

  return (
    <Flex backgroundColor={bg} style={scrolled ? fixedStyles : stickyStyles}>
      <NavContent scrolled={scrolled}></NavContent>
    </Flex>
  );
}

function NavContent({ scrolled }: INavContentProps) {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const glow = useColorModeValue('#718096', 'white');

  const navFlexSetting: FlexProps = {
    as: 'nav',
    py: 4,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px',
    borderColor: 'gray.500',
  };
  const homeHoverStyle: BoxProps = {
    textShadow: `0 0 15px ${glow}`,
    transition: 'all .2s ease-in-out',
  };
  const handleNavItemClicked = (href: string) => {
    setShow(!show);
    router.push(href);
  };

  const handleToggle = (): void => {
    setShow(!show);
  };

  return (
    <Flex width="100%">
      <Flex {...navFlexSetting}>
        <Box flex={1}></Box>

        <Box flex={1} textAlign="center" width="100%">
          <NextLink href="/">
            <Box _hover={{ ...homeHoverStyle }}>
              <Heading
                as="h1"
                size="xl"
                cursor="pointer"
                fontSize={scrolled ? 'xl' : '3xl'}
                transition=".2s"
              >
                TW
              </Heading>
            </Box>
          </NextLink>
        </Box>
        <Flex flex={1} justifyContent="center">
          <Box
            display={{ base: 'block', sm: 'none' }}
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
                scrolled={scrolled}
              >
                {navItem.name}
              </NavItem>
            ))}
          </Box>
          <DarkMode
            size={scrolled ? 15 : 30}
            style={{ alignSelf: 'center', marginLeft: '1rem' }}
          ></DarkMode>
        </Flex>
      </Flex>
      <Box
        display={{ base: show ? 'block' : 'none', sm: 'none' }}
        width={'full'}
        alignItems={'center'}
        height={'100vh'}
      >
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            href={navItem.path}
            handleNavItemClicked={handleNavItemClicked}
            scrolled={scrolled}
          >
            {navItem.name}
          </NavItem>
        ))}
      </Box>
    </Flex>
  );
}

const NavItem = ({
  scrolled,
  handleNavItemClicked,
  children,
  href,
}: INavItemProps) => {
  const glow = useColorModeValue('#718096', 'white');
  const navItemStyle = {
    px: '1rem',
    py: '1rem',
    width: '100%',
    cursor: 'pointer',
    border: { base: '1px', sm: 'none' },
    color: 'gray.500',
  };

  const hoverStyle = {
    color: glow,
    textShadow: `0 0 15px ${glow}`,
    transition: 'all 0.2s ease-in-out',
  };

  return (
    <Box {...navItemStyle} onClick={() => handleNavItemClicked(href)}>
      <Box
        display="block"
        _hover={{ fontWeight: 'semibold', ...hoverStyle }}
        fontSize={scrolled ? 'md' : 'xl'}
        transition={'.2s'}
      >
        {children}
      </Box>
    </Box>
  );
};
