import React from "react";

import personal from "../../assets/personal.png";
import fullstack from "../../assets/Fullstack.jpg";
import ecommerce from "../../assets/e-commerce.png";
import dartMovie from "../../assets/dart-movie.png";

import style from "./ProjectCard.module.css"

const ProjectData = {
    Personal: personal,
    Fullstack: fullstack,
    Ecommerce: ecommerce,
    Dart: dartMovie
}   

function ProjectCard({ project }) {
  return (
    <div className={style.card}>
      <img src={ProjectData[project.imageSrc]} alt={project.name} className={style.image} />
      <h3 className={style.title}>{project.title}</h3>
      <p className={style.description}>{project.description}</p>
      <ul className={style.skills}>
        {project.skills.map((skill, skillIndex) => (
          <li key={skillIndex} className={style.skill}>{skill}</li>
        ))}
      </ul>
      <div className={style.links}>
        <a href={project.demoLink} className={style.link}>Live Demo</a>
        <a href={project.codeLink} className={style.link}>View Code</a>
      </div>
    </div>
  );
}

export default ProjectCard;
