/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import styles from './Carousel.module.css'
import {ReactComponent as LeftArrow} from '../assets/icons/left-arrow.svg'
import {ReactComponent as RightArrow} from '../assets/icons/right-arrow.svg'
import { css } from '@emotion/react'
import { windowAnyResizeListener } from '../utils/windowResizeListener'
import { useRef } from 'react'

function Carousel({
  slides,
  autoScroll
}) {
  const [slideWidth,setSlideWidth] = useState(0);
  const [currIndex,setCurrIndex] = useState(0);
  const currIndexRef = useRef(0);

  const getNextIndex = (index) => {
    if (index >= (slides.length - 1)) {
      return 0;
    } else {
      return index + 1;
    }
  }
  const getPrevIndex = (index) => {
    if (index <= 0) {
      return slides.length -1;
    } else {
      return index - 1;
    }
  }

  const handleTrackResize = () => {
    const track = document.querySelector(`.${styles.carouselTrack}`);
    const trackWidth = track.getBoundingClientRect().width;
    track.style.transform = `translateX(${-trackWidth * currIndexRef.current}px)`; //makes sure transform is up to date
    setSlideWidth(trackWidth);
  }

  const changeSlide = (index) => {
    const track = document.querySelector(`.${styles.carouselTrack}`);
    track.style.transform = `translateX(${-slideWidth * index}px)`;
    setCurrIndex(index);
    currIndexRef.current = index;
  }

  const goToNextSlide = () => {
    changeSlide(getNextIndex(currIndex));
  }
  const goToPrevSlide = () => {
    changeSlide(getPrevIndex(currIndex));
  }
  
  useEffect(() => {
    handleTrackResize();
    windowAnyResizeListener(handleTrackResize);
  },[])
  
  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(goToNextSlide,8000)
      return () => clearInterval(interval);
    }
  },[currIndex])

  return (
    <>
    <div className={styles.carousel}>
      <button className={`
        ${styles.arrow} 
        ${styles.arrowLeft} 
        ${currIndex === 0 && styles.arrowDisable}
      `} onClick={goToPrevSlide}><LeftArrow/></button>
      <button className={`
        ${styles.arrow} 
        ${styles.arrowRight} 
        ${(currIndex === slides.length - 1) && styles.arrowDisable}
      `} onClick={goToNextSlide}><RightArrow/></button>
      <div className={styles.carouselTrack}>
        {slides.map((s,index) => 
          <div key={s.id} className={styles.slide} 
            css={css`
              left: ${slideWidth * index + 'px'};
              opacity: ${(index === currIndex) ? 1 : 0};
            `}
          >
            <div className={styles.imgContainer}>
              <img className={styles.img} src={s.image} alt={s.title} />
            </div>
            <div>
              <h3 className={styles.slideTitle}>{s.title}</h3>
              <h4 className={styles.slideDate}>{s.date}</h4>
              <div className={styles.slideText}>
                {s.text.map(t => <p key={t}>{t}</p>)}
              </div>
              {
                s.link &&
                <div className={styles.linkContainer}>
                  <a className={styles.link} href={s.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              }
            </div>
          </div>
        )}
      </div>
      <div className={styles.carouselNav}>
        {
          slides.map((s,index) => 
            <div key={s.id} className={styles.ringOutline} onClick={()=>changeSlide(index)}>
              <div className={`${styles.slideIndicator} ${index === currIndex && styles.slideIndicatorCurr}`} />
            </div>
          ) 
        }
      </div>
    </div>
    </>
  )
}

export default Carousel