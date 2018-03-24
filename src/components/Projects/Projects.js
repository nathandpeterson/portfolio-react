import React, { Component } from 'react'
import './Projects.css'
import projects from './project_data.json'
import { Zoom } from 'react-reveal'
import ScrollableAnchor from 'react-scrollable-anchor'

class Projects extends Component {

  state = {detail: ''}

  fullstack = projects.filter(project => project.backend)
  frontend = projects.filter(project => !project.backend)

  projectDetail = (project_id) => {
    const project = projects.find(proj => proj.id === parseInt(project_id, 10))
    const { title, description, demo, frontend } = project
    const backend = project.backend || null
    return  <div className="project-detail-card">
                  <div className="close-detail" onClick={this.removeProjectDetail}>
                    <i className="fas fa-times"></i>
                  </div>
                  <h2>{ title }</h2>
                  <p>{ description }</p>
                  <a href={ frontend } target="_blank">Frontend Repo</a>
                    {backend &&  <a href= { backend } target="_blank">Backend Repo</a>}
                  <a href={ demo } target="_blank">Demo</a>
            </div>
  }

  project = (project) => {
    const { id, title, img, description, demo } = project
    return <Zoom key={id}>
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
    this.setState({detail: ''})
  }

  render () {

    return <ScrollableAnchor id="projects">
      <div className="projects-container">
        <div className="center">
          <h1>Projects</h1>
        </div>
      
        <div className="project-browser">
          {this.fullstack.map((project, i) => this.project(project)) }
          {this.frontend.map((project, i) => this.project(project))}
        </div>
          {this.state.detail && this.projectDetail(this.state.detail) }

      </div>
    </ScrollableAnchor>
    }
}

export default Projects
