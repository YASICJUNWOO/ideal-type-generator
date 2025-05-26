// import { Type } from '@/data/types';

export interface ScoreResult {
  typeId: string;
  imageId: string;
  scores: Record<string, number>;
}

export function calculateScores(answers: Record<string, Record<string, number>>): ScoreResult {
  // Initialize scores for all types
  const scores: Record<string, number> = {};
  const types = ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11', 'A12'];
  types.forEach(type => scores[type] = 0);

  // Calculate total scores
  Object.values(answers).forEach(answer => {
    Object.entries(answer).forEach(([type, points]) => {
      scores[type] = (scores[type] || 0) + points;
    });
  });

  // Find highest score
  const maxScore = Math.max(...Object.values(scores));
  
  // Get all types with the highest score
  const topTypes = Object.entries(scores)
    .filter(([, score]) => score === maxScore)
    .map(([type]) => type);

  // Randomly select one type from top scorers
  const selectedType = topTypes[Math.floor(Math.random() * topTypes.length)];
  
  // Randomly select one image (1-3) for the selected type
  const imageNumber = Math.floor(Math.random() * 3) + 1;
  const imageId = `${selectedType.toLowerCase()}_${String(imageNumber).padStart(2, '0')}`;

  return {
    typeId: selectedType,
    imageId,
    scores
  };
}

export function getTypeDistribution(scores: Record<string, number>): Array<{type: string; percentage: number}> {
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
  
  return Object.entries(scores)
    .map(([type, score]) => ({
      type,
      percentage: Math.round((score / total) * 100)
    }))
    .sort((a, b) => b.percentage - a.percentage);
} 