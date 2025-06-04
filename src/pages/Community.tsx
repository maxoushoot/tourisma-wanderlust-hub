
import React, { useState } from 'react';
import { Users, MessageCircle, Heart, Share2, Calendar, MapPin, Star, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const Community = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const posts = [
    {
      id: 1,
      author: {
        name: "Marie Dubois",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e77fa5?w=100&h=100&fit=crop&crop=face",
        level: "Explorateur Expert",
        places: 42
      },
      content: "Quelle découverte incroyable aujourd'hui ! Ce petit village perché dans les Alpes est un véritable joyau caché. Les couleurs d'automne étaient absolument magiques 🍂",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      location: "Village de Savoie",
      timestamp: "Il y a 2 heures",
      likes: 24,
      comments: 8,
      isLiked: false
    },
    {
      id: 2,
      author: {
        name: "Thomas Martin",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        level: "Guide Local",
        places: 28
      },
      content: "Conseil du jour : pour visiter ce château, évitez absolument les weekends ! J'y suis allé un mardi matin, j'étais presque seul. L'expérience était incomparable.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop",
      location: "Château de Loire",
      timestamp: "Il y a 4 heures",
      likes: 35,
      comments: 12,
      isLiked: true
    },
    {
      id: 3,
      author: {
        name: "Sophie Laurent",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        level: "Aventurière",
        places: 67
      },
      content: "Premier essai de via ferrata dans les Dolomites ! Sensations garanties mais pas pour les âmes sensibles 😅 La vue au sommet vaut tous les efforts.",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec843a?w=600&h=400&fit=crop",
      location: "Dolomites, Italie",
      timestamp: "Il y a 6 heures",
      likes: 18,
      comments: 6,
      isLiked: false
    }
  ];

  const events = [
    {
      id: 1,
      title: "Randonnée découverte - Forêt de Fontainebleau",
      date: "Samedi 15 Juin",
      time: "9h00 - 16h00",
      organizer: "Marie Dubois",
      participants: 12,
      maxParticipants: 20,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
      description: "Explorons ensemble les sentiers secrets de la forêt de Fontainebleau"
    },
    {
      id: 2,
      title: "Visite guidée - Quartier historique de Lyon",
      date: "Dimanche 23 Juin",
      time: "14h00 - 17h00",
      organizer: "Pierre Durand",
      participants: 8,
      maxParticipants: 15,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=200&fit=crop",
      description: "Découverte des traboules et de l'histoire secrète du Vieux Lyon"
    },
    {
      id: 3,
      title: "Week-end gastronomique en Bourgogne",
      date: "29-30 Juin",
      time: "Tout le weekend",
      organizer: "Claire Moreau",
      participants: 6,
      maxParticipants: 10,
      image: "https://images.unsplash.com/photo-1558618047-fd0c4e6f9c1e?w=400&h=200&fit=crop",
      description: "Dégustation de vins et découverte des villages viticoles"
    }
  ];

  const topMembers = [
    {
      id: 1,
      name: "Marie Dubois",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e77fa5?w=100&h=100&fit=crop&crop=face",
      level: "Explorateur Expert",
      places: 42,
      followers: 156,
      badge: "🏆"
    },
    {
      id: 2,
      name: "Thomas Martin",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      level: "Guide Local",
      places: 28,
      followers: 98,
      badge: "🌟"
    },
    {
      id: 3,
      name: "Sophie Laurent",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      level: "Aventurière",
      places: 67,
      followers: 203,
      badge: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Communauté Tourisma
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connectez-vous avec d'autres passionnés de voyage, partagez vos découvertes et participez à des événements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
                <TabsTrigger value="posts" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Publications
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Événements
                </TabsTrigger>
                <TabsTrigger value="members" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Membres
                </TabsTrigger>
              </TabsList>

              {/* Posts Tab */}
              <TabsContent value="posts" className="space-y-6">
                {/* Create Post */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                        alt="Vous"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <Input
                          placeholder="Partagez votre dernière découverte..."
                          className="mb-3"
                        />
                        <div className="flex gap-2">
                          <Link to="/share">
                            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                              <Plus className="w-4 h-4 mr-2" />
                              Partager un lieu
                            </Button>
                          </Link>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Publier
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Posts List */}
                {posts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{post.author.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              {post.author.level}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 gap-4">
                            <span>{post.timestamp}</span>
                            <span className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {post.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{post.content}</p>

                      {post.image && (
                        <div className="mb-4">
                          <img
                            src={post.image}
                            alt=""
                            className="w-full h-64 md:h-80 object-cover rounded-lg"
                          />
                        </div>
                      )}

                      <div className="flex items-center gap-6 text-gray-500">
                        <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                          <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
                          <Share2 className="w-5 h-5" />
                          <span>Partager</span>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events" className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h2 className="text-xl font-bold">Événements à venir</h2>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Créer un événement
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {events.map((event) => (
                    <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-32">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-white/90 text-gray-800">
                            {event.participants}/{event.maxParticipants}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold mb-2">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                            <span>{event.date} • {event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2 text-green-600" />
                            <span>Organisé par {event.organizer}</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4" variant="outline">
                          Participer
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Members Tab */}
              <TabsContent value="members" className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Rechercher un membre..." className="pl-10" />
                  </div>
                  <Button variant="outline">Filtres</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topMembers.map((member) => (
                    <Card key={member.id} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="relative mb-4">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-20 h-20 rounded-full object-cover mx-auto"
                          />
                          <span className="absolute -top-2 -right-2 text-2xl">{member.badge}</span>
                        </div>
                        <h3 className="font-bold mb-1">{member.name}</h3>
                        <Badge variant="outline" className="mb-3">
                          {member.level}
                        </Badge>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-blue-600">{member.places}</p>
                            <p className="text-gray-500">Lieux partagés</p>
                          </div>
                          <div>
                            <p className="font-semibold text-green-600">{member.followers}</p>
                            <p className="text-gray-500">Abonnés</p>
                          </div>
                        </div>
                        <Button className="w-full mt-4" variant="outline">
                          Suivre
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statistiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Membres actifs</span>
                  <span className="font-bold text-blue-600">5,248</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Lieux partagés</span>
                  <span className="font-bold text-green-600">1,420</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Événements ce mois</span>
                  <span className="font-bold text-purple-600">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Nouveaux membres</span>
                  <span className="font-bold text-orange-600">+127</span>
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top contributeurs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topMembers.slice(0, 3).map((member, index) => (
                  <div key={member.id} className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="absolute -top-1 -right-1 text-sm">{member.badge}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.places} lieux</p>
                    </div>
                    <div className="text-lg font-bold text-blue-600">#{index + 1}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actions rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/share" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Partager un lieu
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Créer un événement
                </Button>
                <Link to="/discover" className="block">
                  <Button variant="outline" className="w-full">
                    <Search className="w-4 h-4 mr-2" />
                    Explorer
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
