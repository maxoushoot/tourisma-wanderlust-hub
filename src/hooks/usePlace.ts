import { Place } from '@/types';
import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = '/api';

async function fetchPlace(id: string): Promise<Place> {
  const res = await fetch(`${API_BASE_URL}/places/${id}`);
  if (!res.ok) throw new Error('Failed to fetch place');
  return res.json();
}

export function usePlace(id: string) {
  return useQuery({ queryKey: ['place', id], queryFn: () => fetchPlace(id), enabled: !!id });
}
