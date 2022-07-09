import { ReactComponent as LogoIcon } from './logo.svg';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';
import styled from 'styled-components';

interface Props extends LayoutProps, SpaceProps {}

export const Logo = styled(LogoIcon)<Props>`
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
  transition: transform ${p => p.theme.transition};

  ${layout}
  ${space}

  :hover {
    transform: scale(1.15);
    cursor: pointer;
  }
`;
