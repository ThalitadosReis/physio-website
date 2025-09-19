import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-porcelain">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
