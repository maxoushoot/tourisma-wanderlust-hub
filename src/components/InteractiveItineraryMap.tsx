import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, MarkerF, InfoWindowF, PolylineF, LoadScript } from '@react-google-maps/api';
import { PointOfInterest } from '@/types';

const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY_PLACEHOLDER"; // Replace with your actual API key

interface InteractiveItineraryMapProps {
  pointsOfInterest: PointOfInterest[];
  mapContainerStyle?: React.CSSProperties;
  center?: { lat: number; lng: number };
  zoom?: number;
}

const defaultMapContainerStyle: React.CSSProperties = {
  width: '100%',
  height: '400px',
};

const defaultCenter = { lat: 48.8566, lng: 2.3522 }; // Paris
const defaultZoom = 10;

const InteractiveItineraryMap: React.FC<InteractiveItineraryMapProps> = ({
  pointsOfInterest,
  mapContainerStyle: propMapContainerStyle,
  center: propCenter,
  zoom: propZoom,
}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const [currentCenter, setCurrentCenter] = useState(propCenter || defaultCenter);
  const [currentZoom, setCurrentZoom] = useState(propZoom || defaultZoom);

  const mapContainerStyle = propMapContainerStyle || defaultMapContainerStyle;

  useEffect(() => {
    if (pointsOfInterest.length > 0 && !propCenter) {
      const bounds = new window.google.maps.LatLngBounds();
      pointsOfInterest.forEach(poi => {
        if (poi.location?.coordinates) {
          bounds.extend(new window.google.maps.LatLng(poi.location.coordinates.lat, poi.location.coordinates.lng));
        }
      });
      if (map && bounds.getCenter()) {
        setCurrentCenter(bounds.getCenter().toJSON());
        // map.fitBounds(bounds); // This might cause issues if map is not fully loaded or bounds are too small
        // For simplicity, we'll set a general zoom level or calculate it based on bounds
        if (pointsOfInterest.length === 1 && pointsOfInterest[0].location?.coordinates) {
             setCurrentCenter(pointsOfInterest[0].location.coordinates);
             setCurrentZoom(14);
        } else if (map.getBounds()) {
            // Heuristic for zoom or use fitBounds with padding
            // For now, let's keep it simpler if multiple points
            setCurrentZoom(defaultZoom);
        }

      } else if (pointsOfInterest.length === 1 && pointsOfInterest[0].location?.coordinates) {
        setCurrentCenter(pointsOfInterest[0].location.coordinates);
        setCurrentZoom(14);
      }
    } else if (!propCenter) {
      setCurrentCenter(defaultCenter);
      setCurrentZoom(defaultZoom);
    }
  }, [pointsOfInterest, propCenter, map]);


  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
    if (pointsOfInterest.length > 0 && !propCenter) {
        const bounds = new window.google.maps.LatLngBounds();
        pointsOfInterest.forEach(poi => {
            if (poi.location?.coordinates) {
                bounds.extend(new window.google.maps.LatLng(poi.location.coordinates.lat, poi.location.coordinates.lng));
            }
        });
        if(bounds.getCenter()){
            // mapInstance.fitBounds(bounds); // Adjusts zoom to fit all markers
             setCurrentCenter(bounds.getCenter().toJSON());
             if (pointsOfInterest.length === 1 && pointsOfInterest[0].location?.coordinates) {
                setCurrentZoom(14);
             } else {
                // A simple heuristic for zoom when multiple points are present
                // mapInstance.fitBounds(bounds) is generally better here
                setCurrentZoom(defaultZoom - 2 > 1 ? defaultZoom -2 : 5); // Zoom out a bit for multiple points
             }
        }
    } else if (propCenter) {
        setCurrentCenter(propCenter);
        setCurrentZoom(propZoom || defaultZoom);
    }
  }, [pointsOfInterest, propCenter, propZoom]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMarkerClick = (poiId: string) => {
    setActiveMarker(poiId);
    const poi = pointsOfInterest.find(p => p.id === poiId);
    if (poi?.location?.coordinates) {
      // setCurrentCenter(poi.location.coordinates); // Optionally re-center on marker click
    }
  };

  const handleInfoWindowClose = () => {
    setActiveMarker(null);
  };

  const polylineCoordinates = pointsOfInterest
    .filter(poi => poi.location?.coordinates?.lat && poi.location?.coordinates?.lng)
    .map(poi => ({ lat: poi.location.coordinates.lat, lng: poi.location.coordinates.lng }));

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={['places']}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={currentCenter}
        zoom={currentZoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
        }}
      >
        {pointsOfInterest.map((poi) => (
          poi.location?.coordinates?.lat && poi.location?.coordinates?.lng && (
            <MarkerF
              key={poi.id}
              position={poi.location.coordinates}
              onClick={() => handleMarkerClick(poi.id)}
              title={poi.name}
            />
          )
        ))}

        {activeMarker && pointsOfInterest.find(poi => poi.id === activeMarker)?.location?.coordinates && (
          <InfoWindowF
            position={pointsOfInterest.find(poi => poi.id === activeMarker)!.location.coordinates}
            onCloseClick={handleInfoWindowClose}
            options={{
                pixelOffset: new window.google.maps.Size(0, -30) // Adjust InfoWindow position relative to marker
            }}
          >
            <div>
              <h4>{pointsOfInterest.find(poi => poi.id === activeMarker)!.name}</h4>
              <p>{pointsOfInterest.find(poi => poi.id === activeMarker)!.description}</p>
              {pointsOfInterest.find(poi => poi.id === activeMarker)!.images[0] && (
                <img
                    src={pointsOfInterest.find(poi => poi.id === activeMarker)!.images[0]}
                    alt={pointsOfInterest.find(poi => poi.id === activeMarker)!.name}
                    style={{width: '150px', height: 'auto', marginTop: '10px', borderRadius: '4px'}}
                />
              )}
            </div>
          </InfoWindowF>
        )}

        {polylineCoordinates.length > 1 && (
          <PolylineF
            path={polylineCoordinates}
            options={{
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default InteractiveItineraryMap;
