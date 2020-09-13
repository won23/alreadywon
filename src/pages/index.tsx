import { Button, Flex, Heading, Text } from '@chakra-ui/core';
import Link from 'next/link';
import * as React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export interface IHomeProps {}
export default function Home(props: IHomeProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/home');
  };

  return (
    <Layout home>
      <Flex
        justifyContent="center"
        alignContent="center"
        flexDirection="column"
      >
        <Flex
          flexDirection="column"
          justifyContent={{ xs: 'flex-end', md: 'center' }}
          height="100vh"
          color="white"
          px={{ xs: '3rem', md: '10rem' }}
          py={{ xs: '4rem' }}
        >
          <Heading as="h1">ALREADY WON</Heading>
          <Text fontSize="lg" maxW="40rem">
            A personal website dedicated to those who may already have
          </Text>
          <Button
            variant="outline"
            mt="4rem"
            size="md"
            maxW="6rem"
            onClick={handleClick}
          >
            Explore
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
}
