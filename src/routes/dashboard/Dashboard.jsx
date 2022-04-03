import BoardIncome from './components/BoardIncome';
import BoardOrdersBook from './components/BoardOrdersBook';
import newOrders from './components/newOrders.json';
import prevOrders from './components/prevOrders.json';

export default function Dashboard() {
  return (
    <div className="grid gap-2 py-2">
      <BoardIncome />
      <BoardOrdersBook title="Novas ordens" orders={newOrders} ring />
      <BoardOrdersBook title="Ordens anteriores" orders={prevOrders} />
    </div>
  );
}
