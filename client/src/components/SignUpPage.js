import React, { Component } from 'react';
import './SignupPage.css';

export class SignUpPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }

  
  render() {
    return (
      <div className='page-container'>
        <div className='form-container'>
          <div className='image-container'>
            <img src='https://stockx.imgix.net/Air-Jordan-1-Retro-High-Bio-Hack.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1593581616' alt='sneakers' className='sneakers' />
          </div>
          <div className='input-container'>
            <h1 className='form-header'>CREATE AN ACCOUNT</h1>
            <form>
              <label className='form-label'>Full Name</label>
              <input className='form-input' type='text' value='Test Dummy'></input>
              <div className='form-errors' />
              <label className='form-label'>Email Address</label>
              <input className='form-input' type='email' value='tester@gmail.com'></input>
              <div className='form-errors' />
              <div className='form-errors' />
              <label className='form-label'>Password</label>
              <input className='form-input' type='password' value='twice'></input>
              <div className='form-errors' />
            </form>
            <div className='form-link'>
              {/* <a href="#/signup">CREATE ACCOUNT</a> */}
            </div>
            <button className='demo'>
              <a href='/login'>DEMO USER</a>
            </button>
            <button className='create-account-button'>
              <a href='/shop'>CREATE ACCOUNT+</a>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpPage

