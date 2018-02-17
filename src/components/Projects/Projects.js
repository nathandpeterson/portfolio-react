import React from 'react'
import './Projects.css'
import projects from './project_data.json'

const Project = ({ project }) => {
  const { title, img, description } = project
  return <div className="project-image">
    <h5>{title}</h5>
    <img src={img} alt={description}/>
  </div>
}

const Projects = () => (
  <div className="projects-container">
    <div className="center">
      <h1>Projects</h1>
    </div>
    <div className="project-browser">
      {projects.map((project, i) => {
        return <Project key={i} project={ project } />
      })}
    </div>
  </div>
)

export default Projects
