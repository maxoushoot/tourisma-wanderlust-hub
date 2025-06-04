
import React, { useState } from 'react';
import { Upload, MapPin, Camera, Star, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const SharePlace = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    category: '',
    description: '',
    fullDescription: '',
    openingHours: '',
    price: '',
    duration: '',
    phone: '',
    website: '',
    email: ''
  });

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [newAmenity, setNewAmenity] = useState('');
  const [tips, setTips] = useState<string[]>(['']);

  const categories = ['Nature', 'Histoire', 'Aventure', 'Culture', 'Gastronomie', 'Plages', 'Architecture', 'Musées'];
  
  const predefinedAmenities = [
    'Parking', 'Restaurant', 'Boutique', 'Audioguide', 'Accès PMR', 'WiFi',
    'Toilettes', 'Aire de pique-nique', 'Visite guidée', 'Location de vélos'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Simulation de l'upload d'images
      const newImages = Array.from(files).map((file, index) => 
        `https://images.unsplash.com/photo-${Date.now() + index}?w=400&h=300&fit=crop`
      );
      setUploadedImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const addAmenity = (amenity: string) => {
    if (!amenities.includes(amenity)) {
      setAmenities(prev => [...prev, amenity]);
    }
  };

  const removeAmenity = (amenity: string) => {
    setAmenities(prev => prev.filter(a => a !== amenity));
  };

  const addCustomAmenity = () => {
    if (newAmenity.trim() && !amenities.includes(newAmenity.trim())) {
      setAmenities(prev => [...prev, newAmenity.trim()]);
      setNewAmenity('');
    }
  };

  const updateTip = (index: number, value: string) => {
    setTips(prev => prev.map((tip, i) => i === index ? value : tip));
  };

  const addTip = () => {
    setTips(prev => [...prev, '']);
  };

  const removeTip = (index: number) => {
    setTips(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous enverriez les données à votre backend
    console.log('Données du formulaire:', { formData, uploadedImages, amenities, tips });
    alert('Lieu partagé avec succès ! Il sera visible après modération.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Partager un lieu
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Aidez la communauté à découvrir de nouveaux endroits extraordinaires en partageant vos coups de cœur
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  Informations générales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom du lieu *</label>
                    <Input
                      placeholder="Ex: Château de Versailles"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Localisation *</label>
                    <Input
                      placeholder="Ex: Versailles, France"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Catégorie *</label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description courte *</label>
                  <Textarea
                    placeholder="Une description courte et accrocheuse du lieu (200 caractères max)"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    maxLength={200}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">{formData.description.length}/200</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description détaillée</label>
                  <Textarea
                    placeholder="Décrivez le lieu en détail, son histoire, ce qui le rend spécial..."
                    value={formData.fullDescription}
                    onChange={(e) => handleInputChange('fullDescription', e.target.value)}
                    rows={5}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Images */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-green-600" />
                  Photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium text-gray-700 mb-2">Ajoutez des photos</p>
                      <p className="text-sm text-gray-500">Glissez-déposez vos images ou cliquez pour parcourir</p>
                      <p className="text-xs text-gray-400 mt-2">JPG, PNG jusqu'à 10MB chacune</p>
                    </label>
                  </div>

                  {uploadedImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          {index === 0 && (
                            <Badge className="absolute bottom-1 left-1 bg-blue-500 text-xs">
                              Photo principale
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Practical Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-600" />
                  Informations pratiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Horaires d'ouverture</label>
                    <Input
                      placeholder="Ex: 9h00 - 18h30"
                      value={formData.openingHours}
                      onChange={(e) => handleInputChange('openingHours', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Prix</label>
                    <Input
                      placeholder="Ex: 15€ - 25€"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Durée de visite</label>
                    <Input
                      placeholder="Ex: 2-3 heures"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <Input
                      placeholder="Ex: +33 1 23 45 67 89"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Site web</label>
                    <Input
                      placeholder="Ex: www.exemple.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="Ex: contact@exemple.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Services et équipements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-3">Services disponibles</label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {predefinedAmenities.map(amenity => (
                      <Badge
                        key={amenity}
                        variant={amenities.includes(amenity) ? "default" : "outline"}
                        className={`cursor-pointer transition-colors ${
                          amenities.includes(amenity) 
                            ? 'bg-blue-600 text-white' 
                            : 'hover:bg-blue-50 hover:border-blue-300'
                        }`}
                        onClick={() => 
                          amenities.includes(amenity) 
                            ? removeAmenity(amenity) 
                            : addAmenity(amenity)
                        }
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Input
                    placeholder="Ajouter un service personnalisé"
                    value={newAmenity}
                    onChange={(e) => setNewAmenity(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomAmenity())}
                  />
                  <Button type="button" onClick={addCustomAmenity} variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {amenities.length > 0 && (
                  <div>
                    <p className="text-sm font-medium mb-2">Services sélectionnés :</p>
                    <div className="flex flex-wrap gap-2">
                      {amenities.map(amenity => (
                        <Badge key={amenity} className="bg-green-100 text-green-800">
                          {amenity}
                          <button
                            type="button"
                            onClick={() => removeAmenity(amenity)}
                            className="ml-2 hover:text-red-600"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Conseils de visite</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Partagez vos conseils pour aider les futurs visiteurs à profiter au maximum de ce lieu
                </p>
                {tips.map((tip, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Conseil ${index + 1}`}
                      value={tip}
                      onChange={(e) => updateTip(index, e.target.value)}
                    />
                    {tips.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeTip(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addTip} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Ajouter un conseil
                </Button>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button type="button" variant="outline" className="w-full sm:w-auto">
                  Annuler
                </Button>
              </Link>
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 w-full sm:w-auto px-8"
              >
                Partager le lieu
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SharePlace;
