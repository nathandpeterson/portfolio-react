import React from 'react'
import { scaleDown as Menu } from 'react-burger-menu'
import './nav.css'

const Nav = () => (
  <nav>
    <div className="nav-header">
      <a href="#bio"><h3>about me</h3></a>
      <a href="#projects"><h3>projects</h3></a>
      <a href="#competencies"><h3>skills</h3></a>
    </div>
    <Menu width={'30%'}>
      <a href="#bio"><p>about me</p></a>
      <a href="#projects"><p>projects</p></a>
      <a href="#competencies"><p>skills</p></a>
    </Menu>
  </nav>
)

export default Nav
