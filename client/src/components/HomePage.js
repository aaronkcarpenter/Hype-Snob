import React, { Component } from 'react';
import './HomePage.css';

export class HomePage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }
  
  render() {
    return (
      <>
        <a href='/shop'>
          <div className='hero-container'>
            <h3 class ='hero-subheader'>Featured Release</h3>
            <h1 class='hero-header'>Off-White X Wmns Air Jordan 4 'Sail'</h1>
            <button className='hero-cta'>Shop Now</button>
          </div>
        </a>
        <div className='main-page-container'>
          <div>
            <button class='main-login-button'>
              <a href='./login'>Log In</a>
            </button>
            <button class='main-signup-button'>
              <a href='./signup'>Sign Up</a>
            </button>
          </div>
        </div>
        
      </>
    )
  }
}

export default HomePage

