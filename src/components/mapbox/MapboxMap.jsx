import useMapbox from './useMapbox';

export default function MapboxMap({ className, onMove, children }) {
  const { map } = useMapbox();

  map?.on('move', onMove);

  return (
    <div id="map" className={className}>
      {children}
    </div>
  );
}
