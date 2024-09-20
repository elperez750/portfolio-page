import { useRef } from "react";
import Home from "./components/sections/home";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      
      <div className="relative z-10">
        <Navbar
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <main>
          <Home homeRef={homeRef} />
          <About aboutRef={aboutRef} />
          <Projects projectsRef={projectsRef} />
          <Contact contactRef={contactRef} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;