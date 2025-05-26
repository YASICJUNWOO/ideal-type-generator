'use client';

import { Type, typeDetails } from '@/data/types';

interface ResultContentProps {
  type: Type;
  typeId: string;
  imageNumber: string;
}

export function ResultContent({ type }: ResultContentProps) {
  // 임시로 모든 타입에서 a01_01.png를 사용
  // const randomImageNumber = Math.floor(Math.random() * 3) + 1;
  const imageSrc = `/images/types/${type.id.toLowerCase()}_01.png`;
  // const imageSrc = `/images/types/${type.id}_0${randomImageNumber}.png`;
  // const imageSrc = `https://github.com/YASICJUNWOO/ideal-type-generator/blob/main/public/images/types/${type.id.toLowerCase()}_01.png?raw=true`;
  console.log(imageSrc);

  const detail = typeDetails.find(d => d.id === `${type.id.toLowerCase()}_01`);
  console.log(type.id.toLowerCase());

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          당신의 미래 배우자는 {type.name}입니다
        </h1>
        
        <div className="aspect-square relative mb-6">
          <img
            src={imageSrc}
            alt={type.name}
            className="rounded-xl w-full h-full object-contain bg-white"
            onError={e => {
              // jpg로 fallback
              const target = e.target as HTMLImageElement;
              if (!target.src.endsWith('.jpg')) {
                target.src = '/images/types/a01_01.jpg';
              }
            }}
          />
        </div>

{/* 타입 설명 */}
<p className="text-base text-gray-600 mb-6">
  {type.description}
</p>

{/* 감성 인용 멘트 */}
{detail && (
  <div className="bg-pink-50 border-l-4 border-pink-300 pl-4 pr-3 py-3 mb-4">
    <p className="text-sm text-pink-700 italic">{`"${detail.quote}"`}</p>
  </div>
)}

{/* 캐릭터 성격 요약 */}
{detail && (
  <div className="bg-gray-50 px-4 py-4 rounded-lg shadow-inner mb-4">
    <h2 className="font-semibold text-gray-700 mb-2">이 사람은 이런 사람이에요</h2>
    <p className="text-sm text-gray-700 leading-relaxed">
      {detail.summary}
    </p>
  </div>
)}

{/* 캐릭터가 할 법한 한 마디 */}
{detail && (
  <div className="bg-pink-100 px-4 py-3 rounded-lg text-center text-pink-800 font-medium text-sm">
    {detail.say}
  </div>
)}

        <div className="flex flex-wrap gap-2">
          {type.keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm"
            >
              #{keyword}
            </span>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
          >
            다시 테스트하기
          </button>
          <button
            onClick={() => {
              const url = window.location.href;
              navigator.clipboard.writeText(url);
              alert('결과 링크가 복사되었습니다!');
            }}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
          >
            결과 공유하기
          </button>
        </div>
      </div>
    </div>
  );
} 