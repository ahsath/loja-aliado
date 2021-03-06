import { useState } from 'react';
import * as Realm from 'realm-web';

export default function useRealm() {
  const app = new Realm.App({ id: import.meta.env.VITE_APP_ID });

  const [state, setState] = useState({
    currentUser: app.currentUser,
    db: app.currentUser?.mongoClient(import.meta.env.VITE_SERVICE_NAME).db,
  });

  const loginWithCustomJwt = async (jwt) => {
    const user = await app.logIn(Realm.Credentials.jwt(jwt));
    const db = user.mongoClient(import.meta.env.VITE_SERVICE_NAME).db;
    setState({
      currentUser: user,
      db,
    });

    return { currentUser: user, db };
  };

  return { ...state, loginWithCustomJwt };
}
