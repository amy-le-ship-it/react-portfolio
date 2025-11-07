import React from 'react'

import email from "../../assets/email.png"
import linkedin from  "../../assets/linkedin.png"
import github from  "../../assets/github.png"

import style from './Contact.module.css'

function Contact() {
  return (
    <footer className={style.footer} id="contact">
      <div className={style.container}>
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, feel free to reach out!</p>
        <ul className={style.contactList}>
          <li className={style.contactItem}>
            <img src={email} alt="Email Icon" />
            <a href="mailto:nthuyngoc2002@gmail.com">nthuyngoc2002@gmail.com</a>
          </li>
          <li className={style.contactItem}>
            <img src={linkedin} alt="LinkedIn Icon" />
            <a href="https://www.linkedin.com/in/example">linkedin.com/in/example</a>
          </li>
          <li className={style.contactItem}>
            <img src={github} alt="GitHub Icon" />
            <a href="https://github.com/example">github.com/example</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Contact
