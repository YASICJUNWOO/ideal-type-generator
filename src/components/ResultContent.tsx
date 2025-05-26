'use client';

import { Type } from '@/data/types';

interface ResultContentProps {
  type: Type;
  typeId: string;
  imageNumber: string;
}

export function ResultContent({ type, typeId, imageNumber }: ResultContentProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          당신의 미래 배우자는 {type.name}입니다
        </h1>
        
        <div className="aspect-square relative mb-6">
          <img
            src={`/images/types/${typeId.toLowerCase()}_${imageNumber}.jpg`}
            alt={type.name}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>

        <p className="text-lg mb-6 text-gray-600">
          {type.description}
        </p>

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