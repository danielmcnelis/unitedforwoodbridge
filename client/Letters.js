
import letters from './static/letters.json'
import React, { useLayoutEffect } from 'react'

//LETTERS
const Letters = () => {
  
  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
        <h1 className='page-heading'>Letters to the Editor</h1>
        <div id='letters-container'>
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
                <img id='letters-plan' src='/images/plan-2.jpg' alt='arbor haven plan for housing development'/>
            </div>
        </div>
    </div>
  )
}

export default Letters

