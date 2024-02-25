import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='innerContainer'>
        <div className='logoContainer'>
          <img src='/assets/Scraping.gif' alt='scraping' />
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
