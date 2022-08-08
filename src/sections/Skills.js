import React from 'react'
import { skillsSection } from '../assets/data/section-data'
import styles from './Skills.module.css'

function Skills() {
  return (
    <>
      <section id={skillsSection.id} className={styles.section}>
        <div className={`flex ${styles.container}`}>
          <div>
            <h2 className={styles.sectionTitle}>{skillsSection.title}</h2>
            <div className={styles.sectionText}>
              {skillsSection.text.map(t => <p>{t}</p>)}
            </div>
          </div>
          <div className={styles.skillbarContainer}>
            <div className={`stack ${styles.skillbar}`}>
              <h3>Frontend</h3>
              <div className={`${styles.bar} ${styles.frontend}`}></div>
            </div>
            <div className={`stack ${styles.skillbar}`}>
              <h3>ReactJS</h3>
              <div className={`${styles.bar} ${styles.reactJs}`}></div>
            </div>
            <div className={`stack ${styles.skillbar}`}>
              <h3>Backend</h3>
              <div className={`${styles.bar} ${styles.backend}`}></div>
            </div>
            <div className={`stack ${styles.skillbar}`}>
              <h3>Testing</h3>
              <div className={`${styles.bar} ${styles.testing}`}></div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Skills