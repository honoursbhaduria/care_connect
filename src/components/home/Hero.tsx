import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Users, HeartPulse } from 'lucide-react';

const Hero = () => {
  const title = (
    <>
      Care that <span className="text-careconnect-purple">connects</span> our community
    </>
  );

  const description = `Making healthcare, assistance, and social support easy to access 
  for everyone in our local community.`;

  return (
    <section className="pt-10 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-careconnect-light-purple/50 to-white relative overflow-hidden">
      
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-careconnect-soft-blue/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-careconnect-light-purple/20 rounded-full blur-3xl"></div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Section */}
          <div className="space-y-6 max-w-xl">
            <span className="inline-block bg-careconnect-purple/10 px-4 py-2 rounded-full text-careconnect-purple font-medium transition-transform duration-500 hover:scale-105">
              Your Community Health Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 animate-fadeIn">
              {title}
            </h1>
            <p className="text-lg text-gray-700">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="btn-primary flex items-center gap-2 shadow-lg hover:shadow-xl transition duration-300" asChild>
                <Link to="/services" aria-label="Request Help">
                  <HeartPulse size={20} className="mr-1" />
                  Request Help
                </Link>
              </Button>

              <Button className="btn-secondary flex items-center gap-2 shadow-md hover:shadow-lg transition duration-300" asChild>
                <Link to="/volunteer" aria-label="Join as Volunteer">
                  <Users size={20} className="mr-1" />
                  Join as Volunteer
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative ml-auto">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare workers and patients"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Background shapes */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-careconnect-purple/20 rounded-2xl -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-careconnect-soft-blue/50 rounded-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
