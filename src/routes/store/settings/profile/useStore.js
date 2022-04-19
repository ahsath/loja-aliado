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
    console.log('re-rendering?');
    async function main() {
      const stores = db('loja').collection('stores');

      try {
        let store = await stores.findOne({ userId: currentUser.id });

        if (!store) {
          const res = await fetch('http://ip-api.com/json?fields=lat,lon');
          const coords = await res.json();
          // In case res.ok is not okay set lnt=0|lat=0
          // we cannot break the app if ip-api.com is not available
          store = { coords: [coords?.lon || 0, coords?.lat || 0] };
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
