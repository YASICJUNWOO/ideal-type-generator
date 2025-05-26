export interface Question {
  id: string;
  text: string;
  options: {
    text: string;
    score: Record<string, number>;
  }[];
}

export const questions: Question[] = [
  {
    id: "q1",
    text: "첫인상에 대해 친구들이 자주 하는 말은?",
    options: [
      { text: "조용하고 말수가 적어 보여", score: { A01: 2, A03: 2, A10: 2 } },
      { text: "친근하고 쉽게 다가가기 쉬워 보여", score: { A02: 2, A09: 2, A12: 1 } },
      { text: "도도하고 차가운 이미지래", score: { A03: 3, A08: 2 } },
      { text: "분석적이고 똑똑해 보인대", score: { A08: 3, A01: 1, A03: 1 } }
    ]
  },
  {
    id: "q2",
    text: "연애할 때 가장 중요하다고 느끼는 건?",
    options: [
      { text: "언제나 나만을 생각해주는 헌신", score: { A04: 3, A10: 2 } },
      { text: "깊이 있는 공감과 대화", score: { A01: 2, A05: 2, A02: 1 } },
      { text: "적당한 거리와 나만의 공간", score: { A03: 2, A08: 2, A06: 1 } },
      { text: "스타일리시한 외모와 센스", score: { A07: 3, A06: 2, A09: 1 } }
    ]
  },
  {
    id: "q3",
    text: "연인이 어떤 행동을 할 때 설레?",
    options: [
      { text: "말 없이 내 손을 잡아줄 때", score: { A04: 2, A01: 2 } },
  { text: "질투하면서도 귀엽게 표현할 때", score: { A02: 2, A09: 2 } },
  { text: "진지하게 내 얘기를 들어주고 조언해줄 때", score: { A08: 2, A03: 2 } },
  { text: "눈을 마주치며 부드럽게 웃어줄 때", score: { A05: 2, A10: 2 } }
    ]
  },
  {
    id: "q4",
    text: "가장 끌리는 눈매는 어떤 스타일이야?",
    options: [
      { text: "크고 선명한 쌍커풀", score: { A02: 2, A12: 1 } },
      { text: "샤프한 무쌍 또는 속쌍", score: { A03: 2, A08: 2 } },
      { text: "초롱초롱한 큰 눈망울", score: { A02: 2, A09: 2 } },
      { text: "가늘고 긴 눈꼬리", score: { A05: 2, A06: 1 } }
    ]
  },
  {
    id: "q5",
    text: "어떤 스타일의 웃음이 가장 매력적이야?",
    options: [
      { text: "하하 웃는 시원한 웃음", score: { A04: 2, A11: 1 } },
  { text: "잔잔하게 번지는 미소", score: { A01: 2, A10: 1 } },
  { text: "눈웃음이 매력적인 스타일", score: { A05: 2, A06: 1 } },
  { text: "입꼬리만 살짝 올라가는 미묘한 웃음", score: { A03: 2, A08: 1 } }
    ]
  },
  {
    id: "q6",
    text: "연인이랑 가장 가고 싶은 데이트 장소는?",
    options: [
      { text: "조용하고 분위기 좋은 카페", score: { A01: 2, A05: 2 } },
      { text: "어두운 영화관에서 함께 영화 보기", score: { A02: 2, A10: 1 } },
      { text: "자연 속 공원에서 산책", score: { A04: 2, A11: 1 } },
      { text: "트렌디한 쇼핑몰과 번화가", score: { A06: 2, A07: 2 } }
    ]
  },
  {
    id: "q7",
    text: "연인의 말투에서 끌리는 느낌은?",
    options: [
      { text: "낮고 다정한 목소리", score: { A01: 2, A05: 1 } },
      { text: "장난기 가득한 말투", score: { A02: 2, A09: 2 } },
      { text: "또박또박하고 진중한 어조", score: { A03: 2, A08: 2 } },
      { text: "툭툭 내뱉는 무심한 스타일", score: { A06: 2, A04: 1 } }
    ]
  },
  {
    id: "q8",
    text: "연인의 직업적 이미지에서 중요하게 생각하는 건?",
    options: [
      { text: "안정감과 꾸준함", score: { A04: 2, A10: 2 } },
      { text: "자유롭고 창의적인 에너지", score: { A07: 2, A06: 2 } },
      { text: "리더십 있고 신뢰감 주는 스타일", score: { A08: 2, A03: 2 } },
      { text: "예술 감성과 감성적인 느낌", score: { A05: 2, A01: 1 } }
    ]
  }
]; 