"use client";

import { useEffect, useState } from "react";

export default function FloatingShapes() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsVisible(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Left side shapes */}
      <div
        className="absolute left-[3%] top-[10%] w-5 h-5 border border-[#C9A962] rotate-45"
        style={{ animation: "float 6s ease-in-out infinite" }}
      />
      <div
        className="absolute left-[5%] top-[30%] w-3 h-3 border border-[#C9A962] rounded-full"
        style={{ animation: "float 8s ease-in-out infinite 1s" }}
      />
      <div
        className="absolute left-[2%] top-[50%] w-6 h-6 border border-[#C9A962] rotate-45"
        style={{ animation: "float 7s ease-in-out infinite 2s" }}
      />
      <div
        className="absolute left-[4%] top-[70%] w-3 h-3 border border-[#C9A962] rounded-full"
        style={{ animation: "float 9s ease-in-out infinite 0.5s" }}
      />

      {/* Right side shapes */}
      <div
        className="absolute right-[3%] top-[15%] w-4 h-4 border border-[#C9A962] rounded-full"
        style={{ animation: "float 7s ease-in-out infinite 0.5s" }}
      />
      <div
        className="absolute right-[5%] top-[35%] w-5 h-5 border border-[#C9A962] rotate-45"
        style={{ animation: "float 6s ease-in-out infinite 1.5s" }}
      />
      <div
        className="absolute right-[2%] top-[55%] w-3 h-3 border border-[#C9A962] rounded-full"
        style={{ animation: "float 8s ease-in-out infinite 2.5s" }}
      />
      <div
        className="absolute right-[4%] top-[75%] w-5 h-5 border border-[#C9A962] rotate-45"
        style={{ animation: "float 7s ease-in-out infinite 1s" }}
      />

      {/* Vertical lines */}
      <div
        className="absolute left-[4%] top-[20%] w-px h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(201, 169, 98, 0.15), transparent)",
          animation: "pulse 5s ease-in-out infinite"
        }}
      />
      <div
        className="absolute right-[4%] top-[45%] w-px h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(201, 169, 98, 0.15), transparent)",
          animation: "pulse 5s ease-in-out infinite 2.5s"
        }}
      />

      {/* Corner decorations */}
      <div
        className="absolute left-[2%] top-[5%] w-12 h-12 border-l border-t border-[#C9A962]"
        style={{ animation: "pulse 4s ease-in-out infinite", opacity: 0.15 }}
      />
      <div
        className="absolute right-[2%] top-[5%] w-12 h-12 border-r border-t border-[#C9A962]"
        style={{ animation: "pulse 4s ease-in-out infinite 2s", opacity: 0.15 }}
      />
    </div>
  );
}
