
import faqs from './static/faqs.json'
import React, { useLayoutEffect } from 'react'

//LETTERS
const FAQs = () => {
  
  // USE LAYOUT EFFECT
  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className='content'>
        <h1 className='page-heading'>Affordable Housing in Woodbridge - FAQs</h1>
        <div id='faqs-container'>
            <div id='faqs'>
                {   
                    faqs.map((faq, index) => {
                        return (
                            <div className='letter' key={faq.question}>
                                <h2>{index + 1}) {faq.question}</h2>
                                <p>{faq.answer}</p>
                                <div className='divider'/>
                            </div>
                        )
                    })
                }
            </div>
            <div className='corner-photo'>
                <img id='faqs-mcmansion' src='/images/mcmansion.jpg' alt='mcmansion'/>
            </div>
        </div>
        <div id='faqs-container'>
            <div>
                <h2>Further Reading:</h2>
                <p><a href="https://ctmirror.org/2022/02/14/connecticut-needs-more-affordable-housing-8-30g-is-a-law-that-works/">Connecticut Mirror: CT Needs More Affordable Housing (Web Article)</a></p>
                <p>
                    <a
                        href='/Legislative Issue Brief.pdf'
                        download='Legislative Issue Brief.pdf'
                    >
                        Connecticut Legislative Issue Brief (Download PDF)
                    </a>
                </p>
                <p>
                    <a
                        href='/2021 CT Legislative Summary.pdf'
                        download='2021 CT Legislative Summary.pdf'
                    >
                        2021 Connecticut Legislative Summary (Download PDF)
                    </a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default FAQs