import React from 'react'
import styles from './css/Projects.module.css'
import { projectsSection } from '../assets/data/section-data'
import Carousel from '../components/Carousel'

function Projects() {
  return (
    <>
      <section id={projectsSection.id} className={styles.section}>
        <div>
          <h2 className={styles.sectionTitle}>{projectsSection.title}</h2>
          <Carousel slides={projectsSection.projects}/>
        </div>
      </section>
    </>
  )
}

export default Projects