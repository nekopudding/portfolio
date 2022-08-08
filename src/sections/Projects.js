import React from 'react'
import styles from './Projects.module.css'
import { projectsSection } from '../assets/data/section-data'

function Projects() {
  return (
    <>
      <section id={projectsSection.id} className={styles.section}>
        <div>
          <h2 className={styles.sectionTitle}>{projectsSection.title}</h2>
          <div className={`flex ${styles.container}`}>

            <div className={styles.imgContainer}>
              <img className={styles.img} src={projectsSection.projects[0].image} alt={projectsSection.projects[0].title} />
            </div>
            <div>
              <h3 className={styles.projectTitle}>{projectsSection.projects[0].title}</h3>
              <div className={styles.projectText}>
              {projectsSection.projects[0].text.map(t => <p>{t}</p>)}
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects