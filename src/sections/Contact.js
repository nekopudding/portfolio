import React from 'react'
import { useState } from 'react'
import { contactSection } from '../assets/data/section-data'
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

  return (
    <>
      <section id={contactSection.id} className={styles.section}>
        <h2 className={styles.sectionTitle}>Send Me A Message</h2>
        <form className={styles.form} 
          target='_blank'
          action='https://formsubmit.co/6dba35be5750caf0540c007955da9c13'
          method='POST'
        >
          <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I will get back to you soon."/>
          <input type="hidden" name="_subject" value={formData.subject}/>
          <input type="hidden" name="_next" value="https://nekopudding-org.github.io/portfolio"/>

          <input className={styles.input} type="text" placeholder='Name' name='name'
            value={formData.name} onChange={handleInputChange} required
          />
          <input className={styles.input} type="email" placeholder='Email' name='email'
            value={formData.email} onChange={handleInputChange} required
          />
          <input className={styles.input} type="text" placeholder='Subject' name='subject'
            value={formData.subject} onChange={handleInputChange} required
          />
          <textarea className={styles.input} placeholder='Message' name='message' rows='4'
            value={formData.message} onChange={handleInputChange} required
          />
          <div className={styles.buttonContainer}>
            <button className={`button-filled ${styles.button}`} type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Contact