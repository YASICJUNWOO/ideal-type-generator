'use client';

import React from 'react';

interface AdBannerProps {
  position?: 'top' | 'bottom';
}

export const AdBanner: React.FC<AdBannerProps> = ({ position = 'top' }) => {
  return (
    <div className={`w-full p-4 ${position === 'top' ? 'mb-8' : 'mt-8'}`}>
      <div className="w-full h-auto bg-gray-100 rounded-lg flex flex-col items-center justify-center space-y-2">
        <iframe
          src="https://ads-partners.coupang.com/widgets.html?id=869432&template=carousel&trackingCode=AF7625393&subId=&width=680&height=140&tsource="
          width="680"
          height="140"
          frameBorder="0"
          scrolling="no"
          referrerPolicy="unsafe-url"
          className="w-[680px] h-[140px]"
        />
        <p className="text-xs text-gray-500">
          쿠팡 파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다.
        </p>
      </div>
    </div>
  );
};