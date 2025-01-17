"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <nav className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-4">
        {/* Hamburger Menu */}
        <button onClick={toggleSidebar} className="cursor-pointer ml-2 md:ml-4 lg:ml-6">
          <img
            src="/assets/icon/menu-icon.svg"
            alt="Menu Icon"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          />
        </button>

        {/* Branding */}
        <div className="text-lg sm:text-xl md:text-2xl font-serif font-semibold">
          Street Genetics
        </div>

        {/* Cart Icon */}
        <div className="mr-2 md:mr-4 lg:mr-6">
          <button onClick={toggleCart}>
            <img
              src="/assets/icon/cart-nav.svg"
              alt="Cart Icon"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pointer"
            />
          </button>
        </div>
      </nav>

      {/* Sidebars */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
