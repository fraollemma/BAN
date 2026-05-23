import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Brand Logo & Title Area */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg" // Make sure this is the round logo variant from your image
            alt="BAN-DRCE Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
          <div className="flex flex-col justify-center">
            <h1 className="font-extrabold text-xl sm:text-2xl text-[#0D2B5B] tracking-wide leading-none">
              BAN-DRCE
            </h1>
            <p className="text-[10px] sm:text-xs font-semibold text-gray-700 max-w-[180px] sm:max-w-xs mt-0.5 leading-tight">
              Center of Research and Consulting Excellence
            </p>
          </div>
        </div>

        {/* Desktop Navigation (Large Screens) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-medium text-gray-800">
          <a 
            href="/" 
            className="relative pb-1 text-[#0D2B5B] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#D97706]"
          >
            Home
          </a>
          <a href="#services" className="hover:text-[#0D2B5B] transition-colors pb-1">
            Services
          </a>
          <a href="#about" className="hover:text-[#0D2B5B] transition-colors pb-1">
            About
          </a>
          <a href="#contact" className="hover:text-[#0D2B5B] transition-colors pb-1">
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Button (Medium and Small Screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-700 hover:text-[#0D2B5B] focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Close Icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out">
          <div className="px-4 pt-2 pb-4 space-y-3 font-medium text-gray-700">
            <a
              href="/"
              className="block px-3 py-2 rounded-md bg-amber-50 text-[#0D2B5B] font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#0D2B5B]"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#0D2B5B]"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-[#0D2B5B]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}