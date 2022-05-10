
import React, { useLayoutEffect } from 'react'
import reasons from './static/reasons.json'

//REASONS
const Reasons = () => {
  
  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
        <h1 className='page-heading'>Top 10 Reasons to Keep Our Public Land</h1>
        <div id='reasons-container'>
            <div id='reasons'>
                {
                    reasons.map((reason, index) => {
                        return (
                            <div className='letter' key={reason.title}>
                                <h2>{index + 1}) {reason.title}</h2>
                                <p>{reason.content}</p>
                                <div className='divider'/>
                            </div>
                        )
                    })
                }
            </div>
            <div className='corner-photo'>
                <img id='reasons-field' src='/images/milkweed.jpg' alt='milkweed field'/>
            </div>
        </div>
    </div>
  )
}

export default Reasons

