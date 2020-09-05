import { Button, Flex, Heading, Text } from '@chakra-ui/core';
import Link from 'next/link';
import * as React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/utils.module.css';

export interface IHomeProps {}
export default function Home(props: IHomeProps) {
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
          <Heading as="h1" className={styles.siteTitle}>
            ALREADY WON
          </Heading>
          <Text fontSize="lg" maxW="40rem">
            A personal website dedicated to those who may already have
          </Text>
          <Button
            variantColor="gray.200"
            variant="outline"
            mt="4rem"
            size="md"
            maxW="6rem"
          >
            <Link href="/home">Explore</Link>
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
}
