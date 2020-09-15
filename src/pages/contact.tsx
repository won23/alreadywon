import * as React from 'react';
import Layout from 'src/components/Layout';
import {
  Box,
  Heading,
  Flex,
  Divider,
  HStack,
  Link as ChakraLink,
} from '@chakra-ui/core';

export interface IContactProps {}

export default function Contact(props: IContactProps) {
  const contactItems = [
    {
      title: 'Email',
      linkName: 'tim@alreadywon.me',
      src: 'mailto: tim@alreadywon.me',
    },
    {
      title: 'Professional Profile',
      linkName: 'LinkedIn',
      src: 'https://www.linkedin.com/in/tim-won-5b9ba911/',
    },
    {
      title: 'Development Activity',
      linkName: 'Github',
      src: 'https://github.com/Tkwon123',
    },
  ];

  function ContactItem(props) {
    return (
      <Flex flexDirection="column" my={{ xs: '1rem', sm: '0rem' }}>
        <Heading size="sm" as="h3">
          {props.title}
        </Heading>
        <Divider width="10%" borderColor="black" my="1rem"></Divider>
        <ChakraLink href={props.src} isExternal>
          {props.linkName ? props.linkName : props.src}
        </ChakraLink>
      </Flex>
    );
  }

  return (
    <Layout>
      <Flex flexDirection="column">
        <Heading>Contact Info</Heading>
        <HStack mt={'2rem'} flexWrap="wrap">
          {contactItems.map((item, index) => {
            if (index + 1 === contactItems.length) {
              // last one
              return (
                <Box>
                  <ContactItem
                    key={item.title}
                    title={item.title}
                    src={item.src}
                    linkName={item.linkName}
                  >
                    {' '}
                  </ContactItem>
                </Box>
              );
            } else {
              return (
                <Box key={item.title} mr="2rem">
                  <ContactItem
                    title={item.title}
                    src={item.src}
                    linkName={item.linkName}
                  >
                    {' '}
                  </ContactItem>
                  <Divider
                    orientation="vertical"
                    borderColor={{ xs: '#E2E8F0 !important' }}
                    display={{ xs: 'none', base: 'inherit' }}
                  />
                </Box>
              );
            }
          })}
        </HStack>
      </Flex>
    </Layout>
  );
}
