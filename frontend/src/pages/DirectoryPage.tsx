
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Clock, Search, Filter } from 'lucide-react';

// Sample data for healthcare facilities
const healthcareFacilities = [
  {
    id: 1,
    name: "Community General Hospital",
    type: "Hospital",
    address: "123 Health Avenue, Caretown",
    phone: "(555) 123-4567",
    hours: "24/7",
    distance: "1.2 miles",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    services: ["Emergency", "Surgery", "Pediatrics", "Maternity", "Cardiology"]
  },
  {
    id: 2,
    name: "Lifeline Urgent Care",
    type: "Urgent Care",
    address: "456 Emergency Road, Caretown",
    phone: "(555) 987-6543",
    hours: "8am - 8pm daily",
    distance: "0.8 miles",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    services: ["Walk-In Care", "X-Ray", "Lab Testing", "Minor Injuries"]
  },
  {
    id: 3,
    name: "HealthFirst Pharmacy",
    type: "Pharmacy",
    address: "789 Wellness Street, Caretown",
    phone: "(555) 456-7890",
    hours: "9am - 9pm Mon-Sat, 10am - 6pm Sun",
    distance: "0.5 miles",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    services: ["Prescriptions", "OTC Medications", "Vaccinations", "Health Consults"]
  },
  {
    id: 4,
    name: "Wellness Family Clinic",
    type: "Primary Care",
    address: "321 Family Circle, Caretown",
    phone: "(555) 789-0123",
    hours: "9am - 5pm Mon-Fri",
    distance: "1.5 miles",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    services: ["Family Medicine", "Pediatrics", "Preventive Care", "Chronic Disease Management"]
  },
  {
    id: 5,
    name: "MindWell Therapy Center",
    type: "Mental Health",
    address: "567 Peaceful Lane, Caretown",
    phone: "(555) 234-5678",
    hours: "10am - 6pm Mon-Sat",
    distance: "2.0 miles",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    services: ["Counseling", "Therapy", "Mental Health Assessments", "Support Groups"]
  },
  {
    id: 6,
    name: "Sunshine Rehabilitation Center",
    type: "Rehabilitation",
    address: "890 Recovery Road, Caretown",
    phone: "(555) 345-6789",
    hours: "8am - 6pm Mon-Fri, 9am - 1pm Sat",
    distance: "2.3 miles",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    services: ["Physical Therapy", "Occupational Therapy", "Speech Therapy", "Rehabilitation"]
  },
];

const DirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  
  // Filter facilities based on search and type
  const filteredFacilities = healthcareFacilities.filter(facility => {
    const matchesSearch = facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         facility.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         facility.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = selectedType === "" || facility.type === selectedType;
    
    return matchesSearch && matchesType;
  });
  
  // Get unique facility types for filter
  const facilityTypes = [...new Set(healthcareFacilities.map(facility => facility.type))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-careconnect-light-purple py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-bold mb-6">Healthcare Directory</h1>
              <p className="text-xl text-gray-700 mb-8">
                Find and connect with healthcare facilities and providers in your local area.
              </p>
            </div>
          </div>
        </section>
        
        
        {/* Search and Map Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Search and Filters */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4">Search & Filter</h3>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <Input 
                          placeholder="Search by name, location, or service" 
                          className="pl-10 py-6"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 flex items-center">
                        <Filter size={18} className="mr-2" />
                        Filter by Type
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          variant={selectedType === "" ? "default" : "outline"} 
                          onClick={() => setSelectedType("")}
                          className={selectedType === "" ? "bg-careconnect-purple" : ""}
                        >
                          All
                        </Button>
                        {facilityTypes.map((type, index) => (
                          <Button 
                            key={index} 
                            variant={selectedType === type ? "default" : "outline"}
                            onClick={() => setSelectedType(type)}
                            className={selectedType === type ? "bg-careconnect-purple" : ""}
                          >
                            {type}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Found {filteredFacilities.length} results</h4>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Map */}
              <div className="lg:col-span-2">
                <Map />
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <h2 className="font-semibold mb-8">Healthcare Facilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFacilities.map((facility) => (
                <Card key={facility.id} className="overflow-hidden card-hover">
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
                      <div className="flex items-center bg-careconnect-light-purple text-careconnect-purple px-2 py-1 rounded">
                        <span className="text-sm font-medium mr-1">{facility.rating}</span>
                        <span className="text-yellow-500">★</span>
                      </div>
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
                    
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {facility.services.map((service, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
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
            
            {filteredFacilities.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DirectoryPage;
