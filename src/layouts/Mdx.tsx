import { fromUnixTime } from 'date-fns';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from 'src/components/MdxComponents';
import Layout from './Layout';
import * as chakraComponents from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface IMdxProps {
  children?: React.ReactNode;
  frontMatter;
}

export default function Mdx({ frontMatter, children }: IMdxProps) {
  const router = useRouter();

  const { Heading, Divider } = chakraComponents;
  return (
    <Layout>
      <Heading mb="1rem">{frontMatter.title}</Heading>
      <Divider mb="1rem" />
      <MDXProvider components={{ ...MDXComponents, ...chakraComponents }}>
        {children}
      </MDXProvider>
    </Layout>
  );
}
