import React, { Component } from 'react';
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
              <a href='https://www.linked.com/in/aaroncarpenter'>
                <i className='fab-fa-linkedin-in'>
                  ::before
                </i>
              </a>
            </li>
            <li className='footer-links-one'>
              <a href='https://www.github.com/aaronkcarpenter'>
                <i className='fab-fa-github'>
                  ::before
                </i>
              </a>
            </li>
            <li className='footer-links-one'>
              <a href='http://www.aaronkcarpenter.com'>
                <i className='fab-fa-user'>
                  ::before
                </i>
              </a>
            </li>
          </ul>
          <div className='real-site-container'>
            <p className='real-site-cta'>
              HYPESNOB was created and highly inspired by the world renowned
              GOAT.com, a site specializing in the purchasing and selling of
              in-demand kicks. To visit the original site, click the link below.
              <a href='https://www.goat.com' />
              <button class='goat-link-button'>Go to GOAT</button>
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default Footer
