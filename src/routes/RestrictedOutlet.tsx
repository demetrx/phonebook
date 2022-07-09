import { useAppSelector } from 'redux/hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/authSlice';

const RestrictedOutlet = ({ redirectTo = '/' }) => {
  const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn);
  return !isLoggedIn ? <Outlet /> : <Navigate replace to={redirectTo} />;
};

export default RestrictedOutlet;
