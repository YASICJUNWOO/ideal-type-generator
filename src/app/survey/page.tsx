'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AdBanner } from '@/components/AdBanner';
import { questions, woman_questions } from '@/data/questions';
import { calculateScores } from '@/utils/score';

function SurveyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Record<string, number>>>({});
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [currentQuestions, setCurrentQuestions] = useState(questions);

  useEffect(() => {
    const genderParam = searchParams.get('gender');
    if (genderParam === 'female') {
      setGender('female');
      setCurrentQuestions(woman_questions);
    } else {
      setGender('male');
      setCurrentQuestions(questions);
    }
  }, [searchParams]);

  const handleAnswer = (score: Record<string, number>) => {
    const newAnswers = {
      ...answers,
      [currentQuestions[currentQuestion].id]: score
    };
    setAnswers(newAnswers);

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate final result
      const result = calculateScores(newAnswers, gender);
      // 결과를 localStorage에 저장
      localStorage.setItem('lastResult', JSON.stringify(result));
      // 결과 페이지로 이동
      router.push(`/result/${result.typeId}_${result.imageId.split('_')[1]}`);
    }
  };

  const question = currentQuestions[currentQuestion];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <AdBanner position="top" />
        
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-pink-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {currentQuestion + 1} / {currentQuestions.length}
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

function SurveyPageLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded-lg mb-6"></div>
              <div className="space-y-4">
                <div className="h-12 bg-gray-100 rounded-xl"></div>
                <div className="h-12 bg-gray-100 rounded-xl"></div>
                <div className="h-12 bg-gray-100 rounded-xl"></div>
                <div className="h-12 bg-gray-100 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SurveyPage() {
  return (
    <Suspense fallback={<SurveyPageLoading />}>
      <SurveyContent />
    </Suspense>
  );
} 