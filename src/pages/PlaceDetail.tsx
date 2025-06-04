
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Heart, Share2, Camera, Clock, Users, Phone, Globe, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';

const PlaceDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [newReview, setNewReview] = useState('');
  const [userRating, setUserRating] = useState(0);

  // Données simulées pour la démonstration
  const place = {
    id: parseInt(id || '1'),
    name: "Château de Versailles",
    location: "Versailles, France",
    images: [
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop"
    ],
    rating: 4.8,
    reviews: 1250,
    category: "Histoire",
    description: "Le château de Versailles est un chef-d'œuvre de l'art français du XVIIe siècle. L'ancienne demeure des rois de France est aujourd'hui un musée d'Histoire de France qui présente les collections nationales du XVIIe au XIXe siècle.",
    fullDescription: "Résidence des rois de France de Louis XIV à Louis XVI, Versailles est l'un des plus beaux édifices de l'art français du XVIIe siècle. Symbole de l'art de vivre à la française, le château de Versailles a été inscrit il y a 30 ans sur la liste du patrimoine mondial de l'humanité et constitue l'une des plus belles réalisations de l'art français au XVIIe siècle.",
    openingHours: "9h00 - 18h30 (fermé le lundi)",
    price: "18€ - 25€",
    duration: "3-4 heures",
    bestTime: "Printemps et automne",
    contact: {
      phone: "+33 1 30 83 78 00",
      website: "www.chateauversailles.fr",
      email: "contact@chateauversailles.fr"
    },
    amenities: ["Parking", "Restaurant", "Boutique", "Audioguide", "Accès PMR", "WiFi"],
    tips: [
      "Réservez vos billets en ligne pour éviter les files d'attente",
      "Visitez les jardins tôt le matin pour plus de tranquillité",
      "Portez des chaussures confortables",
      "Prévoyez une journée complète pour tout voir"
    ]
  };

  const reviews = [
    {
      id: 1,
      author: "Marie L.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e77fa5?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "Il y a 2 jours",
      comment: "Absolument magnifique ! Les jardins sont splendides et l'architecture du château est à couper le souffle. Je recommande vivement la visite guidée."
    },
    {
      id: 2,
      author: "Thomas M.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      date: "Il y a 1 semaine",
      comment: "Très belle visite, riche en histoire. Le château est impressionnant mais il y a beaucoup de monde. Mieux vaut venir tôt."
    },
    {
      id: 3,
      author: "Sophie D.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "Il y a 2 semaines",
      comment: "Un incontournable ! La galerie des glaces est époustouflante. Les jardins à la française sont parfaitement entretenus."
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header with Back Button */}
      <div className="bg-white border-b px-4 py-4">
        <div className="container mx-auto">
          <Link to="/discover" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux résultats
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src={place.images[currentImageIndex]}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="bg-white/90 hover:bg-white"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </Button>
                <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
                  <Share2 className="w-4 h-4 text-gray-600" />
                </Button>
              </div>
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {place.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${place.name} ${index + 1}`}
                    className={`w-20 h-20 rounded-lg object-cover cursor-pointer flex-shrink-0 transition-all ${
                      currentImageIndex === index ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Place Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-800">{place.category}</Badge>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{place.name}</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{place.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end mb-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-xl font-bold">{place.rating}</span>
                    </div>
                    <p className="text-sm text-gray-500">{place.reviews} avis</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{place.fullDescription}</p>

                {/* Quick Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                    <div>
                      <p className="text-sm font-medium">Durée</p>
                      <p className="text-sm text-gray-600">{place.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-green-600 mr-2" />
                    <div>
                      <p className="text-sm font-medium">Prix</p>
                      <p className="text-sm text-gray-600">{place.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-purple-600 mr-2" />
                    <div>
                      <p className="text-sm font-medium">Meilleure période</p>
                      <p className="text-sm text-gray-600">{place.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 text-orange-600 mr-2" />
                    <div>
                      <p className="text-sm font-medium">Horaires</p>
                      <p className="text-sm text-gray-600">{place.openingHours}</p>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Services disponibles</h3>
                  <div className="flex flex-wrap gap-2">
                    {place.amenities.map((amenity, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-50">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div>
                  <h3 className="font-semibold mb-3">Conseils de visite</h3>
                  <ul className="space-y-2">
                    {place.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-sm text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Avis des visiteurs ({reviews.length})</h3>
                
                {/* Add Review */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-3">Laisser un avis</h4>
                  <div className="flex items-center mb-3">
                    <span className="text-sm mr-2">Note :</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 cursor-pointer ${
                          star <= userRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                        onClick={() => setUserRating(star)}
                      />
                    ))}
                  </div>
                  <Textarea
                    placeholder="Partagez votre expérience..."
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    className="mb-3"
                  />
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Publier l'avis
                  </Button>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-medium">{review.author}</h5>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-700 text-sm">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Informations pratiques</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium">Téléphone</p>
                      <p className="text-sm text-gray-600">{place.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 text-green-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium">Site web</p>
                      <a 
                        href={`https://${place.contact.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {place.contact.website}
                      </a>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Réserver une visite
                </Button>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Localisation</h3>
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Carte interactive</p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  Voir sur la carte
                </Button>
              </CardContent>
            </Card>

            {/* Related Places */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Lieux similaires</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <Link key={item} to={`/place/${item + 10}`} className="block">
                      <div className="flex space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <img
                          src={`https://images.unsplash.com/photo-${1500000000000 + item}?w=100&h=100&fit=crop`}
                          alt={`Lieu ${item}`}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">Lieu {item}</h4>
                          <p className="text-xs text-gray-600">Location {item}</p>
                          <div className="flex items-center mt-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs ml-1">4.{5 + item}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
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
