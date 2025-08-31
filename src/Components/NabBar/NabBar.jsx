import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="id" id='home'>
      <div className="navBar"
        data-aos='fade-down'
        data-aos-duration="1000">
        <div className="nav_left">Portfolio</div>
        <div className="right">
          <ul className='nav-manu'>
            <a href='#home' className="nav-item">Home</a>
            <a href='#experience' className="nav-item">Experience</a>
            <a href='#skills' className="nav-item">Skills</a>
            <a href='#project' className="nav-item">Project</a>
            <a href='#contact' className="nav-item">Contact</a>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default NavBar
