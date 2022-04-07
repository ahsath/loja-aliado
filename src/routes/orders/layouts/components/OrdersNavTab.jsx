import { Tabs, Tab, Slide, useScrollTrigger } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';

export default function OrdersNavTab() {
  const trigger = useScrollTrigger();

  return (
    <Slide direction="down" in={!trigger}>
      <Tabs
        value={useLocation().pathname}
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
          position: 'sticky',
          zIndex: 'speedDial',
          top: { xs: 56, sm: 64 },
        }}
        variant="fullWidth"
        aria-label="lab API tabs example"
      >
        <Tab label="Novas" value="/orders" to="/orders" component={Link} />
        <Tab
          label="No curso"
          value="/orders/ongoing"
          to="ongoing"
          component={Link}
        />
        <Tab
          label="Anteriores"
          value="/orders/previous"
          to="previous"
          component={Link}
        />
      </Tabs>
    </Slide>
  );
}
