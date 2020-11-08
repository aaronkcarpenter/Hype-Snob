import React, { Component } from 'react';
// import { FaGithub, FaLinkedinIn, FaRegUser } from 'react-icons/fa';
import './Footer.css';

export class Footer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }
  
  render() {
    return (
      <>
        <div className='footer-container'>
          <ul className='footer-links'>
            <li className='footer-links-one'>
              <a href='https://www.linkedin.com/in/aaronkcarpenter' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-linkedin-in' > </i>
              </a>
            </li>
            <li className='footer-links-one'>
              <a href='https://www.github.com/aaronkcarpenter' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-github'></i>
              </a>
            </li>
            <li className='footer-links-one'>
              <a href='https://www.aaronkcarpenter.github.io' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-user' />
              </a>
            </li>
          </ul>
          <div className='real-site-container'>
            <p className='real-site-cta'>
              HypeSnob was created and highly inspired by the world renowned
              GOAT.com, a site specializing in the celebration of sneaker culture,
              as well as the process of purchasing and selling
              in-demand kicks. To visit the original site, click the link below.
              <a href='https://www.goat.com' target='_blank' rel='noopener noreferrer'>
              <button className='goat-link-button'>Go to GOAT</button>
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default Footer
