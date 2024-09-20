import React from "react";
import Header from "../ui/header";
import ProjectList from "../cards/projects/projectList";

function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header text="My Projects" className="text-blue-600 mb-12 text-center" />
        <div className="max-w-7xl mx-auto">
          <ProjectList />
        </div>
      </div>
    </section>
  );
}

export default Projects;