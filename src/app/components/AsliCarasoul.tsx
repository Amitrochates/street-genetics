"use client"
// import { Carasoul } from "./Carasoul"
import { ProductCard } from "./ProductCard"
import { TextCarasoul } from "./TextCarasoul"
import { useState } from 'react';
import { motion } from 'framer-motion';
export const AsliCarasoul = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
    <div className="bg-black text-white">
        <TextCarasoul/>
        <div
        className="h-96 flex w-full gap-4 p-5 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-4"
          animate={{
            x: isHovered ? 0 : '-100%',
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        >
          {/* Displaying 4 products */}
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          {/* Repeat items to create a loop effect */}
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
          <div className="flex-shrink-0">
            <ProductCard />
          </div>
        </motion.div>
      </div>
    </div>
)
}