import { Box, Divider, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import Axios from 'axios';
import * as React from 'react';
import Reference from 'src/components/Reference';
import navItems from 'src/configs/nav.config';
import Layout from 'src/layouts/Layout';
import { booksRef, getBooks, getQuotes, quotesRef } from 'src/lib/firebase';
export interface IQuoteableProps {
  books: IBook[];
  quotes: [];
}

interface IBook {
  title;
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const quotesPromise = Axios.get('/api/get-quotes');
  const [books, quotes] = await Promise.all([getBooks(), getQuotes()]);
  // const [books] = await Promise.all([booksPromise]);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { quotes, books },
  };
}

export default function IQuoteable({ books, quotes }: IQuoteableProps) {
  const [book, setBook] = React.useState({});
  return (
    <Layout>
      <Grid templateColumns="3fr auto 1fr" gridGap="1rem">
        <Main book={book}></Main>
        <Divider orientation="vertical" mx="3rem" minHeight="10rem"></Divider>
        <SideBar books={books} setBook={setBook}></SideBar>
      </Grid>
    </Layout>
  );
}

function Main({ book }) {
  const preview = { href: book.preview, external: true };

  return (
    <Flex flexDirection="column">
      {book && book.title ? (
        <Box>
          <Heading mb={'1rem'} as="h1">
            {book.title}
          </Heading>
          <Text fontSize="sm" mb={'1rem'}>
            {book.authors.length > 1 ? 'Authors: ' : 'Author: '}

            {book.authors.map((author) => {
              return author;
            })}
          </Text>
          <Reference mb={'1rem'} link={preview}>
            Preview
          </Reference>
          <Box>
            {book.quotes.map((quote, index) => {
              return (
                <Box mb={'1rem'} key={index} fontSize="sm">
                  {quote}
                </Box>
              );
            })}
          </Box>
        </Box>
      ) : (
        <Flex flexDirection="column" justifyContent="center">
          <Text>
            The following books are highlights made from my Kindle. Note some
            quotes may have formatting issues as they're simply snippets taken
            while reading.
          </Text>
          <Text fontSize="xl" mt="1rem" alignSelf="center" fontWeight="bold">
            Select a book to see my highlights!
          </Text>
        </Flex>
      )}
    </Flex>
  );
}

function SideBar({ books, setBook }) {
  return (
    <Flex flexDirection="column" rounded="md" p=".5rem">
      <Heading fontSize="sm" mb="1rem">
        Books
      </Heading>
      <Box flexBasis="50vh">
        {books.map((item, index) => (
          <Box
            key={index}
            fontSize="xs"
            mb=".5rem"
            onClick={() => setBook(item)}
            cursor="pointer"
            _hover={{
              textDecoration: 'underline',
            }}
          >
            {item.title}
          </Box>
        ))}
      </Box>
    </Flex>
  );
}
