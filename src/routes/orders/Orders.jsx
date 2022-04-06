import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from '@mui/material';
import newOrders from '../dashboard/components/newOrders.json';

export default function Orders() {
  return (
    <List
      sx={{ bgcolor: 'background.paper', overflow: 'hidden', borderRadius: 4 }}
      disablePadding
    >
      {newOrders.map((order) => {
        return (
          <ListItem key={order.picture} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={order.name} src={order.picture} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <div className="flex items-baseline justify-between">
                  <Typography variant="button">{order.total}</Typography>
                  <Typography
                    variant="caption"
                    component="span"
                    color="text.secondary"
                  >
                    {order.date}
                  </Typography>
                </div>
              }
              secondary={
                <>
                  <Typography
                    variant="caption"
                    component="span"
                    color="text.primary"
                  >
                    {order.name}
                  </Typography>

                  <Typography
                    variant="caption"
                    component="span"
                    color="text.secondary"
                  >
                    {' — ' + order.address} • {order.distance}
                  </Typography>
                </>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
}
