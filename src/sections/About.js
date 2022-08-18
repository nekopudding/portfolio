import React from 'react'
import styles from './css/About.module.css'
import { aboutSection } from '../assets/data/section-data'
import { useEffect } from 'react';
import { addClass, translateYByDistFromViewportTop } from '../utils/scrollEffects';

function About() {
  const animate = () => {
    const sectionTitle = document.getElementsByClassName(styles.sectionTitle);
    const sectionTextArray = document.getElementsByClassName(styles.sectionText)[0].children;
    const button = document.getElementsByClassName(styles.buttonContainer);
    
    addClass(sectionTitle,styles.inView);
    addClass(sectionTextArray,styles.inView,300,200);
    addClass(button, styles.inView,900);
  }
  const parallaxImg = () => {
    const img = document.getElementsByClassName(styles.img)[0];
    translateYByDistFromViewportTop(img,0.4);
  }
  useEffect(()=> {
    animate();
    parallaxImg();
    window.addEventListener('scroll',parallaxImg);
  },[])
  return (
    <>
    <section id={aboutSection.id} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={aboutSection.image} alt={aboutSection.id} />
        </div>
        <div className={styles.textBlock}>
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