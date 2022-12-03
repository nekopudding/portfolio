/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import styles from './css/Navbar.module.css'
import {ReactComponent as CloseIcon} from "../assets/icons/close.svg"
import { windowResizeListener } from '../utils/windowResizeListener';

function Navbar() {
  const [menuOpen,setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  useEffect(() => windowResizeListener(closeMenu),[])

  useEffect(() => {
    const body = document.querySelector('body');
    if (menuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  },[menuOpen])
  
  return (
    <>
      <section className={`flex ${styles.navbar}`}>
        <h1>Dean Yang</h1>
        <div className={`flex ${styles.navbarLinks}`}>
          <a href="#about" >About</a>
          <a href="#skills" >Skills</a>
          <a href="#projects" >Projects</a>
          <a href="#contact" >Contact</a>
          <a href="https://nekopudding6.ca/engineering/">Blog</a>
        </div>
        {!menuOpen ?
          <div onClick={openMenu} className={styles.menuButton}><div className={styles.menuIcon} /></div>
          :
          <div className={styles.closeButton}>
            <CloseIcon onClick={closeMenu}/>
          </div>
        }
        
        <div className={styles.menu} css={css`
          display: ${menuOpen ? 'flex' : 'none'};
        `}>
          <div className={`stack ${styles.menuLinks}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu} >Contact</a>
            <a href="https://nekopudding6.ca/engineering/" onClick={closeMenu}>Blog</a>
          </div>
        </div>
      </section>
      <div className={styles.menuTint} css={css`
        height: ${document.body.scrollHeight}px;
        pointer-events: ${menuOpen ? 'auto' : 'none'};
        opacity: ${menuOpen ? 1 : 0};
      `}/>
    </>
  )
}

export default Navbar
