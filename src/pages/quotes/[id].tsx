import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
  List,
  UnorderedList,
  VStack,
  ListItem,
  useColorMode,
  useColorModeValue,
  ListIcon,
  ListItemProps,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from 'src/layouts/Layout';
import {
  getBook,
  getBooks,
  getBookPaths,
  getQuotes,
  quotesRef,
  booksRef,
} from 'src/lib/firebase';
import { FaHashtag } from 'react-icons/fa';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

export interface IQuoteableProps {
  book: IBook;
}

export async function getStaticPaths() {
  const [paths] = await Promise.all([getBookPaths()]);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const book = await getBook(params.id);

  return {
    props: {
      book: { id: params.id, ...book },
    },
  };
}

export default function Quoteable({ book }: IQuoteableProps) {
  const router = useRouter();
  useEffect(() => {
    let id = router.pathname.match(/#([a-z0-9]+)/gi);
    if (id) {
      // i will show the modal
    } else {
      // something else
    }
  }, [router.pathname]);

  return (
    <Layout>
      <Flex flexDirection="column" scrollBehavior="smooth">
        <Flex flexDirection="column">
          <Heading as="h2" fontSize="lg">
            {book.title}
          </Heading>
          <Heading as="h4" fontSize="xs" color="gray.500">
            {book.authors.join(', ')}
          </Heading>
          <Text mt="1rem" fontWeight="bold">
            Highlights ({book.quotes.length})
          </Text>
          <Quotes quotes={book.quotes} bookId={book.id}></Quotes>
        </Flex>
      </Flex>
    </Layout>
  );
}

function Quotes({ quotes, bookId }) {
  return (
    <UnorderedList>
      {quotes.map((quote, index) => {
        return (
          <LinkBox
            key={index}
            // onClick={(e) => e.preventDefault()}
          >
            <ListItem
              my="1rem"
              ml={'2rem'}
              role="group"
              // cursor="pointer"
              css={{ scrollMarginBlock: '6.875rem' }}
            >
              {quote}{' '}
              {/* <LinkOverlay href={`#${index}`}>
                <Icon
                  opacity={0}
                  as={FaHashtag}
                  color="green.500"
                  _groupHover={{ opacity: 1 }}
                  aria-label="anchor"
                  outline="none"
                  _focus={{ opacity: 1, boxShadow: 'outline' }}
                />
              </LinkOverlay> */}
            </ListItem>
          </LinkBox>
        );
      })}
    </UnorderedList>
  );
}
