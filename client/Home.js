
import React from 'react'
import { useLayoutEffect } from 'react'

//HOME
const Home = () => {
  
  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
      <h1 className='page-heading'>United for Woodbridge</h1>
      <div id='home-images' className='centered-row-flexbox'>
          <img id='home-pine' src='/images/pine.png' alt='large pine on walking path'/>
          <img id='home-maple' src='/images/maple.png' alt='large maple on walking path'/>
          <img id='home-ice' src='/images/ice.png' alt='frozen pond daytime landscape'/>
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
