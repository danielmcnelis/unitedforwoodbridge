
import React, { useLayoutEffect } from 'react'
import history from './static/history.json'

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
                    history.map((hist) => {
                        return (
                            <div className='history' key={hist.date}>
                                <h3>{hist.date}</h3>
                                <p>{hist.summary}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='corner-photo'>
                <img className='medium-vertical' src='/images/pond.jpg' alt='pond in autumn'/>
            </div>
        </div>
    </div>
  )
}

export default History
