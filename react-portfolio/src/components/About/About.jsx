import React from 'react'

import cursoIcon from '../../assets/cursoIcon.png'
import serverIcon from '../../assets/serverIcon.png'
import designIcon from '../../assets/designIcon.png'

import style from './About.module.css'

function About() {
  return (
    <section className={style.aboutSection} id="about">
      <h2 className={style.aboutTitle}>About Me</h2>
      <div className={style.aboutContent}>
        <ul className={style.aboutList}>
            <li className={style.aboutItem}>
                <img src={cursoIcon} alt="Curso Icon" />
                <div className={style.aboutDetails}>
                    <h3>Frontend Developer</h3>
                    <p>Detail 1 about being a frontend developer.</p>
                </div>
            </li>
            <li className={style.aboutItem}>
                <img src={serverIcon} alt="Server Icon" />
                <div className={style.aboutDetails}>
                    <h3>Backend Developer</h3>
                    <p>Detail 2 about being a backend developer.</p>
                </div>
            </li>
            <li className={style.aboutItem}>
                <img src={designIcon} alt="Design Icon" />
                <div className={style.aboutDetails}>
                    <h3>UI Designer</h3>
                    <p>Detail 3 about being a UI designer.</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default About