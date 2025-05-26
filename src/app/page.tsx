import { AdBanner } from '@/components/AdBanner';
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
          <p className="text-lg mb-8 text-gray-600">
            간단한 성격 테스트를 통해 당신의 이상적인 배우자의 얼굴을 만나보세요.
            당신의 선택이 미래의 배우자를 결정합니다!
          </p>
          
          <Link 
            href="/survey"
            className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            테스트 시작하기
          </Link>
        </div>

        <AdBanner position="bottom" />
      </div>
    </main>
  );
}
