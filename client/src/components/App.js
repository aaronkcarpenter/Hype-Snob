import React, { Component } from 'react';
import "./FontawsomeIcons";
import sneaker from '../api/sneaker';
import Searchbar from './Searchbar';
import SearchImages from './SearchImages';
import { Navbar } from './Navbar';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Route from './Route';
import Footer from './Footer';
import HomePage from './HomePage';
import Shop from './Shop';
import Styles from './Styles';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      images: [],
    };
  }

  onSearchSubmit = async (term) => {
    const response = await sneaker.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&gender=men')
    console.log(response.data.results);
    
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <Route path='/'>
          <Navbar />
          <Searchbar onSubmit={this.onSearchSubmit} />
          <SearchImages images={this.state.images} />
          <LoginPage />
          <Footer />
        </Route>
        <Route path='/login'>
          <Navbar />
          <SearchImages images={this.state.images} />
          <Searchbar onSubmit={this.onSearchSubmit} />
          <LoginPage />
          <Footer />
        </Route>
        <Route path='/signup'>
          <Navbar />
          <Searchbar onSubmit={this.onSearchSubmit} />
          <SearchImages images={this.state.images} />
          <SignUpPage />
          <Footer />
        </Route>
        <Route path='/home'>
          <Navbar />
          {/* <Searchbar onSubmit={this.onSearchSubmit} /> */}
          {/* <SearchImages images={this.state.images} /> */}
          <HomePage />
          <Footer />
        </Route>
        <Route path='/shop'>
          <Navbar />
          <Searchbar onSubmit={this.onSearchSubmit} />
          <SearchImages images={this.state.images} />
          <Shop />
          <Footer />
        </Route>
        <Route path='/styles'>
          <Navbar />
          <Searchbar onSubmit={this.onSearchSubmit} />
          <SearchImages images={this.state.images} />
          <Styles />
          <Footer />
        </Route>
      </div>
    )
  }
};

export default App




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