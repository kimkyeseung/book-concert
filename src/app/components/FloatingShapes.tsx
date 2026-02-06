"use client";

import { motion } from "framer-motion";

const shapes = [
  // Left side
  { x: "5%", y: "15%", size: 8, type: "square", delay: 0 },
  { x: "8%", y: "45%", size: 12, type: "circle", delay: 1 },
  { x: "4%", y: "75%", size: 6, type: "square", delay: 2 },
  // Right side
  { x: "92%", y: "25%", size: 10, type: "circle", delay: 0.5 },
  { x: "95%", y: "55%", size: 8, type: "square", delay: 1.5 },
  { x: "90%", y: "85%", size: 6, type: "circle", delay: 2.5 },
];

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden hidden xl:block z-0">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.type === "circle" ? "rounded-full" : "rotate-45"}`}
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            border: "2px solid #C9A962",
            opacity: 0.5,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vertical lines */}
      <motion.div
        className="absolute left-[6%] top-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent via-[#C9A962] to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[6%] top-[40%] w-[1px] h-32 bg-gradient-to-b from-transparent via-[#C9A962] to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
}
