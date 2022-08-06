import React from 'react'
import styles from './About.module.css'
import { aboutSection } from '../assets/data/section-data'

function About() {
  return (
    <>
    <section id={aboutSection.id} className={styles.section}>
      <div className={`flex ${styles.aboutContainer}`}>
        <img className={styles.aboutImg} src={aboutSection.image} alt={aboutSection.id} />
        <div className={` stack ${styles.aboutTextBlock}`}>
          <h2 className={styles.sectionTitle}>{aboutSection.title}</h2>
          <div className={styles.sectionText}>
            {aboutSection.text.map(t => <p className={styles.text}>{t}</p>)}
          </div>
          <div className={styles.buttonContainer}>
            <button className={`button-text button-outline`}>Contact Me</button>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default About