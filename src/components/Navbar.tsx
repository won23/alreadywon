import {
  Box,
  Flex,
  Heading,
  FlexProps,
  BoxProps,
  useColorModeValue,
  Progress,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import navItems from 'src/configs/nav.config';
import DarkMode from './DarkMode';

export interface INavbarProps {
  showReadProgress: boolean;
}

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

export default function Navbar({ showReadProgress }: INavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [yPosition, setYPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const bg = useColorModeValue('white', 'gray.800');
  const elementRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    setWindowHeight(
      Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      ) -
        window.innerHeight -
        elementRef.current.clientHeight
    );
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    setYPosition(offset);
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
    zIndex: 9999,
  };
  const fixedStyles: CSSProperties = {
    ...stickyStyles,
    transition: '.25s',
    fontSize: '.5rem',
    position: 'fixed',
  };

  return (
    <Flex
      flexDirection="column"
      backgroundColor={bg}
      style={scrolled ? fixedStyles : stickyStyles}
      ref={elementRef}
    >
      <NavContent scrolled={scrolled}></NavContent>
      {showReadProgress && (
        <Progress
          color="green"
          size="sm"
          value={(yPosition / windowHeight) * 100}
        />
      )}
    </Flex>
  );
}

function NavContent({ scrolled }: INavContentProps) {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const glow = useColorModeValue('#718096', 'white');

  const navFlexSetting: FlexProps = {
    as: 'nav',

    width: '100%',
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
    window.scrollTo(0, 0);
  };

  const handleToggle = (): void => {
    setShow(!show);
  };

  return (
    <Flex width="100%" height="100%" flexDirection="column">
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
                py={scrolled ? '.5rem' : '1rem'}
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
            <GiHamburgerMenu size={scrolled ? '.8rem' : '1rem'} />
          </Box>
          <Box
            display={['none', 'flex']}
            width="auto"
            height="100%"
            alignItems={'center'}
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
        width={'100%'}
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
    py: { base: '1rem', md: 'auto' },
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
