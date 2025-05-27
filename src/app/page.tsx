'use client'; // 이게 없으면 useEffect 쓰는 컴포넌트를 import할 수 없음

import { AdBanner } from '@/components/AdBanner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Link from 'next/link';

export default function StartPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <AdBanner position="top" />
        
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            미래의 배우자 얼굴을 만나보세요
          </h1>
          <p className="text-lg mb-4 text-gray-600">
            간단한 성격 테스트를 통해 당신의 이상적인 배우자의 얼굴을 만나보세요.
            당신의 선택이 미래의 배우자를 결정합니다!
          </p>
          <div className="mb-8 p-4 bg-white/70 rounded-xl border border-pink-200">
            <p className="text-center text-pink-700 font-semibold">
              ✨ 남성 12타입 × 3명 + 여성 12타입 × 3명 = 총 72명의 이상형이 준비되어 있어요! ✨
            </p>
          </div>
          
          <Link 
            href="/select-gender"
            className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            테스트 시작하기
          </Link>
        </div>

        <AdBanner position="bottom" />
      </div>
      <SpeedInsights />
    </main>
  );
}