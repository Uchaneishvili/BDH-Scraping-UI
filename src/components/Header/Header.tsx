import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='innerContainer'>
        <div className='logoContainer'>
          <img
            src='https://miro.medium.com/v2/resize:fit:512/1*nHfayfdmxAApbg84iMrJqQ.gif'
            alt='scraping'
          />
        </div>
        <div className='titleContainer'>
          <h2>BDH Scraping</h2>
        </div>
        <div />
      </div>
    </div>
  )
}

export default Header
