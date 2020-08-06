import React, { Component } from 'react'
import './LoginPage.css';

export class LoginPage extends Component {
  render() {
    return (
      <>
        <div className='form-container'>
          <div className='image-container'>
            <img src='https://ibex-io.herokuapp.com/assets/ow-aj1-6ed572332865879890856b414afe125eb9516905b81a7f56025152e2134b2051.png' alt='sneakers' className='sneakers' />
          </div>
          <div className='input-container'>
            <h1 className='form-header'>LOG IN</h1>
          <form>
            <label className='form-label'>Email Address</label>
            <input className='form-input' type='email'></input>
            <div className='form-errors' />
            <label className='form-label'>Password</label>
            <input className='form-input' type='password'></input>
          </form>
          <div className='form-link'>
            <a href="#/signup">CREATE ACCOUNT</a>
          </div>
          <button className='demo'>
            <a href='#'>DEMO USER</a>
          </button>
          <button className='login-button'>
            <a href='#'>LOG IN</a>
          </button>
          </div>
        </div>
      </>
    )
  }
}

export default LoginPage
