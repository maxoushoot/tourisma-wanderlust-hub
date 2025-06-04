
import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const places = [
    {
      id: 1,
      name: "Château de Versailles",
      location: "Versailles, France",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop",
      rating: 4.8,
      reviews: 1250,
      category: "Histoire",
      region: "Île-de-France",
      description: "Découvrez l'opulence royale française dans ce château emblématique",
      liked: false,
      views: 15420
    },
    {
      id: 2,
      name: "Lac de montagne",
      location: "Alpes, France",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop",
      rating: 4.9,
      reviews: 890,
      category: "Nature",
      region: "Rhône-Alpes",
      description: "Un lac cristallin entouré de sommets majestueux",
      liked: true,
      views: 12850
    },
    {
      id: 3,
      name: "Pont mystique",
      location: "Forêt enchantée",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&h=300&fit=crop",
      rating: 4.7,
      reviews: 650,
      category: "Aventure",
      region: "Provence",
      description: "Un pont spectaculaire au-dessus d'une cascade majestueuse",
      liked: false,
      views: 8930
    },
    {
      id: 4,
      name: "Vallée sauvage",
      location: "Parc National",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25abb?w=500&h=300&fit=crop",
      rating: 4.6,
      reviews: 430,
      category: "Nature",
      region: "Occitanie",
      description: "Une vallée préservée avec une faune exceptionnelle",
      liked: true,
      views: 6540
    },
    {
      id: 5,
      name: "Cathédrale gothique",
      location: "Reims, France",
      image: "https://images.unsplash.com/photo-1541890047298-b990b03de3ac?w=500&h=300&fit=crop",
      rating: 4.5,
      reviews: 980,
      category: "Histoire",
      region: "Grand Est",
      description: "Un chef-d'œuvre de l'architecture gothique française",
      liked: false,
      views: 11200
    },
    {
      id: 6,
      name: "Plage paradisiaque",
      location: "Côte d'Azur, France",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      rating: 4.8,
      reviews: 1180,
      category: "Plages",
      region: "PACA",
      description: "Une plage aux eaux turquoise et au sable fin",
      liked: true,
      views: 18750
    }
  ];

  const categories = ['all', 'Nature', 'Histoire', 'Aventure', 'Culture', 'Gastronomie', 'Plages'];
  const regions = ['all', 'Île-de-France', 'Rhône-Alpes', 'Provence', 'Occitanie', 'Grand Est', 'PACA'];

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || place.region === selectedRegion;
    
    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />

      {/* Header */}
      <section className="py-8 md:py-12 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Découvrez des destinations
          </h1>
          <p className="text-base md:text-xl text-gray-600 text-center mb-6 md:mb-8 max-w-3xl mx-auto">
            Explorez notre collection de lieux extraordinaires recommandés par la communauté
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Rechercher un lieu, une ville..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-3 border-2 border-blue-200 focus:border-blue-500 rounded-xl"
                />
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-6 py-3 rounded-xl">
                <Filter className="w-4 h-4 mr-2" />
                Rechercher
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48 border-2 border-blue-200 rounded-xl">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-blue-200 rounded-xl">
                  {categories.map(category => (
                    <SelectItem key={category} value={category} className="hover:bg-blue-50">
                      {category === 'all' ? 'Toutes les catégories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full sm:w-48 border-2 border-blue-200 rounded-xl">
                  <SelectValue placeholder="Région" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-blue-200 rounded-xl">
                  {regions.map(region => (
                    <SelectItem key={region} value={region} className="hover:bg-blue-50">
                      {region === 'all' ? 'Toutes les régions' : region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              {filteredPlaces.length} lieu{filteredPlaces.length > 1 ? 's' : ''} trouvé{filteredPlaces.length > 1 ? 's' : ''}
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Plus populaires
              </Button>
              <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Mieux notés
              </Button>
              <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Plus récents
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredPlaces.map((place) => (
              <Card key={place.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="relative">
                  <Link to={`/place/${place.id}`}>
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                  </Link>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-gray-800 hover:bg-white text-xs">
                      {place.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/90 hover:bg-white p-2 rounded-full"
                    >
                      <Heart className={`w-4 h-4 ${place.liked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                    </Button>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs md:text-sm font-medium">{place.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <Link to={`/place/${place.id}`}>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer">
                      {place.name}
                    </h3>
                  </Link>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    <span className="text-xs md:text-sm">{place.location}</span>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm mb-4 line-clamp-2">
                    {place.description}
                  </p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-4">
                    <span>{place.reviews} avis</span>
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      <span>{place.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link to={`/place/${place.id}`} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-sm">
                      Voir les détails
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPlaces.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun résultat trouvé</h3>
              <p className="text-gray-500 mb-6">Essayez de modifier vos critères de recherche</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedRegion('all');
                }}
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Discover;
