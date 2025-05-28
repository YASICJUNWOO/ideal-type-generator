import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "내 운명의 얼굴은?",
  description: "당신의 성격이 얼굴 취향을 결정한다면? 8가지 질문으로 나에게 꼭 맞는 이상형 얼굴을 AI가 직접 그려드립니다. 당신의 이상형 얼굴은 어떤 모습일까요?",
  openGraph: {
    title: "내 운명의 얼굴은?",
    description: "당신의 성격이 얼굴 취향을 결정한다면? 8가지 질문으로 나에게 꼭 맞는 이상형 얼굴을 AI가 직접 그려드립니다. 당신의 이상형 얼굴은 어떤 모습일까요?",
    url: `https://ideal-type-generator.vercel.app`,
    siteName: "내 운명의 얼굴은?",
    images: [
      {
        url: "https://ideal-type-generator.vercel.app/images/og/og.png", // 1200x630
        width: 1200,
        height: 630,
        alt: "내 운명의 얼굴은?",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "내 운명의 얼굴은?",
    description: "당신의 성격이 얼굴 취향을 결정한다면? 8가지 질문으로 나에게 꼭 맞는 이상형 얼굴을 AI가 직접 그려드립니다. 당신의 이상형 얼굴은 어떤 모습일까요?",
    images: ["https://ideal-type-generator.vercel.app/images/og/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ 여기에 추가 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9297124844302746"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
