import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { Header, HeaderContainer } from './AppBar.styled';
import { authSelectors } from 'redux/authSlice';
import { useAppSelector } from 'redux/hooks';

const AppBar = () => {
  const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <HeaderContainer>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderContainer>
    </Header>
  );
};

export default AppBar;
