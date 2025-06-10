
import { Place, User, PlaceCategory, Review, Itinerary, PointOfInterest } from '@/types';

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

export const mockItineraries: Itinerary[] = [
  {
    id: 'itin-1',
    name: 'Weekend Historique à Paris',
    description: 'Découvrez les monuments emblématiques de Paris en un weekend.',
    city: 'Paris',
    createdBy: mockUsers[0], // Marie Dubois
    createdAt: new Date('2024-04-01'),
    pointsOfInterest: [
      {
        id: 'poi-1-1',
        name: 'Tour Eiffel',
        description: 'Symbole iconique de Paris, offrant une vue panoramique imprenable.',
        location: {
          address: 'Champ de Mars, 5 Av. Anatole France',
          city: 'Paris',
          country: 'France',
          coordinates: { lat: 48.8584, lng: 2.2945 }
        },
        images: ['https://images.unsplash.com/photo-1500313830568-b75603751260?w=800&h=600&fit=crop'],
        order: 1
      },
      {
        id: 'poi-1-2',
        name: 'Musée du Louvre',
        description: 'Le plus grand musée d\'art du monde, abritant des chefs-d\'œuvre comme la Joconde.',
        location: {
          address: 'Rue de Rivoli',
          city: 'Paris',
          country: 'France',
          coordinates: { lat: 48.8606, lng: 2.3376 }
        },
        images: ['https://images.unsplash.com/photo-1598600526006-3055083bc582?w=800&h=600&fit=crop'],
        order: 2
      },
      {
        id: 'poi-1-3',
        name: 'Cathédrale Notre-Dame',
        description: 'Chef-d\'œuvre de l\'architecture gothique, en cours de restauration.',
        location: {
          address: '6 Parvis Notre-Dame - Pl. Jean-Paul II',
          city: 'Paris',
          country: 'France',
          coordinates: { lat: 48.8530, lng: 2.3499 }
        },
        images: ['https://images.unsplash.com/photo-1560624052-449f5a75a188?w=800&h=600&fit=crop'],
        order: 3
      }
    ],
    tags: ['histoire', 'culture', 'monuments'],
    duration: '2 jours',
    category: mockCategories[1] // Histoire
  },
  {
    id: 'itin-2',
    name: 'Escapade Nature en Provence',
    description: 'Explorez les paysages pittoresques et les villages charmants de la Provence.',
    city: 'Aix-en-Provence',
    createdBy: mockUsers[1], // Thomas Martin
    createdAt: new Date('2024-04-15'),
    pointsOfInterest: [
      {
        id: 'poi-2-1',
        name: 'Montagne Sainte-Victoire',
        description: 'Massif calcaire emblématique, source d\'inspiration pour Cézanne.',
        location: {
          address: 'Route Cézanne',
          city: 'Aix-en-Provence',
          country: 'France',
          coordinates: { lat: 43.5400, lng: 5.5400 } // Approx coordinates
        },
        images: ['https://images.unsplash.com/photo-1579484352433-596a8a0eb79c?w=800&h=600&fit=crop'],
        order: 1
      },
      {
        id: 'poi-2-2',
        name: 'Champs de Lavande de Valensole',
        description: 'Vastes étendues de lavande en fleurs, un spectacle inoubliable en été.',
        location: {
          address: 'Plateau de Valensole',
          city: 'Valensole',
          country: 'France',
          coordinates: { lat: 43.8381, lng: 5.9836 }
        },
        images: ['https://images.unsplash.com/photo-1597754073890-979d367d8c7c?w=800&h=600&fit=crop'],
        order: 2
      },
      {
        id: 'poi-2-3',
        name: 'Village de Gordes',
        description: 'Village perché classé parmi les plus beaux villages de France.',
        location: {
          address: 'Gordes',
          city: 'Gordes',
          country: 'France',
          coordinates: { lat: 43.9116, lng: 5.2004 }
        },
        images: ['https://images.unsplash.com/photo-1586435450400-141c4895f9ac?w=800&h=600&fit=crop'],
        order: 3
      }
    ],
    tags: ['nature', 'paysage', 'village', 'provence'],
    duration: '3 jours',
    category: mockCategories[0] // Nature
  },
  {
    id: 'itin-3',
    name: 'Aventure Culinaire à Lyon',
    description: 'Partez à la découverte des saveurs lyonnaises, capitale de la gastronomie.',
    city: 'Lyon',
    createdBy: mockUsers[2], // Sophie Laurent
    createdAt: new Date('2024-05-01'),
    pointsOfInterest: [
      {
        id: 'poi-3-1',
        name: 'Les Halles Paul Bocuse',
        description: 'Marché couvert incontournable pour déguster les produits locaux et spécialités lyonnaises.',
        location: {
          address: '102 Cr Lafayette F, 69003 Lyon',
          city: 'Lyon',
          country: 'France',
          coordinates: { lat: 45.7638, lng: 4.8468 }
        },
        images: ['https://images.unsplash.com/photo-1588700938569-81b5d909559d?w=800&h=600&fit=crop'],
        order: 1
      },
      {
        id: 'poi-3-2',
        name: 'Vieux Lyon et ses traboules',
        description: 'Quartier historique avec ses passages secrets (traboules) et ses bouchons lyonnais.',
        location: {
          address: 'Vieux Lyon',
          city: 'Lyon',
          country: 'France',
          coordinates: { lat: 45.7625, lng: 4.8275 }
        },
        images: ['https://images.unsplash.com/photo-1600465827410-760789105589?w=800&h=600&fit=crop'],
        order: 2
      }
    ],
    tags: ['gastronomie', 'lyon', 'cuisine', 'tradition'],
    duration: '2 jours',
    category: mockCategories[4] // Gastronomie
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
