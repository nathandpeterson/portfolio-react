import React from 'react'
import './Projects.css'
import projects from './project_data.json'
import { Zoom } from 'react-reveal'
import ScrollableAnchor from 'react-scrollable-anchor'

const Project = ({ project }) => {
  const { title, img, description, demo } = project
  return <Zoom>
            <a href={demo} target="_blank">
              <div className="project-card">
                <h5 className="project-title">{title}</h5>
                <img src={img} alt={description}/>
              </div>
            </a>
          </Zoom>
}

const Projects = () => (
  <ScrollableAnchor id="projects">
    <div className="projects-container">
      <div className="center">
        <h1>Projects</h1>
      </div>
      <div className="project-browser">
        {projects.map((project, i) => {
          return <Project key={i} project={ project } />
        }
      )}
      </div>
    </div>
  </ScrollableAnchor>
)

export default Projects
