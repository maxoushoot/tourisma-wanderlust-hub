
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Heart, Share2, Camera, Clock, Euro, Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { usePlace } from '@/hooks/usePlace';
import { useReviews } from '@/hooks/useReviews';

const PlaceDetail = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id = '' } = useParams();
  const { data: place, isLoading } = usePlace(id);
  const { data: reviews = [], isLoading: reviewsLoading } = useReviews(id);

  if (isLoading || !place) {
    return (
      <div className="p-6">
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Retour</span>
            </Button>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? 'text-red-500' : ''}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Image Gallery */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={place.images[0]} 
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg flex items-center space-x-2">
          <Camera className="w-4 h-4" />
          <span>{place.images.length} photos</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header Info */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-blue-100 text-blue-800">{place.category}</Badge>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{place.rating}</span>
                  <span className="text-gray-500">({place.reviewsCount} avis)</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{place.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{place.location.address}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {place.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">#{tag}</Badge>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="reviews">Avis ({place.reviewsCount})</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {place.description}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <Clock className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                        <div className="text-sm text-gray-600">Durée</div>
                        <div className="font-medium">{place.duration}</div>
                      </div>
                      <div className="text-center">
                        <Euro className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        <div className="text-sm text-gray-600">Prix</div>
                        <div className="font-medium">{place.price}</div>
                      </div>
                      <div className="text-center">
                        <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                        <div className="text-sm text-gray-600">Difficulté</div>
                        <div className="font-medium">{place.difficulty}</div>
                      </div>
                      <div className="text-center">
                        <Star className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                        <div className="text-sm text-gray-600">Meilleure période</div>
                        <div className="font-medium text-sm">{place.bestTime}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {reviewsLoading
                    ? Array.from({ length: 3 }).map((_, i) => (
                        <Skeleton key={i} className="h-24" />
                      ))
                    : reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <img 
                            src={review.user.avatar} 
                            alt={review.user.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-medium">{review.user.name}</h4>
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-gray-500 text-sm">{review.date}</span>
                            </div>
                            <p className="text-gray-700 mb-3">{review.comment}</p>
                            {review.images && (
                              <div className="flex space-x-2">
                                {review.images.map((img, index) => (
                                  <img 
                                    key={index}
                                    src={img} 
                                    alt="Avis"
                                    className="w-20 h-16 object-cover rounded"
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="photos" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {place.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${place.name} ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Partagé par</h3>
                <div className="flex items-center space-x-3 mb-6">
                  <img 
                    src={place.createdBy.avatar} 
                    alt={place.createdBy.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">{place.createdBy.name}</h4>
                    <p className="text-sm text-gray-600">
                      {place.createdBy.placesShared} lieux partagés • {place.createdBy.followersCount} abonnés
                    </p>
                  </div>
                </div>
                <Button className="w-full mb-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Suivre
                </Button>
                
                <div className="border-t pt-6">
                  <h4 className="font-medium mb-3">Informations pratiques</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Accès handicapé</span>
                      <span className={place.accessibility ? 'text-green-600' : 'text-red-600'}>
                        {place.accessibility ? 'Oui' : 'Non'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parking</span>
                      <span className="text-green-600">Disponible</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Animaux</span>
                      <span className="text-red-600">Non autorisés</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <Button variant="outline" className="w-full">
                    Voir sur la carte
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
