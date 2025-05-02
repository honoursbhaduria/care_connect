
import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <div className="mb-8 relative">
              <div className="text-9xl font-bold text-careconnect-purple/20">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="h-24 w-24 text-careconnect-purple animate-float" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              We couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-careconnect-purple hover:bg-careconnect-dark-purple" asChild>
                <Link to="/">Return to Home</Link>
              </Button>
              <Button variant="outline" className="border-careconnect-purple text-careconnect-purple hover:bg-careconnect-light-purple" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
