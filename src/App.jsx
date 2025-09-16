import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {

  return (
    <main className="min-h-screen bg-porcelain">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </main>
  )
}

export default App
