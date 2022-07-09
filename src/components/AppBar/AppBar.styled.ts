import styled from 'styled-components';
import { ContainerStyled } from 'components/UI/Container/Container.styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[4]}px 0;
  background-color: ${p => p.theme.colors.primary};
  border-bottom: ${p => p.theme.borders.thick} ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
`;

export const HeaderContainer = styled(ContainerStyled)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: 0;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;
