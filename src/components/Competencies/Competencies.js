import React from 'react'
import './Competencies.css'
import { skills } from '../../data.js'
import { Flip } from 'react-reveal'
import ScrollableAnchor from 'react-scrollable-anchor'

const SkillSet = ({ skill }) => {
  return<Flip>
          <p className="skill">{skill}</p>
        </Flip>
}

const Competencies = () => {
  const { frontend, backend } = skills
  return <ScrollableAnchor id="competencies">
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
          {frontend.map((skill, i) => {
            return <SkillSet key={i} skill={skill} />
            }
          )}
        </div>
      </div>
      <div className="competencies-col">
        <div className="icon">
          <i className="fas fa-lg fa-server"></i>
        </div>
        <div className="competencies-text">
          {backend.map((skill, i) => {
            return <SkillSet key={i} skill={skill} />
          })}
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
  </ScrollableAnchor>
}

export default Competencies
