import Box from 'components/UI/Box';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { authSelectors } from 'redux/authSlice';
import { Logo } from 'components/Logo/Logo.styled';
import { Title, Moto, Greeting } from './HomeView.styled';

const HomeView = () => {
  const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn);
  const userName = useAppSelector(authSelectors.getUserName);

  return (
    <>
      <Box display="flex" gap={4} mt={6} justifyContent="center">
        <Title>Phonebook</Title>
      </Box>

      {isLoggedIn ? (
        <Greeting>Welcome, {userName}!</Greeting>
      ) : (
        <Moto>
          Keep in touch with those important to you. Always there when you need
          it.
        </Moto>
      )}

      <Box display="flex" gap={4} mt={6} justifyContent="center">
        <Link to="/contacts">
          <Logo width={250} />
        </Link>
      </Box>
    </>
  );
};

export default HomeView;
