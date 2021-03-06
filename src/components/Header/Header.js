import React from 'react'
import './Header.css'
import { Fade } from 'react-reveal'

const Header = () => (
  <div className="header-background">
    <div>
      <Fade>
        <h1 className="name-text" >Nathan Daniel Peterson</h1>
        <br />
        <h3 className="name-text">Web Developer</h3>
      </Fade>
    </div>
  </div>
)

export default Header
