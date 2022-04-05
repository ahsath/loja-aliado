import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import ReceiptRounded from '@mui/icons-material/ReceiptRounded';
import StoreRounded from '@mui/icons-material/StoreRounded';

import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  const routes = [
    { pathname: 'dashboard', label: 'Painel', icon: <DashboardRounded /> },
    { pathname: 'orders', label: 'Ordens', icon: <ReceiptRounded /> },
    { pathname: 'store', label: 'Loja', icon: <StoreRounded /> },
  ];

  return (
    <BottomNavigation
      component="nav"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: 'solid',
        borderColor: 'grey.50',
      }}
      showLabels
    >
      {routes.map((route) => {
        return (
          <BottomNavigationAction
            sx={{
              '&.active': {
                color: 'primary.main',
              },
            }}
            key={route.label}
            label={route.label}
            icon={route.icon}
            component={NavLink}
            to={route.pathname}
          />
        );
      })}
    </BottomNavigation>
  );
}
