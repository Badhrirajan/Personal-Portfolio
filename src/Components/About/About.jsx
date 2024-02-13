import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <img src='./Dev-2.gif' alt='Developer Gif' />
        </div>
        <div className='col-6'>
          <p className='about-me'>Engineering Graduate</p>
        </div>
      </div>
    </div>
  )
}

export default About
