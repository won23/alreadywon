import * as React from 'react';
import Layout from '../components/Layout';
import {
  Box,
  Heading,
  Flex,
  Divider,
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
        <Divider width="10%" borderColor="black"></Divider>
        <ChakraLink href={props.src} isExternal>
          {props.linkName ? props.linkName : props.src}
        </ChakraLink>
      </Flex>
    );
  }

  return (
    <Layout>
      <Flex flexDirection="column">
        <Heading>Want to get in touch?</Heading>
        <Flex mt={'2rem'} flexWrap="wrap">
          {contactItems.map((item, index) => {
            if (index + 1 === contactItems.length) {
              // last one
              return (
                <ContactItem
                  title={item.title}
                  src={item.src}
                  linkName={item.linkName}
                >
                  {' '}
                </ContactItem>
              );
            } else {
              return (
                <>
                  <ContactItem
                    title={item.title}
                    src={item.src}
                    linkName={item.linkName}
                  >
                    {' '}
                  </ContactItem>
                  <Divider
                    mx="2rem"
                    orientation="vertical"
                    borderColor={{ xs: '#E2E8F0 !important' }}
                    display={{ xs: 'none', base: 'inherit' }}
                  />
                </>
              );
            }
          })}
        </Flex>
      </Flex>
    </Layout>
  );
}
