import React from 'react'
import style from './Hero.module.css'

import heroImage from '../../assets/heroImage.jpg'
function Hero() {
  return (
    <section className={style.heroSection}>
        <div className={style.heroContent}>
            <h1 className={style.heroTitle}>Hi, I'm Amy Le</h1>
            <p className={style.heroDescription}>I'm a fresher in web development. Reach out if you'd like to collaborate!</p>
            <a className={style.heroContact} href="mailto:nthuyngoc2002@gmail.com">Contact Me</a>
        </div>
        <img className={style.heroImage} src={heroImage} alt="Hero" />
        <div className={style.topBlur}></div>
        <div className={style.bottomBlur}></div>
    </section>
  )
}

export default Hero