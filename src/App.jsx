import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// components
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

// pages
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";

function HomePage({ openBookingModal, setNavbarPage }) {
  return (
    <>
      <Hero openBookingModal={openBookingModal} />
      <About setNavbarPage={setNavbarPage} />
      <Services />
      <Expertise setNavbarPage={setNavbarPage} />
      <Contact />
    </>
  );
}

function AppContent() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const location = useLocation();

  const openBookingModal = (service = "") => {
    setPrefilledService(service);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setPrefilledService("");
  };

  // Update current page based on route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setCurrentPage("home");
    } else if (path === "/about") {
      setCurrentPage("about");
    } else if (path === "/services") {
      setCurrentPage("services");
    } else if (path === "/contact") {
      setCurrentPage("contact");
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      <Navbar
        openBookingModal={openBookingModal}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage openBookingModal={openBookingModal} setNavbarPage={setCurrentPage} />} />
          <Route path="/about" element={<AboutPage openBookingModal={openBookingModal} />} />
          <Route path="/services" element={<ServicePage openBookingModal={openBookingModal} />} />
          <Route path="/contact" element={<ContactPage openBookingModal={openBookingModal} />} />
        </Routes>
      </main>

      <Footer />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
        prefilledService={prefilledService}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
