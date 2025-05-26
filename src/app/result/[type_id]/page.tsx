// import { headers } from 'next/headers';
import { AdBanner } from '@/components/AdBanner';
import { types } from '@/data/types';
import { ResultContent } from '@/components/ResultContent';

interface Props {
  params: Promise<{
    type_id: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const typeId = resolvedParams.type_id.split('_')[0];
  const imageNumber = resolvedParams.type_id.split('_')[1];
  const type = types.find(t => t.id === typeId.toUpperCase());
  
  if (!type) {
    return {
      title: '결과를 찾을 수 없습니다',
      description: '죄송합니다. 결과를 찾을 수 없습니다.'
    };
  }

  return {
    title: `당신의 미래 배우자는 ${type.name}입니다`,
    description: type.description,
    openGraph: {
      title: `당신의 미래 배우자는 ${type.name}입니다`,
      description: type.description,
      images: [`/images/types/${typeId.toLowerCase()}_${imageNumber}.jpg`],
      url: `https://yourdomain.com/result/${resolvedParams.type_id}`
    }
  };
}

export default async function ResultPage({ params }: Props) {
  const resolvedParams = await params;
  const typeId = resolvedParams.type_id.split('_')[0];
  const imageNumber = resolvedParams.type_id.split('_')[1];
  const type = types.find(t => t.id === typeId.toUpperCase());

  if (!type) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              결과를 찾을 수 없습니다
            </h1>
            <p className="text-lg text-gray-600">
              죄송합니다. 결과를 찾을 수 없습니다.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <AdBanner position="top" />
        
        <ResultContent 
          type={type}
          typeId={typeId}
          imageNumber={imageNumber}
        />

        <AdBanner position="bottom" />
      </div>
    </main>
  );
} 