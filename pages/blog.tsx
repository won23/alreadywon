import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, IPost } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { Box } from '@chakra-ui/core';
import styles from '../styles/';

export async function getStaticProps(): Promise<{ props }> {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface IProps {
  allPostsData?: IPost[];
  children?;
}

export default function Blog({ allPostsData }: IProps) {
  return (
    <Layout>
      <Box>
        <section className={utilStyles.headingMd}>…</section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData?.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
        {
          <Box mt={['3rem', 0, 0]}>
            <Link href="/">
              <a>← Back to blog</a>
            </Link>
          </Box>
        }
      </Box>
    </Layout>
  );
}
