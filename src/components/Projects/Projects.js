import React from 'react'
import './Projects.css'
import projects from './project_data.jsons'

const Project = () => (
  <div className="project-image">
    <img src="" />
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
