import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Itinerary, PointOfInterest } from '@/types';
import { mockItineraries } from '@/data/mockData';
import InteractiveItineraryMap from '@/components/InteractiveItineraryMap';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, User, CalendarDays, Clock, ArrowLeft, Image as ImageIcon, ListChecks } from 'lucide-react';
// Assuming Navigation component exists and is importable
// import Navigation from '@/components/layout/Navigation'; // Or appropriate path

const ItineraryDetailPage: React.FC = () => {
  const { itineraryId } = useParams<{ itineraryId: string }>();
  const [itinerary, setItinerary] = useState<Itinerary | null | undefined>(undefined);

  useEffect(() => {
    const foundItinerary = mockItineraries.find(item => item.id === itineraryId);
    setItinerary(foundItinerary || null);
  }, [itineraryId]);

  if (itinerary === undefined) {
    return (
      <div className="container mx-auto p-4 text-center">
        {/* <Navigation /> */}
        <p>Loading itinerary...</p>
      </div>
    );
  }

  if (itinerary === null) {
    return (
      <div className="container mx-auto p-4">
        {/* <Navigation /> */}
        <Link to="/itineraries" className="inline-flex items-center mb-4 text-blue-600 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Itineraries
        </Link>
        <Card>
          <CardHeader>
            <CardTitle>Itinerary Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Sorry, the itinerary you are looking for does not exist or could not be loaded.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* <Navigation /> */}
      <Link to="/itineraries" className="inline-flex items-center mb-4 text-blue-600 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Itineraries
      </Link>

      {/* Itinerary Header Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{itinerary.name}</CardTitle>
          <CardDescription className="text-md text-gray-600 mt-1">{itinerary.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-blue-500" />
              <span>{itinerary.city}</span>
            </div>
            {itinerary.category && (
              <Badge variant="outline" className="flex items-center">
                {itinerary.category.icon && <span className="mr-1">{itinerary.category.icon}</span>}
                {itinerary.category.name}
              </Badge>
            )}
            {itinerary.duration && (
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-green-500" />
                <span>{itinerary.duration}</span>
              </div>
            )}
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-5 w-5 text-purple-500" />
              <span>{new Date(itinerary.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 pt-2">
            <Avatar>
              <AvatarImage src={itinerary.createdBy.avatar} alt={itinerary.createdBy.name} />
              <AvatarFallback>{getInitials(itinerary.createdBy.name)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{itinerary.createdBy.name}</p>
              <p className="text-xs text-gray-500">Itinerary Creator</p>
            </div>
          </div>
          {itinerary.tags && itinerary.tags.length > 0 && (
            <div className="mt-2">
              {itinerary.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="mr-1 mb-1">{tag}</Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Interactive Map Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><MapPin className="mr-2 h-6 w-6 text-red-500" /> Route Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <InteractiveItineraryMap
            pointsOfInterest={itinerary.pointsOfInterest}
            mapContainerStyle={{ height: '500px', width: '100%', borderRadius: '8px' }}
          />
        </CardContent>
      </Card>

      {/* Points of Interest List Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><ListChecks className="mr-2 h-6 w-6 text-indigo-500" /> Points of Interest</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {itinerary.pointsOfInterest.sort((a,b) => a.order - b.order).map((poi, index) => (
            <Card key={poi.id} className="p-4 shadow-sm">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  {poi.images && poi.images.length > 0 ? (
                    <img
                      src={poi.images[0]}
                      alt={poi.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                      <ImageIcon className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-1">
                    <Badge variant="default" className="mr-2 text-sm">{`Stop ${poi.order + 1}`}</Badge>
                    {poi.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{poi.description}</p>
                  {poi.location.address && (
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>{poi.location.address}, {poi.location.city}</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ItineraryDetailPage;
