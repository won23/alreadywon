import * as React from 'react';
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/react';
import Layout from '../layouts';
import Reference, { ILink } from '../components/Reference';
import customTheme from 'src/styles/theme';
import { motion } from 'framer-motion';

export interface IHomeProps {}
export default function Home(props: IHomeProps) {
  const MotionFlex = motion(Flex);
  const MotionImage = motion(Image);
  const MotionText = motion(Text);
  const { colorMode } = useColorMode();
  const homeInfo: ILink = {
    href: 'https://www.google.com/maps/place/North+Bethesda,+MD/@39.0430774,-77.1551229,13z/data=!3m1!4b1!4m5!3m4!1s0x89b7cc3bfabff901:0x50407ec368483348!8m2!3d39.0445535!4d-77.1188678',
    external: true,
  };

  const flexVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.4,
      },
    },
  };

  const textVariants = {
    initial: { rotate: 0, opacity: 0 },
    visible: {
      originX: -5,
      scale: [1, 1.1, 1, 1.1, 1],
      opacity: 1,
      transition: { delay: 0.7, duration: 2, ease: 'easeIn' },
    },
  };

  const photos = [
    {
      src: '/images/gallery/gallery_1.jpg',
      width: 900,
      height: 675,
    },
    {
      src: '/images/gallery/gallery_2.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/images/gallery/gallery_3.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/images/gallery/gallery_4.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/images/gallery/gallery_5.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/images/gallery/gallery_6.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/images/gallery/gallery_7.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/images/gallery/gallery_8.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/images/gallery/gallery_9.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '/images/gallery/gallery_10.jpg',
      width: 4,
      height: 3,
    },
  ];

  return (
    <Flex flexDir="column" position="relative">
      <Layout pageTitle="Home" position="absolute">
        <MotionFlex
          variants={flexVariants}
          initial="initial"
          animate="visible"
          exit="exit"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="center"
            width="100%"
          >
            <Box flex={1}>
              <Image
                src="/images/profile.jpg"
                alt="me"
                boxSize={{ base: '3xs', sm: '2xs' }}
                borderRadius="2rem"
                borderColor="gray.500"
                borderWidth={2}
                mx="auto"
                boxShadow="lg"
              ></Image>
            </Box>

            <Flex
              pt={{ base: '1rem', md: '0' }}
              flex={1}
              width="100%"
              flexDir="column"
            >
              <Heading
                as="h1"
                size="md"
                textAlign={{ base: 'center', md: 'left' }}
                flex={1}
                display="inline"
                color={{ base: 'black', md: 'white' }}
                mt="3.5rem"
              >
                <Text mb=".5rem">Hello world!</Text>
                I'm <Reference>Tim Won</Reference>.
              </Heading>
              <Box>
                I'm a technologist, consultant, and team-builder. I'm into
                learning, programming, and the arts. Doing my best to contribute
                to humanity (at least on <i>most</i> days).
              </Box>
            </Flex>
          </Flex>
          <Divider my="2rem" backgroundColor="gray" width="100%" />
          <Flex
            flexDirection="column"
            alignItems="center"
            width="100%"
            bg={customTheme.mode[colorMode].panelBackground}
            padding="1.5rem"
            borderRadius="1rem"
          >
            <Heading as="h2" size="md" mb="1rem">
              Me at a glance
            </Heading>
            <Flex
              flexDirection={{ base: 'column', sm: 'row' }}
              justifyContent="space-between"
              width="100%"
              flexWrap="wrap"
            >
              <Box flex={1} pr="1rem">
                <Heading fontSize="sm" as="h3" mb={'.5rem'}>
                  Living...
                </Heading>
                <Text fontSize="sm">
                  In the heartlands of the{' '}
                  <Reference link={homeInfo}>Washington DC Suburbs</Reference>{' '}
                  with my wife and dog.
                </Text>
              </Box>
              <Divider orientation="vertical" />

              <Box flex={1} pr="1rem">
                <Heading fontSize="sm" as="h3" mb={'.5rem'}>
                  Working...
                </Heading>
                <Text fontSize="sm">
                  At the global consultancy,
                  <Reference
                    link={{ href: 'https://www.pwc.com', external: true }}
                  >
                    {' '}
                    PricewaterhouseCoopers{' '}
                  </Reference>
                  as a technologist building products and tools.
                </Text>
              </Box>
              <Divider orientation="vertical" />

              <Box flex={1}>
                <Heading fontSize="sm" as="h3" mb={'.5rem'}>
                  Doing...
                </Heading>
                <Text fontSize="sm">
                  A bunch of new things centered around well-being,
                  self-improvement, and{' '}
                  <Reference
                    link={{ href: '/blog', query: { tag: 'projects' } }}
                  >
                    making things
                  </Reference>
                  .
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Divider orientation="vertical" />

          <Divider my="2rem" backgroundColor="gray" width="100%" />
          <Flex flexDirection="column" alignItems="center">
            <Heading as="h2" size="md" mb={4} textAlign="center">
              Interested in learning more?
            </Heading>
            <Text>
              I'm flattered. Find more information at my{' '}
              <Reference link={{ href: '/contact' }}>Contact</Reference> page
            </Text>
          </Flex>
        </MotionFlex>
      </Layout>
    </Flex>
  );
}
