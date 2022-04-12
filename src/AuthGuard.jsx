import { useAuth0 } from '@auth0/auth0-react';
import { Outlet, Navigate } from 'react-router-dom';

export default function AuthGuard() {
  const { user, isLoading } = useAuth0();

  if (isLoading) return <div>loading...</div>;
  if (!user) return <Navigate to="/" />;

  return <Outlet />;
}
