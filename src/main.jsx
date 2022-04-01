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
import { Home, Welcome, Store, StoreProducts, StoreProfile } from './routes';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="store" element={<Store />}>
            <Route index element={<StoreProducts />} />
          </Route>
          <Route path="register-store" element={<StoreProfile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
