import { Outlet } from 'react-router-dom';
import { Main } from '../../../components';
import OrdersNavTab from './components/OrdersNavTab';

export default function OrdersLayout() {
  return (
    <>
      <OrdersNavTab />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
