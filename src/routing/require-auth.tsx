import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAuthLoggedIn } from '../store/features/auth/auth-selectors';
import { useRootSelector } from '../store/hooks';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const loggedIn = useRootSelector(selectAuthLoggedIn);

  if (!loggedIn) {
    // return <Navigate to={`/admin?redirect=${location.pathname}`} />;
    return <Navigate to={`/admin?redirect=${location.pathname}`} />;
  }

  return children;
};

export default RequireAuth;
