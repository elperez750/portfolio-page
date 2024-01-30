import { useState } from "react";
import Home from "./components/sections/home";
import About from "./components/sections/about";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";

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
