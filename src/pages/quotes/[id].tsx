import {
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  useColorModeValue,
  Icon,
  Link,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from 'src/layouts/Layout';
import { getBook, getBookPaths } from 'src/lib/firebase';
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
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) setSelected(hash);
  }, []);

  return (
    <Layout>
      <Flex flexDirection="column">
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
          <Quotes
            quotes={book.quotes}
            selected={selected}
            setSelected={setSelected}
          ></Quotes>
        </Flex>
      </Flex>
    </Layout>
  );
}

function Quotes({ quotes, selected, setSelected }) {
  const bg = useColorModeValue('yellow.300', 'yellow.800');

  return (
    <List>
      {quotes.map((quote, index) => {
        return (
          <ListItem
            my="1rem"
            ml={'2rem'}
            p={'.5rem'}
            bg={selected == index ? bg : ''}
            key={index}
            borderRadius="md"
            role="group"
          >
            {quote}{' '}
            <Link
              key={index}
              id={index}
              href={`#${index}`}
              css={{ scrollMarginBlock: '10rem' }}
              as={'a'}
              role="group"
            >
              {' '}
              <Icon
                opacity={0}
                as={FaHashtag}
                color="green.500"
                _groupHover={{ opacity: 1 }}
                _groupFocus={{
                  opacity: 1,
                }}
                aria-label="anchor"
                outline="none"
                focusable={false}
                cursor="pointer"
                onClick={(e) => {
                  setSelected(index);
                }}
              />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}
