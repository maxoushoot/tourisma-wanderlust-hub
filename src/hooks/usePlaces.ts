import { Place } from '@/types';
import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = '/api';

async function fetchPlaces(): Promise<Place[]> {
  const res = await fetch(`${API_BASE_URL}/places`);
  if (!res.ok) throw new Error('Failed to fetch places');
  return res.json();
}

export function usePlaces() {
  return useQuery({ queryKey: ['places'], queryFn: fetchPlaces });
}
