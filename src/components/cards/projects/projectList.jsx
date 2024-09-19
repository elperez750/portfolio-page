import React from 'react'
import ProjectCard from './projectCard'

// Import project images
import sucasa from "/images/project-images/sucasa.png"
import crownclothing from "/images/project-images/crown-clothing.png"
import ravenous from "/images/project-images/ravenous-site.png"
import kingsman from "/images/project-images/kingsman.png"

// Import skill icons
import html from "/images/skills/html.png"
import css from "/images/skills/css.png"
import nodejs from "/images/skills/nodejs.png"
import sass from "/images/skills/sass.png"
import git from "/images/skills/git.png"
import react from "/images/skills/react.png"
import typescript from "/images/skills/typescript.png"
import tailwind from "/images/skills/tailwind.png"
import bootstrap from "/images/skills/bootstrap.png"
import javascript from "/images/skills/javascript.png"
import next from "/images/skills/nextjs.png"

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
    title: "Kingsman Barber",
    image: kingsman,
    languages: [
      { image: html, name: "HTML" },
      { image: css, name: "CSS" },
      { image: tailwind, name: "Tailwind" },
      { image: git, name: "Git" },
      { image: react, name: "React" },
      { image: typescript, name: "TypeScript" },
      { image: next, name: "Next.js" },
    ],
    description: "Kingsman Barber is a website for a barber shop. Potential clients can view images of past clients, view testimonials, and book an appointment. The website is built using HTML, CSS, TypeScript, and Tailwind CSS.",
    link: "https://kingsmen-barber-site.vercel.app/"
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
    title: "Ravenous Review Site",
    image: ravenous,
    languages: [
      { image: html, name: "HTML" },
      { image: tailwind, name: "Tailwind" },
      { image: typescript, name: "TypeScript" },
      { image: react, name: "React" },
      { image: git, name: "Git" },
    ],
    description: "Yelp clone that allows users to search for restaurants based on location and type of food and other Business based on reviews. The application is built using React, TypeScript, and Tailwind CSS.",
    link: "https://ravenous-elperez750s-projects.vercel.app/"
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