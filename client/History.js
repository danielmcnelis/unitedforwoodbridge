
import React from 'react'
import history from './static/history.json'
import { useLayoutEffect } from 'react'

//HISTORY
const History = () => {

  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
        <h1 className='page-heading'>History of the Town Land</h1>
        <div id='history-container'>
            <div id='timeline'>
                {
                    history.map((h) => {
                        return (
                            <div className='history' key={h.date}>
                                <h3>{h.date}</h3>
                                <p>{h.summary}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='corner-photo'>
                <img id='history-deer' src='./images/deer-3.png' alt='deer'/>
            </div>
        </div>
    </div>
  )
}

export default History
