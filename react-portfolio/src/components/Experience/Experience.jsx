import React from "react";

// Import data from JSON files
import skills from "../../components/data/skills.json";
import history from "../../components/data/history.json";
import languages from "../../components/data/languages.json";

// Import images for skills
import jsLogo from "../../assets/JavaScript.png";
import reactLogo from "../../assets/react.png";
import cssLogo from "../../assets/CSS.png";
import htmlLogo from "../../assets/html.png";
import python from "../../assets/python.png";
import nodejs from "../../assets/nodejs.png";
import django from "../../assets/django.png";
import git from "../../assets/git.png";
import sql from "../../assets/sql.png";
import mongodb from "../../assets/mongodb.png";
import dart from "../../assets/dart.png";

// Map company names to their corresponding images
import techSolutions from "../../assets/tech_solutions.jpeg";
import webCreators from "../../assets/webCreators.jpeg";
import startupHub from "../../assets/startupHub.jpeg";

// Import CSS module
import styles from "./Experience.module.css";

const imageMap = {
  JavaScript: jsLogo,
  React: reactLogo,
  CSS: cssLogo,
  HTML: htmlLogo,
  Python: python,
  NodeJS: nodejs,
  Django: django,
  Git: git,
  SQL: sql,
  MongoDB: mongodb,
  Dart: dart
};

const imageMapCompanies = {
  "Tech Solutions": techSolutions,
  "Web Creators": webCreators,
  "Startup Hub": startupHub,
};

const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillImage}>
                <img src={imageMap[skill.imageSrc]} alt={skill.name} />
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p className={styles.skillLevel}>{skill.level}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((item, index) => (
            <li key={index} className={styles.historyItem}>
              <img src={imageMapCompanies[item.imageSrc]} alt={item.company} />
              <div className={styles.historyContent}>
                <h3 className={styles.historyTitle}>{`${item.role}, ${item.company}`}</h3>
                <p className={styles.historyDuration}>{item.duration}</p>
                <p className={styles.historyDescription}>{item.description}</p>
                <ul className={styles.experienceList}>
                  {item.experiences.map((exp, i) => (
                    <li key={i}>{exp}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <ul className={styles.languages}>
          {languages.map((lang, index) => (
            <li key={index}>
              <h3 className={styles.languageName}>{lang.name}</h3>
              <p className={styles.languageProficiency}>{lang.proficiency}</p>
              <p className={styles.languageIcon}>{lang.icon}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
