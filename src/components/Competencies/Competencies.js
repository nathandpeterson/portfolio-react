import React from 'react'
import './Competencies.css'

const Competencies = () => (
  <div id="competencies" className="competencies-background">
    <div className="center">
      <h2 className="competencies-header">Core Competencies</h2>
    </div>
    <div className="competencies-columns">
      <div className="competencies-col">
        <div className="icon">
          <i className="fas fa-lg fa-desktop"></i>
        </div>
        <div className="competencies-text">
          <p className="skill">HTML5</p>
          <p className="skill">CSS3</p>
          <p className="skill">JavaScript</p>
          <p className="skill">React.js</p>
          <p className="skill">Apollo</p>
          <p className="skill">Bootstrap</p>
        </div>
      </div>
      <div className="competencies-col">
        <div className="icon">
          <i className="fas fa-lg fa-server"></i>
        </div>
        <div className="competencies-text">
            <p className="skill">GraphQL</p>
            <p className="skill">Node.js</p>
            <p className="skill">Express.js</p>
            <p className="skill">PostgreSQL</p>
            <p className="skill">JWT</p>
            <p className="skill">Git/Github</p>
        </div>
      </div>
      <div className="competencies-col">
        <div className="icon">
          <i className="fas fa-lg fa-graduation-cap"></i>
        </div>
        <div className="competencies-text">
            <p>
              <span className="institution">
              GALVANIZE
              </span>
            </p>
            <p>Certificate in Web Development</p>
            <p>
              <span className="institution">
              RUTGERS
              </span>
            </p>
            <p>PhD in English</p>
            <p>
              <span className="institution">
              PSU
              </span>
            </p>
            <p>BA in English</p>

        </div>

      </div>
    </div>

  </div>
)

export default Competencies
