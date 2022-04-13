// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// MUI
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// TailwindCSS
import './assets/css/index.css';

// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Routes
import {
  Home,
  Welcome,
  StoreProducts,
  StoreProfile,
  Dashboard,
  OrdersNew,
  OrdersOngoing,
  OrdersPrevious,
  StoreAddProduct,
  StoreEditProduct,
} from './routes';

// Layouts
import AppLayout from './layouts/app-layout/AppLayout';
import OrdersLayout from './routes/orders/layouts/OrdersLayout';

// Auth0
import { Auth0Provider } from '@auth0/auth0-react';
import AuthGuard from './AuthGuard';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId="vCZWpY1mGjPJmdEBlQrWMGiOyWRNeqs2"
        redirectUri={window.location.origin + '/welcome'}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<AuthGuard />}>
              <Route path="welcome" element={<Welcome />} />
              <Route path="register-store" element={<StoreProfile />} />
              <Route element={<AppLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="orders" element={<OrdersLayout />}>
                  <Route index element={<OrdersNew />} />
                  <Route path="ongoing" element={<OrdersOngoing />} />
                  <Route path="previous" element={<OrdersPrevious />} />
                </Route>
                <Route path="store" element={<StoreProducts />} />
              </Route>
              <Route path="store/add" element={<StoreAddProduct />} />
              <Route path="store/:productId" element={<StoreEditProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>
);
