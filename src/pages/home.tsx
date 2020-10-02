import * as React from 'react';
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/core';
import Layout from '../layouts';
import Reference, { ILink } from '../components/Reference';
import customTheme from 'src/styles/theme';
export interface IHomeProps {}
export default function Home(props: IHomeProps) {
  const { colorMode } = useColorMode();

  const homeInfo: ILink = {
    href:
      'https://www.google.com/maps/place/North+Bethesda,+MD/@39.0430774,-77.1551229,13z/data=!3m1!4b1!4m5!3m4!1s0x89b7cc3bfabff901:0x50407ec368483348!8m2!3d39.0445535!4d-77.1188678',
    external: true,
  };

  return (
    <Layout pageTitle="Home">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
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
            ></Image>
          </Box>

          <Flex
            pt={{ base: '1rem', md: '0' }}
            flex={1}
            flexDirection="column"
            width="100%"
          >
            <Heading
              as="h1"
              size="md"
              my={4}
              textAlign={{ base: 'center', md: 'left' }}
              flex={1}
            >
              Hello world! I'm <Reference>Tim Won</Reference>.
            </Heading>

            <Box> </Box>
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
          <Heading as="h2" size="md" mb={2}>
            At a glance
          </Heading>
          <Flex
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between"
            width="100%"
            flexWrap="wrap"
          >
            <Box flex={1} mt={'1rem'} pr="1rem">
              <Heading fontSize="sm" as="h3">
                Living...
              </Heading>
              <Text fontSize="sm">
                In the heartlands of the{' '}
                <Reference link={homeInfo}>Washington DC Suburbs</Reference>{' '}
                with my wife and dog.
              </Text>
            </Box>
            <Divider orientation="vertical" />

            <Box flex={1} mt={2} pr="1rem">
              <Heading fontSize="sm" as="h3">
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

            <Box flex={1} mt={2}>
              <Heading fontSize="sm" as="h3">
                Doing...
              </Heading>
              <Text fontSize="sm">
                A bunch of new things centered around well-being, learning, and{' '}
                <Reference link={{ href: '/blog', query: { tag: 'projects' } }}>
                  creating things
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
      </Flex>
    </Layout>
  );
}
