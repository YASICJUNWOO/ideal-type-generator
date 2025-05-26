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
    text: "친구들이 너를 처음 보면 뭐라고 하니?",
    options: [
      { text: "조용하고 말수 적어 보여", score: { A01: 2, A03: 2, A10: 2 } },
      { text: "친근하고 활발해 보여", score: { A02: 2, A09: 2, A12: 1 } },
      { text: "차가워 보인대", score: { A03: 3, A08: 2 } },
      { text: "똑똑하고 분석적인 느낌?", score: { A08: 3, A01: 1, A03: 1 } }
    ]
  },
  {
    id: "q2",
    text: "연애할 때 너에게 가장 중요한 건?",
    options: [
      { text: "나만 바라봐 주는 헌신", score: { A04: 3, A10: 2 } },
      { text: "공감하는 대화", score: { A01: 2, A05: 2, A02: 1 } },
      { text: "독립성과 거리감 유지", score: { A03: 2, A08: 2, A06: 1 } },
      { text: "감각적인 외모와 센스", score: { A07: 3, A06: 2, A09: 1 } }
    ]
  },
  {
    id: "q3",
    text: "연인이 어떤 행동을 할 때 설레?",
    options: [
      { text: "말 없이 손 잡아줄 때", score: { A04: 2, A01: 2 } },
      { text: "귀엽게 질투할 때", score: { A02: 2, A09: 2 } },
      { text: "진지하게 조언해줄 때", score: { A08: 2, A03: 2 } },
      { text: "눈 마주치며 웃어줄 때", score: { A05: 2, A10: 2 } }
    ]
  },
  {
    id: "q4",
    text: "가장 매력적인 눈매는?",
    options: [
      { text: "뚜렷한 쌍커풀", score: { A02: 2, A12: 1 } },
      { text: "날렵한 무쌍/속쌍", score: { A03: 2, A08: 2 } },
      { text: "큰 눈망울", score: { A02: 2, A09: 2 } },
      { text: "가늘고 긴 눈매", score: { A05: 2, A06: 1 } }
    ]
  },
  {
    id: "q5",
    text: "어떤 스타일의 웃음이 좋아?",
    options: [
      { text: "호탕한 스타일", score: { A04: 2, A11: 1 } },
      { text: "잔잔한 미소", score: { A01: 2, A10: 1 } },
      { text: "눈웃음", score: { A05: 2, A06: 1 } },
      { text: "입꼬리 살짝 올라가는", score: { A03: 2, A08: 1 } }
    ]
  },
  {
    id: "q6",
    text: "데이트할 때 가고 싶은 장소는?",
    options: [
      { text: "조용한 카페", score: { A01: 2, A05: 2 } },
      { text: "영화관", score: { A02: 2, A10: 1 } },
      { text: "자연/공원", score: { A04: 2, A11: 1 } },
      { text: "번화가/쇼핑몰", score: { A06: 2, A07: 2 } }
    ]
  },
  {
    id: "q7",
    text: "연인의 말투가 어떻게 좋니?",
    options: [
      { text: "다정하고 낮은 목소리", score: { A01: 2, A05: 1 } },
      { text: "귀엽고 장난기 많은", score: { A02: 2, A09: 2 } },
      { text: "진지하고 또박또박", score: { A03: 2, A08: 2 } },
      { text: "무심한 듯 툭툭 던지는", score: { A06: 2, A04: 1 } }
    ]
  },
  {
    id: "q8",
    text: "연인의 직업에서 가장 중요한 건?",
    options: [
      { text: "안정적이고 꾸준함", score: { A04: 2, A10: 2 } },
      { text: "창의적이고 자유로운 성격", score: { A07: 2, A06: 2 } },
      { text: "책임감과 리더십", score: { A08: 2, A03: 2 } },
      { text: "감성적이고 예술적인", score: { A05: 2, A01: 1 } }
    ]
  }
]; 