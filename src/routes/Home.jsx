import { useAuth0 } from '@auth0/auth0-react';
import { Button, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRealm from '../hooks/useRealm';

export default function Home() {
  const { user, loginWithRedirect, isLoading, getIdTokenClaims } = useAuth0();
  const { loginWithCustomJwt } = useRealm();
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setBusy(true);
      getIdTokenClaims()
        .then(async (token) => {
          const { db } = await loginWithCustomJwt(token.__raw);
          const stores = db('loja').collection('stores');
          const store = await stores.findOne();
          if (!store) {
            navigate('/store/settings/profile', { replace: true });
          } else {
            navigate('/dashboard', { replace: true });
          }
        })
        .finally(() => setBusy(false));
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-between h-screen p-4">
      {(isLoading || busy) && <div className="absolute">Loading...</div>}
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
