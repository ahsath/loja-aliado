import {
  Badge,
  Avatar,
  Box,
  TextField,
  Button,
  Toolbar,
  Autocomplete,
  useTheme,
} from '@mui/material';
import { UploadFileButton, Page } from '../../../../components';
import ArrowBackRounded from '@mui/icons-material/ArrowBackRounded';
import SaveRounded from '@mui/icons-material/SaveRounded';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import useMapbox from '../../../../components/mapbox/useMapbox';
import useStore from './useStore';

export default function StoreSettingsProfile() {
  const { palette } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mapbox = useMapbox();
  const { data, error, loading } = useStore();

  useEffect(() => {
    let map;
    if (data) {
      map = mapbox.map({
        container: 'map',
        center: data.coords,
      });
      const geolocateControl = mapbox.geolocateControl();
      const marker = mapbox
        .marker({ color: palette.primary.main })
        .setLngLat(data.coords);

      map.addControl(geolocateControl);

      map.on('move', ({ target }) => {
        const { lng, lat } = target.getCenter();
        marker.setLngLat([lng, lat]);
      });

      map.on('load', () => marker.addTo(map));
    }

    return () => map?.remove();
  }, [data]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Page
      title="Perfil da Loja"
      backIcon={<ArrowBackRounded />}
      bottomContent={
        <Button
          startIcon={<SaveRounded />}
          variant="contained"
          type="submit"
          form="store-profile"
          fullWidth
        >
          Salvar
        </Button>
      }
      spaceless
    >
      <div className="flex flex-col h-screen">
        <Toolbar />
        <form
          id="store-profile"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-4"
        >
          <Badge
            className="self-center"
            overlap="circular"
            badgeContent={
              <UploadFileButton ariaLabel="Toque para selecionar um logotipo para sua loja" />
            }
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

          <TextField
            {...register('name', { required: true })}
            form="store-profile"
            label="Nome da empresa"
            error={!!errors.name}
            helperText={
              errors.name?.type === 'required' && 'O nome da loja ?? obrigat??rio'
            }
            size="small"
            autoComplete="off"
            fullWidth
            margin="normal"
          />
          <TextField
            {...register('location', {
              required: true,
            })}
            label="Pesquisar localiza????o"
            autoComplete="off"
            error={!!errors.location}
            helperText={
              errors.location?.type === 'required' &&
              'A localiza????o da loja ?? obrigat??ria'
            }
            size="small"
            fullWidth
            margin="normal"
          />
        </form>
        {loading && <div>Loading map...</div>}
        {data && <div id="map" className="grow" />}
        {error && (
          <div>An error has ocurred while loading the map, please refresh</div>
        )}
      </div>
    </Page>
  );
}
