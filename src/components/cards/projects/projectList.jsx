import React from 'react'
import sucasa from "/images/project-images/sucasa.png";
import smartbrain from "/images/project-images/smartbrain.png";
import crownclothing from "/images/project-images/crown-clothing.png";
import ProjectCard from './projectCard';
import html from "/images/skills/html.png";
import css from "/images/skills/css.png";
import nodejs from "/images/skills/node.png";
import sass from "/images/skills/sass.png";
import git from "/images/skills/git.png";
import react from "/images/skills/react.png";
import c from "/images/skills/c.png";
import typescript from "/images/skills/typescript.png";
import tailwind from "/images/skills/tailwind.png";
import bootstrap from "/images/skills/bootstrap.png";
import javascript from "/images/skills/javascript.png";

const languagesSucasa = [
    
      
    {
      image: html,
      name: "HTML",
     
    },
    {
      image: css,
      name: "CSS",
     
    },
    
    {
      image: git,
      name: "Git",
     
    },
    {
      image: react,
      name: "React",
     
    },
   
   
   
    {
      image: bootstrap,
      name: "Bootstrap",
    
    },
    {
      image: typescript,
      name: "TypeScript",
     
    },

]

const languagesSmartbrain = [
    {
        image: html,
        name: "HTML",
    }
    ,
    {
        image: css,
        name: "CSS",
    },
    {
        image: sass,
        name: "SASS",
    },
    {
        image: git,
        name: "Git",
    },
    {
        image: react,
        name: "React",
    }
    ,
    {
        image: bootstrap,
        name: "Bootstrap",
    },
    {
        image: javascript,
        name: "JavaScript",
    },
    {
        image: nodejs,
        name: "NodeJS",
    }
    
]

const languagesCrownclothing = [
    {
        image: html,
        name: "HTML",
    }
    ,{
        image: css,
        name: "CSS",
    },
    {
        image: sass,
        name: "SASS",
    },
    {
        image: git,
        name: "Git",
    },
    {
        image: react,
        name: "React",
    },
    {
        image: bootstrap,
        name: "Bootstrap",
    },
    {
        image: javascript,
        name: "JavaScript",
    }

    ]


const projects = [
    {
        id: 1,
        title: "Sucasa",
        image: sucasa,
        languages: languagesSucasa,
    },
    {
        id:2,
        title: "SmartBrain",
        image: smartbrain,
        languages: languagesSmartbrain,
    },
    {
        id:3,
        title: "Crown Clothing",
        image: crownclothing,
        languages: languagesCrownclothing,
    },
    
    
]





function ProjectList() {
  return (
    <div className="flex space-between gap-10 justify-evenly mt-20">
        {projects.map(project => (
            <ProjectCard key={project.id} title={project.title} image={project.image} languages={project.languages}/>
        ))}
    </div>
  )
}

export default ProjectList