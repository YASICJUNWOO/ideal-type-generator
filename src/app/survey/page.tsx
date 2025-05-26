'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdBanner } from '@/components/AdBanner';
import { questions } from '@/data/questions';
import { calculateScores } from '@/utils/score';

export default function SurveyPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Record<string, number>>>({});

  const handleAnswer = (score: Record<string, number>) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: score
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate final result
      const result = calculateScores(newAnswers);
      // 결과를 localStorage에 저장
      localStorage.setItem('lastResult', JSON.stringify(result));
      // 결과 페이지로 이동
      router.push(`/result/${result.typeId}_${result.imageId.split('_')[1]}`);
    }
  };

  const question = questions[currentQuestion];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        {/* <AdBanner position="top" /> */}
        
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-pink-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {currentQuestion + 1} / {questions.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {question.text}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full text-black p-4 text-left bg-gray-50 hover:bg-pink-50 rounded-xl transition-colors"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        <AdBanner position="bottom" />
      </div>
    </main>
  );
} 