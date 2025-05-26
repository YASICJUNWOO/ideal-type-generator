import React from 'react';

interface AdBannerProps {
  position?: 'top' | 'bottom';
}

export const AdBanner: React.FC<AdBannerProps> = ({ position = 'top' }) => {
  return (
    <div className={`w-full p-4 ${position === 'top' ? 'mb-8' : 'mt-8'}`}>
      <div className="w-full h-[90px] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Advertisement Space</p>
      </div>
    </div>
  );
}; 