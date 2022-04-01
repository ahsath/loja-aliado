import { createContext, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapboxMapContext = createContext();

export default function MapboxProvider({ accessToken, children }) {
  mapboxgl.accessToken = accessToken;
  const [map, setMap] = useState();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
    });

    setMap(map);
  }, []);

  return (
    <MapboxMapContext.Provider value={{ map, mapboxgl }}>
      {children}
    </MapboxMapContext.Provider>
  );
}
