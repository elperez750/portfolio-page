import React from 'react'
import sucasa from "/images/project-images/sucasa.png";
import smartbrain from "/images/project-images/smartbrain.png";
import crownclothing from "/images/project-images/crown-clothing.png";
import ProjectCard from './projectCard';
import html from "/images/skills/html.png";
import css from "/images/skills/css.png";
import nodejs from "/images/skills/nodejs.png";
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
        description: "Sucasa is a website that introduces and explains the process of painting with the company Sucasa Paint and Roofcare. The website is built using HTML, CSS, TypeScript, and Bootstrap.",
    },
    {
        id:2,
        title: "SmartBrain",
        image: smartbrain,
        languages: languagesSmartbrain,
        description: "Smart Brain is a web application that allows users to upload celebrity photos where the AI can detect the celebrities in the photo. The application is built using React, NodeJS, HTML, and CSS."
    },
    {
        id:3,
        title: "Crown Clothing",
        image: crownclothing,
        languages: languagesCrownclothing,
        description: "Ecommerce website with all kinds of products. Crown Clothing is a website where you can find all kinds of clothing you want to buy. Organized into easily navigable categories and subcategories"
    },
    
    
]





function ProjectList() {
  return (
    <div className="flex flex-col laptop:flex-row gap-10 mt-5 desktop:mt-10">
        {projects.map(project => (
            <ProjectCard key={project.id} title={project.title} image={project.image} languages={project.languages} description={project.description}/>
        ))}
    </div>
  )
}

export default ProjectList