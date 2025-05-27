'use client';

import { Type, typeDetails, woman_typeDetails } from '@/data/types';

interface ResultContentProps {
  type: Type;
  typeId: string;
  imageNumber: string;
}

export function ResultContent({ type }: ResultContentProps) {
  // 임시로 모든 타입에서 a01_01.png를 사용
  const imageSrc = `/images/types/${type.id.toLowerCase()}_01.png`;
  
  // 성별에 따라 적절한 세부사항 배열에서 찾기
  const allTypeDetails = [...typeDetails, ...woman_typeDetails];
  const detail = allTypeDetails.find(d => d.id === `${type.id.toLowerCase()}_01`);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        {/* 메인 제목 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            당신의 미래 배우자는
          </h1>
          <h2 className="text-4xl font-bold text-pink-600 mb-4">
            {type.name}
          </h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto rounded-full"></div>
        </div>
        
        {/* 이미지 섹션 */}
        <div className="aspect-square relative mb-8">
          <img
            src={imageSrc}
            alt={type.name}
            className="rounded-xl w-full h-full object-contain bg-white shadow-md"
            onError={e => {
              const target = e.target as HTMLImageElement;
              if (!target.src.endsWith('.jpg')) {
                target.src = '/images/types/a01_01.jpg';
              }
            }}
          />
        </div>

        {/* 외형 특징 섹션 */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <div className="w-2 h-6 bg-pink-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-bold text-gray-800">외형 특징</h3>
          </div>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border-l-4 border-pink-400">
            <p className="text-gray-700 leading-relaxed">{type.description}</p>
          </div>
        </div>

        {/* 첫인상 인용 섹션 */}
        {detail?.quote && (
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className="w-2 h-6 bg-purple-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-gray-800">친구가 말하는 첫인상</h3>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-400">
              <div className="flex items-start">
                <span className="text-3xl text-purple-400 mr-2 leading-none">{`"`}</span>
                <p className="text-purple-700 italic font-medium flex-1">{detail.quote}</p>
                <span className="text-3xl text-purple-400 ml-2 leading-none">{`"`}</span>
              </div>
            </div>
          </div>
        )}

        {/* 성격 요약 섹션 */}
        {detail?.summary && (
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className="w-2 h-6 bg-blue-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-gray-800">이런 사람이에요</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800 leading-relaxed">{detail.summary}</p>
            </div>
          </div>
        )}

        {/* 인물이 할 법한 말 섹션 */}
        {detail?.say && (
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className="w-2 h-6 bg-green-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-gray-800">이 사람이 말한다면</h3>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-400 text-center">
              <p className="text-green-800 font-medium text-lg italic">{`"${detail.say}"`}</p>
            </div>
          </div>
        )}

        {/* 키워드 태그 섹션 */}
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <div className="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
            <h3 className="text-lg font-bold text-gray-800">키워드</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {type.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 rounded-full text-sm font-medium border border-orange-200 hover:shadow-md transition-shadow"
              >
                #{keyword}
              </span>
            ))}
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* 액션 버튼 섹션 */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => window.location.href = '/'}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            🔄 다시 테스트하기
          </button>
          <button
            onClick={() => {
              const url = window.location.href;
              navigator.clipboard.writeText(url);
              alert('결과 링크가 복사되었습니다! 💕');
            }}
            className="px-8 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            📤 결과 공유하기
          </button>
        </div>
      </div>
    </div>
  );
} 