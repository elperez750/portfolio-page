import { React, useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");


  useEffect(() => {
    localStorage.getItem("activeLink") && setActiveLink(localStorage.getItem("activeLink"));
    
  }, []);


  const changeActive = (link) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
  }

  return (
    <div className="bg-black w-full fixed top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Desktop Menu - Shown on large screens, hidden on small screens */}
        <ul className="hidden tablet:flex flex-row space-x-8 lg:space-x-48 text-xl tablet:text-xl laptop:text-2xl font-futura_bold text-gray ">
          <li><a href="#" onClick={() => changeActive("home")} className={`${activeLink === "home" ? "text-red" : "text-gray"}`}>Home</a></li>
          <li><a href="#about" onClick={() => changeActive("about")} className={`${activeLink === "about" ? "text-red" : "text-gray"}`}>About</a></li>
          <li><a href="#projects" onClick={() => changeActive("projects")} className={`${activeLink === "projects" ? "text-red" : "text-gray"}`}>Projects</a></li>
          <li><a href="#contact" onClick={() => changeActive("contact")} className={`${activeLink === "contact" ? "text-red" : "text-gray"}`}>Contact</a></li>
        </ul>

        {/* Hamburger Icon - Hidden on large screens, shown on small screens */}
        <div className="tablet:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8 text-white" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Hidden by default, shown when hamburger is clicked */}
        {isMobileMenuOpen && (
          <ul className="flex flex-col absolute top-full w-full bg-black text-xl font-futura_bold fixed" >
            <li onClick={() => changeActive("home")} className={`${activeLink === "home" ? "text-red" : "text-gray"} p-2 border-b border-gray`}><a href="#">Home</a></li>
            <li onClick={() => changeActive("about")} className={`${activeLink === "about" ? "text-red" : "text-gray"} p-2 border-b border-gray`}><a href="#about">About</a></li>
            <li onClick={() => changeActive("projects")} className={`${activeLink === "projects" ? "text-red" : "text-gray"} p-2 border-b border-gray`}><a href="#projects">Projects</a></li>
            <li onClick={() => changeActive("contact")} className={`${activeLink === "contact" ? "text-red" : "text-gray"} p-2 border-b border-gray`}><a href="#contact">Contact</a></li>

          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
