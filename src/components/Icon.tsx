import * as React from 'react';
import { Box } from '@chakra-ui/core';
import { IconType } from 'react-icons/lib';
import { AiFillLinkedin } from 'react-icons/Ai';

export interface IIconProps {
  icon: IconType;
}

export default function Icon(props: IIconProps) {
  interface IContactItems {
    name: string;
    text: string;
    component: any;
    src: string;
    array: [];
  }

  function renderer(config) {
    return React.createElement(
      Box,
      { width: '20px' },
      config.map((item) => {
        console.log(item);
        return item.component();
      })
    );
  }

  const contactItems: IContactItems[] = [
    {
      name: 'LinkedIn',
      text: 'AiFillLinkedin',
      component: AiFillLinkedin,
      src: 'href',
      array: [],
    },
    {
      name: 'LinkedIn',
      text: 'AiFillLinkedin',
      component: AiFillLinkedin,
      src: 'href',
      array: [],
    },
  ];

  return () => {
    return React.createElement(props.icon);
  };
}
