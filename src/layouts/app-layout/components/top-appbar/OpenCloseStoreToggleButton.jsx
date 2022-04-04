import { ToggleButton } from '@mui/material';
import StoreRounded from '@mui/icons-material/StoreRounded';
import { useState } from 'react';

export default function OpenCloseToggleButton() {
  const [storeOpen, setStoreOpen] = useState(false);

  return (
    <ToggleButton
      selected={storeOpen}
      onChange={() => setStoreOpen(!storeOpen)}
      value="test"
      sx={{
        border: 'none',
        borderRadius: '9999px',
        '&.Mui-selected': {
          bgcolor: 'transparent',
          color: (theme) => theme.palette.action.active,
          ':hover': {
            bgcolor: (theme) => theme.palette.action.hover,
          },
        },
      }}
    >
      {storeOpen ? <StoreRounded /> : <IconMdiStoreOff />}
    </ToggleButton>
  );
}
