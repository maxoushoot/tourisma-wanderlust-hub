import { Review } from '@/types';
import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = '/api';

async function fetchReviews(placeId: string): Promise<Review[]> {
  const res = await fetch(`${API_BASE_URL}/places/${placeId}/reviews`);
  if (!res.ok) throw new Error('Failed to fetch reviews');
  return res.json();
}

export function useReviews(placeId: string) {
  return useQuery({ queryKey: ['reviews', placeId], queryFn: () => fetchReviews(placeId), enabled: !!placeId });
}
