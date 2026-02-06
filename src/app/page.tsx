"use client";

import Image from "next/image";
import { MapPin, Quote, Phone, Landmark, Mic, Play, X } from "lucide-react";
import { useState } from "react";
import FloatingShapes from "./components/FloatingShapes";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      {/* Background decoration - only visible on xl screens */}
      <FloatingShapes />

      <main className="w-full min-h-screen flex flex-col items-center relative">
        <div className="w-full max-w-[1200px] shadow-2xl bg-[#0D0D0D] relative z-10">
          {/* Hero Section */}
          <section
            className="relative w-full px-6 md:px-16 py-16 md:py-24 flex flex-col items-center"
            style={{
              backgroundImage: "url('/images/_DSC5654.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          >
            <div className="absolute inset-0 bg-[#0D0D0D]/75" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-[1000px]">
              {/* Left: Author Photo */}
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-[3px] border-[#C9A962]">
                  <Image
                    src="/images/portrait.jpg"
                    alt="이진숙"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: Title & Info */}
              <div className="flex-1 flex flex-col items-center md:items-start gap-5">
                {/* Invitation Label */}
                <span className="text-[11px] md:text-[12px] text-[#C9A962] tracking-[6px] uppercase">
                  Invitation
                </span>

                {/* Badge with invitation */}
                <div className="flex flex-col items-center md:items-end gap-2">
                  <div className="flex items-center gap-3 bg-[#C9A962] px-8 py-3 rounded-sm">
                    <span className="text-[#0D0D0D] text-base md:text-lg font-bold tracking-wide">
                      북콘서트 &amp; 출판기념회
                    </span>
                  </div>
                  <span className="text-[#F5F4F2]/70 text-sm md:text-base tracking-wide">
                    당신을 초대합니다
                  </span>
                </div>

                {/* Gold Line */}
                <div className="w-[100px] h-[3px] bg-[#C9A962] md:self-start" />

                {/* Title */}
                <h1 className="text-[56px] md:text-[80px] font-bold text-[#F5F4F2] tracking-[8px] leading-none font-[family-name:var(--font-black-han-sans)]">
                  위풍당당
                </h1>

                {/* Subtitle */}
                <div className="flex items-baseline gap-0">
                  <span className="text-[28px] md:text-[36px] font-bold text-[#C9A962] tracking-wide font-[Pretendard]">
                    이진숙
                  </span>
                  <span className="text-[28px] md:text-[36px] font-normal text-[#C9A962] tracking-wide font-[Pretendard]">
                    입니다
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-[#8A8A8A] text-base md:text-lg italic text-center md:text-left">
                  이라크전 종군기자에서 자유의 최전선까지
                </p>
              </div>
            </div>
          </section>

          {/* Author Introduction Section */}
          <section className="w-full bg-[#F5F4F2] py-16 px-6 md:px-16">
            <div className="max-w-[900px] mx-auto flex flex-col items-center gap-8">
              <h2 className="text-[24px] md:text-[32px] text-[#0D0D0D] font-bold text-center font-[Pretendard]">
                안녕하십니까! 이진숙입니다.
              </h2>

              <div className="w-[60px] h-[3px] bg-[#C9A962]" />

              <p className="text-[16px] md:text-[18px] text-[#333] text-center leading-relaxed font-[Pretendard]">
                이라크전 종군기자, 워싱턴특파원, MBC 기획본부장, 방송통신위원장을 지내면서,<br className="hidden md:block" />
                <strong className="text-[#0D0D0D]">자유대한민국이 점점 무너져가는 것을 목격했습니다.</strong>
              </p>

              <div className="bg-[#C9A962]/10 border-l-4 border-[#C9A962] px-6 py-5 w-full max-w-[700px]">
                <p className="text-[18px] md:text-[20px] text-[#0D0D0D] font-medium text-center font-[Pretendard]">
                  직접 경험한 현장들을 책에 담았습니다.
                </p>
              </div>

              <p className="text-[15px] md:text-[17px] text-[#555] text-center leading-relaxed font-[Pretendard]">
                권력에 의해 채워진 수갑을 차고 경찰서 조사실에 앉아 있을때,<br />
                경찰서 밖에서 <span className="text-[#C9A962] font-semibold">&apos;이진숙 힘내라&apos;</span>고 외쳐주시던 시민들의 외침이 큰 힘이 되었습니다.
              </p>

              <p className="text-[17px] md:text-[20px] text-[#0D0D0D] font-bold text-center font-[Pretendard]">
                그런 외침 소리가 자유대한민국을 지킬 것입니다.
              </p>
            </div>
          </section>

          {/* Book & Quote Section */}
          <section className="w-full py-16 px-6 md:px-16 relative overflow-hidden">
            {/* Background image - war ruins */}
            <div
              className="absolute inset-0 bg-cover bg-center grayscale"
              style={{
                backgroundImage: "url('/images/war-ruins.jpg')",
                opacity: 0.5,
              }}
            />
            <div className="absolute inset-0 bg-[#0D0D0D]/85" />

            <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
              {/* Book Image */}
              <div className="relative w-[200px] md:w-[280px] h-[290px] md:h-[400px] rotate-3 shadow-[8px_12px_32px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/book_cover.jpeg"
                  alt="위풍당당 이진숙입니다"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote Box */}
              <div className="flex-1 bg-[#1A1A1A] border border-[#C9A962] p-8 md:p-10 flex flex-col items-center gap-5">
                <Quote className="w-8 h-8 text-[#C9A962]" />
                <p className="text-[24px] md:text-[32px] font-bold text-[#F5F4F2] text-center leading-snug font-[Pretendard]">
                  행동하지 않으면<br />세상은 바뀌지 않는다!
                </p>
                <div className="w-12 h-[2px] bg-[#C9A962]" />
                <span className="text-[16px] text-[#C9A962] tracking-wide font-[Pretendard]">
                  — 이진숙
                </span>
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section className="w-full px-6 md:px-16 py-12 bg-[#0D0D0D] flex flex-col gap-8">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[1px] bg-[#C9A962]" />
              <span className="text-[16px] text-[#C9A962] tracking-[6px] font-[Pretendard]">
                CONCERT SCHEDULE
              </span>
              <div className="w-16 h-[1px] bg-[#C9A962]" />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1000px] mx-auto w-full">
              {/* Busan Card */}
              <div className="bg-[#C9A962] rounded-xl overflow-hidden flex flex-col">
                <div className="h-[6px] bg-[#0D0D0D]" />
                <div className="flex-1 p-6 flex flex-col gap-3">
                  <span className="text-[12px] text-[#0D0D0D] tracking-[4px] font-medium">부산</span>
                  <span className="text-[24px] text-[#0D0D0D] tracking-tight font-bold font-[Pretendard]">
                    2월 7일 (금) 오후 2시
                  </span>
                  <span className="text-[14px] text-[#0D0D0D]/80 italic">
                    세계로 교회<br />부산 강서구 송정길43번길 16
                  </span>
                  <div className="flex items-center gap-2 pt-2">
                    <Mic className="w-[14px] h-[14px] text-[#0D0D0D]" />
                    <span className="text-[13px] text-[#0D0D0D] font-medium">출연 게스트: 개그맨 김영민</span>
                  </div>
                  <a
                    href="https://map.naver.com/v5/search/부산 강서구 송정길43번길 16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start flex items-center gap-1.5 bg-[#0D0D0D] text-[#F5F4F2] px-4 py-2.5 rounded-md text-[13px] hover:bg-[#2A2A2A] transition-colors"
                  >
                    <MapPin className="w-[14px] h-[14px] text-[#C9A962]" />
                    지도보기
                  </a>
                </div>
              </div>

              {/* Gwangju Card */}
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden flex flex-col">
                <div className="h-1 bg-[#C9A962]" />
                <div className="flex-1 p-6 flex flex-col gap-3">
                  <span className="text-[12px] text-[#C9A962] tracking-[4px] font-medium">광주</span>
                  <span className="text-[22px] text-[#F5F4F2] tracking-tight font-bold font-[Pretendard]">
                    2월 8일 (토) 오후 3시 30분
                  </span>
                  <span className="text-[14px] text-[#8A8A8A] italic">
                    전일빌딩 4층 총회의실<br />강남로 245
                  </span>
                  <a
                    href="https://map.naver.com/v5/search/광주 강남로 245 전일빌딩"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start flex items-center gap-1.5 bg-[#C9A962] text-[#0D0D0D] px-4 py-2.5 rounded-md text-[13px] font-medium hover:bg-[#D4B872] transition-colors"
                  >
                    <MapPin className="w-[14px] h-[14px]" />
                    지도보기
                  </a>
                </div>
              </div>

              {/* Daegu Card */}
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden flex flex-col">
                <div className="h-1 bg-[#8A8A8A]" />
                <div className="flex-1 p-6 flex flex-col gap-3">
                  <span className="text-[12px] text-[#8A8A8A] tracking-[4px] font-medium">대구</span>
                  <span className="text-[22px] text-[#F5F4F2] tracking-tight font-bold font-[Pretendard]">
                    2월 9일 (일) 오후 6시 30분
                  </span>
                  <span className="text-[14px] text-[#8A8A8A] italic">
                    대구 그랜드 호텔<br />T. 010-2638-8038
                  </span>
                  <a
                    href="https://map.naver.com/v5/search/대구 그랜드 호텔"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start flex items-center gap-1.5 bg-[#C9A962] text-[#0D0D0D] px-4 py-2.5 rounded-md text-[13px] font-medium hover:bg-[#D4B872] transition-colors"
                  >
                    <MapPin className="w-[14px] h-[14px]" />
                    지도보기
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="w-full px-6 md:px-16 py-12 bg-[#1A1A1A] flex flex-col gap-6">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[1px] bg-[#C9A962]" />
              <span className="text-[16px] text-[#C9A962] tracking-[6px] font-[Pretendard]">
                INFORMATION
              </span>
              <div className="w-16 h-[1px] bg-[#C9A962]" />
            </div>

            {/* Info Cards */}
            <div className="flex flex-col md:flex-row gap-4 max-w-[600px] mx-auto w-full">
              {/* Account */}
              <div className="flex-1 bg-[#0D0D0D] p-6 flex flex-col gap-3">
                <Landmark className="w-7 h-7 text-[#C9A962]" />
                <span className="text-[12px] text-[#8A8A8A] tracking-[3px]">후원 계좌</span>
                <span className="text-[18px] text-[#F5F4F2] tracking-wide font-[Pretendard]">
                  농협 302-4937-5657-61
                </span>
                <span className="text-[14px] text-[#8A8A8A] italic">예금주: 이진숙</span>
              </div>

              {/* Contact */}
              <div className="flex-1 bg-[#0D0D0D] p-6 flex flex-col gap-3">
                <Phone className="w-7 h-7 text-[#C9A962]" />
                <span className="text-[12px] text-[#8A8A8A] tracking-[3px]">문의</span>
                <a
                  href="tel:010-9114-8224"
                  className="text-[18px] text-[#F5F4F2] tracking-wide font-[Pretendard] hover:text-[#C9A962] transition-colors"
                >
                  010-9114-8224
                </a>
                <span className="text-[14px] text-[#8A8A8A] italic">전화 또는 문자</span>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full px-6 md:px-16 py-12 bg-[#0D0D0D] flex flex-col items-center gap-5">
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[1px] bg-[#2A2A2A]" />
              <span className="text-[16px] text-[#C9A962]">✦</span>
              <div className="w-[60px] h-[1px] bg-[#2A2A2A]" />
            </div>
            <h2 className="text-[28px] text-[#F5F4F2] tracking-[4px] font-[family-name:var(--font-black-han-sans)]">
              위풍당당 이진숙입니다
            </h2>
            <span className="text-[14px] text-[#8A8A8A] italic">자작나무숲 출판</span>
            <p className="text-[13px] text-[#5A5A5A] italic text-center">
              추천: 이인호 교수 · 나경원 의원 · 손현보 목사 · 이용구 총장
            </p>
            <span className="text-[12px] text-[#3A3A3A] tracking-[2px] font-[Pretendard]">
              © 2025
            </span>
          </footer>
        </div>
      </main>

      {/* Floating Video Button */}
      <button
        onClick={() => setIsVideoOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#C9A962] rounded-full flex items-center justify-center shadow-lg hover:bg-[#D4B872] transition-all hover:scale-110 z-50 group"
      >
        <Play className="w-7 h-7 text-[#0D0D0D] ml-1 group-hover:scale-110 transition-transform" fill="#0D0D0D" />
      </button>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <video
            src="/images/movie.mp4"
            controls
            autoPlay
            className="max-w-full max-h-[80vh] rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
}
