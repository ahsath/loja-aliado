import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Avatar,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function OrdersBookList({ orders, resolvePath = '' }) {
  return (
    <List
      className="divide-y"
      sx={{
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: 4,
      }}
      disablePadding
    >
      {orders.map((order) => {
        return (
          <ListItem
            key={order._id}
            sx={{ borderColor: 'grey.50' }}
            disablePadding
          >
            <ListItemButton
              to={resolvePath + order._id}
              component={Link}
              alignItems="flex-start"
            >
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
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
