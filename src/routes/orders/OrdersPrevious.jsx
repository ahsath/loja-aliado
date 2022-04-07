import prevOrders from '../../data/prevOrders.json';
import OrdersBookList from './components/OrdersBookList';

export default function OrdersPrevious() {
  return <OrdersBookList orders={prevOrders} resolvePath="/orders/" />;
}
