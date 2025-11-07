import React, {useState} from 'react'
import styles from './Navbar.module.css'
import menuIcon from '../assets/menu.jpg'
import closeIcon from '../assets/close.png'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={styles.Navbar}>
        <a className={styles.title} href="/">Gnasche</a>
        <div className={styles.links}>
            <img 
                className={styles.menuBtn} 
                src={isMenuOpen ? closeIcon : menuIcon} 
                alt="menu button" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <ul className={`${styles.lists} ${isMenuOpen ? styles.showMenu : ''}`}>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experiences</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar