import React from 'react'
import './Footer.css'

const Footer = () => (
  <div className="footer-container">
    <div className="center">
      <h2>ndp 2018</h2>
    </div>
    <div className="footer-icon-row">
        <a className="footer-icon" href="https://github.com/nathandpeterson/">
          <i className="fab fa-2x fa-github"></i>
        </a>
        <a className="footer-icon" href="https://linkedin.com/in/nathan-d-peterson">
          <i className="fab fa-2x  fa-linkedin"></i>
        </a>
        <address>
          <a className="footer-icon" href="mailto:natperson@gmail.com">
            <i className="far fa-2x fa-envelope"></i>
          </a>
        </address>
    </div>
  </div>
)

export default Footer
