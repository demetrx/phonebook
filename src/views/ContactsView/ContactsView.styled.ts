import styled from 'styled-components';

export const Container = styled.section`
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 40px;
  }
`;

export const MainContent = styled.div`
  margin-top: ${p => p.theme.space[5]}px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: ${p => p.theme.space[6]}px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
