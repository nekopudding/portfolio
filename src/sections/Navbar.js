/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import styles from './css/Navbar.module.css'
import {ReactComponent as CloseIcon} from "../assets/icons/close.svg"
import { windowResizeListener } from '../utils/windowResizeListener';

const links = [
  {
    title:'About',
    url: '#about'
  },
  {
    title:'Skills',
    url: '#skills'
  },
  {
    title:'Projects',
    url: '#projects'
  },
  {
    title:'Contact',
    url: '#contact'
  },
  {
    title:'Blog',
    url: 'https://nekopudding6.ca/engineering/'
  },
  {
    title:'Resume',
    url: 'https://nekopudding.github.io/resume/resume2.html'
  },
]

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
          {links.map(l => <a key={l.title} href={l.url} onClick={closeMenu}>{l.title}</a>)}
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
            {links.map(l => <a key={l.title} href={l.url} onClick={closeMenu}>{l.title}</a>)}
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
