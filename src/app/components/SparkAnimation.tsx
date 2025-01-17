"use client";
import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"
import { Belleza } from "next/font/google";


const textLines = [
  "Blending urban style, thoughtful design",
  "and trusted quality—",
  "streetwear that truly connects.",
];
const belleza = Belleza({
  variable: "--font-belleza",
  subsets: ["latin"],
  weight: "400",
});

export default function SparkAnimation() {
  const words = textLines.flatMap((line) => line.split(" "));
  const [sparkIndexes, setSparkIndexes] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [finalVisible, setFinalVisible] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isHovered) {
      interval = setInterval(() => {
        const indexes: number[] = [];
        while (indexes.length < 2) {
          const randomIndex = Math.floor(Math.random() * words.length);
          if (!indexes.includes(randomIndex)) indexes.push(randomIndex);
        }
        setSparkIndexes(indexes);
      }, 600);

      setTimeout(() => {
        clearInterval(interval);
        setFinalVisible(true);
      }, 5000);
    } else {
      setSparkIndexes([]);
      setFinalVisible(false);
    }

    return () => clearInterval(interval);
  }, [isHovered, words.length]);

  return (
    <div
      className={`w-full h-screen bg-black text-white flex items-center justify-center px-6 sm:px-12 lg:px-24 relative ${belleza.variable}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center leading-snug">
        {textLines.map((line, i) => (
          <div
            key={i}
            className="flex justify-center flex-wrap text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light"
          >
            {line.split(" ").map((word, index) => {
              const globalIndex = words.findIndex((w, idx) => w === word && idx >= index);
              const isSparkling = sparkIndexes.includes(globalIndex);
              const isFinalHighlighted = ["CAROUSEL", "BELOW"].includes(word);

              return (
                <motion.span
                  key={index}
                  className={`mx-2 relative inline-block transition-all duration-500 ${
                    finalVisible
                      ? isFinalHighlighted
                        ? "text-white brightness-200"
                        : "text-gray-400"
                      : "opacity-0"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={
                    isSparkling && !finalVisible
                      ? { opacity: [0, 1, 0.5], color: "#fff" }
                      : finalVisible
                      ? { opacity: 1 }
                      : { opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: isSparkling && !finalVisible ? Infinity : 0,
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
