import { useAuth0 } from '@auth0/auth0-react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Avatar,
  useScrollTrigger,
} from '@mui/material';
import ToggleStoreButton from './ToggleStoreButton';

export default function TopAppBar() {
  const trigger = useScrollTrigger();
  const { user } = useAuth0();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: trigger && 'solid',
        borderColor: 'grey.50',
      }}
    >
      <Toolbar className="justify-between">
        <Box
          className="flex gap-2 items-baseline"
          sx={{ color: 'primary.main' }}
        >
          <div className="font-['Pacifico',_cursive] text-3xl">Loja</div>
          <div className="font-black text-xs">Aliado</div>
        </Box>
        <div>
          <ToggleStoreButton />
          <IconButton edge="end">
            <Avatar src={user?.picture} sx={{ width: 32, height: 32 }} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
