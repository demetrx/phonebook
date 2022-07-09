import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: ${p => p.theme.breakpoints[0]};
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: ${p => p.theme.breakpoints[1]};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p => p.theme.breakpoints[2]};
  }
`;
