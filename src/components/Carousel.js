import React from 'react'
import styles from './Carousel.module.css'
import {ReactComponent as LeftArrow} from '../assets/icons/left-arrow.svg'
import {ReactComponent as RightArrow} from '../assets/icons/right-arrow.svg'

function Carousel({
  slides
}) {
  return (
    <>
    <div className={styles.carousel}>
      <button className={`${styles.arrow} ${styles.arrowLeft}`}><LeftArrow/></button>
      <button className={`${styles.arrow} ${styles.arrowRight}`}><RightArrow/></button>
      <div className={styles.carouselTrack}>
        {slides.map(s => <>
          <div className={`flex ${styles.slide}`}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={s.image} alt={s.title} />
            </div>
            <div>
              <h3 className={styles.slideTitle}>{s.title}</h3>
              <div className={styles.slideText}>
              {s.text.map(t => <p>{t}</p>)}
            </div>
            </div>
          </div>
        </>)}
      </div>
      <div className={styles.carouselNav}>
        <button className={styles.slideIndicator} />
        <button className={`${styles.slideIndicator} ${styles.slideIndicatorCurr}`} />
      </div>
    </div>
    </>
  )
}

export default Carousel