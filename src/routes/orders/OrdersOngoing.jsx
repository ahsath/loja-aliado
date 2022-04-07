import ongoingOrders from '../../data/ongoingOrders.json';
import OrdersBookList from './components/OrdersBookList';

export default function OrdersOngoing() {
  return <OrdersBookList orders={ongoingOrders} resolvePath="/orders/" />;
}
