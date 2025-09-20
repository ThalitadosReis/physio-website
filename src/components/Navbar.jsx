import { MoveRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar({
  openBookingModal,
  currentPage,
  setCurrentPage,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handlePageChange = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-porcelain fixed w-full top-0 z-50">
      <div className="mx-auto px-6 font-secondary text-sandstone">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Logo size="small" className="h-10" />
              <span className="text-xl font-primary">Physio+</span>
            </div>
          </div>

          {/* middle */}
          <div className="flex-1 flex justify-center">
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                onClick={() => handlePageChange("home")}
                className={`hover:text-vanilla transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-vanilla after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  currentPage === "home" ? "text-vanilla after:w-full" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => handlePageChange("about")}
                className={`hover:text-vanilla transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-vanilla after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  currentPage === "about" ? "text-vanilla after:w-full" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => handlePageChange("services")}
                className={`hover:text-vanilla transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-vanilla after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  currentPage === "services" ? "text-vanilla after:w-full" : ""
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={() => handlePageChange("contact")}
                className={`hover:text-vanilla transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-vanilla after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  currentPage === "contact" ? "text-vanilla after:w-full" : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden lg:block">
              <button
                onClick={openBookingModal}
                className="uppercase tracking-widest w-fit text-xs border  border-transparent bg-sandstone text-white hover:bg-porcelain hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2"
              >
                <span>Book Appointment</span>
                <MoveRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-vanilla focus:outline-none p-2"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link
                to="/"
                onClick={() => handlePageChange("home")}
                className="block hover:text-vanilla px-3 py-2 rounded-md transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => handlePageChange("about")}
                className="block hover:text-vanilla px-3 py-2 rounded-md transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => handlePageChange("services")}
                className="block hover:text-vanilla px-3 py-2 rounded-md transition-colors"
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={() => handlePageChange("contact")}
                className="block hover:text-vanilla px-3 py-2 rounded-md transition-colors"
              >
                Contact
              </Link>
              <div className="pt-2">
                <button
                  onClick={() => {
                    openBookingModal();
                    setIsOpen(false);
                  }}
                  className="uppercase tracking-widest text-xs bg-sandstone text-white hover:bg-vanilla/40 hover:text-sandstone px-12 py-4 rounded-full duration-200 flex items-center justify-center gap-2 w-full"
                >
                  <span>Book Appointment</span>
                  <MoveRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
