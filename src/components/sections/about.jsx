import React from "react";
import Header from "../ui/header";
import Button from "../ui/button";
import SkillsList from "../cards/skills/skillsList";
function About() {
  return (
    <div id="about" className="bg-gradient-to-r from-black to-blue h-full">
    
      
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-1 flex-col items-start p-10">
        <Header text="About Me" />
        <p className="text-gray font-futura text-2xl my-8 max-w-lg">
          My name is Elliott and I am currently studying Software Development at
          Bellevue College. I have a deep passion for Web Development and UX/UI
          design. When I am not on my computer, I am at the gym or reading a
          book.
        </p>

        <Button text="Contact Me" />
      </div>

      <div className="flex flex-col justify-end p-10 mt-28">
        <h1 className="text-center mb-4 font-futura_bold text-gray text-5xl">Current skills</h1>
        <div>
            <SkillsList />
         
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
