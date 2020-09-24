import { fromUnixTime } from 'date-fns';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from 'src/components/MdxComponents';
import Layout from './Layout';
import { Heading } from '@chakra-ui/core';
import { even, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface IMdxProps {
  children?: React.ReactNode;
  frontMatter;
}

export default function Mdx({ frontMatter, children }: IMdxProps) {
  const router = useRouter();

  useEffect(() => {
    router.push(window.location.hash);
  }, []);

  return (
    <Layout>
      <Heading mb="1rem">{frontMatter.title}</Heading>
      <MDXProvider components={{ ...MDXComponents }}>{children}</MDXProvider>
    </Layout>
  );
}
