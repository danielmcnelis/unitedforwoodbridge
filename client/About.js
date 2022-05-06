
import React, { useLayoutEffect } from 'react'

//ABOUT
const About = () => {

  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
      <h1 className='page-heading'>We are United for Woodbridge</h1>
      <img id='about-landscape' src='/images/landscape-3.jpg' alt='pine and field landscape overlooking sunset'/>
      <div id='about-container'>
        <h2 className='page-subheading'>Who are we?</h2>
        <p id='about-summary-1'>
          We are a group of longtime residents of Woodbridge, CT. Parents, friends, and neighbors with deep roots in the community. We attended Amity High School, and so did our children. We share a collective love for the town, its tranquility, and its history. 
        </p>
        <h2 className='page-subheading'>What is our mission?</h2>
        <p id='about-summary-2'>
          We are dedicated to preserving the land that was formerly the Woodbridge Country Club, located between Johnson, Ansonia, and Woodfield Roads. We oppose large-scale, cookie-cutter development projects that seek to up-end the beautiful land with which our town was blessed. Many lots for new, single-family homes exist throughout the town. What doesn't exist *anywhere else* is a large, open, wild and beautiful place. We believe this land should be set aside for public use: walkways, recreational sports, fishing, and nature.        
        </p>
        <p id='about-summary-3'>
          If you're unconvinced, drive down with your family and walk the loop around the pond. Breathe in the fresh air and smell the needles of the hundred-year-old pines. Keep your headphones in your pocket and listen to the wind rustling across the plains. And keep your eyes peeled for all sorts of wildlife that have found a rare, undisturbed habitat in Southern Connecticut. We bet you'll agree this land has enormous value to the community.
        </p>
      </div>
    </div>
  )
}

export default About
