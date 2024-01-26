import React from "react";
import SkillsCard from "../skills/skillsCard";

function ProjectCard({ title, image, languages }) {
  return (
    <>
      <div className="relative h-full hover:scale-105 transition-all duration-500 cursor-pointer">
        {" "}
        {/* Container */}
        {/* Background Rectangle */}
        <div className="absolute inset-0 bg-soft_blue rounded-2xl z-0 left-10 top-6"></div>
        {/* Image and Text Content */}
        <div className="relative z-10 p-4">
          {" "}
          {/* Higher z-index and padding */}
          <img src={image} alt="project" className="w-full rounded-t-2xl" />
          <div className="bg-gray p-4 rounded-b-2xl">
            <h1 className="text-center text-2xl font-bold text-red-600 font-futura text-blue mb-5">
              {title}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              pariatur quos deserunt illum alias iure velit nam temporibus, odio
              corrupti tempora distinctio, ad natus consequuntur reiciendis
              facere, saepe et quod.
            </p>
            <div className="grid grid-cols-4 grid-flow-rows gap-4">
                {languages.map((language, index) => (
                    <SkillsCard img={language.image} skill={language.name} key={index} imgWidth={"30px"} imgHeight={"30px"} cardWidth={"80px"} cardHeight={"80px"} fontSize={"15px"} fontColor={"#4C516D"}/>
                ))}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
