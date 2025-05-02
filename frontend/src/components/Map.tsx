import React from 'react';

const Map = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden h-full min-h-[400px] w-full flex items-center justify-center shadow-inner">
      <div className="w-full h-[600px] rounded-xl overflow-hidden border border-white/50 shadow-xl">
        <iframe
          title="Nearby Clinics and Hospitals Map"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          className="w-full h-full"
          src="https://www.google.com/maps?q=nearest+clinic+and+hospital+near+28.7247495,77.3587489&z=12&output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
