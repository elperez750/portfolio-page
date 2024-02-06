import React from "react";
import Header from "../ui/header";
import Button from "../ui/button";
import SkillsList from "../cards/skills/skillsList";
function About() {
  return (
    <div id="about" className="bg-gradient-to-r from-black to-blue h-full">
      <div className="flex flex-col laptop:flex-row justify-between items-center text-gray pl-10 text-center pb-20">
        <div className="flex flex-col p-10 justify-center items-center mt-0">
          <Header text="About Me" />
          <p className="text-gray font-futura text-lg tablet:text-2xl my-8 max-w-lg">
            My name is Elliott and I am currently studying Software Development
            at Bellevue College. I have a deep passion for Web Development and
            UX/UI design. When I am not on my computer, I am at the gym or
            reading a book.
          </p>

          <div className="justify-center items-center">
            {" "}
            <a href="#contact">
            <Button text="Contact Me" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-28 pl-5 pr-5 ">
          <h1 className="text-center mb-4 font-futura_bold text-gray text-4xl desktop:text-7xl">
            Current skills
          </h1>
          <div>
            <SkillsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
