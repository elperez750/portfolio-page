import React from "react";
import Header from "../ui/header";
import Button from "../ui/button";
import SkillsList from "../cards/skills/skillsList";

function About() {
  return (
    <section id="about" className="bg-gradient-to-r from-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center text-white">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <Header text="About Me" className="text-blue-300 mb-6" />
            <p className="font-futura text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0">
              My name is Elliott and I am currently studying Software Development
              at Bellevue College. I have a deep passion for Web Development and
              UX/UI design. When I am not on my computer, I am at the gym or
              reading a book.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact">
                <Button 
                  text="Contact Me" 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-center mb-8 font-futura_bold text-blue-300 text-3xl sm:text-4xl lg:text-5xl">
              Current Skills
            </h2>
            <SkillsList />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;