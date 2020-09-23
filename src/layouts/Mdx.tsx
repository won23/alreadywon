import { fromUnixTime } from 'date-fns';
import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from 'src/components/MdxComponents';
import Layout from './Layout';
import { Heading } from '@chakra-ui/core';

export interface IMdxProps {
  children?: React.ReactNode;
  frontMatter;
}

export default function Mdx({ frontMatter, children }: IMdxProps) {
  return (
    <Layout>
      <Heading mb="1rem">{frontMatter.title}</Heading>
      <MDXProvider components={{ ...MDXComponents }}>{children}</MDXProvider>
    </Layout>
  );
}
