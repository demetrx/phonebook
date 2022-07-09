import React from 'react';
import { ContainerStyled } from './Container.styled';

interface Props {
  readonly children: React.ReactNode;
  [x: string]: any;
}

const Container = ({ children, ...other }: Props) => {
  return <ContainerStyled {...other}>{children}</ContainerStyled>;
};

export default Container;
