import { useContext } from 'react';
import { MapboxMapContext } from './MapboxProvider';

export default function useMapbox() {
  return useContext(MapboxMapContext);
}
