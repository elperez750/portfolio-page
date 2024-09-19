import React from "react";
import ProjectSkillsCard from "../skills/projectSkillsCard";

function ProjectCard({ title, image, languages, description, link }) {
  const cardContent = (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-bold">View Project</span>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-300 mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {languages.map((language, index) => (
            <ProjectSkillsCard
              key={index}
              img={language.image}
              skill={language.name}
            />
          ))}
        </div>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="group transform transition-transform duration-300 hover:-translate-y-2">
      {cardContent}
    </div>
  );
}

export default ProjectCard;