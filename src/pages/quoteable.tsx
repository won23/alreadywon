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
  useColorModeValue
} from '@chakra-ui/react';
import { useState } from 'react';
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
  const [books, quotes] = await Promise.all([getBooks()]);
  // const [books] = await Promise.all([booksPromise]);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {  books },
  };
}

export default function IQuoteable({ books, quotes }: IQuoteableProps) {
  const [book, setBook] = useState({});
  return (
    <Layout>
      <Flex flexDirection="column">
        <Main book={book}></Main>
        <Divider orientation="horizontal" my="1rem"></Divider>
        <BookList books={books} setBook={setBook}></BookList>
      </Flex>
    </Layout>
  );
}

function Main({ book }) {
  const preview = { href: book.preview, external: true };

  return (
    <Flex flexDirection="column">
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
    </Flex>
  );
}

function BookList({ books, setBook }) {
  return (
    <Flex
      flexDirection="column"
      rounded="md"
      p=".5rem"
      justifyContent="flex-start"
    >
      <VStack>
        {books.map((item) => {
          return <Book book={item}></Book>;
        })}
      </VStack>
    </Flex>
  );
}

function Book({ book }) {
  const [expanded, setExpanded] = useState(false);
  const bg = useColorModeValue('gray.100', 'blue.800')
  console.log(book)
  return (
    <Box borderColor="gray.500" borderRadius="sm" width="100%" border="1px" p="1rem .5rem" bg={bg}  onClick={()=>setExpanded(!expanded)} cursor="pointer">
      <Flex flexDirection="column">
        <Heading as="h2" fontSize="lg">
          {book.title}
        </Heading>
        <Heading as="h4" fontSize="xs" color="gray.500">
          {book.authors.join(', ')}
        </Heading>
        <Text mt="1rem"  fontWeight="bold">
          > Highlights ({book.quotes.length})
        </Text>
        {
          expanded ? <Quotes quotes={book.quotes}></Quotes>  : <></>
        }
      </Flex>
    </Box>
  );
}

function Quotes({quotes}){
  return (<UnorderedList >
    {quotes.map((quote,index)=>{
      return (
        <ListItem key={index} my="1rem" ml={'2rem'}>{quote}</ListItem>
      )
    })}
  </UnorderedList>)
}
