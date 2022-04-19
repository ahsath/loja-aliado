import useSWR from 'swr';
import { fetcher } from '../utils';

export default function useFetch(path) {
  const { data, error } = useSWR(path, fetcher, { revalidateOnFocus: false });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}
