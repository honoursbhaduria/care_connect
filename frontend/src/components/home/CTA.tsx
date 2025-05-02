
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="section bg-careconnect-purple text-white">
      <div className="container-custom relative">
        {/* Decorative elements */}
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to connect with care in your community?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Join thousands of community members who are already giving and receiving care through Care Connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-careconnect-purple hover:bg-white/90 font-semibold py-6 px-8 text-lg" asChild>
              <Link to="/services">Request Help</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold py-6 px-8 text-lg" asChild>
              <Link to="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
