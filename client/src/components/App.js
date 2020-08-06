import React, { Component } from 'react'
import axios from 'axios';
import Searchbar from './Searchbar';
// import { response } from '../../../app';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {};
  }

  //WORKS 
  // onSearchSubmit(term) {
  //   axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&gender=men', {
  //     params: {
  //       query: term 
  //     },
  //   });
  // }

  // WORKS
  // onSearchSubmit(term) {
  //   axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&gender=men')
  //     .then((response) => {
  //       console.log(response.data.results);
  //     });
  // }

  async  onSearchSubmit(term) {
    const response = await axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&gender=men')
    console.log(response.data.results);
  }


  
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App



