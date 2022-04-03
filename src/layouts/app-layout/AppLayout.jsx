import { Outlet } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import TopAppBar from './components/TopAppBar';

export default function AppLayout() {
  return (
    <>
      <TopAppBar />
      <Outlet />
      <BottomNav />
    </>
  );
}
