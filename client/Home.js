
import React, { useLayoutEffect } from 'react'

//HOME
const Home = () => {
  
  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
      <h1 className='page-heading'>United for Woodbridge</h1>
      <div id='home-images' className='centered-row-flexbox'>
          <img className='medium-vertical' src='/images/milkweed.jpg' alt='milkweed field'/>
          <img className='medium-vertical' src='/images/maple.jpg' alt='large maple on walking path'/>
          <img className='medium-vertical' src='/images/pond-3.jpg' alt='pond sunset landscape'/>
      </div>
      <p id='home-quote'>
          "The town will acquire 150 acres of <b>beautiful, open space to be enjoyed by residents</b> for generations. It would be irresponsible for the Board to allow the property to fall into the hands of developers."
      </p>
      <p id='home-author'>
          -Former First Selectman Ed Sheehy, April 2009
      </p>
    </div>
  )
}

export default Home
