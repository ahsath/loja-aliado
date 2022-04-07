import newOrders from '../../data/newOrders.json';
import OrdersBookList from './components/OrdersBookList';

export default function Orders() {
  return <OrdersBookList orders={newOrders} />;
}
