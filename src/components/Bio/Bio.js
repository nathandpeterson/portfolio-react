import React from 'react'
import './Bio.css'
import { BioBlurb } from '../../data.js'

const Bio = () => (
  <div className="bio-container">
    <div className="center">
      <h2>About Me</h2>
    </div>
    <div className="bio-row">
      <div className="headshot-container">
        <img src={'https://s3.us-east-2.amazonaws.com/p-img-2018/headshot.jpg'}/>
      </div>
      <div className="bio-info">
        <p>{BioBlurb}</p>
      </div>
    </div>
  </div>

)

export default Bio
