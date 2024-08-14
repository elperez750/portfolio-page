import { useRef } from "react";
import Home from "./components/sections/home";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import Thanks from "./components/ui/thanks";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <div>
        <div className="h-full ">
          <Navbar
            homeRef={homeRef}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          <Home homeRef={homeRef} />
        </div>

        <div className="h-full">
          <About aboutRef={aboutRef} />
        </div>
      </div>
      <div className="h-full">
        <Projects projectsRef={projectsRef} />
      </div>
      <div className="h-full">
        <Contact contactRef={contactRef} />
      </div>

      <div className="h-full">
        <Footer />
      </div>
    </>
  );
}

export default App;
