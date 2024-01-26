import React from "react";
import python from "/images/skills/python.png";
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
import SkillsCard from "./skillsCard";

const skills = [
  {
    src: python,
    name: "Python",
   
  },
  {
    src: html,
    name: "HTML",
   
  },
  {
    src: css,
    name: "CSS",
   
  },
  {
    src: nodejs,
    name: "NodeJS",
   
  },
  {
    src: sass,
    name: "SASS",
   
  },
  {
    src: git,
    name: "Git",
   
  },
  {
    src: react,
    name: "React",
   
  },
  {
    src: c,
    name: "C#",
    
  },
  {
    src: typescript,
    name: "Typescript",
   
  },
  {
    src: tailwind,
    name: "Tailwind CSS",
  
  },
  {
    src: bootstrap,
    name: "Bootstrap",
  
  },
  {
    src: javascript,
    name: "JavaScript",
   
  },
];
function SkillsList() {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      {skills.map((skill, index) => (
        <SkillsCard img={skill.src} skill={skill.name} key={index} imgWidth={"100px"} imgHeight={"100px"} cardWidth={"160px"} cardHeight={"160px"} fontSize={"24px"} fontColor={"White"}/>
      ))}
    </div>
  );
}

export default SkillsList;
