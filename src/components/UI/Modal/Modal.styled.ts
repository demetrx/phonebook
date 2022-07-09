import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalStyled = styled.div`
  max-width: 70%;
  max-height: 90%;
  overflow: hidden;
  position: relative;

  & section {
    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      padding-left: ${p => p.theme.space[7]}px;
      padding-right: ${p => p.theme.space[7]}px;
    }
  }

  & button {
    display: none;

    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      display: flex;
    }
  }
`;
