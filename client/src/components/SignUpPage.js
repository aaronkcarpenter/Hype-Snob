import React, { Component } from 'react';
import './SignupPage.css';

export class SignUpPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }

  
  render() {
    return (
      <div className='form-container'>
        <div className='image-container'>
          <img src='https://images.unsplash.com/photo-1581619714043-c1289ada25f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='sneakers' className='sneakers' />
        </div>
        <div className='input-container'>
          <h1 className='form-header'>CREATE AN ACCOUNT</h1>
          <form>
            <label className='form-label'>Full Name</label>
            <input className='form-input' type='text'></input>
            <div className='form-errors' />
            <label className='form-label'>Email Address</label>
            <input className='form-input' type='email'></input>
            <div className='form-errors' />
            <div className='form-errors' />
            <label className='form-label'>Password</label>
            <input className='form-input' type='password'></input>
            <div className='form-errors' />
          </form>
          <div className='form-link'>
            <a href="#/signup">CREATE ACCOUNT</a>
          </div>
          <button className='demo'>
            <a href='#'>DEMO USER</a>
          </button>
          <button className='create-account-button'>
            <a href='#'>CREATE ACCOUNT</a>
          </button>
        </div>
      </div>
    )
  }
}

export default SignUpPage

