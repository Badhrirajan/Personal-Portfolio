import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <div className='container-fluid'>
        <nav class="navbar navbar-expand-lg">
          <span class="navbar-brand">Portfolio</span>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-item nav-link" to="/">Home</Link>
              <Link class="nav-item nav-link" to='/about'>About</Link>
              <Link class="nav-item nav-link" to='/education'>Education</Link>
              <Link class="nav-item nav-link" to='/project'>Project</Link>
              <Link class="nav-item nav-link" to='/contact'>Contact</Link>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/education' Component={Education} />
        <Route path='/project' Component={Project} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </div>
  )
}

export default App
