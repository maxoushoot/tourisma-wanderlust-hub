
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  location?: string;
  joinedAt: Date;
  placesShared: number;
  followersCount: number;
  followingCount: number;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  category: PlaceCategory;
  images: string[];
  rating: number;
  reviewsCount: number;
  createdBy: User;
  createdAt: Date;
  tags: string[];
  difficulty?: 'Facile' | 'Modéré' | 'Difficile';
  duration?: string;
  bestTimeToVisit?: string;
  price?: 'Gratuit' | '€' | '€€' | '€€€';
  accessibility?: boolean;
}

export interface Review {
  id: string;
  userId: string;
  user: User;
  placeId: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: Date;
  likes: number;
  helpful: number;
}

export interface PlaceCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  color?: string;
}

export interface SearchFilters {
  category?: string;
  location?: string;
  rating?: number;
  price?: string[];
  difficulty?: string[];
  accessibility?: boolean;
  distance?: number;
}

export interface UserActivity {
  id: string;
  userId: string;
  type: 'shared_place' | 'reviewed_place' | 'liked_place' | 'followed_user';
  placeId?: string;
  targetUserId?: string;
  createdAt: Date;
}

export interface Notification {
  id: string;
  message: string;
  link: string;
  read: boolean;
  createdAt: Date;
}

