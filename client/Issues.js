
import React from 'react'
import letters from './static/letters.json'
import { useLayoutEffect } from 'react'

//ISSUES
const Issues = () => {
  
  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
        <h1 className='page-heading'>Details on the Issues</h1>
        <div id='issues-container'>
            <div id='letters'>
                {
                    letters.map((l) => {
                        return (
                            <div href={l.url} className='letter' key={l.title}>
                                <h2>{l.title}</h2>
                                <h3>{l.author} - {l.date}</h3>
                                <p>{l.content}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='corner-photo'>
                <img id='issues-plan' src='./images/plan-2.png' alt='plan'/>
            </div>
        </div>
    </div>
  )
}

export default Issues

