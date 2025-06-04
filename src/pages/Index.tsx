
import { Search, MapPin, Users, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  const featuredPlaces = [
    {
      id: 1,
      name: "Château de Versailles",
      location: "Versailles, France",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop",
      rating: 4.8,
      reviews: 1250,
      category: "Histoire",
      description: "Découvrez l'opulence royale française dans ce château emblématique"
    },
    {
      id: 2,
      name: "Lac de montagne",
      location: "Alpes, France",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop",
      rating: 4.9,
      reviews: 890,
      category: "Nature",
      description: "Un lac cristallin entouré de sommets majestueux"
    },
    {
      id: 3,
      name: "Pont mystique",
      location: "Forêt enchantée",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&h=300&fit=crop",
      rating: 4.7,
      reviews: 650,
      category: "Aventure",
      description: "Un pont spectaculaire au-dessus d'une cascade majestueuse"
    },
    {
      id: 4,
      name: "Vallée sauvage",
      location: "Parc National",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25abb?w=500&h=300&fit=crop",
      rating: 4.6,
      reviews: 430,
      category: "Nature",
      description: "Une vallée préservée avec une faune exceptionnelle"
    }
  ];

  const categories = [
    { name: "Nature", icon: "🏔️", count: 245 },
    { name: "Histoire", icon: "🏛️", count: 128 },
    { name: "Aventure", icon: "🎒", count: 89 },
    { name: "Culture", icon: "🎭", count: 156 },
    { name: "Gastronomie", icon: "🍷", count: 92 },
    { name: "Plages", icon: "🏖️", count: 203 }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e77fa5?w=100&h=100&fit=crop&crop=face",
      comment: "Tourisma m'a fait découvrir des lieux incroyables près de chez moi !",
      rating: 5,
      location: "Paris"
    },
    {
      name: "Thomas Martin",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      comment: "La communauté est fantastique, les recommandations sont parfaites.",
      rating: 5,
      location: "Lyon"
    },
    {
      name: "Sophie Laurent",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      comment: "Interface intuitive et lieux authentiques. Je recommande vivement !",
      rating: 5,
      location: "Marseille"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent leading-tight">
            Découvrez des lieux
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">extraordinaires</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Rejoignez notre communauté de voyageurs passionnés et explorez des destinations authentiques recommandées par des locaux
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 md:mb-12 px-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Rechercher une destination, une ville, un type de lieu..."
                className="pl-12 pr-4 py-3 md:py-4 text-base md:text-lg border-2 border-blue-200 focus:border-blue-500 rounded-2xl shadow-lg"
              />
              <Link to="/discover">
                <Button className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 rounded-xl text-sm md:text-base">
                  Rechercher
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">1,200+</div>
              <div className="text-sm md:text-base text-gray-600">Lieux découverts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">5,000+</div>
              <div className="text-sm md:text-base text-gray-600">Membres actifs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1 md:mb-2">98%</div>
              <div className="text-sm md:text-base text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Explorez par catégorie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/discover">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-blue-200 h-full">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{category.name}</h3>
                    <p className="text-xs md:text-sm text-gray-500">{category.count} lieux</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 md:mb-12 gap-4">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Lieux populaires</h2>
            <Link to="/discover">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Voir tout
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredPlaces.map((place) => (
              <Link key={place.id} to={`/place/${place.id}`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer h-full">
                  <div className="relative">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800 hover:bg-white text-xs">
                        {place.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1">
                        <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs md:text-sm font-medium">{place.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {place.name}
                    </h3>
                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      <span className="text-xs md:text-sm">{place.location}</span>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm mb-4 line-clamp-2">
                      {place.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs md:text-sm text-gray-500">{place.reviews} avis</span>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-xs md:text-sm">
                        Découvrir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
            Ce que dit notre communauté
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm md:text-base">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800">
            Prêt à partager vos découvertes ?
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Rejoignez des milliers d'explorateurs et partagez vos lieux favoris avec la communauté
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link to="/community">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Rejoindre la communauté
              </Button>
            </Link>
            <Link to="/discover">
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Découvrir les tendances
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Tourisma</span>
              </Link>
              <p className="text-gray-400 text-sm md:text-base">
                Votre guide communautaire pour découvrir des lieux extraordinaires
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base md:text-lg">Découvrir</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><Link to="/discover" className="hover:text-white transition-colors">Lieux populaires</Link></li>
                <li><Link to="/discover" className="hover:text-white transition-colors">Nouvelles destinations</Link></li>
                <li><Link to="/discover" className="hover:text-white transition-colors">Carte interactive</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base md:text-lg">Communauté</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><Link to="/share" className="hover:text-white transition-colors">Partager un lieu</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Événements</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-base md:text-lg">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><Link to="/community" className="hover:text-white transition-colors">Aide</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/profile" className="hover:text-white transition-colors">À propos</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>&copy; 2024 Tourisma. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
