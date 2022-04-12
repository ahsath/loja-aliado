import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  const { user, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    async function t() {
      const { __raw: idToken } = await getIdTokenClaims();
      const app = new window.Realm.App({ id: 'loja-eucji' });
      const credentials = window.Realm.Credentials.jwt(idToken);
      const user = await app.logIn(credentials);
      const mongo = user.mongoClient('mongodb-atlas');
      const stores = mongo.db('loja').collection('stores');
      const store = await stores.find({});
      console.log(store);
    }
    t();
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen p-4">
      <div className="mt-10">
        <Avatar
          src={user?.picture}
          sx={{ width: 100, height: 100, mx: 'auto' }}
        />
        <h1 className="mt-4 m-0 text-center">Olá, {user?.name}!</h1>
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
        variant="contained"
        size="large"
        to="/register-store"
        component={Link}
        fullWidth
        disableElevation
      >
        Cadastre sua loja
      </Button>
    </div>
  );
}
