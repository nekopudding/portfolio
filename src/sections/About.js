import React from 'react'
import styles from './css/About.module.css'
import { aboutSection } from '../assets/data/section-data'

function About() {
  return (
    <>
    <section id={aboutSection.id} className={styles.section}>
      <div className={`flex ${styles.container}`}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={aboutSection.image} alt={aboutSection.id} />
        </div>
        <div className={` stack ${styles.textBlock}`}>
          <h2 className={styles.sectionTitle}>{aboutSection.title}</h2>
          <div className={styles.sectionText}>
            {aboutSection.text.map(t => <p key={t} className={styles.text}>{t}</p>)}
          </div>
          <div className={styles.buttonContainer}>
            <button className={`button-text button-outline`}>
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default About