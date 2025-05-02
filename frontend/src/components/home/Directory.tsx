import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '200px',
};

const facilities = [
  {
    name: "Community General Hospital",
    type: "Hospital",
    address: "123 Health Avenue, Caretown",
    phone: "5698456324",
    hours: "24/7",
    distance: "1.2 miles",
    location: { lat: 37.7749, lng: -122.4194 },
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80"
  },
  // Add similar `location: { lat, lng }` for other facilities
];

const Directory = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace this with your actual API key
  });

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="mb-4">Healthcare Directory</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Find nearby hospitals, clinics, pharmacies, and other healthcare facilities in your community.
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-careconnect-purple hover:bg-careconnect-dark-purple" asChild>
            <Link to="/directory">View Full Directory</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{facility.name}</h3>
                    <p className="text-careconnect-purple font-medium">{facility.type}</p>
                  </div>
                  <span className="bg-careconnect-light-purple text-careconnect-purple px-2 py-1 rounded text-sm">
                    {facility.distance}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start">
                    <MapPin size={18} className="mr-2 mt-1 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-600">{facility.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="mr-2 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-600">{facility.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-600">{facility.hours}</span>
                  </div>
                </div>

                {isLoaded && facility.location && (
                  <div className="mt-4 rounded overflow-hidden shadow-sm border">
                    <GoogleMap
                      mapContainerStyle={mapContainerStyle}
                      center={facility.location}
                      zoom={14}
                    >
                      <Marker position={facility.location} />
                    </GoogleMap>
                  </div>
                )}

                <div className="mt-6 flex space-x-2">
                  <Button variant="outline" className="w-full border-careconnect-purple text-careconnect-purple hover:bg-careconnect-light-purple">
                    Call
                  </Button>
                  <Button className="w-full bg-careconnect-purple hover:bg-careconnect-dark-purple">
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directory;
