import React, { Component } from 'react';
import './SearchBar.css';
import './SearchImages';

export class Searchbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      term: '',
    }
  }

  // onInputChange(e) {
  //   this.setState({ term: e.target.value});
  // }

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className='field'>
            <label>Shoe Search</label>
            <input type='text'
              value={this.state.term} 
              onChange={e => this.setState({ term: e.target.value})} />
          </div> 
        </form>
      </div>
    )
  }
}

export default Searchbar;
