"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TextCarasoul = () => {
  const [text, setText] = useState('HIM');
  const [color, setColor] = useState('text-blue-500');

  useEffect(() => {
    const words = ['YOU', 'HIM', 'HER'];
    const colors = ['text-blue-500', 'text-green-500', 'text-red-500'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setText(words[index]);
      setColor(colors[index]);
    }, 3000); // Change text every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-7xl p-10">
      T-SHIRTS FOR{' '}
      <motion.span
        className={`${color}`}
        key={text}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.5, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        {text}
      </motion.span>
    </div>
  );
};
