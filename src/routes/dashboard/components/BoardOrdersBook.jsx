import { Typography, Avatar, ListItemButton, Box } from '@mui/material';
import { Scroll, ScrollItem } from '../../../components';

export default function BoardOrdersBook({ title, orders, ring }) {
  return (
    <Box
      className="flex flex-col gap-2 rounded-2xl pt-2 pb-4 overflow-hidden"
      sx={{
        bgcolor: (theme) => theme.palette.background.paper,
      }}
    >
      <ListItemButton sx={{ height: 40 }}>
        <Typography variant="caption" color="text.secondary">
          {title}
        </Typography>
      </ListItemButton>
      <Scroll>
        {orders.map((order) => {
          return (
            <ScrollItem
              key={order.picture}
              className="flex items-center flex-col"
            >
              <Avatar
                src={order.picture}
                sx={{
                  width: 60,
                  height: 60,
                  outlineStyle: ring && 'solid',
                  outlineColor: (theme) => theme.palette.primary.main,
                  outlineWidth: 2,
                  outlineOffset: 3,
                  margin: 1,
                }}
              />
              <div className="flex flex-col items-center gap-0.5 w-max">
                <Typography
                  sx={{ lineHeight: 'initial' }}
                  variant="button"
                  component="div"
                >
                  {order.total}
                </Typography>
                <Typography
                  sx={{ lineHeight: 'initial' }}
                  variant="caption"
                  color="text.secondary"
                >
                  {order.distance} • {order.date}
                </Typography>
              </div>
            </ScrollItem>
          );
        })}
      </Scroll>
    </Box>
  );
}
