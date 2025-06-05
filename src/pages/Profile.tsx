
import React, { useState, useRef } from 'react';
import { Settings, MapPin, Heart, Star, Camera, Edit3, Share2, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Marie Dubois',
    bio: 'Passionnée de voyage et exploratrice dans l\'âme. J\'adore découvrir des lieux authentiques et partager mes coups de cœur avec la communauté.',
    location: 'Paris, France',
    joinDate: 'Membre depuis Mars 2023'
  });

  const stats = {
    placesShared: 42,
    likes: 324,
    followers: 156,
    following: 89,
    reviews: 87,
    events: 12
  };

  const userPlaces = [
    {
      id: 1,
      name: "Château de Versailles",
      location: "Versailles, France",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      rating: 4.8,
      likes: 45,
      category: "Histoire",
      dateAdded: "Il y a 2 semaines"
    },
    {
      id: 2,
      name: "Lac de montagne",
      location: "Alpes, France",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      rating: 4.9,
      likes: 38,
      category: "Nature",
      dateAdded: "Il y a 1 mois"
    },
    {
      id: 3,
      name: "Village perché",
      location: "Provence, France",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop",
      rating: 4.7,
      likes: 52,
      category: "Culture",
      dateAdded: "Il y a 1 mois"
    }
  ];

  const likedPlaces = [
    {
      id: 4,
      name: "Pont mystique",
      location: "Forêt enchantée",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop",
      rating: 4.7,
      author: "Thomas Martin"
    },
    {
      id: 5,
      name: "Plage paradisiaque",
      location: "Côte d'Azur",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      rating: 4.8,
      author: "Sophie Laurent"
    }
  ];

  const achievements = [
    { name: "Premier partage", icon: "🎯", description: "Votre premier lieu partagé", unlocked: true },
    { name: "Explorateur", icon: "🗺️", description: "10 lieux partagés", unlocked: true },
    { name: "Passionné", icon: "❤️", description: "50 likes reçus", unlocked: true },
    { name: "Influenceur", icon: "⭐", description: "100 abonnés", unlocked: true },
    { name: "Expert", icon: "🏆", description: "50 lieux partagés", unlocked: false },
    { name: "Légende", icon: "👑", description: "100 lieux partagés", unlocked: false }
  ];

  const [avatar, setAvatar] = useState(
    'https://images.unsplash.com/photo-1494790108755-2616b9e77fa5?w=150&h=150&fit=crop&crop=face'
  );
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Ici vous sauvegarderiez les données
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatar(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="relative">
                  <img
                    src={avatar}
                    alt="Photo de profil"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileRef}
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                  <Button
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full p-2"
                    variant="outline"
                    onClick={() => fileRef.current?.click()}
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-4">
                      <Input
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                        className="text-2xl font-bold"
                      />
                      <Textarea
                        value={userInfo.bio}
                        onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
                        rows={3}
                      />
                      <Input
                        value={userInfo.location}
                        onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}
                      />
                    </div>
                  ) : (
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <h1 className="text-2xl md:text-3xl font-bold">{userInfo.name}</h1>
                        <div className="flex gap-2">
                          <Badge className="bg-blue-100 text-blue-800">Explorateur Expert</Badge>
                          <Badge className="bg-green-100 text-green-800">Top Contributeur</Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 max-w-2xl">{userInfo.bio}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {userInfo.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {userInfo.joinDate}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <Button onClick={handleSaveProfile} className="bg-green-600 hover:bg-green-700">
                        Sauvegarder
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Annuler
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={() => setIsEditing(true)} variant="outline">
                        <Edit3 className="w-4 h-4 mr-2" />
                        Modifier
                      </Button>
                      <Link to="/settings">
                        <Button variant="outline">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8 pt-6 border-t">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-600">{stats.placesShared}</div>
                  <div className="text-xs md:text-sm text-gray-500">Lieux partagés</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-red-600">{stats.likes}</div>
                  <div className="text-xs md:text-sm text-gray-500">Likes reçus</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-green-600">{stats.followers}</div>
                  <div className="text-xs md:text-sm text-gray-500">Abonnés</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-purple-600">{stats.following}</div>
                  <div className="text-xs md:text-sm text-gray-500">Abonnements</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-yellow-600">{stats.reviews}</div>
                  <div className="text-xs md:text-sm text-gray-500">Avis donnés</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-orange-600">{stats.events}</div>
                  <div className="text-xs md:text-sm text-gray-500">Événements</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Tabs */}
          <Tabs defaultValue="places" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="places">Mes lieux</TabsTrigger>
              <TabsTrigger value="liked">Favoris</TabsTrigger>
              <TabsTrigger value="achievements">Succès</TabsTrigger>
              <TabsTrigger value="activity">Activité</TabsTrigger>
            </TabsList>

            {/* My Places */}
            <TabsContent value="places" className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl font-bold">Mes lieux partagés ({userPlaces.length})</h2>
                <Link to="/share">
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Partager un nouveau lieu
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userPlaces.map((place) => (
                  <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Link to={`/place/${place.id}`}>
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white/90 text-gray-800">
                          {place.category}
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{place.rating}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <Link to={`/place/${place.id}`}>
                        <h3 className="font-bold mb-2 hover:text-blue-600 transition-colors">
                          {place.name}
                        </h3>
                      </Link>
                      <div className="flex items-center text-gray-500 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{place.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1 text-red-500" />
                          <span>{place.likes} likes</span>
                        </div>
                        <span className="text-gray-500">{place.dateAdded}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Liked Places */}
            <TabsContent value="liked" className="space-y-6">
              <h2 className="text-xl font-bold">Mes lieux favoris ({likedPlaces.length})</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {likedPlaces.map((place) => (
                  <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Link to={`/place/${place.id}`}>
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <div className="absolute top-3 right-3">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="bg-white/90 hover:bg-white p-2 rounded-full"
                        >
                          <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <Link to={`/place/${place.id}`}>
                        <h3 className="font-bold mb-2 hover:text-blue-600 transition-colors">
                          {place.name}
                        </h3>
                      </Link>
                      <div className="flex items-center text-gray-500 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{place.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                          <span>{place.rating}</span>
                        </div>
                        <span className="text-gray-500">Par {place.author}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Achievements */}
            <TabsContent value="achievements" className="space-y-6">
              <h2 className="text-xl font-bold">Mes succès</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className={`${achievement.unlocked ? 'bg-gradient-to-br from-blue-50 to-green-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                    <CardContent className="p-6 text-center">
                      <div className={`text-4xl mb-4 ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
                        {achievement.icon}
                      </div>
                      <h3 className={`font-bold mb-2 ${achievement.unlocked ? 'text-gray-800' : 'text-gray-500'}`}>
                        {achievement.name}
                      </h3>
                      <p className={`text-sm ${achievement.unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                        {achievement.description}
                      </p>
                      {achievement.unlocked && (
                        <Badge className="mt-3 bg-green-100 text-green-800">
                          Débloqué
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Activity */}
            <TabsContent value="activity" className="space-y-6">
              <h2 className="text-xl font-bold">Activité récente</h2>
              
              <div className="space-y-4">
                {[
                  { action: "A partagé un nouveau lieu", target: "Château de Versailles", time: "Il y a 2 heures", icon: <MapPin className="w-4 h-4 text-blue-600" /> },
                  { action: "A aimé le lieu", target: "Lac alpin", time: "Il y a 5 heures", icon: <Heart className="w-4 h-4 text-red-600" /> },
                  { action: "S'est abonné(e) à", target: "Sophie Laurent", time: "Il y a 1 jour", icon: <Users className="w-4 h-4 text-green-600" /> },
                  { action: "A laissé un avis sur", target: "Village perché", time: "Il y a 2 jours", icon: <Star className="w-4 h-4 text-yellow-600" /> },
                  { action: "A partagé un nouveau lieu", target: "Plage sauvage", time: "Il y a 4 jours", icon: <MapPin className="w-4 h-4 text-blue-600" /> }
                ].map((activity, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="bg-gray-100 rounded-full p-3">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600">
                          <span className="font-semibold text-gray-800">{userInfo.name}</span> {activity.action}{" "}
                          <span className="font-semibold text-gray-800">{activity.target}</span>
                        </p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
