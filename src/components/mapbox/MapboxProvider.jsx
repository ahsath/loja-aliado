import { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapboxMapContext } from './context';

export default function MapboxProvider({ accessToken, children }) {
  mapboxgl.accessToken = accessToken;

  const [mapbox] = useState({
    map(container) {
      return new mapboxgl.Map({
        container,
        style: 'mapbox://styles/mapbox/streets-v11',
      });
    },
    marker(element) {
      return new mapboxgl.Marker({ element });
    },
    geolocateControl() {
      return new mapboxgl.GeolocateControl({
        trackUserLocation: true,
        showUserHeading: true,
        positionOptions: { enableHighAccuracy: true },
      });
    },
  });

  return (
    <MapboxMapContext.Provider value={{ ...mapbox }}>
      {children}
    </MapboxMapContext.Provider>
  );
}
