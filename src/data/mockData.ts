
import { Place, User, PlaceCategory, Review } from '@/types';

export const mockCategories: PlaceCategory[] = [
  { id: 'nature', name: 'Nature', icon: '🏔️', count: 245, color: 'bg-green-100 text-green-800' },
  { id: 'histoire', name: 'Histoire', icon: '🏛️', count: 128, color: 'bg-blue-100 text-blue-800' },
  { id: 'aventure', name: 'Aventure', icon: '🎒', count: 89, color: 'bg-orange-100 text-orange-800' },
  { id: 'culture', name: 'Culture', icon: '🎭', count: 156, color: 'bg-purple-100 text-purple-800' },
  { id: 'gastronomie', name: 'Gastronomie', icon: '🍷', count: 92, color: 'bg-red-100 text-red-800' },
  { id: 'plages', name: 'Plages', icon: '🏖️', count: 203, color: 'bg-cyan-100 text-cyan-800' }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Marie Dubois',
    email: 'marie@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e77fa5?w=100&h=100&fit=crop&crop=face',
    bio: 'Passionnée de voyages et de découvertes authentiques',
    location: 'Lyon, France',
    joinedAt: new Date('2023-03-15'),
    placesShared: 25,
    followersCount: 1250,
    followingCount: 480
  },
  {
    id: '2',
    name: 'Thomas Martin',
    email: 'thomas@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    bio: 'Guide local et photographe amateur',
    location: 'Marseille, France',
    joinedAt: new Date('2023-01-20'),
    placesShared: 18,
    followersCount: 890,
    followingCount: 320
  },
  {
    id: '3',
    name: 'Sophie Laurent',
    email: 'sophie@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    bio: 'Aventurière et amoureuse de la nature',
    location: 'Bordeaux, France',
    joinedAt: new Date('2023-02-10'),
    placesShared: 22,
    followersCount: 756,
    followingCount: 425
  }
];

export const mockPlaces: Place[] = [
  {
    id: '1',
    name: 'Château de Chambord',
    description: 'Le château de Chambord est un château français situé dans la commune de Chambord, dans le Loir-et-Cher. Il est l\'un des châteaux de la Loire les plus reconnaissables au monde en raison de son architecture Renaissance française très distinctive.',
    location: {
      address: 'Château de Chambord, 41250 Chambord',
      city: 'Chambord',
      country: 'France',
      coordinates: { lat: 47.6161, lng: 1.5170 }
    },
    category: mockCategories[1],
    images: [
      'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop'
    ],
    rating: 4.8,
    reviewsCount: 1250,
    createdBy: mockUsers[0],
    createdAt: new Date('2024-01-15'),
    tags: ['château', 'renaissance', 'architecture', 'patrimoine'],
    difficulty: 'Facile',
    duration: '2-3 heures',
    bestTimeToVisit: 'Avril à Octobre',
    price: '€€',
    accessibility: true
  },
  {
    id: '2',
    name: 'Gorges du Verdon',
    description: 'Canyon spectaculaire aux eaux turquoise, parfait pour les activités nautiques et la randonnée. Un véritable joyau de la Provence.',
    location: {
      address: 'Gorges du Verdon',
      city: 'Alpes-de-Haute-Provence',
      country: 'France',
      coordinates: { lat: 43.7084, lng: 6.4028 }
    },
    category: mockCategories[0],
    images: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop'
    ],
    rating: 4.9,
    reviewsCount: 890,
    createdBy: mockUsers[1],
    createdAt: new Date('2024-02-20'),
    tags: ['canyon', 'nature', 'kayak', 'randonnée'],
    difficulty: 'Modéré',
    duration: 'Journée complète',
    bestTimeToVisit: 'Mai à Septembre',
    price: 'Gratuit',
    accessibility: false
  },
  {
    id: '3',
    name: 'Mont-Saint-Michel',
    description: 'Abbaye médiévale perchée sur un îlot rocheux, accessible à marée basse. Un site exceptionnel inscrit au patrimoine mondial de l\'UNESCO.',
    location: {
      address: 'Mont-Saint-Michel',
      city: 'Normandie',
      country: 'France',
      coordinates: { lat: 48.6361, lng: -1.5115 }
    },
    category: mockCategories[1],
    images: [
      'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=600&fit=crop'
    ],
    rating: 4.7,
    reviewsCount: 2140,
    createdBy: mockUsers[2],
    createdAt: new Date('2024-03-05'),
    tags: ['abbaye', 'médiéval', 'unesco', 'marées'],
    difficulty: 'Facile',
    duration: '3-4 heures',
    bestTimeToVisit: 'Toute l\'année',
    price: '€€',
    accessibility: false
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    userId: '2',
    user: mockUsers[1],
    placeId: '1',
    rating: 5,
    comment: 'Absolument magnifique ! L\'architecture est à couper le souffle et les jardins sont splendides. Je recommande vivement la visite guidée.',
    images: ['https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=200&h=150&fit=crop'],
    createdAt: new Date('2024-03-15'),
    likes: 24,
    helpful: 18
  },
  {
    id: '2',
    userId: '3',
    user: mockUsers[2],
    placeId: '1',
    rating: 4,
    comment: 'Très beau château avec une histoire fascinante. Un peu de monde en haute saison mais ça vaut vraiment le détour.',
    createdAt: new Date('2024-03-10'),
    likes: 12,
    helpful: 8
  }
];
