'use client';

import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  position?: 'top' | 'bottom';
}

export const AdBanner: React.FC<AdBannerProps> = ({ position = 'top' }) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://ads-partners.coupang.com/g.js';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.innerHTML = `
      new PartnersCoupang.G({
        id: 869432,
        template: "carousel",
        trackingCode: "AF7625393",
        width: "680",
        height: "140",
        tsource: ""
      });
    `;

    if (adRef.current) {
      adRef.current.innerHTML = ''; // 혹시나 중복 방지
      adRef.current.appendChild(script1);
      adRef.current.appendChild(script2);
    }
  }, []);

  return (
    <div className={`w-full p-4 ${position === 'top' ? 'mb-8' : 'mt-8'}`}>
      <div className="w-full h-auto bg-gray-100 rounded-lg flex flex-col items-center justify-center space-y-2">
        <div ref={adRef} className="w-full flex justify-center items-center" />
        <p className="text-xs text-gray-500">
          쿠팡 파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다.
        </p>
      </div>
    </div>
  );
};