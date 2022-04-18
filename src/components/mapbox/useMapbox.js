import { useContext } from 'react';
import { MapboxMapContext } from './context';

export default function useMapbox() {
  return useContext(MapboxMapContext);
}
