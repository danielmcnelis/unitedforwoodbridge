/* eslint-disable max-statements */

import React, { useLayoutEffect } from 'react'
import {Link} from 'react-router-dom'

const Issues = () => {

  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
      <h1 className='page-heading'>The Issues</h1>
      <div className="issues-menu">
          <div>
            <Link to={`/letters/`} className="issues-link">
                <div className="issues-button">
                    <div>Letters to the Editor</div>
                </div>
            </Link>
          </div>
          <div>
            <Link to={`/housing/`} className="issues-link">
                <div className="issues-button">
                    <div>Affordable Housing</div>
                </div>
            </Link>
          </div>
          <div>
            <Link to={`/public-land/`} className="issues-link">
                <div className="issues-button">
                    <div>Keep Public Land</div>
                </div>
            </Link>
          </div>
      </div>
      
      <div id='home-images' className='centered-row-flexbox'>
          <img id='home-ice' src='/images/snail.jpg' alt='frozen pond daytime landscape'/>
          <img id='home-pine' src='/images/frog.jpg' alt='large pine on walking path'/>
          <img id='home-maple' src='/images/heron.jpg' alt='large maple on walking path'/>
      </div>
      
    </div>
  )
}

export default Issues