"use client"
// this suxx change this shit
import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import InitialSVG from '../../../public/assets/images/About-before.svg';
export const AboutHeader = ({ svgPath }:{svgPath:string}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Scroll-based transformations
  const opacityProgress = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0, 1, 1, 0]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.*3, 0.7, 1], [0.5, 1, 2, 3]);


  return (
    <div className="w-full flex items-center justify-center">
      <div>
      <Image 
            src={InitialSVG} 
            alt="Animated SVG" 
            width={500} 
            height={500} 
            className="-z-5"
          />
      <div ref={ref} className="sticky -translate-y-1/2">
        <motion.div
          style={{
            opacity: opacityProgress,
            scale: scaleProgress
          }}
          className=""
        >
          {/* Option 1: Using Next.js Image component */}
          <Image 
            src={svgPath} 
            alt="Animated SVG" 
            width={500} 
            height={500} 
            className="object-contain"
          />
           

          {/* Option 2: Direct SVG import (uncomment if using) */}
          {/* <YourImportedSVG 
            className="w-64 h-64"
            style={{
              opacity: opacityProgress,
              scale: scaleProgress
            }}
          /> */}
        </motion.div>
      </div>
      </div>
    </div>
  );
};

