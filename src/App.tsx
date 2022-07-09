import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateOutlet, RestrictedOutlet } from 'routes';
import { useRefreshQuery } from 'services/contacts-api';
import { authSelectors } from 'redux/authSlice';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/UI/Container/Container';
import Footer from 'components/Footer/Footer';
import Box from 'components/UI/Box';
import Loader from 'components/UI/Loader/Loader';

const HomeView = lazy(
  () => import('views/HomeView/HomeView' /* webpackChunkName: "home-view" */)
);

const ContactsView = lazy(
  () =>
    import(
      'views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
    )
);

const SignUpView = lazy(
  () =>
    import('views/SignUpView/SignUpView' /* webpackChunkName: "signup-view" */)
);

const LogInView = lazy(
  () => import('views/LogInView/LogInView' /* webpackChunkName: "login-view" */)
);

function App() {
  const isTokenPresent = useSelector(authSelectors.getToken);
  const { isLoading: isRefreshing } = useRefreshQuery(undefined, {
    skip: !isTokenPresent,
  });

  return isRefreshing ? null : (
    <>
      <Box flex="1 0 auto">
        <AppBar />

        <Container id="wrap">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route
                path="/signup"
                element={<RestrictedOutlet redirectTo="/" />}
              >
                <Route path="/signup" element={<SignUpView />} />
              </Route>
              <Route
                path="/login"
                element={<RestrictedOutlet redirectTo="/" />}
              >
                <Route path="/login" element={<LogInView />} />
              </Route>
              <Route
                path="/contacts"
                element={<PrivateOutlet redirectTo="/login" />}
              >
                <Route path="/contacts" element={<ContactsView />} />
              </Route>
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </Suspense>
        </Container>
      </Box>

      <Box flex="0 0 auto">
        <Footer />
      </Box>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: '#ec5990',
            color: '#fff',
            border: '2px solid #fff',
          },
        }}
      />
    </>
  );
}

export default App;
