import React from 'react'
import './Bio.css'
import { BioBlurb } from '../../data.js'
import { Fade } from 'react-reveal'
import ScrollableAnchor from 'react-scrollable-anchor'

const Bio = () => (
  <ScrollableAnchor id="bio">
    <div className="bio-container">
      <div className="center">
        <h2>About Me</h2>
      </div>
      <div className="bio-row">
        <div className="headshot-container">
          <Fade>
            <img src={'http://res.cloudinary.com/ndpimg/image/upload/v1520615371/nathan_bellingham.jpg'}/>
          </Fade>
        </div>
        <div className="bio-info">
          <Fade>
            <p>{BioBlurb}</p>
          </Fade>
        </div>
      </div>
    </div>
  </ScrollableAnchor>

)

export default Bio
