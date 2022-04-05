import { Button, Typography, Avatar } from '@mui/material';
import avatar from '../assets/img/avatar.jpg';

export default function Welcome() {
  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <div className="mt-10">
        <Avatar src={avatar} sx={{ width: 100, height: 100, mx: 'auto' }} />
        <h1 className="mt-4 m-0 text-center">Olá, Aninha!</h1>
        <Typography mt={6}>
          Estamos muito felizes em tê-lo como aliado da loja.
        </Typography>
        <Typography mt={2}>
          Antes que os clientes possam encontrá-lo nas proximidades, você
          precisa cadastrar sua loja, solicitaremos apenas o nome, localização
          e, opcionalmente, um logotipo da sua loja.
        </Typography>
      </div>

      <Button
        className="w-full"
        variant="contained"
        size="large"
        disableElevation
      >
        Cadastre sua loja
      </Button>
    </div>
  );
}
