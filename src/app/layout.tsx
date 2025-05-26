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
  title: "이상형 얼굴 생성기",
  description: "질문에 답하면 당신의 미래 배우자가 어떤 얼굴인지 보여드려요!",
  openGraph: {
    title: "이상형 얼굴 생성기",
    description: "성격 기반으로 나의 미래 이상형 얼굴을 확인해보세요!",
    url: "https://ideal-type-generator.vercel.app",
    siteName: "이상형 얼굴 생성기",
    images: [
      {
        url: "https://ideal-type-generator.vercel.app/og-image.png", // 1200x630
        width: 1200,
        height: 630,
        alt: "이상형 얼굴 미리보기",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "이상형 얼굴 생성기",
    description: "당신의 성격을 기반으로 한 미래 배우자 얼굴을 보여드립니다!",
    images: ["https://ideal-type-generator.vercel.app/og-image.png"],
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
