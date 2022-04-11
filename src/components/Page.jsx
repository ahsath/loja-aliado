import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { useNavigate } from 'react-router-dom';

export default function Page({
  title,
  backIcon = <CloseRounded />,
  children,
  bottomContent,
}) {
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        color="inherit"
        elevation={0}
        sx={{ borderBottom: 1, borderColor: 'grey.50' }}
      >
        <Toolbar className="gap-6">
          <IconButton
            size="large"
            edge="start"
            aria-label="Cancelar"
            onClick={() => navigate(-1)}
          >
            {backIcon}
          </IconButton>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {children}
      <Toolbar />
      <Box
        position="fixed"
        left={0}
        right={0}
        bottom={0}
        zIndex="speedDial"
        component={Toolbar}
      >
        {bottomContent}
      </Box>
    </>
  );
}
