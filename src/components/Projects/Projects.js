import React from 'react'
import './Projects.css'

const Project = () => (
  <div className="project-image">
    Project Image
  </div>
)

const Projects = () => (
  <div className="projects-container">
    <div className="center">
      <h1>Projects</h1>
    </div>
    <div className="project-browser">
      <Project />
      <Project />
      <Project />
    </div>
  </div>
)

export default Projects
