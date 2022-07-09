import React from 'react';
import { StyledButton } from './Button.styled';
import { LayoutProps, PositionProps, SpaceProps } from 'styled-system';

interface Props extends PositionProps, LayoutProps, SpaceProps {
  disabled?: boolean;
  onClick?: () => void;
  as?: 'div' | 'button';
  type?: 'button' | 'submit';
  icon?: React.ReactNode | null;
  children?: React.ReactNode | null;
}

export const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children = null,
  ...other
}: Props) => {
  return (
    <StyledButton
      {...other}
      type={type}
      disabled={disabled}
      isIcon={!!Icon && !children}
    >
      {Icon}
      {children}
    </StyledButton>
  );
};
