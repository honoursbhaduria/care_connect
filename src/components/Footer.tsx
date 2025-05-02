
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-careconnect-dark-purple text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6" />
              <span className="text-xl font-bold">Care Connect</span>
            </div>
            <p className="text-white/80 max-w-xs">
              Connecting care providers with those who need assistance in our local community.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/directory" className="text-white/80 hover:text-white transition-colors">
                  Healthcare Directory
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-white/80 hover:text-white transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-white/80 hover:text-white transition-colors">
                  Become a Volunteer
                </Link>
              </li>
            </ul>
          </div>
          
          {/* User Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4">User Portal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/care-seekers" className="text-white/80 hover:text-white transition-colors">
                  Care Seekers
                </Link>
              </li>
              <li>
                <Link to="/volunteers" className="text-white/80 hover:text-white transition-colors">
                  Volunteers
                </Link>
              </li>
              <li>
                <Link to="/professionals" className="text-white/80 hover:text-white transition-colors">
                  Medical Professionals
                </Link>
              </li>
              <li>
                <Link to="/family" className="text-white/80 hover:text-white transition-colors">
                  Family Members
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-white/80">help@careconnect.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-white/80">123 Care Street, Healthville, HC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Care Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
