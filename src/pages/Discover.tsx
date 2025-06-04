
import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Place, PlaceCategory } from '@/types';
import Navigation from '@/components/Navigation';

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Données d'exemple
  const categories: PlaceCategory[] = [
    { id: '1', name: 'Nature', icon: '🏔️', count: 245, color: 'bg-green-100 text-green-800' },
    { id: '2', name: 'Histoire', icon: '🏛️', count: 128, color: 'bg-blue-100 text-blue-800' },
    { id: '3', name: 'Aventure', icon: '🎒', count: 89, color: 'bg-orange-100 text-orange-800' },
    { id: '4', name: 'Culture', icon: '🎭', count: 156, color: 'bg-purple-100 text-purple-800' },
    { id: '5', name: 'Gastronomie', icon: '🍷', count: 92, color: 'bg-red-100 text-red-800' },
    { id: '6', name: 'Plages', icon: '🏖️', count: 203, color: 'bg-cyan-100 text-cyan-800' }
  ];

  const places: Place[] = [
    {
      id: '1',
      name: 'Château de Chambord',
      description: 'Un chef-d\'œuvre de la Renaissance française avec son architecture unique',
      location: {
        address: 'Château de Chambord',
        city: 'Chambord',
        country: 'France',
        coordinates: { lat: 47.6161, lng: 1.5170 }
      },
      category: categories[1],
      images: ['https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop'],
      rating: 4.8,
      reviewsCount: 1250,
      createdBy: {
        id: '1',
        name: 'Marie Dubois',
        email: 'marie@example.com',
        joinedAt: new Date(),
        placesShared: 15,
        followersCount: 120,
        followingCount: 80
      },
      createdAt: new Date(),
      tags: ['château', 'renaissance', 'architecture'],
      price: '€€',
      duration: '2-3 heures'
    },
    {
      id: '2',
      name: 'Gorges du Verdon',
      description: 'Canyon spectaculaire aux eaux turquoise, parfait pour les activités nautiques',
      location: {
        address: 'Gorges du Verdon',
        city: 'Alpes-de-Haute-Provence',
        country: 'France',
        coordinates: { lat: 43.7084, lng: 6.4028 }
      },
      category: categories[0],
      images: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop'],
      rating: 4.9,
      reviewsCount: 890,
      createdBy: {
        id: '2',
        name: 'Thomas Martin',
        email: 'thomas@example.com',
        joinedAt: new Date(),
        placesShared: 25,
        followersCount: 200,
        followingCount: 150
      },
      createdAt: new Date(),
      tags: ['canyon', 'nature', 'kayak'],
      difficulty: 'Modéré',
      duration: 'Journée complète'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <Navigation transparent />

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6 text-center">Découvrez des lieux extraordinaires</h1>
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Rechercher une destination, une ville, un type de lieu..."
                className="pl-12 pr-16 py-3 text-lg border-2 border-blue-200 focus:border-blue-500 rounded-2xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-2 top-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 rounded-xl">
                <Filter className="w-4 h-4 mr-2" />
                Filtres
              </Button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Catégories populaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? '' : category.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                  <Badge className={category.color}>{category.count} lieux</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Résultats de recherche</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{places.length} lieux trouvés</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option value="rating">Mieux notés</option>
                <option value="recent">Plus récents</option>
                <option value="popular">Plus populaires</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place) => (
              <Card key={place.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={place.images[0]} 
                    alt={place.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={place.category.color}>
                      {place.category.icon} {place.category.name}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{place.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {place.name}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{place.location.city}, {place.location.country}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {place.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {place.price && <Badge variant="outline">{place.price}</Badge>}
                      {place.duration && <Badge variant="outline">{place.duration}</Badge>}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className="text-sm">{place.reviewsCount}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img 
                        src={`https://images.unsplash.com/photo-1494790108755-2616b9e77fa5?w=100&h=100&fit=crop&crop=face`}
                        alt={place.createdBy.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-gray-600">{place.createdBy.name}</span>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                      Découvrir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
