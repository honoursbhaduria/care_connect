
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse, Truck, Phone, Calendar, Users, MapPin, MessageSquare, Home, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import RequestHelpForm from '@/components/RequestHelpForm';

const serviceCategories = [
  {
    title: "Healthcare Services",
    description: "Access to medical professionals and healthcare facilities.",
    services: [
      {
        title: "Medical Assistance",
        description: "Get connected with local healthcare providers for non-emergency medical needs.",
        icon: HeartPulse,
        link: "/services/medical"
      },
      {
        title: "Appointment Booking",
        description: "Book appointments with doctors, therapists, and other healthcare providers.",
        icon: Calendar,
        link: "/services/appointments"
      },
      {
        title: "Teleconsultations",
        description: "Virtual appointments with healthcare professionals from the comfort of your home.",
        icon: Phone,
        link: "/services/teleconsultations"
      }
    ]
  },
  {
    title: "Daily Assistance",
    description: "Help with everyday tasks and necessities.",
    services: [
      {
        title: "Grocery & Medication Delivery",
        description: "Essential items delivered to your doorstep when you cannot leave home.",
        icon: Truck,
        link: "/services/delivery"
      },
      {
        title: "Home Care",
        description: "Assistance with daily activities and personal care at home.",
        icon: Home,
        link: "/services/homecare"
      },
      {
        title: "Reminder Services",
        description: "Medication and appointment reminders to help you stay on track.",
        icon: Bell,
        link: "/services/reminders"
      }
    ]
  },
  {
    title: "Support Services",
    description: "Emotional and community support when you need it.",
    services: [
      {
        title: "Emotional Support",
        description: "Connect with trained listeners and counselors for emotional well-being.",
        icon: MessageSquare,
        link: "/services/support"
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
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-careconnect-light-purple py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-700 mb-8">
                Care Connect offers a wide range of services to help you access the care and support you need, when you need it.
              </p>
              <Button 
                className="bg-careconnect-purple hover:bg-careconnect-dark-purple px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all" 
                asChild
              >
                <a href="#request-help">Request Help Now</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Request Help Form Section - Moved up for prominence */}
        <section id="request-help" className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-semibold mb-4">Request Help Now</h2>
                <p className="text-lg text-gray-600">
                  Tell us what you need, and we'll connect you with the right service or volunteer.
                </p>
              </div>
              
              <RequestHelpForm />
            </div>
          </div>
        </section>
        
        {/* Services Categories */}
        {serviceCategories.map((category, index) => (
          <section key={index} className={`py-16 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="container-custom">
              <div className="mb-12">
                <h2 className="font-semibold mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <div className="mb-4 bg-careconnect-light-purple p-3 rounded-lg inline-block">
                        <service.icon className="h-6 w-6 text-careconnect-purple" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="mb-5 text-gray-600 flex-grow">{service.description}</p>
                      <div className="mt-auto pt-4">
                        <Button variant="link" className="p-0 text-careconnect-purple" asChild>
                          <Link to={service.link}>Learn more →</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
