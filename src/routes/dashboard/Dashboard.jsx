import { Box } from '@mui/material';
import BoardIncome from './components/BoardIncome';
import BoardOrdersBook from './components/BoardOrdersBook';
import BoardLearn from './components/BoardLearn';

import newOrders from './components/newOrders.json';
import prevOrders from './components/prevOrders.json';

export default function Dashboard() {
  return (
    <Box className="py-16" sx={{ pt: { sm: 9 } }}>
      <div className="grid gap-2">
        <BoardIncome />
        <BoardOrdersBook title="Novas ordens" orders={newOrders} ring />
        <BoardOrdersBook title="Ordens anteriores" orders={prevOrders} />
        <BoardLearn />
      </div>
    </Box>
  );
}
