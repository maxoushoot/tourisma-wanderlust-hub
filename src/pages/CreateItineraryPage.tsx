import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Itinerary, PointOfInterest, PlaceCategory } from '@/types';
import { mockUsers, mockCategories, mockItineraries } from '@/data/mockData';
import { Plus, Trash2, MapPin, Camera, Save } from 'lucide-react';

const CreateItineraryPage: React.FC = () => {
  const [itineraryName, setItineraryName] = useState('');
  const [itineraryDescription, setItineraryDescription] = useState('');
  const [itineraryCity, setItineraryCity] = useState('');
  const [itineraryCategory, setItineraryCategory] = useState('');
  const [pointsOfInterest, setPointsOfInterest] = useState<PointOfInterest[]>([]);

  const handleItineraryInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'itineraryName') setItineraryName(value);
    else if (name === 'itineraryDescription') setItineraryDescription(value);
    else if (name === 'itineraryCity') setItineraryCity(value);
  };

  const handleCategoryChange = (value: string) => {
    setItineraryCategory(value);
  };

  const handleAddPointOfInterest = () => {
    setPointsOfInterest([
      ...pointsOfInterest,
      {
        id: Date.now().toString(),
        name: '',
        description: '',
        location: { address: '', city: '', country: '', coordinates: { lat: 0, lng: 0 } },
        images: [],
        order: pointsOfInterest.length,
      },
    ]);
  };

  const handlePointOfInterestChange = (index: number, field: keyof PointOfInterest, value: any) => {
    const newPointsOfInterest = [...pointsOfInterest];
    if (field === 'location') {
      newPointsOfInterest[index].location = { ...newPointsOfInterest[index].location, address: value };
    } else {
      (newPointsOfInterest[index] as any)[field] = value;
    }
    setPointsOfInterest(newPointsOfInterest);
  };

  const handlePointOfInterestImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Simulate image upload by using a mock Unsplash URL
      const mockImageUrl = `https://source.unsplash.com/random/400x300?sig=${Date.now()}`;
      const newPointsOfInterest = [...pointsOfInterest];
      newPointsOfInterest[index].images = [mockImageUrl];
      setPointsOfInterest(newPointsOfInterest);
    }
  };

  const handleRemovePointOfInterest = (index: number) => {
    setPointsOfInterest(pointsOfInterest.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!itineraryName || !itineraryCity || pointsOfInterest.length === 0) {
      alert('Please fill in all required fields: Itinerary Name, City, and add at least one Point of Interest.');
      return;
    }

    const newItinerary: Itinerary = {
      id: `itin-${Date.now().toString()}`,
      name: itineraryName,
      description: itineraryDescription,
      city: itineraryCity,
      createdBy: mockUsers[0], // Default to the first mock user
      createdAt: new Date(),
      pointsOfInterest: pointsOfInterest.map((poi, index) => ({
        ...poi,
        order: index,
        // Ensure location object is complete, even if only address was filled
        location: {
          address: poi.location.address,
          city: poi.location.city || itineraryCity, // Default POI city to itinerary city if not specified
          country: poi.location.country || 'France', // Default POI country
          coordinates: poi.location.coordinates || { lat: 0, lng: 0 }, // Default coordinates
        },
      })),
      category: mockCategories.find(cat => cat.id === itineraryCategory),
      tags: itineraryCategory ? [mockCategories.find(cat => cat.id === itineraryCategory)?.name || ''] : [],
      duration: `${pointsOfInterest.length * 3} hours approx.` // Example duration
    };

    mockItineraries.push(newItinerary);
    console.log('Created Itinerary:', newItinerary);
    alert('Itinerary created successfully!');

    // Reset form (optional)
    setItineraryName('');
    setItineraryDescription('');
    setItineraryCity('');
    setItineraryCategory('');
    setPointsOfInterest([]);
    // Potentially navigate to another page
    // history.push(`/itineraries/${newItinerary.id}`);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Create New Itinerary</CardTitle>
            <CardDescription>Plan your next adventure by detailing your itinerary and points of interest.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="itineraryName" className="text-sm font-medium">Itinerary Name *</Label>
              <Input
                id="itineraryName"
                name="itineraryName"
                value={itineraryName}
                onChange={handleItineraryInputChange}
                placeholder="e.g., Parisian Dream Weekend"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="itineraryDescription" className="text-sm font-medium">Itinerary Description</Label>
              <Textarea
                id="itineraryDescription"
                name="itineraryDescription"
                value={itineraryDescription}
                onChange={handleItineraryInputChange}
                placeholder="Describe the overall theme or purpose of your itinerary."
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="itineraryCity" className="text-sm font-medium">Itinerary City *</Label>
              <Input
                id="itineraryCity"
                name="itineraryCity"
                value={itineraryCity}
                onChange={handleItineraryInputChange}
                placeholder="e.g., Paris"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="itineraryCategory" className="text-sm font-medium">Category</Label>
              <Select onValueChange={handleCategoryChange} value={itineraryCategory}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {mockCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Points of Interest</CardTitle>
            <CardDescription>Add at least one point of interest to your itinerary.</CardDescription>
          </CardHeader>
          <CardContent>
            {pointsOfInterest.map((poi, index) => (
              <Card key={poi.id} className="mb-4 p-4 border rounded-lg">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg">Point of Interest #{index + 1}</CardTitle>
                </CardHeader>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor={`poiName-${index}`} className="text-xs font-medium">Name *</Label>
                    <Input
                      id={`poiName-${index}`}
                      value={poi.name}
                      onChange={(e) => handlePointOfInterestChange(index, 'name', e.target.value)}
                      placeholder="e.g., Eiffel Tower"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`poiDescription-${index}`} className="text-xs font-medium">Description</Label>
                    <Textarea
                      id={`poiDescription-${index}`}
                      value={poi.description}
                      onChange={(e) => handlePointOfInterestChange(index, 'description', e.target.value)}
                      placeholder="Brief description of the POI"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`poiLocation-${index}`} className="text-xs font-medium">Location (Address) *</Label>
                    <Input
                      id={`poiLocation-${index}`}
                      value={poi.location.address}
                      onChange={(e) => handlePointOfInterestChange(index, 'location', e.target.value)}
                      placeholder="e.g., Champ de Mars, Paris"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`poiImage-${index}`} className="text-xs font-medium">Image</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <Input
                        id={`poiImage-${index}`}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePointOfInterestImageUpload(index, e)}
                        className="flex-grow"
                      />
                      {poi.images && poi.images[0] && (
                        <img src={poi.images[0]} alt="POI preview" className="w-16 h-16 object-cover rounded" />
                      )}
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => {
                           const newPointsOfInterest = [...pointsOfInterest];
                           newPointsOfInterest[index].images = [];
                           setPointsOfInterest(newPointsOfInterest);
                        }}
                        title="Remove image"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardFooter className="p-0 mt-3 flex justify-end">
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => handleRemovePointOfInterest(index)}
                    className="flex items-center"
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Remove POI
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={handleAddPointOfInterest}
              className="mt-4 w-full flex items-center justify-center"
            >
              <Plus className="mr-2 h-4 w-4" /> Add Point of Interest
            </Button>
            <div className="mt-6 p-4 border-dashed border-2 border-gray-300 rounded-lg text-center">
              <MapPin className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Interactive map will be displayed here.</p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-end">
          <Button type="submit" size="lg" className="flex items-center">
            <Save className="mr-2 h-5 w-5" /> Save Itinerary
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateItineraryPage;
