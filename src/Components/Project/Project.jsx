import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='container'>
      <div className='row mt-4'>
        <div className='col-4'>
          <div class="card" style={{width: "18rem",height: "auto"}}>
            <img class="card-img-top" src='src\assets\3.png' alt="Project Image" />
              <div class="card-body">
                <h5 class="card-title">Todo App</h5>
                <p class="card-text">Todo Application used to note our task for the day</p>
                <a href="https://main--loquacious-cranachan-bb6b21.netlify.app/" target="_blank" class="btn btn-primary">Project Demo</a>
              </div>
          </div>
        </div>
        <div className='col-4'> 
          <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src='src\assets\1.png' alt="Project Image" />
              <div class="card-body">
                <h5 class="card-title">Using Context API</h5>
                <p class="card-text">E Commerce Site. Used Context api for global state management</p>
                <a href="https://fanciful-cajeta-3039ce.netlify.app/" target="_blank" class="btn btn-primary">Project Demo</a>
              </div>
          </div>
        </div>
        <div className='col-4'> 
          <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src='src\assets\2.png' alt="Project Image" />
              <div class="card-body">
                <h5 class="card-title">CRUD using Axios</h5>
                <p class="card-text">Used axios to fetch data from API and performed CRUD Operation</p>
                <a href="https://courageous-macaron-ea4ff3.netlify.app/" target="_blank" class="btn btn-primary">Project Demo</a>
              </div>
          </div>
        </div>
        <div className='col-4'> 
          <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src='src\assets\4.png' alt="Project Image" />
              <div class="card-body">
                <h5 class="card-title">Password Reset</h5>
                <p class="card-text">Implemented Password reset facility using react.js,node.js,mongoDB</p>
                <a href="https://warm-dragon-c11fcf.netlify.app/" class="btn btn-primary" target="_blank">Project Demo</a>
              </div>
          </div>
        </div>
        <div className='col-4'> 
          <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src='src\assets\5.png' alt="Project Image" />
              <div class="card-body">
                <h5 class="card-title">URL Shortner</h5>
                <p class="card-text">URL Shortner app build using react.js,node.js,mongoDB</p>
                <a href="https://deft-youtiao-3b8d27.netlify.app/" class="btn btn-primary" target="_blank">Project Demo</a>
              </div>
          </div>
        </div>
        <div className='col-4'> 
          <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src='src\assets\1.png' alt="Project Image" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Project Demo</a>
              </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Project
