import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export const SectionStyled = styled.section<SpaceProps>`
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.thick} ${p => p.theme.colors.accent};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  ${space}

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: ${p => p.theme.space[6]}px ${p => p.theme.space[6]}px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  margin: -10px auto 20px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  padding: 0 ${p => p.theme.space[4]}px ${p => p.theme.space[2]}px;
  width: max-content;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 36px;
  }
`;
