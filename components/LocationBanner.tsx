
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationBanner: React.FC = () => {
  return (
    <div className="bg-[#f5a623] py-4 text-white overflow-hidden">
      <div className="flex items-center justify-center gap-4 animate-pulse">
        <MapPin className="w-5 h-5" />
        <span className="text-lg font-bold tracking-wider">Localização Kilamba</span>
        <MapPin className="w-5 h-5" />
      </div>
    </div>
  );
};

export default LocationBanner;
