import { Badge, Avatar, Box, TextField, Button } from '@mui/material';
import StoreUploadLogoButton from './StoreUploadLogoButton';
import {
  MapboxProvider,
  MapboxMap,
  MapboxMarker,
  MapboxPin,
} from '../../../../components';
import { useState } from 'react';

export default function StoreSettingsProfile() {
  const [lngLat, setLngLat] = useState([0, 0]);

  const onMove = ({ target: map }) => {
    const { lng, lat } = map.getCenter();
    setLngLat([lng, lat]);
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex gap-6 flex-col pb-6">
        <Badge
          className="self-center"
          overlap="circular"
          badgeContent={<StoreUploadLogoButton />}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Avatar
            sx={{ width: 100, height: 100, bgcolor: 'primary.light' }}
            alt="M logo"
          >
            <Box
              component="span"
              className="font-['Pacifico',_cursive]"
              sx={{ color: 'primary.main' }}
            >
              M
            </Box>
          </Avatar>
        </Badge>

        <TextField label="Nome da empresa" size="small" fullWidth />
        <TextField label="Pesquisar localização" size="small" fullWidth />
      </div>

      <div className="grid flex-grow">
        <MapboxProvider accessToken="pk.eyJ1IjoiYWhzYXRoIiwiYSI6ImNsMWRpZWI0ZDBoc2Yzam8wdnA5Z2R0Y2gifQ.QYDyBYHRG0HXue4qE0qoVw">
          <MapboxMap
            className="-mx-4 -mb-4 col-span-full row-span-full"
            onMove={onMove}
          >
            <MapboxMarker
              options={{
                element: <MapboxPin className="w-8 h-8" />,
                lngLat,
              }}
            />
          </MapboxMap>
        </MapboxProvider>
        <Button
          className="w-full col-span-full row-span-full self-end z-10"
          variant="contained"
          size="large"
        >
          Pronto
        </Button>
      </div>
    </div>
  );
}
