import React from "react";
import ProjectSkillsCard from "../skills/projectSkillsCard";

function ProjectCard({ title, image, languages, description }) {
  return (
    <div className="relative desktop:hover:scale-105 transition-all duration-500 cursor-pointer p-3">
      <div className="absolute inset-0 bg-soft_blue w-auto rounded-2xl z-0 left-10 top-6"></div>
      <div className="relative z-10 font-futura">
        {/* Set fixed dimensions and use object-fit to maintain aspect ratio */}
        <div className="w-full h-48 tablet:h-64 overflow-hidden">
          <img
            src={image}
            alt="project"
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>
        <div className="bg-gray p-4 rounded-b-2xl">
          <h1 className="text-center text-lg desktop:text-3xl font-bold font-futura_demi text-blue mb-5">
            {title}
          </h1>
          <p className="pt-5 pb-5 text-center text-base">{description}</p>
          <div className="grid grid-cols-2 grid-flow-rows gap-4 tablet:grid-cols-4 tablet:grid-flow-row">
            {languages.map((language, index) => (
              <ProjectSkillsCard
                img={language.image}
                skill={language.name}
                key={index}
                fontColor={"#4C516D"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
