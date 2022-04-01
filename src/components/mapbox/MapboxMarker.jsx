import { useEffect, useRef, useState } from 'react';
import useMapbox from './useMapbox';

export default function MapboxMarker({ options = { lngLat: [0, 0] } }) {
  const { map, mapboxgl } = useMapbox();
  const [marker, setMarker] = useState();
  const markerRef = useRef(null);

  useEffect(() => {
    const marker = new mapboxgl.Marker({
      element: markerRef.current || null,
    })
      .setLngLat(options.lngLat)
      .addTo(map);

    setMarker(marker);
    return () => marker.remove();
  }, [map]);

  useEffect(() => {
    marker?.setLngLat(options.lngLat);
  }, [options.lngLat]);

  if (options.element) return <div ref={markerRef}>{options.element}</div>;
}
