import {
  Box,
  Button,
  Flex,
  FlexProps,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import customTheme from 'src/styles/theme';
import config from 'src/configs/app.config';
import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
export interface ILayoutProps {
  pageTitle?: string;
  children?: any;
  showReadProgress?: boolean;
}

export default function Layout({
  children,
  pageTitle,
  showReadProgress = false,
}: ILayoutProps) {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const landingPage = router.asPath === '/' ? true : false;
  const navFlexSetting: FlexProps = {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    wrap: 'wrap',
    maxW: '48rem',
    margin: '2rem auto 6rem',
    px: '2rem',
  };

  const handleClick = () => {
    router.push('/home');
  };

  const MotionBox = motion.custom(Box);
  const MotionButton = motion.custom(Button);
  const MotionHeader = motion.custom(Heading);
  const MotionText = motion.custom(Text);

  const boxVariants = {
    initial: {
      y: '100vw',
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.4,
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const buttonVariants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    hover: {
      scale: [1.2, 1, 1.2],
      textShadow: '0px 0px 8px rgb(255,255,255)',
      boxShadow: '0px 0px 8px rgb(255,255,255)',
    },
  };

  return (
    <Box
      w="100%"
      minH="100%"
      bg={customTheme.mode[colorMode].background}
      color={customTheme.mode[colorMode].color}
    >
      <Head>
        <title>
          {config.siteTitle} |{' '}
          {pageTitle ? pageTitle : ' Tech, Management, and Life'}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={config.siteTitle} />
        <meta
          name="description"
          content="A personal website of Tim Won about Technology, Management, and Life"
        />
        <meta
          name="keywords"
          content="Tim, Won, Tim Won, PwC, Development, Technology, linkedin, github"
        />
        <meta property="og:image" content="/images/background.jpg" />
        <meta name="og:title" content={config.siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {!landingPage ? (
        <Box>
          <Navbar showReadProgress={showReadProgress}></Navbar>
          <Flex {...navFlexSetting}>
            <main> {children}</main>
          </Flex>
        </Box>
      ) : (
        <Box
          backgroundImage={{
            base: "url('/images/background_mobile.jpg')",
            md: "url('/images/background.jpeg')",
          }}
          backgroundPosition={{ base: 'top', md: 'center' }}
          backgroundRepeat="no-repeat"
          height="100vh"
          width="100%"
          backgroundSize={{ base: '300% auto', md: '100% auto' }}
        >
          <Flex
            justifyContent="center"
            alignContent="center"
            flexDirection="column"
          >
            <Flex
              flexDirection="column"
              justifyContent={{ base: 'flex-end', md: 'center' }}
              height="100vh"
              color="white"
              px={{ base: '3rem', md: '10rem' }}
              py={{ base: '4rem' }}
            >
              <MotionBox
                variants={boxVariants}
                initial="initial"
                animate="visible"
                exit="exit"
              >
                <MotionHeader as="h1">ALREADY WON</MotionHeader>
                <MotionText variants={childVariants} fontSize="lg" maxW="40rem">
                  A personal website dedicated to those who may already have
                </MotionText>
                <MotionButton
                  variant="outline"
                  mt="4rem"
                  size="md"
                  maxW="6rem"
                  onClick={handleClick}
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Explore
                </MotionButton>
              </MotionBox>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
