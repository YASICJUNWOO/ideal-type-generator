'use client';

import { AdBanner } from '@/components/AdBanner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Link from 'next/link';

export default function SelectGenderPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <AdBanner position="top" />
        
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            어떤 성별의 배우자를 찾고 계신가요?
          </h1>
          <p className="text-lg mb-12 text-gray-600">
            당신이 원하는 이상형의 성별을 선택해주세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/survey?gender=male"
              className="w-full sm:w-64 h-32 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="text-4xl mb-2">👨</div>
              <div className="text-xl font-semibold">남자</div>
              <div className="text-sm opacity-90">남성 배우자 찾기</div>
            </Link>

            <Link 
              href="/survey?gender=female"
              className="w-full sm:w-64 h-32 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="text-4xl mb-2">👩</div>
              <div className="text-xl font-semibold">여자</div>
              <div className="text-sm opacity-90">여성 배우자 찾기</div>
            </Link>
          </div>
        </div>

        <AdBanner position="bottom" />
      </div>
      <SpeedInsights />
    </main>
  );
} 