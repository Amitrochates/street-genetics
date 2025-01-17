"use client";
import Link from "next/link";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-500 ease-in-out"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-black text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out flex flex-col w-4/5 sm:w-3/5 md:w-2/5 lg:w-72`}
      >
        {/* Sidebar Header */}
        <div className="px-4 py-4 sm:px-6 sm:py-6">
          <Link href="/" onClick={onClose}>
            <span className="text-xl sm:text-2xl font-belleza text-white cursor-pointer hover:bg-black transition-colors">
              STREET GENETICS
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 sm:px-4 space-y-1 sm:space-y-2">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md text-sm sm:text-md font-medium text-white hover:bg-white hover:text-black transition-all"
          >
            <img
              src="/assets/icon/home-nav.svg"
              alt="Home"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            Home
          </Link>
          <Link
            href="/collections"
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md text-sm sm:text-md font-medium text-white hover:bg-white hover:text-black transition-all"
          >
            <img
              src="/assets/icon/shop-nav.svg"
              alt="Shop"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            Shop
          </Link>
          <Link
            href="/collections"            
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md text-sm sm:text-md font-medium text-white hover:bg-white hover:text-black transition-all"
          >
            <img
              src="/assets/icon/shirt-nav.svg"
              alt="Collections"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            Collections
          </Link>
          {/* <a
            href="/about"
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md text-sm sm:text-md font-medium text-white hover:bg-white hover:text-black transition-all"
          >
            <img
              src="/assets/icon/info-nav.svg"
              alt="About"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            About
          </a>
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md text-sm sm:text-md font-medium text-white hover:bg-white hover:text-black transition-all"
          >
            <img
              src="/assets/icon/mail-nav.svg"
              alt="Contact"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            Contact
          </a> */}
        </nav>

        {/* Footer (Sign In Button) */}
        <div className="mt-auto px-3 sm:px-4 py-4 border-t border-gray-700">
          {/* <button className="w-full py-2 text-sm sm:text-md rounded-full bg-gray-300 text-[#434242] hover:bg-gray-400 transition-all">
            Sign In
          </button> */}
        </div>
      </div>
    </>
  );
}
