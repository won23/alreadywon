import * as React from 'react';
import Layout from './Layout';
import dynamic from 'next/dynamic';

const MDXLayout = dynamic(() => import('./Mdx'));
export interface IDefaultLayoutProps {
  children: React.ReactNode;
  frontMatter?;
}

export default function DefaultLayout({
  children,
  frontMatter,
}: IDefaultLayoutProps) {
  return frontMatter ? (
    <MDXLayout frontMatter={frontMatter}>{children}</MDXLayout>
  ) : (
    <Layout>{children}</Layout>
  );
}
