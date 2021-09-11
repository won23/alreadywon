import * as React from 'react';
import Layout from './Layout';
import dynamic from 'next/dynamic';
import { BoxProps } from '@chakra-ui/react';

const MDXLayout = dynamic(() => import('./Mdx'));
export interface IDefaultLayoutProps extends BoxProps {
  children?: React.ReactNode;
  frontMatter?;
  pageTitle?: string;
}

export default function DefaultLayout({
  children,
  frontMatter,
  pageTitle,
  ...rest
}: IDefaultLayoutProps) {
  return frontMatter ? (
    <MDXLayout pageTitle={pageTitle} frontMatter={frontMatter} showReadProgress>
      {children}
    </MDXLayout>
  ) : (
    <Layout pageTitle={pageTitle} {...rest}>
      {children}
    </Layout>
  );
}
