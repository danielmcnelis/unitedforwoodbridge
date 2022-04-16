
import React from 'react'
import letters from './static/letters.json'
import { useLayoutEffect } from 'react'

//ISSUES
const Issues = () => {
  
  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
        <h1 className='page-heading'>The Issues</h1>
        <div id='issues-container'>
            <div id='letters'>
                {
                    letters.map((letter) => {
                        return (
                            <div className='letter' key={letter.title}>
                                <a href={letter.url} target='_blank' rel='noreferrer'>
                                    <h2>{letter.title}</h2>
                                </a>
                                <h3>{letter.author} - {letter.date}</h3>
                                <p>{letter.content}</p>
                                <div className='divider'/>
                            </div>
                        )
                    })
                }
            </div>
            <div className='corner-photo'>
                <img id='issues-plan' src='/images/plan-2.png' alt='arbor haven plan for housing development'/>
            </div>
        </div>
    </div>
  )
}

export default Issues

