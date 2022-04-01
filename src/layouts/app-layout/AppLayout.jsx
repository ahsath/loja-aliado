import AppNav from './components/AppNav';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Outlet />
      <AppNav />
    </>
  );
}
