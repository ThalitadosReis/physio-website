import { Flower, MoveRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <nav className="bg-porcelain fixed w-full top-0 z-50">
      <div className="mx-auto px-6 font-secondary text-sandstone">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img
                src={
                  "https://res.cloudinary.com/douen1dwv/image/upload/v1758047929/default/lotus_2_zntprp.png"
                }
                alt="Logo"
                className="h-10 "
              />
              <span className="text-xl font-primary">Physio+</span>
            </div>
          </div>

          {/* middle */}
          <div className="flex-1 flex justify-center">
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                onClick={() => setCurrentPage("home")}
                className={`hover:text-vanilla transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-vanilla after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  currentPage === "home" ? "text-vanilla after:w-full" : ""
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setCurrentPage("about")}
                className={`hover:text-vanilla transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-vanilla after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  currentPage === "about" ? "text-vanilla after:w-full" : ""
                }`}
              >
                About
              </a>
              <a
                href="#about"
                onClick={() => setCurrentPage("about")}
                className={`hover:text-vanilla transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-vanilla after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  currentPage === "services" ? "text-vanilla after:w-full" : ""
                }`}
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setCurrentPage("contact")}
                className={`hover:text-vanilla transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-vanilla after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  currentPage === "contact" ? "text-vanilla after:w-full" : ""
                }`}
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden lg:block">
              <a
                href="#booking"
                className="uppercase tracking-widest w-fit text-xs border  border-transparent bg-sandstone text-white hover:bg-porcelain hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2"
              >
                <span>Book Appointment</span>
                <MoveRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-vanilla focus:outline-none p-2"
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
        </div>

        {/* mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <a
                href="#home"
                className="block hover:text-vanilla px-3 py-2 rounded-md transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block hover:text-vanilla px-3 py-2 rounded-md transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="block hover:text-vanilla px-3 py-2 rounded-md transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="block hover:text-vanilla px-3 py-2 rounded-md transition-colors"
              >
                Contact
              </a>
              <div className="pt-2">
                <a
                  href="#booking"
                  className="uppercase tracking-widest text-xs bg-sandstone text-white hover:bg-vanilla/40 hover:text-sandstone px-12 py-4 rounded-full duration-200 flex items-center justify-center gap-2"
                >
                  <span>Book Appointment</span>
                  <MoveRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
