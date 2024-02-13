import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className='col-6'>
          <img src='./Dev.gif' alt='Developer' />
        </div>
        <div className='col-6'>
          <p className='title-name'>I'M<span style={{ color: "red" }}> Badhrirajan T</span></p>
          <p></p>
          <button><a href='./BADHRI-RESUME.pdf' download={'Resume'}>Download CV</a></button>
      </div>
    </div>  
    </div>
  )
}

export default Home
