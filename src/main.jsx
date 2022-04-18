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

// Mapbox
import { MapboxProvider } from './components';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Auth0Provider
      domain={import.meta.env.VITE_DOMAIN}
      clientId={import.meta.env.VITE_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<AuthGuard />}>
              <Route path="welcome" element={<Welcome />} />
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
              <Route
                path="store/settings/profile"
                element={
                  <MapboxProvider
                    accessToken={import.meta.env.VITE_ACCESS_TOKEN}
                  >
                    <StoreProfile />
                  </MapboxProvider>
                }
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
