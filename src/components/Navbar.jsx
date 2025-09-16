import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f2efeb] backdrop-blur-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-[#44312B]">
                  Physio+
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-[#44312B] hover:text-[#D4BAA7] transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#44312B] hover:text-[#D4BAA7] transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-[#44312B] hover:text-[#D4BAA7] transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-[#44312B] hover:text-[#D4BAA7] transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="#booking"
              className="bg-[#44312B] hover:bg-[#D4BAA7] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Book Now
            </a>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#44312B] hover:text-[#D4BAA7] focus:outline-none p-2"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <a
                href="#home"
                className="block text-[#44312B] hover:text-[#D4BAA7] px-3 py-2 rounded-md transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-[#44312B] hover:text-[#D4BAA7] px-3 py-2 rounded-md transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="block text-[#44312B] hover:text-[#D4BAA7] px-3 py-2 rounded-md transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#contact"
                className="block text-[#44312B] hover:text-[#D4BAA7] px-3 py-2 rounded-md transition-colors font-medium"
              >
                Contact
              </a>
              <div className="pt-2">
                <a
                  href="#booking"
                  className="block bg-[#44312B] hover:bg-[#D4BAA7] text-white px-3 py-2 rounded-lg transition-colors duration-200 font-medium text-center mx-1"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
