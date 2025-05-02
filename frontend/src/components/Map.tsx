
import React from 'react';
import { MapPin } from 'lucide-react';

const Map = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden h-full min-h-[400px] w-full flex items-center justify-center shadow-inner">
      <div className="text-center p-8 max-w-md backdrop-blur-sm bg-white/30 rounded-xl border border-white/50 shadow-xl">
        <div className="flex flex-col items-center mb-4">
          <div className="h-16 w-16 rounded-full bg-careconnect-light-purple flex items-center justify-center mb-2">
            <MapPin size={32} className="text-careconnect-purple animate-pulse" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
        </div>
        <p className="text-gray-600 mb-4">Our interactive map will help you find healthcare providers and volunteers near you.</p>
        <p className="text-sm text-gray-500">Map integration will be available in the next version.</p>
      </div>
    </div>
  );
};

export default Map;
