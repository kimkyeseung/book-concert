import type { Metadata } from "next";
import { Black_Han_Sans } from "next/font/google";
import "./globals.css";

const blackHanSans = Black_Han_Sans({
  variable: "--font-black-han-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "위풍당당 이진숙입니다 | 북콘서트 & 출판기념회",
  description: "이라크전 종군기자에서 자유의 최전선까지 - 이진숙 북콘서트 & 출판기념회 초대장",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body
        className={`${blackHanSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
