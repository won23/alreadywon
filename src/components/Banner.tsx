import * as React from 'react';
import { Box, Flex, FlexProps, Image } from '@chakra-ui/react';
import { shuffle } from 'lodash';
import ScrollContainer from 'react-indiana-drag-scroll';

export interface IBannerProps extends FlexProps {}

export default function Banner({ ...rest }: IBannerProps) {
  const photos = [
    '/images/gallery/gallery_1.jpg',
    '/images/gallery/gallery_2.jpg',
    '/images/gallery/gallery_3.jpg',
    '/images/gallery/gallery_4.jpg',
    '/images/gallery/gallery_5.jpg',
    '/images/gallery/gallery_6.jpg',
    '/images/gallery/gallery_7.jpg',
    '/images/gallery/gallery_8.jpg',
    '/images/gallery/gallery_9.jpg',
    '/images/gallery/gallery_10.jpg',
    '/images/gallery/gallery_11.jpg',
    '/images/gallery/gallery_12.jpg',
    '/images/gallery/gallery_13.jpg',
    '/images/gallery/gallery_14.jpg',
  ];

  return (
    <Flex
      {...rest}
      as={ScrollContainer}
      _after={{
        background: 'linear-gradient( transparent , black 130%);',
        position: 'absolute',
        w: '100%',
        bottom: 0,
        minH: '5rem',
      }}
    >
      {shuffle(photos).map((photo) => (
        <>
          <Image
            zIndex={-1}
            src={photo}
            h="100%"
            w="100%"
            mr=".25rem"
            cursor="pointer"
          ></Image>
        </>
      ))}
    </Flex>
  );
}
