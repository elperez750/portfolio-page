import React from "react";
import SkillsCard from "./SkillsCard";

// Import all skill icons
import python from "/images/skills/python.png";
import html from "/images/skills/html.png";
import css from "/images/skills/css.png";
import nodejs from "/images/skills/nodejs.png";
import sass from "/images/skills/sass.png";
import git from "/images/skills/git.png";
import react from "/images/skills/react.png";
import c from "/images/skills/c.png";
import typescript from "/images/skills/typescript.png";
import tailwind from "/images/skills/tailwind.png";
import javascript from "/images/skills/javascript.png";
import next from "/images/skills/nextjs.png";

const skills = [
  { src: python, name: "Python" },
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: nodejs, name: "NodeJS" },
  { src: sass, name: "SASS" },
  { src: git, name: "Git" },
  { src: react, name: "React" },
  { src: c, name: "C#" },
  { src: typescript, name: "TypeScript" },
  { src: tailwind, name: "Tailwind CSS" },
  { src: javascript, name: "JavaScript" },
  { src: next, name: "Next.js" }
];

function SkillsList() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillsCard
            key={index}
            img={skill.src}
            skill={skill.name}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsList;