import * as React from 'react';
import { Box, Link, Text } from '@chakra-ui/core';
import NextLink from 'next/link';

export interface IReferenceProps {
  children?;
  link?: ILink;
  [any: string]: string | {};
}

export interface ILink {
  href: string;
  query?: { [any: string]: string };
  external?: boolean;
}

export default function Reference({
  children,
  link,
  ...rest
}: IReferenceProps) {
  const color = 'blue.500';
  return link ? (
    link.external ? (
      <Box {...rest}>
        <Link
          href={link.href}
          fontWeight="semibold"
          color={color}
          textDecoration="underline"
          isExternal={true}
        >
          {children}
        </Link>
      </Box>
    ) : (
      <NextLink href={{ pathname: link.href, query: link.query }}>
        <Link
          fontWeight="semibold"
          color={color}
          textDecoration="underline"
          {...rest}
        >
          {children}
        </Link>
      </NextLink>
    )
  ) : (
    <Text fontWeight="semibold" display="inline" color={color} {...rest}>
      {children}
    </Text>
  );
}
