import { NavLinkStyled } from './NavLink.styled';

interface Props {
  readonly children: React.ReactNode;
  readonly to: string;
}

const NavLink = (props: Props) => {
  return <NavLinkStyled {...props} />;
};

export default NavLink;
