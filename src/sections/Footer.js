import React from 'react'
import styles from './css/Footer.module.css'

function Footer() {
  return (
    <>
    <section className={styles.footer}>
      <div className={`${styles.links} stack`}>
        <a href="https://www.facebook.com/dean.y.ca/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://github.com/nekopudding" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
      <div className={styles.copyright}>© Created by Dean 2022</div>
    </section>
      
    </>
  )
}

export default Footer
