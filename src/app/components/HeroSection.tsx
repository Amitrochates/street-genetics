"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden group">
      {/* Background GIF with Zoom Effect */}
      <img
        src="/assets/gif/landing-background.gif" // Replace with the correct GIF path
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[650ms] scale-100 group-hover:scale-125"
      />

      {/* "Shop Now" Button */}
      <div className="absolute bottom-12 flex justify-center px-4 md:px-8">
        <a
          href="#shop"
          className="px-8 py-3 text-white text-sm sm:text-lg md:text-xl font-semibold rounded-full border-2 border-white
          transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          SHOP NOW
        </a>
      </div>
    </section>
  );
}
