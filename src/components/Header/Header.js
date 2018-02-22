import React from 'react'
import './Header.css'
import { Fade } from 'react-reveal'

const Header = () => (
  <div className="header-background">
    <div>
      <Fade>
        <h1 className="name-text" >Nathan Daniel Peterson</h1>
        <hr />
        <h2 className="name-text">Full Stack Developer</h2>
      </Fade>
    </div>
  </div>
)

export default Header
