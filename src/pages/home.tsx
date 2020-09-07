import * as React from 'react';
import { Box, Heading, Flex, Image, Text, Divider } from '@chakra-ui/core';
import Layout from '../components/Layout';
export interface IHomeProps {}
export default function Home(props: IHomeProps) {
  return (
    <Layout>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="1rem"
      >
        <Flex
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
        >
          <Box flex={1}>
            <Image
              src="/images/profile.jpg"
              alt="me"
              size="2xs"
              borderRadius="2rem"
              mx="auto"
            ></Image>
          </Box>

          <Box pt={{ xs: '1rem', md: '0' }} flex={1}>
            <Heading
              as="h2"
              size="md"
              mb={4}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Hello world!
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              tortor pretium viverra suspendisse. Tempus urna et pharetra
              pharetra massa. Facilisi cras fermentum odio eu feugiat pretium
              nibh ipsum consequat.
            </Text>
          </Box>
        </Flex>
        <Divider my="2rem" backgroundColor="gray" width="100%" />
        <Flex
          flexDirection="column"
          alignItems="center"
          width="100%"
          bg="gray.200"
          padding="1.5rem"
          borderRadius="1rem"
        >
          <Heading as="h2" size="md" mb={'2rem'}>
            Things I'm up to
          </Heading>
          <Flex
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            width="100%"
            flexWrap="wrap"
          >
            <Box flex={1}>
              <Heading size="sm" as="h3">
                Living
              </Heading>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sit amet turpis vel turpis mattis efficitur. Morbi euismod ante
                leo.
              </Text>
            </Box>
            <Divider orientation="vertical" />

            <Box flex={1}>
              <Heading size="sm" as="h3">
                Working
              </Heading>
              <Text fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sit amet turpis vel turpis mattis efficitur. Morbi euismod ante
                leo.
              </Text>
            </Box>
            <Divider orientation="vertical" />

            <Box flex={1}>
              <Heading size="sm" as="h3">
                Doing
              </Heading>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sit amet turpis vel turpis mattis efficitur. Morbi euismod ante
                leo.
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Divider orientation="vertical" />

        <Divider my="2rem" backgroundColor="gray" width="100%" />
        <Flex flexDirection="column" alignItems="center">
          <Heading as="h2" size="md" mb={4}>
            Contact me?
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
            tincidunt tortor aliquam nulla facilisi cras.
          </Text>
        </Flex>
      </Flex>
    </Layout>
  );
}
