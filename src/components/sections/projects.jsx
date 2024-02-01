import React from "react";
import Header from "../ui/header";
import ProjectList from "../cards/projects/projectList";
function Projects() {
  return (
    <div id="projects" className="bg-gradient-to-r from-black to-blue h-full pt-20 pr-4 pl-4 desktop:pr-20 desktop:pl-20">
      <Header text="My Projects" />
     
      <ProjectList />


    
    </div>
  );
}

export default Projects;
