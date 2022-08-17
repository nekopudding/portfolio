import React from 'react'
import styles from './css/Footer.module.css'

function Footer() {
  return (
    <>
    <section className={styles.footer}>
      <div className={`${styles.links} stack`}>
        <a href="https://www.facebook.com/dean.y.ca/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://github.com/nekopudding" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://discordapp.com/users/%E7%8C%AB%E3%81%95%E3%82%93#4190" target="_blank" rel="noopener noreferrer">Discord</a>
      </div>
      <div className={styles.copyright}>© Created by Dean 2022</div>
    </section>
      
    </>
  )
}

export default Footer