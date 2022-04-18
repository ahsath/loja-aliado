import { Badge, Avatar, Box, TextField, Button, Toolbar } from '@mui/material';
import { UploadFileButton, Page } from '../../../../components';
import ArrowBackRounded from '@mui/icons-material/ArrowBackRounded';
import SaveRounded from '@mui/icons-material/SaveRounded';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import useMapbox from '../../../../components/mapbox/useMapbox';

export default function StoreSettingsProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mapbox = useMapbox();

  useEffect(() => {
    const map = mapbox.map('map');
    const geolocateControl = mapbox.geolocateControl();
    map.addControl(geolocateControl);
    // const marker = mapbox.marker()

    map.on('move', ({ target }) => {
      const { lng, lat } = target.getCenter();
      console.log(lng, lat);
    });

    map.on('load', () => {
      geolocateControl.trigger();
    });

    geolocateControl.on('error', (data) => {
      console.log(data);
    });

    return () => map.remove();
  }, []);

  const onSubmit = (data) => console.log(data);

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
              errors.name?.type === 'required' && 'O nome da loja é obrigatório'
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
            label="Pesquisar localização"
            autoComplete="off"
            error={!!errors.location}
            helperText={
              errors.location?.type === 'required' &&
              'A localização da loja é obrigatória'
            }
            size="small"
            fullWidth
            margin="normal"
          />
        </form>
        <div id="map" className="grow" />
      </div>
    </Page>
  );
}
