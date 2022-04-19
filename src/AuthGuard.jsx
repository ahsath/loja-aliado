import { useAuth0 } from '@auth0/auth0-react';
import { Outlet, Navigate } from 'react-router-dom';
import useRealm from './hooks/useRealm';

export default function AuthGuard() {
  const { user, isLoading } = useAuth0();
  const { currentUser } = useRealm();

  if (isLoading) return <div>loading...</div>;
  if (!user || !currentUser) return <Navigate to="/" />;

  return <Outlet />;
}
