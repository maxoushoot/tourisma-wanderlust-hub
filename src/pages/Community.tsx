
import React, { useState } from 'react';
import { MapPin, Users, TrendingUp, Award, Eye, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Community = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const topContributors = [
    {
      id: '1',
      name: 'Marie Dubois',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e77fa5?w=100&h=100&fit=crop&crop=face',
      placesShared: 25,
      followers: 1250,
      badge: 'Exploratrice Expert',
      badgeColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: '2',
      name: 'Thomas Martin',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      placesShared: 18,
      followers: 890,
      badge: 'Guide Local',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: '3',
      name: 'Sophie Laurent',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      placesShared: 22,
      followers: 756,
      badge: 'Aventurière',
      badgeColor: 'bg-green-100 text-green-800'
    }
  ];

  const recentActivities = [
    {
      id: '1',
      user: {
        name: 'Antoine Dubois',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      },
      action: 'a partagé un nouveau lieu',
      place: 'Lac de Sainte-Croix',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop',
      time: 'il y a 2 heures',
      likes: 24,
      comments: 8
    },
    {
      id: '2',
      user: {
        name: 'Camille Moreau',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face'
      },
      action: 'a laissé un avis sur',
      place: 'Château de Chambord',
      rating: 5,
      time: 'il y a 4 heures',
      likes: 12,
      comments: 3
    },
    {
      id: '3',
      user: {
        name: 'Lucas Bernard',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
      },
      action: 'a ajouté aux favoris',
      place: 'Gorges du Verdon',
      time: 'il y a 6 heures',
      likes: 8,
      comments: 2
    }
  ];

  const trendingPlaces = [
    {
      id: '1',
      name: 'Mont-Saint-Michel',
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=250&fit=crop',
      category: 'Histoire',
      views: 2540,
      likes: 186,
      trend: '+25%'
    },
    {
      id: '2',
      name: 'Calanques de Marseille',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop',
      category: 'Nature',
      views: 1890,
      likes: 142,
      trend: '+18%'
    },
    {
      id: '3',
      name: 'Château de Fontainebleau',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=250&fit=crop',
      category: 'Histoire',
      views: 1650,
      likes: 98,
      trend: '+12%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Tourisma
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Accueil</a>
              <a href="/discover" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Découvrir</a>
              <a href="/community" className="text-blue-600 font-medium">Communauté</a>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Partager un lieu
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Communauté Tourisma
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que notre communauté d'explorateurs partage et rejoignez la conversation
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-900">5,247</div>
              <div className="text-gray-600">Membres actifs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-900">1,280</div>
              <div className="text-gray-600">Lieux partagés</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Eye className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-900">45K</div>
              <div className="text-gray-600">Vues ce mois</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="w-8 h-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold text-gray-900">12K</div>
              <div className="text-gray-600">Favoris ajoutés</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="trending" className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Tendances</span>
                </TabsTrigger>
                <TabsTrigger value="activity" className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Activité récente</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="trending" className="mt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Lieux en tendance</h2>
                  <div className="grid gap-6">
                    {trendingPlaces.map((place) => (
                      <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex">
                          <img 
                            src={place.image} 
                            alt={place.name}
                            className="w-48 h-32 object-cover"
                          />
                          <div className="flex-1 p-6">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{place.name}</h3>
                                <Badge className="mb-3">{place.category}</Badge>
                                <div className="flex items-center space-x-4 text-gray-600">
                                  <div className="flex items-center space-x-1">
                                    <Eye className="w-4 h-4" />
                                    <span>{place.views.toLocaleString()} vues</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Heart className="w-4 h-4" />
                                    <span>{place.likes} favoris</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-green-600 font-medium flex items-center">
                                  <TrendingUp className="w-4 h-4 mr-1" />
                                  {place.trend}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="activity" className="mt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Activité récente</h2>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <img 
                              src={activity.user.avatar} 
                              alt={activity.user.name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-medium">{activity.user.name}</span>
                                <span className="text-gray-600">{activity.action}</span>
                                <span className="font-medium text-blue-600">{activity.place}</span>
                                {activity.rating && (
                                  <div className="flex items-center">
                                    <span className="text-gray-600 mr-1">•</span>
                                    <div className="flex">
                                      {[...Array(activity.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">★</span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="text-gray-500 text-sm mb-3">{activity.time}</div>
                              {activity.image && (
                                <img 
                                  src={activity.image} 
                                  alt={activity.place}
                                  className="w-full max-w-md h-40 object-cover rounded-lg mb-3"
                                />
                              )}
                              <div className="flex items-center space-x-4 text-gray-600">
                                <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                                  <Heart className="w-4 h-4" />
                                  <span>{activity.likes}</span>
                                </button>
                                <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>{activity.comments}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Top Contributors */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  Top Contributeurs
                </h3>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={contributor.id} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img 
                            src={contributor.avatar} 
                            alt={contributor.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">{contributor.name}</h4>
                        <Badge className={`text-xs ${contributor.badgeColor}`}>
                          {contributor.badge}
                        </Badge>
                        <div className="text-xs text-gray-600 mt-1">
                          {contributor.placesShared} lieux • {contributor.followers} abonnés
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="flex-shrink-0">
                        Suivre
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Join Community CTA */}
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Rejoignez la communauté</h3>
                <p className="text-gray-600 mb-4">
                  Partagez vos découvertes et connectez-vous avec d'autres explorateurs
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 mb-3">
                  Partager un lieu
                </Button>
                <Button variant="outline" className="w-full">
                  Voir tous les membres
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
