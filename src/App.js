import React, { Component } from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Competencies from './components/Competencies/Competencies'
import Projects from './components/Projects/Projects'
import Bio from './components/Bio/Bio'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Competencies />
        <Projects />
        <Bio />
        <Footer />
      </div>
    )
  }
}

export default App
