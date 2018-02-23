import React, { Component } from 'react'
import './Projects.css'
import projects from './project_data.json'
import { Zoom } from 'react-reveal'
import ScrollableAnchor from 'react-scrollable-anchor'
import ProjectDetail from './ProjectDetail/ProjectDetail'

class Projects extends Component {

  state = {detail: ''}

  project = (project) => {
    const { id, title, img, description, demo } = project
    return <Zoom>
              <a href={demo} target="_blank">
                <div  onMouseEnter={ this.renderProjectDetail }
                      className="project-card"
                      id={ id }>
                  <h5 className="project-title">{title}</h5>
                  <img src={img} alt={description}/>
                </div>
              </a>
            </Zoom>
  }

  renderProjectDetail = (e) => {
    this.setState({detail: e.target.id})
  }

  removeProjectDetail = () => {
    console.log('hi');
    this.setState({detail: ''})
  }

  render () {
    return <ScrollableAnchor id="projects">
      <div className="projects-container">
        <div className="center">
          <h1>Projects</h1>
        </div>
        <div className="project-browser">
          {projects.map((project, i) => {
            return this.project(project)
          }
        )}
        {this.state.detail && <ProjectDetail project_id={ this.state.detail }/>}
        </div>
      </div>
    </ScrollableAnchor>
    }
}

export default Projects
