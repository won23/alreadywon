import { useRef } from 'react';
import { Box, Text } from '@chakra-ui/core';
import { Breed } from '../types';

export interface ISideNavProps {
  data: Breed[];
  clickBreedFunction: (breed: Breed) => void;
}

export default function SideNav(props: ISideNavProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { clickBreedFunction, data } = props;
  return (
    <Box
      ref={ref}
      as="aside"
      pos="sticky"
      // top="6.5rem"
      w="280px"
      pr="8"
      pb="8"
      pl="1"
      overflowY="auto"
      className="sidebar-content"
      flexShrink={0}
      h="calc(((100vh - 2rem) - 64px) );"
      display={{ base: 'none', md: 'block' }}
      bg="tomato"
    >
      {data.map((breed, index) => {
        return (
          <Text onClick={() => clickBreedFunction(breed)} key={index}>
            {breed.name}
          </Text>
        );
      })}
    </Box>
  );
}
