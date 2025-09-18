import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Expertise from "./components/Expertise"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <main className="min-h-screen bg-porcelain">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
