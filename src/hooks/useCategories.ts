import { PlaceCategory } from '@/types';
import { useQuery } from '@tanstack/react-query';

const API_BASE_URL = '/api';

async function fetchCategories(): Promise<PlaceCategory[]> {
  const res = await fetch(`${API_BASE_URL}/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export function useCategories() {
  return useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
}
