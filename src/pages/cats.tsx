import { useEffect, useState } from 'react';
import { SimpleGrid, Flex, Text, Box, Image } from '@chakra-ui/core';

import Layout from '../components/layout';
import Head from 'next/head';
import axios, { AxiosResponse } from 'axios';
import Nav from '../components/nav';
import SideNav from '../components/side-nav';
import { ServerResponse } from 'http';
import { Breed, BreedImage } from '../types';

export interface ICatsProps {}

export default function Cats() {
  const siteTitle = 'test';
  const [breeds, setBreeds] = useState<Breed[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentBreed, setCurrentBreed] = useState<Breed>(null);
  const [currentBreedImage, setCurrentBreedImage] = useState<BreedImage>(null);

  useEffect(() => {
    const current = localStorage.getItem('currentBreed');
    async function getData(): Promise<void> {
      const res = await axios.get<Breed[]>(
        'https://api.thecatapi.com/v1/breeds'
      );
      try {
        if (res.status === 200) {
          setBreeds(res.data);
        } else {
          throw new Error('Request failed!');
        }
      } catch (err) {
        console.error;
        //handle err
      }
    }

    getData();
  }, []);

  useEffect(() => {
    async function getBreedImage(): Promise<void> {
      try {
        const res = await axios.get<BreedImage>(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${currentBreed.id}`
        );
        if (res.status === 200) {
          setCurrentBreedImage(res.data[0]);
          console.log('img', res.data[0]);
        }
      } catch (err) {
        console.error;
      }
    }

    getBreedImage();
  }, [currentBreed]);

  function handleBreedChanged(breed): void {
    setCurrentBreed(breed);
  }

  return (
    <Layout
      sidebar={
        <SideNav
          data={breeds}
          clickBreedFunction={handleBreedChanged}
        ></SideNav>
      }
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {!currentBreed ? (
        <p>Wait I'm Loading comments for you</p>
      ) : (
        <>
          {/* <List> </List> */}
          <Flex>
            <Box>
              <Flex direction="column">
                <Box size="sm">
                  {currentBreedImage ? (
                    <Image
                      rounded="md"
                      src={currentBreedImage.url || ''}
                    ></Image>
                  ) : null}
                </Box>
                <Box>
                  <Box as="h1" fontSize="2xl">
                    {currentBreed?.name}
                  </Box>
                  <Box as="h1" fontSize="md" overflow="hidden">
                    Dog
                    FriendlinewafwefwefweessFriendlinewafwefwefweessFriendlin
                    ewafwefwefweessFriendlinewafwefw
                    efweessFriendlinewafwefwefweess: {currentBreed.dog_friendly}
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </>
      )}
    </Layout>
  );
}
