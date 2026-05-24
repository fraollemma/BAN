import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3 xs:px-4 sm:px-5 base:px-6 md:px-7 lg:px-8 py-2 xs:py-3 base:py-3.5 md:py-4">
        
        {/* Brand Logo & Title Area */}
        <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 min-w-0">
          <img
            src="/logo.jpg"
            alt="BAN-DRCE Logo"
            className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 base:w-13 base:h-13 md:w-14 md:h-14 object-contain flex-shrink-0"
          />
          <div className="flex flex-col justify-center min-w-0">
            <h1 className="font-extrabold text-base xs:text-lg sm:text-xl base:text-2xl md:text-2xl text-[#0D2B5B] tracking-wide leading-tight xs:leading-none truncate">
              BAN-DRCE
            </h1>
            <p className="text-[8px] xs:text-[9px] sm:text-xs base:text-xs font-semibold text-gray-700 max-w-[140px] xs:max-w-[160px] sm:max-w-[200px] base:max-w-xs md:max-w-xs mt-0.5 leading-tight truncate xs:line-clamp-2">
              Center of Research and Consulting Excellence
            </p>
          </div>
        </div>

        {/* Desktop Navigation (Large Screens) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 font-medium text-gray-800">
          <a 
            href="/" 
            className="relative pb-1 text-[#0D2B5B] font-semibold text-sm lg:text-base after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#D97706] transition-colors hover:text-[#0D2B5B]"
          >
            Home
          </a>
          <a href="#services" className="text-sm lg:text-base hover:text-[#0D2B5B] transition-colors pb-1">
            Services
          </a>
          <a href="#about" className="text-sm lg:text-base hover:text-[#0D2B5B] transition-colors pb-1">
            About
          </a>
          <a href="#contact" className="text-sm lg:text-base hover:text-[#0D2B5B] transition-colors pb-1">
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Button (Medium and Small Screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-700 hover:text-[#0D2B5B] focus:outline-none p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out">
          <div className="px-3 xs:px-4 pt-2 pb-3 xs:pb-4 space-y-2 xs:space-y-3 font-medium text-gray-700">
            <a
              href="/"
              className="block px-3 py-2 xs:py-2.5 rounded-md bg-amber-50 text-[#0D2B5B] font-semibold text-sm xs:text-base transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 xs:py-2.5 rounded-md hover:bg-gray-50 hover:text-[#0D2B5B] text-sm xs:text-base transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-3 py-2 xs:py-2.5 rounded-md hover:bg-gray-50 hover:text-[#0D2B5B] text-sm xs:text-base transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 xs:py-2.5 rounded-md hover:bg-gray-50 hover:text-[#0D2B5B] text-sm xs:text-base transition-colors"
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
