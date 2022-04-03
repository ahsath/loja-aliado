import { AppBar, Box, Toolbar, IconButton, Avatar } from '@mui/material';
import avatar from '../../../assets/img/avatar.jpg';

export default function TopAppBar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: 'solid',
        borderColor: 'divider',
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
        <IconButton sx={{ mr: -1 }}>
          <Avatar src={avatar} sx={{ width: 32, height: 32 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
