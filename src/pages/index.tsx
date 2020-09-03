import * as React from 'react';
import Layout from '../components/Layout';
import { Box } from '@chakra-ui/core';

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <Layout>
      <Box>Hello World</Box>
    </Layout>
  );
}
