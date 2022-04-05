import BoardIncome from './components/BoardIncome';
import BoardOrdersBook from './components/BoardOrdersBook';
import BoardLearn from './components/BoardLearn';

import newOrders from './components/newOrders.json';
import prevOrders from './components/prevOrders.json';
import { Main } from '../../components';

export default function Dashboard() {
  return (
    <Main>
      <div className="grid gap-2">
        <BoardIncome />
        <BoardOrdersBook title="Novas ordens" orders={newOrders} ring />
        <BoardOrdersBook title="Ordens anteriores" orders={prevOrders} />
        <BoardLearn />
      </div>
    </Main>
  );
}
