
import React, { useLayoutEffect } from 'react'

//CONTACT
const Contact = () => {
  
  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
      <h1 className='page-heading'>Contact Us</h1>
      <div id='contact-container'>
        <div>
            <p className='contact-info'>E-mail: <a href="mailto:UnitedforWoodbridge@gmail.com">UnitedforWoodbridge@gmail.com</a></p>
            <p className='contact-info'>Facebook: <a href="https://www.facebook.com/profile.php?id=100079291215711">United for Woodbridge</a></p>
        </div>
      </div>

      <div id='home-images' className='centered-row-flexbox'>
          <img className='medium-vertical' src='/images/deer-3.jpg' alt='bobcat staring at camera in tall grass'/>
          <img className='medium-vertical' src='/images/luca-pond.jpg' alt='dog overlooking pond at sunset'/>
          <img className='medium-vertical' src='/images/tanager-2.jpg' alt='scarlet tanager in early spring tree'/>
      </div>

      <p id='contact-contribution'>
        If you would like to make a donation to our committee, or to get involved, please download and fill out this form.
      </p>
      <div id='download-button-container'>
        <a
          id='download-button'
          href='/Contribution and Contact Form.pdf'
          download='Contribution and Contact Form.pdf'
        >
          Download Form
        </a>
      </div>
    </div>
  )
}

export default Contact
