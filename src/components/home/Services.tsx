
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartPulse, Truck, Phone, Calendar, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Medical Assistance",
    description: "Get connected with local healthcare providers for non-emergency medical needs.",
    icon: HeartPulse,
    link: "/services/medical"
  },
  {
    title: "Delivery Services",
    description: "Grocery, medication, and essential item delivery for those unable to leave home.",
    icon: Truck,
    link: "/services/delivery"
  },
  {
    title: "Emotional Support",
    description: "Connect with trained listeners and counselors for emotional well-being.",
    icon: Phone,
    link: "/services/support"
  },
  {
    title: "Appointment Booking",
    description: "Book appointments with doctors, therapists, and other healthcare providers.",
    icon: Calendar,
    link: "/services/appointments"
  },
  {
    title: "Find Volunteers",
    description: "Connect with community members who are ready to provide assistance.",
    icon: Users,
    link: "/services/volunteers"
  },
  {
    title: "Local Resources",
    description: "Find nearby hospitals, clinics, pharmacies, and other healthcare facilities.",
    icon: MapPin,
    link: "/directory"
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-careconnect-purple font-medium text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold mt-2">Our Services</h2>
          <p className="text-lg text-gray-600">
            We provide a range of services to connect those in need with local care providers and volunteers who can help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden group"
            >
              <CardContent className="pt-6 p-6">
                <div className="mb-4 bg-careconnect-light-purple p-3 rounded-lg inline-block group-hover:bg-careconnect-purple group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-careconnect-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="mb-5 text-gray-600">{service.description}</p>
                <Button variant="link" className="p-0 text-careconnect-purple group-hover:text-careconnect-dark-purple transition-colors duration-300" asChild>
                  <Link to={service.link} className="flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary shadow-lg hover:shadow-xl" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
