/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'
import { skillsSection } from '../assets/data/section-data'
import styles from './css/Skills.module.css'
import { useEffect } from 'react'
import { addClass, elementIsInView } from '../utils/scrollEffects'

function Skills() {
  const animateOnScroll = () => {
    const section = document.getElementById(skillsSection.id);
    const sectionHeight = section.getBoundingClientRect().height;

    if(elementIsInView(section, sectionHeight/2)) {
      const sectionTitle = document.getElementsByClassName(styles.sectionTitle);
      const sectionTextArray = document.getElementsByClassName(styles.sectionText)[0].children;
      
      addClass(sectionTitle,styles.inView);
      addClass(sectionTextArray,styles.inView,300,200);
    }
  }
  useEffect(()=> {
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll)
  },[])
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