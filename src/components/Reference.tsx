import * as React from 'react';
import { Link, Text } from '@chakra-ui/core';
import NextLink from 'next/link';

export interface IReferenceProps {
  children?;
  link?: ILink;
}

export interface ILink {
  href: string;
  query?: { [any: string]: string };
  external?: boolean;
}

export default function Reference({ children, link }: IReferenceProps) {
  const color = 'blue.500';
  return link ? (
    link.external ? (
      <Link
        href={link.href ? link.href : link.href}
        fontWeight="semibold"
        color={color}
        textDecoration="underline"
      >
        {children}
      </Link>
    ) : (
      <NextLink href={{ pathname: link.href, query: link.query }}>
        <Link fontWeight="semibold" color={color} textDecoration="underline">
          {children}
        </Link>
      </NextLink>
    )
  ) : (
    <Text fontWeight="semibold" display="inline" color={color}>
      {children}
    </Text>
  );
}
