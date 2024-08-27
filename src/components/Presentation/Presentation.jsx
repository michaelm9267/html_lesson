import React, { useState, useEffect } from 'react'
import Introduction from '../../pages/Introduction'
import Page1 from '../../pages/Page1'
import Overview from '../../pages/Overview'
import Objective from '../../pages/Objective'
import Page2 from '../../pages/Page2'
import Page3 from '../../pages/Page3'
import Page4 from '../../pages/Page4'
import Page5 from '../../pages/Page5'

const Presentation = () => {
 const [count, setCount] = useState(2)

 const presentationPage = [
    {id: 1, content: <Introduction />},
    {id: 2, content: <Overview />},
    {id: 3, content: <Objective />},
    {id: 4, content: <Page1 />},
    {id: 5, content: <Page2 />},
    {id: 6, content: <Page3 />},
    {id: 7, content: <Page4 />},
    {id: 8, content: <Page5 />}
 ]

 const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
        setCount((prevCount) => Math.min(prevCount + 1, presentationPage.length))
    } else if (event.key === 'ArrowLeft') {
        setCount((prevCount) => Math.max(prevCount - 1, 1))
    }
 }

 useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
 }, [])

 return (
    <div className='presentation-window'>
     {presentationPage.map(page => {
         return (
            <div key={page.id}>
              {page.id === count ? page.content : null}
            </div>
         )  
        })}
        <div className='buttons'>
            <button className='prev-button button' onClick={() => setCount((prevCount) => Math.max(prevCount - 1, 1))}>Previous</button>
            <button className="next-button button" onClick={() => setCount((prevCount) => Math.min(prevCount + 1, presentationPage.length))}>Next</button>
        </div>
    </div>
  )
}

export default Presentation
