import { useAuth0 } from '@auth0/auth0-react';
import { Button, Box } from '@mui/material';
import { Navigate } from 'react-router-dom';

export default function Home() {
  const { user, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (user) return <Navigate to={'/welcome'} replace />;

  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <div />
      <Box
        className="flex gap-4 items-baseline self-center"
        sx={{ color: 'primary.main' }}
      >
        <div className="font-['Pacifico',_cursive] text-7xl">Loja</div>
        <div className="font-black">Aliado</div>
      </Box>
      <div className="flex gap-4">
        <Button
          className="w-full"
          variant="outlined"
          size="large"
          onClick={() => loginWithRedirect()}
        >
          Entrar
        </Button>
        <Button
          className="w-full"
          variant="contained"
          size="large"
          disableElevation
          onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
        >
          Inscrever-se
        </Button>
      </div>
    </div>
  );
}
