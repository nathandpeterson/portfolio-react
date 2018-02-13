import React, { Component } from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Competencies from './components/Competencies/Competencies'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Competencies />
      </div>
    )
  }
}

export default App
