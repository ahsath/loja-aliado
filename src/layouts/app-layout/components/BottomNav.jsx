import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import ReceiptRounded from '@mui/icons-material/ReceiptRounded';
import StoreRounded from '@mui/icons-material/StoreRounded';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const { pathname } = useLocation();
  const [currentPath, setCurrentPath] = useState(pathname);

  const navigate = useNavigate();
  const routes = [
    { pathname: '/dashboard', label: 'Painel', icon: <DashboardRounded /> },
    { pathname: '/orders', label: 'Ordens', icon: <ReceiptRounded /> },
    { pathname: '/store', label: 'Loja', icon: <StoreRounded /> },
  ];

  return (
    <BottomNavigation
      value={currentPath}
      component="nav"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: 'solid',
        borderColor: 'grey.50',
      }}
      onChange={(_, path) => setCurrentPath(path)}
      showLabels
    >
      {routes.map((route) => {
        return (
          <BottomNavigationAction
            onClick={() => navigate(route.pathname)}
            key={route.label}
            label={route.label}
            icon={route.icon}
            value={route.pathname}
          />
        );
      })}
    </BottomNavigation>
  );
}
