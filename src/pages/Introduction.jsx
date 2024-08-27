import React from 'react'
import htmlLogo from '../images/html.png'

const Introduction = () => {
  return (
    <div className='intro-page'>
        <div className='introBody-cont'>
            <img src={htmlLogo} alt='HTML Logo' />
            <div className='Introduction-title'>
                <h1>Hypertext Markup Language (HTML) Lesson</h1>
                <h4>By Michal A. May, TSgt, USAF</h4>
            </div>
        </div>
    </div>
  )
}

export default Introduction