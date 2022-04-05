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
  Orders,
  OrdersOngoing,
  OrdersPrevious,
} from './routes';

// Layouts
import AppLayout from './layouts/app-layout/AppLayout';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="register-store" element={<StoreProfile />} />
          <Route element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
              <Route path="ongoing" element={<OrdersOngoing />} />
              <Route path="previous" element={<OrdersPrevious />} />
            <Route path="store" element={<StoreProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
