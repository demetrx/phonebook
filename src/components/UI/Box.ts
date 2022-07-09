import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
} from 'styled-system';

interface Props extends ColorProps, LayoutProps, SpaceProps, FlexboxProps {
  readonly gap?: number;
}

const Box = styled.div<Props>`
  align-items: center;
  gap: ${p => (p.gap ? p.theme.space[p.gap] : 0)}px;
  ${color}
  ${space}
  ${layout}
  ${flexbox}
`;

export default Box;
