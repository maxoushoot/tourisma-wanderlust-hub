
import React, { useState } from 'react';
import { MapPin, Camera, Settings, Heart, Users, Star, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('places');

  const user = {
    id: '1',
    name: 'Marie Dubois',
    bio: 'Passionnée de voyages et de découvertes. J\'adore partager mes trouvailles avec la communauté Tourisma !',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e77fa5?w=200&h=200&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=400&fit=crop',
    location: 'Lyon, France',
    joinedAt: 'Mars 2023',
    placesShared: 25,
    followers: 1250,
    following: 480,
    totalLikes: 3420,
    badge: 'Exploratrice Expert',
    badgeColor: 'bg-yellow-100 text-yellow-800'
  };

  const userPlaces = [
    {
      id: '1',
      name: 'Château de Chambord',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop',
      category: 'Histoire',
      rating: 4.8,
      likes: 156,
      views: 1240
    },
    {
      id: '2',
      name: 'Gorges du Verdon',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop',
      category: 'Nature',
      rating: 4.9,
      likes: 203,
      views: 1890
    },
    {
      id: '3',
      name: 'Village de Rocamadour',
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=300&h=200&fit=crop',
      category: 'Histoire',
      rating: 4.7,
      likes: 98,
      views: 760
    }
  ];

  const favoriteePlaces = [
    {
      id: '4',
      name: 'Mont-Saint-Michel',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop',
      category: 'Histoire',
      addedBy: 'Thomas Martin'
    },
    {
      id: '5',
      name: 'Calanques de Marseille',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop',
      category: 'Nature',
      addedBy: 'Sophie Laurent'
    }
  ];

  const followers = [
    {
      id: '1',
      name: 'Thomas Martin',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      placesShared: 18,
      isFollowing: false
    },
    {
      id: '2',
      name: 'Sophie Laurent',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      placesShared: 22,
      isFollowing: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navigation transparent />

      {/* Cover Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={user.coverImage} 
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-4 right-4">
          <Button variant="secondary" size="sm" className="flex items-center space-x-2">
            <Camera className="w-4 h-4" />
            <span>Modifier la couverture</span>
          </Button>
        </div>
      </div>

      {/* Profile Header */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                <Badge className={user.badgeColor}>{user.badge}</Badge>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Modifier le profil
                </Button>
              </div>
              <p className="text-gray-600 mb-3">{user.bio}</p>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{user.location} • Membre depuis {user.joinedAt}</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                <Settings className="w-4 h-4 mr-2" />
                Paramètres
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 pt-6 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{user.placesShared}</div>
              <div className="text-gray-600">Lieux partagés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{user.followers.toLocaleString()}</div>
              <div className="text-gray-600">Abonnés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{user.following}</div>
              <div className="text-gray-600">Abonnements</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{user.totalLikes.toLocaleString()}</div>
              <div className="text-gray-600">Likes reçus</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="places">Mes lieux ({user.placesShared})</TabsTrigger>
            <TabsTrigger value="favorites">Favoris</TabsTrigger>
            <TabsTrigger value="followers">Abonnés ({user.followers.toLocaleString()})</TabsTrigger>
          </TabsList>

          <TabsContent value="places" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPlaces.map((place) => (
                <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                      {place.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{place.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{place.likes}</span>
                        </div>
                      </div>
                      <span>{place.views} vues</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteePlaces.map((place) => (
                <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                      {place.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                    <p className="text-sm text-gray-600">Ajouté par {place.addedBy}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="followers" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {followers.map((follower) => (
                <Card key={follower.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={follower.avatar} 
                          alt={follower.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{follower.name}</h3>
                          <p className="text-sm text-gray-600">{follower.placesShared} lieux partagés</p>
                        </div>
                      </div>
                      <Button 
                        variant={follower.isFollowing ? "outline" : "default"}
                        size="sm"
                        className={follower.isFollowing ? "" : "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"}
                      >
                        {follower.isFollowing ? 'Suivi' : 'Suivre'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
