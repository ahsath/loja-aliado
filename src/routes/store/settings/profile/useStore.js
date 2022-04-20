import { useState, useEffect } from 'react';
import useRealm from '../../../../hooks/useRealm';

export default function useStore() {
  const { db, currentUser } = useRealm();
  const [store, setStore] = useState({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    async function main() {
      const stores = db('loja').collection('stores');

      try {
        let store = await stores.findOne({ userId: currentUser.id });

        if (!store) {
          const res = await fetch(
            `https://api.ipgeolocation.io/ipgeo?fields=latitude,longitude&apiKey=${
              import.meta.env.VITE_API_KEY
            }`
          );
          const coords = await res.json();
          store = { coords: [coords?.longitude || 0, coords?.latitude || 0] };
        }

        setStore({ ...store, data: store, loading: false });
      } catch (error) {
        setStore({ data: null, error, loading: false });
      }
    }

    main();
  }, [db, currentUser]);

  return { ...store };
}
