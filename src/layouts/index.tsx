import * as React from 'react';
import Layout from './Layout';
import dynamic from 'next/dynamic';

const MDXLayout = dynamic(() => import('./Mdx'));
export interface IDefaultLayoutProps {
  children?: React.ReactNode;
  frontMatter?;
  pageTitle?: string;
}

export default function DefaultLayout({
  children,
  frontMatter,
  pageTitle,
}: IDefaultLayoutProps) {
  return frontMatter ? (
    <MDXLayout pageTitle={pageTitle} frontMatter={frontMatter} showReadProgress>
      {children}
    </MDXLayout>
  ) : (
    <Layout pageTitle={pageTitle}>{children}</Layout>
  );
}
