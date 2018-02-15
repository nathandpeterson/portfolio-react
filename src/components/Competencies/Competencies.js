import React from 'react'
import './Competencies.css'

const Competencies = () => (
  <div className="competencies-background">
    <div className="center">
      <h2 className="competencies-header">Core Competencies</h2>
    </div>
    <div className="competencies-columns">
      <div className="competencies-col">
        <div className="icon">
          <i className="fas fa-lg fa-desktop"></i>
        </div>
        <div className="competencies-text">
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Apollo</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Bootstrap</p>
        </div>
      </div>
      <div className="competencies-col">
        <div className="icon">
          <i className="fas fa-lg fa-server"></i>
        </div>
        <div className="competencies-text">
            <p>GraphQL</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>PostgreSQL</p>
            <p>JWT</p>
            <p>Git/Github</p>
        </div>
      </div>
      <div className="competencies-col">
        <div className="icon">
          <i className="fas fa-lg fa-graduation-cap"></i>
        </div>
        <div className="competencies-text">
            <p>GALVANIZE</p>
            <p>Certificate in Web Development</p>
            <p>RUTGERS</p>
            <p>PhD in English</p>
            <p>PSU</p>
            <p>BA in English</p>

        </div>

      </div>
    </div>

  </div>
)

export default Competencies
