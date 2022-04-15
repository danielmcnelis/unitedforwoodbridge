
import React from 'react'
import { useLayoutEffect } from 'react'

//CONTACT
const Contact = () => {
  
  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
      <h1 className='page-heading'>Contact Us</h1>
      <div id='contact-container'>
        <div>
            <p className='contact-info'>{'Cathy Wick\n*coming soon*'}</p>
            <p className='contact-info'>{'Paul Harrigan\n*coming soon*'}</p>
            <p className='contact-info'>{'Adrienne Micci-Smith\n*coming soon*'}</p>
        </div>
        <div>          
          <img id='contact-tanager' src='./images/tanager-2.png' alt='maple'/>
        </div>
      </div>
      <p id='contact-contribution'>
        If you would like to make a donation to our committee, or get involved, please download and fill out this form.
      </p>
      <div id='download-button-container'>
        <a
          id='download-button'
          href='./Contribution and Contact Form.pdf'
          download='Contribution and Contact Form.pdf'
        >
          Download Form
        </a>
      </div>
    </div>
  )
}

export default Contact
