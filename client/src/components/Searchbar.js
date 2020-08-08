import React, { Component } from 'react';
import './SearchBar.css';
import './SearchImages';
import SearchImages from './SearchImages';

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
            {/* <label>SEARCH</label> */}
            <input type='text'
              value={this.state.term} 
              placeholder='Type To Search'
              onChange={e => this.setState({ term: e.target.value})} />
          </div> 
        </form>
      </div>
    )
  }
}

export default Searchbar;
