import { Box } from '@mui/material';

export default function Main({ children }) {
  return (
    <Box sx={{ py: { xs: 8 }, pt: { sm: 9 } }} component="main">
      {children}
    </Box>
  );
}
