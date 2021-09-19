import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
  UnorderedList,
  VStack,
  ListItem,
  useColorMode,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import Layout from 'src/layouts/Layout';
import { booksRef, getBooks, getQuotes, quotesRef } from 'src/lib/firebase';
import NextLink from 'next/link';

export interface IQuoteableProps {
  books: IBook[];
  quotes: [];
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const quotesPromise = Axios.get('/api/get-quotes');
  const [books, quotes] = await Promise.all([getBooks()]);
  // const [books] = await Promise.all([booksPromise]);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time

  return {
    props: { books },
  };
}

export default function IQuoteable({ books, quotes }: IQuoteableProps) {
  return (
    <Layout>
      <Flex flexDirection="column">
        <Main></Main>
        <Divider orientation="horizontal" my="1rem"></Divider>
        <BooksList books={books}></BooksList>
      </Flex>
    </Layout>
  );
}

function Main(props) {
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" justifyContent="center">
        <Text>The following books are highlights made from my Kindle.</Text>
        <Text fontSize="xl" mt="1rem" alignSelf="center" fontWeight="bold">
          Select a book to see my highlights!
        </Text>
      </Flex>
    </Flex>
  );
}

export interface IBooksListProps {
  books: IBook[];
}

export function BooksList({ books }: IBooksListProps) {
  return (
    <Flex flexDir="column">
      {books.map((book, index) => {
        return (
          <NextLink href={`quotes/${book.id}`}>
            <Flex key={index} mb="1rem" flexDir="column">
              <Heading fontSize="md" as={'button'} textAlign="left">
                {book.title}
              </Heading>
              <Box color="gray.500" fontSize="sm">
                {book.authors.join(', ')}
              </Box>
            </Flex>
          </NextLink>
        );
      })}
    </Flex>
  );
}
