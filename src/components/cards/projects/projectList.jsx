import React from 'react'
import ProjectCard from './projectCard'

// Import project images
import sucasa from "/images/project-images/sucasa.png"
import crownclothing from "/images/project-images/crown-clothing.png"
import kingsman from "/images/project-images/kingsman.png"
import jamming from "/images/project-images/jamming.png"
import nike from "/images/project-images/nike.png"
import wta from "/images/project-images/wta.png"
// Import skill icons
import html from "/images/skills/html.png"
import css from "/images/skills/css.png"
import sass from "/images/skills/sass.png"
import git from "/images/skills/git.png"
import react from "/images/skills/react.png"
import typescript from "/images/skills/typescript.png"
import tailwind from "/images/skills/tailwind.png"
import bootstrap from "/images/skills/bootstrap.png"
import javascript from "/images/skills/javascript.png"
import next from "/images/skills/nextjs.png"
import python from "/images/skills/python.png"
import chess from "/images/project-images/chess.png"
import nodejs from "/images/skills/nodejs.png"

const projects = [
  {
    id: 1,
    title: "Sucasa",
    image: sucasa,
    languages: [
      { image: html, name: "HTML" },
      { image: css, name: "CSS" },
      { image: git, name: "Git" },
      { image: react, name: "React" },
      { image: bootstrap, name: "Bootstrap" },
      { image: typescript, name: "TypeScript" },
    ],
    description: "Sucasa is a website that introduces and explains the process of painting with the company Sucasa Paint and Roofcare. The website is built using HTML, CSS, TypeScript, and Bootstrap.",
    link: "https://sucasa-paint-osert47nn-elperez750s-projects.vercel.app/"
  },
  {
    id: 2,
    title: "Washington State Trail App",
    image: wta,
    languages: [
      { image: html, name: "HTML" },
      { image: css, name: "CSS" },
      { image: tailwind, name: "Tailwind" },
      { image: git, name: "Git" },
      { image: react, name: "React" },
      { image: typescript, name: "TypeScript" },
      { image: nodejs, name: "Node.js" },
    ],
    description: "The Washington State trail app is a website that allows users to search for trails in Washington State. The website is built using HTML, CSS, TypeScript, React, and Node.js.",
    link: "https://trail-finder-washington-client.vercel.app"
  },
  {
    id: 3,
    title: "Crown Clothing",
    image: crownclothing,
    languages: [
      { image: html, name: "HTML" },
      { image: css, name: "CSS" },
      { image: sass, name: "SASS" },
      { image: git, name: "Git" },
      { image: react, name: "React" },
      { image: bootstrap, name: "Bootstrap" },
      { image: javascript, name: "JavaScript" },
    ],
    description: "Ecommerce website with all kinds of products. Crown Clothing is a website where you can find all kinds of clothing you want to buy. Organized into easily navigable categories and subcategories",
    link: "https://crown-clothing-git-master-elperez750s-projects.vercel.app/"
  },
  
  {
    id: 4,
    title: "Jamming",
    image: jamming,
    languages: [
      { image: html, name: "HTML" },
      { image: css, name: "CSS" },
      { image: git, name: "Git" },
      { image: react, name: "React" },
      { image: typescript, name: "TypeScript" },
      { image: next, name: "Next.js" },
      { image: tailwind, name: "Tailwind" },

    ],
    description: "Jamming is a website that allows users to search for songs on Spotify, create a playlist, and save it to their Spotify account. The website is built using HTML, CSS, TypeScript, and React.",
    link: "https://jamming-elperez750s-projects.vercel.app/"
  },
  {
    id:5,
    title: "Nike Clone",
    image: nike,
    languages: [
      { image:html, name: "HTML"},
      { image:tailwind, name: "Tailwind"},
      { image: git, name:"Git"},
      { image: react, name: "React" },
      { image: javascript, name: "Javascript" },

    ],
    description: "This application was a Nike clone, styled using Tailwind CSS. It served as a practice project to enhance skills in responsive design, ensuring that the layout adapted across various devices and screen sizes. ",
    link: "https://nike-rho-fawn.vercel.app/"
  },
  {
    id: 6, 
    title: "Chess Game",
    image: chess,
    languages: [
      {image: python , name: "Python"},
    ],
    description: "This chess game was created using Python. It was a practice project to enhance skills in Python programming and to learn more about the game of chess. It was a capstone project for my STEM 298 class at Everett Community College.",
    link: "https://github.com/elperez750/chess"
  }
]

function ProjectList() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            languages={project.languages}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectList