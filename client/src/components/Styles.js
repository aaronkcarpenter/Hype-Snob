import React, { Component } from 'react'
import './Styles.css';

export class Styles extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }
  
  render() {
    return (
      <>
      <div className='styles-container'>
        <div className='styles-header'>OnFeet Styles</div>
        <div className='styles-subheader'>
          Daily Inspiration from our community. <br />
          Scroll to discover and shop trending styles.
        </div>
        <div className='styles-column-container'>
          <div className='styles-column'>
            <a href='./#'>
              <img src='https://images.unsplash.com/photo-1529085216271-4f5b495a450b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
            <a href='./#'>
                <img src="https://images.unsplash.com/photo-1552322705-f2bd1ea7d38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt='styles1' className='style-image' title='Jordan 1' />
            </a>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1534565337397-2a97f4e093b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
          </div>
          <div className='styles-column'>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1528669697102-a6edb9b6a282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1578610685400-e64dca5ca6f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1569008535331-ce4bc9eaa9a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1562006260-c98c7c236774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1578282651938-cb2d566746ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
          </div>
          <div className='styles-column'>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1534437088728-1e8db7fcef94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1529062815681-c5145b0ac7b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
            <a href='./#'>
                <img src='https://images.unsplash.com/photo-1592391695267-d1481b4f0d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1259&q=80' alt='styles' className='style-image' title='Yeezy Boost 350' />
            </a>
          </div>
        </div>
      </div>
        
      </>
    )
  }
}

export default Styles
