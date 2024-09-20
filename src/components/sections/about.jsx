import React from "react";
import { motion } from "framer-motion";
import Header from "../ui/header";
import Button from "../ui/button";
import SkillsList from "../cards/skills/skillsList";
import DescriptionList from "../cards/description/descriptionList";

function About() {
  return (
    <section id="about" className="py-20 ">
      <DescriptionList />

      <div className="container mx-auto px-4 mt-10">
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <Header text="About Me" className="text-blue-300 mb-6" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="font-futura text-lg sm:text-xl lg:text-2xl mb-6 max-w-2xl mx-auto lg:mx-0">
                My name is Elliott and I am currently studying Software Development
                at Bellevue College. I have a deep passion for Web Development
                and UX/UI design. When I am not on my computer, I am at the gym or
                reading a book.
              </p>
              <p className="font-futura text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0">
                My journey in software development has been driven by curiosity and a desire to create meaningful digital experiences. I'm constantly exploring new technologies and methodologies to enhance my skills and stay at the forefront of the ever-evolving tech landscape. I believe in the power of clean, efficient code and user-centric design to solve real-world problems.
              </p>
            </motion.div>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact">
                <Button 
                  text="Let's Connect" 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                />
              </a>
            </div>
          </div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-center mb-8 font-futura_bold text-blue-300 text-3xl sm:text-4xl lg:text-5xl">
              Current Skills
            </h2>
            <SkillsList />
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
}

export default About;