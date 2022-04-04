import { Outlet } from 'react-router-dom';
import TopAppBar from './components/top-appbar/TopAppBar';
import BottomNav from './components/BottomNav';

export default function AppLayout() {
  return (
    <>
      <TopAppBar />
      <Outlet />
      <BottomNav />
    </>
  );
}
