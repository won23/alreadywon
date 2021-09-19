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
          <Quotes quotes={book.quotes}></Quotes>
        </Flex>
      </Flex>
    </Layout>
  );
}

function Quotes({ quotes }) {
  return (
    <UnorderedList>
      {quotes.map((quote, index) => {
        return (
          <Link
            key={index}
            id={index}
            href={`#${index}`}
            css={{ scrollMarginBlock: '5rem' }}
          >
            <ListItem my="1rem" ml={'2rem'} role="group" cursor="pointer">
              {quote}{' '}
              <Icon
                opacity={0}
                as={FaHashtag}
                color="green.500"
                _groupHover={{ opacity: 1 }}
                aria-label="anchor"
                outline="none"
                _focus={{ opacity: 1, boxShadow: 'outline' }}
              />
            </ListItem>
          </Link>
        );
      })}
    </UnorderedList>
  );
}
