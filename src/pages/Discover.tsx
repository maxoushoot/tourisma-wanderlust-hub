import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Heart, Eye, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const Discover = () => {
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

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<'popular' | 'topRated' | null>(null);
  const [likedPlaces, setLikedPlaces] = useState<number[]>(
    places.filter((p) => p.liked).map((p) => p.id)
  );

  const categories = ['all', 'Nature', 'Histoire', 'Aventure', 'Culture', 'Gastronomie', 'Plages'];
  const regions = ['all', 'Île-de-France', 'Rhône-Alpes', 'Provence', 'Occitanie', 'Grand Est', 'PACA'];

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || place.region === selectedRegion;

    return matchesSearch && matchesCategory && matchesRegion;
  }).sort((a, b) => {
    if (sortOrder === 'popular') {
      return b.views - a.views;
    }
    if (sortOrder === 'topRated') {
      return b.rating - a.rating;
    }
    return 0;
  });

  const FilterContent = () => (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">Catégorie</label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category === 'all' ? 'Toutes les catégories' : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">Région</label>
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Région" />
          </SelectTrigger>
          <SelectContent>
            {regions.map(region => (
              <SelectItem key={region} value={region}>
                {region === 'all' ? 'Toutes les régions' : region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />

      {/* Mobile-first Header */}
      <section className="pt-4 pb-6 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Découvrir
          </h1>
          <p className="text-sm text-gray-600 text-center mb-6">
            Trouvez votre prochaine aventure
          </p>

          {/* Mobile Search Bar */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher un lieu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-12 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 bg-white shadow-sm"
              />
              
              {/* Mobile Filter Button */}
              <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                <SheetTrigger asChild>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[40vh] rounded-t-2xl">
                  <SheetHeader className="pb-4">
                    <SheetTitle>Filtres</SheetTitle>
                  </SheetHeader>
                  <FilterContent />
                  <div className="flex gap-2 mt-6">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSelectedCategory('all');
                        setSelectedRegion('all');
                      }}
                      className="flex-1"
                    >
                      Réinitialiser
                    </Button>
                    <Button 
                      onClick={() => setFiltersOpen(false)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-green-600"
                    >
                      Appliquer
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>

      {/* Results Counter - Mobile optimized */}
      <section className="px-4 pb-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              {filteredPlaces.length} lieu{filteredPlaces.length > 1 ? 's' : ''}
            </h2>
            <div className="hidden md:flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setSortOrder('popular')}
              >
                Populaires
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setSortOrder('topRated')}
              >
                Mieux notés
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-optimized Cards Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPlaces.map((place) => (
              <Card key={place.id} className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative">
                  <Link to={`/place/${place.id}`}>
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-gray-800 text-xs font-medium px-2 py-1">
                      {place.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/90 hover:bg-white p-2 rounded-full w-8 h-8"
                      onClick={() =>
                        setLikedPlaces((prev) =>
                          prev.includes(place.id)
                            ? prev.filter((id) => id !== place.id)
                            : [...prev, place.id]
                        )
                      }
                    >
                      <Heart className={`w-4 h-4 ${likedPlaces.includes(place.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                    </Button>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{place.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Link to={`/place/${place.id}`}>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {place.name}
                    </h3>
                  </Link>
                  <div className="flex items-center text-gray-500 mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="text-sm line-clamp-1">{place.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {place.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{place.reviews} avis</span>
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      <span>{place.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link to={`/place/${place.id}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-sm py-2">
                      Voir les détails
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPlaces.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Aucun résultat</h3>
              <p className="text-gray-500 mb-6 text-sm">Essayez de modifier vos critères</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedRegion('all');
                }}
                variant="outline"
                className="border-blue-200 text-blue-600"
              >
                Réinitialiser
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Discover;
