import React from 'react'
import { useState } from 'react'
import styles from './css/Contact.module.css'

function Contact() {
  const [formData,setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '' 
  })
  const handleInputChange = (e) => {
    setFormData(prev => {
      return {
        ...prev, 
        [e.target.name]:e.target.value
      }
    })
  }

  const submitForm = () => undefined

  return (
    <>
      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Send Me A Message</h2>
        <div className={styles.form}>
          <input className={styles.input} type="text" placeholder='Name' name='name'
            value={formData.name} onChange={handleInputChange}
          />
          <input className={styles.input} type="email" placeholder='Email' name='email'
            value={formData.email} onChange={handleInputChange}
          />
          <input className={styles.input} type="text" placeholder='Subject' name='subject'
            value={formData.subject} onChange={handleInputChange}
          />
          <textarea className={styles.input} placeholder='Message' name='message' rows='4'
            value={formData.message} onChange={handleInputChange}
          />
          <div className={styles.buttonContainer}>
            <button className={`button-filled ${styles.button}`} type="submit" onClick={submitForm}>Submit</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact