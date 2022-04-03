import { Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function BoardOrdersBook({ title, orders, ring }) {
  const { palette } = useTheme();

  return (
    <div className="flex flex-col gap-2 bg-white rounded-2xl py-4">
      <div className="px-4">
        <div className="flex items-center h-8">
          <Typography variant="caption" color="text.secondary">
            {title}
          </Typography>
        </div>
      </div>
      <div className="BoardOrdersBook flex gap-3 overflow-x-scroll snap-mandatory snap-x scroll-pl-4 w-screen [scrollbar-width:none] px-4">
        {orders.map((order) => {
          return (
            <div
              key={order.picture}
              className="flex items-center flex-col w-max snap-start"
            >
              <Avatar
                src={order.picture}
                sx={{
                  width: 60,
                  height: 60,
                  outlineStyle: ring && 'solid',
                  outlineColor: palette.primary.main,
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
