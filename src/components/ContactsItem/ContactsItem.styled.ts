import styled from 'styled-components';

export const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 5px;
  font-size: 14px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 16px;
    width: 300px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 370px;
  }
`;

export const Contact = styled.p`
  max-width: 200px;
`;
