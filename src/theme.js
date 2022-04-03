import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: {
      main: '#FF0000',
      light: '#FEF2F2',
    },
    divider: '#FAFAFA',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'initial',
        },
      },
    },
  },
});
