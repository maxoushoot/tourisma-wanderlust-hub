import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Itinerary } from '@/types';
import { mockItineraries } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, ListChecks, CalendarDays, Clock, PlusCircle } from 'lucide-react';
// Assuming Navigation component exists and is importable
// import Navigation from '@/components/layout/Navigation'; // Or appropriate path

const ItinerariesListPage: React.FC = () => {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    // For now, directly use mockItineraries.
    // In a real app, this might involve fetching data.
    setItineraries(mockItineraries);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* <Navigation /> */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Explore Itineraries</h1>
        <Button asChild>
          <Link to="/create-itinerary">
            <PlusCircle className="mr-2 h-5 w-5" /> Create New Itinerary
          </Link>
        </Button>
      </div>

      {itineraries.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No itineraries found.</p>
          <p className="mt-2">Why not <Link to="/create-itinerary" className="text-blue-600 hover:underline">create one</Link>?</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itineraries.map((itinerary) => (
            <Card key={itinerary.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{itinerary.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600 truncate">
                  {itinerary.description || `Explore ${itinerary.city}`}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <MapPin className="mr-2 h-4 w-4 text-blue-500 flex-shrink-0" />
                  <span>{itinerary.city}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ListChecks className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>{itinerary.pointsOfInterest.length} stop{itinerary.pointsOfInterest.length !== 1 ? 's' : ''}</span>
                </div>
                {itinerary.duration && (
                  <div className="flex items-center text-sm text-gray-700">
                    <Clock className="mr-2 h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span>{itinerary.duration}</span>
                  </div>
                )}
                {itinerary.category && (
                  <div>
                    <Badge variant="outline" className="text-xs">
                        {itinerary.category.icon && <span className="mr-1">{itinerary.category.icon}</span>}
                        {itinerary.category.name}
                    </Badge>
                  </div>
                )}
                 <div className="flex items-center text-xs text-gray-500 pt-1">
                  <CalendarDays className="mr-1 h-3 w-3" />
                  <span>Created: {new Date(itinerary.createdAt).toLocaleDateString()}</span>
                </div>
                {itinerary.createdBy && (
                    <p className="text-xs text-gray-500">By: {itinerary.createdBy.name}</p>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/itinerary/${itinerary.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItinerariesListPage;
