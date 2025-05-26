export interface Type {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  images: string[];
}

export const types: Type[] = [
  {
    id: "A01",
    name: "부드러운 공룡상",
    description: "단단한 턱선, 무쌍 눈매, 조용하지만 따뜻한 분위기",
    keywords: ["단단한", "무쌍", "따뜻한"],
    images: ["a01_01.jpg", "a01_02.jpg", "a01_03.jpg"]
  },
  {
    id: "A02",
    name: "강아지상 부끄남",
    description: "큰 눈망울과 부끄러운 미소, 순둥한 느낌",
    keywords: ["큰눈", "부끄러운", "순둥한"],
    images: ["a02_01.jpg", "a02_02.jpg", "a02_03.jpg"]
  },
  {
    id: "A03",
    name: "고양이상 차도남",
    description: "날카로운 눈매와 무심한 표정, 차가운 도시 이미지",
    keywords: ["날카로운", "무심한", "차가운"],
    images: ["a03_01.jpg", "a03_02.jpg", "a03_03.jpg"]
  },
  {
    id: "A04",
    name: "직진남 상남자",
    description: "듬직하고 리더십 있는 상남자 스타일",
    keywords: ["듬직한", "리더십", "상남자"],
    images: ["a04_01.jpg", "a04_02.jpg", "a04_03.jpg"]
  },
  {
    id: "A05",
    name: "감성 로맨틱형",
    description: "따뜻한 미소와 감수성 풍부한 분위기",
    keywords: ["따뜻한", "감성적", "로맨틱"],
    images: ["a05_01.jpg", "a05_02.jpg", "a05_03.jpg"]
  },
  {
    id: "A06",
    name: "무심한 반전매력남",
    description: "겉은 무심하지만 속은 다정한 츤데레 스타일",
    keywords: ["무심한", "다정한", "츤데레"],
    images: ["a06_01.jpg", "a06_02.jpg", "a06_03.jpg"]
  },
  {
    id: "A07",
    name: "예술가 힙스터형",
    description: "자유로운 영혼과 개성 있는 스타일",
    keywords: ["자유로운", "개성있는", "힙스터"],
    images: ["a07_01.jpg", "a07_02.jpg", "a07_03.jpg"]
  },
  {
    id: "A08",
    name: "지적인 엘리트형",
    description: "냉정하고 똑똑한, 이성적인 분위기",
    keywords: ["냉정한", "똑똑한", "이성적"],
    images: ["a08_01.jpg", "a08_02.jpg", "a08_03.jpg"]
  },
  {
    id: "A09",
    name: "엉뚱한 귀요미형",
    description: "생각 못한 말로 웃음 주는 엉뚱 매력남",
    keywords: ["엉뚱한", "귀여운", "웃긴"],
    images: ["a09_01.jpg", "a09_02.jpg", "a09_03.jpg"]
  },
  {
    id: "A10",
    name: "순정 청순형",
    description: "맑고 깨끗한 분위기, 조용하고 배려심 있는 스타일",
    keywords: ["맑은", "깨끗한", "배려심"],
    images: ["a10_01.jpg", "a10_02.jpg", "a10_03.jpg"]
  },
  {
    id: "A11",
    name: "피트니스 남",
    description: "건강미 넘치는 운동 매력남",
    keywords: ["건강한", "운동하는", "매력적"],
    images: ["a11_01.jpg", "a11_02.jpg", "a11_03.jpg"]
  },
  {
    id: "A12",
    name: "풋풋한 순수소년",
    description: "어린 시절 첫사랑 같은 순수한 분위기",
    keywords: ["풋풋한", "순수한", "첫사랑"],
    images: ["a12_01.jpg", "a12_02.jpg", "a12_03.jpg"]
  }
]; 