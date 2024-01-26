import { useState } from "react";
import Home from "../src/components/sections/home";
import About from "../src/components/sections/about";
import Projects from "../src/components/sections/projects";
import Contact from "../src/components/sections/contact";
import Footer from "../src/components/ui/footer";
import Navbar from "../src/components/ui/navbar";

function App() {
  return (
    <>
      <div>
        <div className="h-full ">
          <Navbar />
          <Home />
        </div>

        <div className="h-full">
          <About />
        </div>
      
       
       
    <div className="h-full">
      <Projects />
    </div>
        

        <div className="h-screen">
          <Contact />
        </div>

        <Footer />
        </div>
    </>
  );
}

export default App;
