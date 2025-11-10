import React from 'react'

import projects from "../data/projects.json";

import style from "./Project.module.css"

/* Map through the projects data and display each project's details */
import personal from "../../assets/personal.png";
import ecommerce from "../../assets/e-commerce.png";
import dartMovie from "../../assets/dart-movie.png";
import ProjectCard from './ProjectCard';

const ProjectData = {
    Personal: personal,
    Ecommerce: ecommerce,
    Dart: dartMovie
}


function Projects() {
  return (
    <section className={style.container} id="projects">
        <h2 className={style.title}>Projects</h2>
        <div className={style.projectList}>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </section>
  )
}

export default Projects;