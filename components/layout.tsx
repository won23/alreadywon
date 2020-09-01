import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import React from 'react';
import Nav from './nav';
import { Box, Flex } from '@chakra-ui/core';

const name = 'Tim';
export const siteTitle = 'Next.js Sample Website';

interface IProps {
  [key: string]: any;
}

export default function Layout({ children, home, sidebar }: IProps) {
  return (
    <Box>
      <Nav></Nav>
      <Flex>
        {sidebar ? sidebar : null}
        <div className={styles.container}>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="Learn how to build a personal website using Next.js"
            />
            <meta
              property="og:image"
              content={`https://og-image.now.sh/${encodeURI(
                siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          <header className={styles.header}>
            {home ? (
              <>
                <img
                  src="/images/profile.jpeg"
                  className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </>
            ) : (
              <>
                <Link href="/">
                  <a>
                    <img
                      src="/images/profile.jpeg"
                      className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                      alt={name}
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              </>
            )}
          </header>
          <main>{children}</main>
        </div>
      </Flex>
    </Box>
  );
}
