
import { Search, MapPin, Users, Star, TrendingUp, ArrowRight, Globe, Award, Camera, Heart } from "lucide-react";
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
      description: "Découvrez l'opulence royale française dans ce château emblématique",
      price: "€€€",
      trending: true
    },
    {
      id: 2,
      name: "Lac de montagne",
      location: "Alpes, France",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop",
      rating: 4.9,
      reviews: 890,
      category: "Nature",
      description: "Un lac cristallin entouré de sommets majestueux",
      price: "€",
      trending: false
    },
    {
      id: 3,
      name: "Pont mystique",
      location: "Forêt enchantée",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&h=300&fit=crop",
      rating: 4.7,
      reviews: 650,
      category: "Aventure",
      description: "Un pont spectaculaire au-dessus d'une cascade majestueuse",
      price: "€€",
      trending: true
    },
    {
      id: 4,
      name: "Vallée sauvage",
      location: "Parc National",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25abb?w=500&h=300&fit=crop",
      rating: 4.6,
      reviews: 430,
      category: "Nature",
      description: "Une vallée préservée avec une faune exceptionnelle",
      price: "€€",
      trending: false
    }
  ];

  const categories = [
    { name: "Nature", icon: "🏔️", count: 245, color: "from-green-500 to-emerald-600" },
    { name: "Histoire", icon: "🏛️", count: 128, color: "from-amber-500 to-orange-600" },
    { name: "Aventure", icon: "🎒", count: 89, color: "from-red-500 to-pink-600" },
    { name: "Culture", icon: "🎭", count: 156, color: "from-purple-500 to-indigo-600" },
    { name: "Gastronomie", icon: "🍷", count: 92, color: "from-rose-500 to-pink-600" },
    { name: "Plages", icon: "🏖️", count: 203, color: "from-cyan-500 to-blue-600" }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e77fa5?w=100&h=100&fit=crop&crop=face",
      comment: "Tourisma m'a fait découvrir des lieux incroyables près de chez moi ! Une expérience transformatrice.",
      rating: 5,
      location: "Paris",
      verified: true
    },
    {
      name: "Thomas Martin",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      comment: "La communauté est fantastique, les recommandations sont parfaites. Je recommande à 100% !",
      rating: 5,
      location: "Lyon",
      verified: true
    },
    {
      name: "Sophie Laurent",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      comment: "Interface intuitive et lieux authentiques. Une révolution dans la découverte touristique.",
      rating: 5,
      location: "Marseille",
      verified: true
    }
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Découverte mondiale",
      description: "Explorez des destinations uniques partout dans le monde"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Communauté active",
      description: "Rejoignez une communauté passionnée de voyageurs"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Qualité garantie",
      description: "Tous nos lieux sont vérifiés par notre équipe d'experts"
    },
    {
      icon: <Camera className="w-8 h-8 text-pink-600" />,
      title: "Moments inoubliables",
      description: "Capturez et partagez vos plus beaux souvenirs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation transparent />

      {/* Hero Section Enhanced */}
      <section className="relative py-16 md:py-28 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-green-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-blue-200/50 shadow-lg">
            <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current" />
            <span className="text-sm font-medium text-gray-700">Plus de 10,000 destinations vérifiées</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Découvrez des lieux
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              extraordinaires
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Rejoignez notre communauté de 
            <span className="font-semibold text-blue-600"> voyageurs passionnés </span>
            et explorez des destinations authentiques recommandées par des locaux
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-3xl mx-auto mb-12 md:mb-16 px-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl border border-gray-200/50">
                <div className="flex items-center">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 z-10" />
                  <Input 
                    placeholder="Rechercher une destination, une ville, un type de lieu..."
                    className="pl-14 pr-6 py-4 md:py-6 text-base md:text-lg border-0 focus:ring-0 focus:outline-none bg-transparent rounded-xl text-gray-700 placeholder:text-gray-400"
                  />
                  <Link to="/discover">
                    <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 rounded-xl px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                      <Search className="w-5 h-5 mr-2" />
                      Rechercher
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto px-4">
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">1,200+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Lieux découverts</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">5,000+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Membres actifs</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">98%</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Pourquoi choisir Tourisma ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez ce qui nous rend unique dans l'univers du voyage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
                  <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Categories */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Explorez par catégorie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trouvez votre prochaine aventure selon vos passions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <Link key={index} to="/discover" className="group">
                <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer border-2 hover:border-transparent h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <CardContent className="p-6 md:p-8 text-center relative z-10">
                    <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-base md:text-lg group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{category.count} lieux</p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-blue-600 mx-auto" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Places */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 md:mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Lieux populaires</h2>
              <p className="text-xl text-gray-600">Les destinations les plus appréciées par notre communauté</p>
            </div>
            <Link to="/discover">
              <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 px-8 py-3 rounded-xl font-semibold">
                <TrendingUp className="w-5 h-5 mr-2" />
                Voir tout
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {featuredPlaces.map((place) => (
              <Link key={place.id} to={`/place/${place.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-6 cursor-pointer h-full bg-white/90 backdrop-blur-sm border border-gray-200/50">
                  <div className="relative overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-white/95 text-gray-800 hover:bg-white text-xs font-semibold px-3 py-1">
                        {place.category}
                      </Badge>
                      {place.trending && (
                        <Badge className="bg-red-500 text-white text-xs font-semibold px-3 py-1">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Tendance
                        </Badge>
                      )}
                    </div>
                    
                    {/* Rating */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/95 rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold text-gray-800">{place.rating}</span>
                      </div>
                    </div>

                    {/* Heart Icon */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-2 shadow-lg hover:bg-red-50 cursor-pointer transition-colors">
                        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {place.name}
                    </h3>
                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{place.location}</span>
                      <span className="ml-auto text-sm font-semibold text-green-600">{place.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {place.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{place.reviews} avis</span>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-sm font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        Découvrir
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ce que dit notre communauté
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Découvrez les expériences authentiques de nos membres
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-lg hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 border border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4 object-cover border-4 border-white shadow-lg"
                      />
                      {testimonial.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      {testimonial.verified && (
                        <span className="text-xs text-green-600 font-semibold">Membre vérifié</span>
                      )}
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-base leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-28 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Prêt à partager
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                vos découvertes ?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
              Rejoignez des milliers d'explorateurs passionnés et partagez vos lieux favoris avec une communauté bienveillante
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center px-4">
              <Link to="/community">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-6 text-lg font-bold shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 rounded-2xl w-full sm:w-auto">
                  <Users className="w-6 h-6 mr-3" />
                  Rejoindre la communauté
                </Button>
              </Link>
              <Link to="/discover">
                <Button size="lg" variant="outline" className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 px-10 py-6 text-lg font-bold shadow-lg transition-all duration-300 hover:shadow-xl rounded-2xl w-full sm:w-auto">
                  <TrendingUp className="w-6 h-6 mr-3" />
                  Découvrir les tendances
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 md:py-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Tourisma</span>
              </Link>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Votre guide communautaire pour découvrir des lieux extraordinaires et vivre des expériences inoubliables partout dans le monde.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <span className="text-white font-bold">f</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <span className="text-white font-bold">t</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <span className="text-white font-bold">i</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl text-blue-400">Découvrir</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/discover" className="hover:text-blue-400 transition-colors hover:underline">Lieux populaires</Link></li>
                <li><Link to="/discover" className="hover:text-blue-400 transition-colors hover:underline">Nouvelles destinations</Link></li>
                <li><Link to="/discover" className="hover:text-blue-400 transition-colors hover:underline">Carte interactive</Link></li>
                <li><Link to="/discover" className="hover:text-blue-400 transition-colors hover:underline">Collections</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl text-green-400">Communauté</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/share" className="hover:text-green-400 transition-colors hover:underline">Partager un lieu</Link></li>
                <li><Link to="/community" className="hover:text-green-400 transition-colors hover:underline">Événements</Link></li>
                <li><Link to="/community" className="hover:text-green-400 transition-colors hover:underline">Blog</Link></li>
                <li><Link to="/community" className="hover:text-green-400 transition-colors hover:underline">Forum</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl text-purple-400">Support</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/community" className="hover:text-purple-400 transition-colors hover:underline">Centre d'aide</Link></li>
                <li><Link to="/community" className="hover:text-purple-400 transition-colors hover:underline">Contact</Link></li>
                <li><Link to="/profile" className="hover:text-purple-400 transition-colors hover:underline">À propos</Link></li>
                <li><Link to="/profile" className="hover:text-purple-400 transition-colors hover:underline">Confidentialité</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">&copy; 2024 Tourisma. Tous droits réservés.</p>
              <div className="flex items-center space-x-6 text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in France</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
