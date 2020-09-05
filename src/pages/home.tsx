import * as React from 'react';
import { Box } from '@chakra-ui/core';
import Layout from '../components/Layout';

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <Layout>
      <Box>Home works!</Box>
    </Layout>
  );
}
