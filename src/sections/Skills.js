/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'
import { skillsSection } from '../assets/data/section-data'
import styles from './css/Skills.module.css'

function Skills() {
  return (
    <>
      <section id={skillsSection.id} className={styles.section}>
        <div className={styles.container}>
          <div>
            <h2 className={styles.sectionTitle} css={css`
              @media (max-width: 1080px) {
                display: none;
              }
            `}>{skillsSection.title}</h2>
            <div className={styles.sectionText}>
              {skillsSection.text.map(t => <p key={t}>{t}</p>)}
            </div>
          </div>
          <div className={styles.skillbarContainer}>
            <div className={styles.skillbar}>
              <h3 className={styles.skillbarText}>Frontend</h3>
              <div className={`${styles.bar} ${styles.frontend}`}></div>
            </div>
            <div className={styles.skillbar}>
              <h3 className={styles.skillbarText}>ReactJS</h3>
              <div className={`${styles.bar} ${styles.reactJs}`}></div>
            </div>
            <div className={styles.skillbar}>
              <h3 className={styles.skillbarText}>Backend</h3>
              <div className={`${styles.bar} ${styles.backend}`}></div>
            </div>
            <div className={styles.skillbar}>
              <h3 className={styles.skillbarText}>Testing</h3>
              <div className={`${styles.bar} ${styles.testing}`}></div>
            </div>
          </div>
          <h2 className={styles.sectionTitle} css={css`
              @media (min-width: 1081px) {
                display: none;
              }
          `}>{skillsSection.title}</h2>
        </div>
      </section>
    </>
  )
}

export default Skills