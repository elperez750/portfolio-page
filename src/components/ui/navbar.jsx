import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    const sections = [homeRef, aboutRef, projectsRef, contactRef];

    sections.forEach(section => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  const changeActive = (link) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
    setIsMobileMenuOpen(false);
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 h-16 tablet:h-20 flex justify-between items-center">
        <a href="#" className="text-cyan-400 text-2xl font-futura_bold hover:text-cyan-300 transition-colors duration-300">
          <span className="sr-only">Your Name</span>
          EP
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden tablet:flex space-x-8 text-lg font-futura_bold">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => changeActive(item.id)}
                className={`${
                  activeLink === item.id
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-cyan-200 hover:text-cyan-100"
                } transition-colors duration-300 py-2`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="tablet:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="tablet:hidden">
          <ul className="bg-black bg-opacity-90 backdrop-blur-md py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => changeActive(item.id)}
                  className={`${
                    activeLink === item.id
                      ? "text-cyan-400 border-l-4 border-cyan-400"
                      : "text-cyan-200 hover:text-cyan-100"
                  } block py-2 px-4 transition-colors duration-300`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;