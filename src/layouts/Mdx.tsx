import { fromUnixTime } from 'date-fns';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from 'src/components/MdxComponents';
import Layout from './Layout';
import * as chakraComponents from '@chakra-ui/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaTags } from 'react-icons/fa';
import { Box, Link, Wrap } from '@chakra-ui/core';
import Reference from 'src/components/Reference';
export interface IMdxProps {
  children?: React.ReactNode;
  frontMatter;
  pageTitle: string;
  showReadProgress: boolean;
}

export default function Mdx({ frontMatter, children }: IMdxProps) {
  const router = useRouter();
  const { Heading, Divider } = chakraComponents;
  return (
    <Layout pageTitle={frontMatter.title} showReadProgress={true}>
      <Heading mb="1rem" as="h1">
        {frontMatter.title}
      </Heading>
      <Heading mb="1rem" as="h2" fontSize="lg" color="gray.500">
        {frontMatter.description}
      </Heading>

      <Divider mb="1rem" />
      <MDXProvider components={{ ...MDXComponents, ...chakraComponents }}>
        {children}
      </MDXProvider>
      <Wrap mb="1rem">
        <FaTags />
        {frontMatter.tags.map((tag) => {
          return (
            <Reference link={{ href: '/blog', query: { tag } }}>
              {' '}
              {tag}{' '}
            </Reference>
          );
        })}
      </Wrap>
    </Layout>
  );
}
