import React, { Component } from 'react'
import projects from '../project_data.json'

class ProjectDetail extends Component {

  render(){
    const project = projects.find(proj => proj.id == this.props.project_id)
    const { title, description, demo } = project
    return  <div className="project-detail-card">
                <i className="fas fa-times"></i>
                  <h2>{ title }</h2>
                  <p>{ description }</p>
                  <a href="#">Frontend Repo</a>
                  <a href= "#">Backend Repo</a>
                  <a href={ demo } target="_blank">Demo</a>
                </div>
  }
}


export default ProjectDetail
