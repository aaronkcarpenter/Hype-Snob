import React from 'react';
import './Navbar.css';
import Searchbar from './Searchbar';
import SearchImages from './SearchImages';
import sneaker from '../api/sneaker';

// export const Navbar = () => {

//   onSearchSubmit = async (term) => {
//     const response = await sneaker.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&gender=men')
//     console.log(response.data.results);

//     this.setState({ images: response.data.results });
//   }
  
//   return (
//     <div>
//       <ul className='Nav__Container'>
//         <li><a className='header__link navbar__link--one' href='https://www.hypesnob.herokuapp.com'>HYPESNOB</a></li>
//         <li><a className='header__link navbar__link--two' href='https://www.hypesnob.herokuapp.com'>Discover</a></li>
//         <li><a className='header__link navbar__link--three' href='https://www.hypesnob.herokuapp.com'>Shop All</a></li>
//         <li><a className='header__link navbar__link--four' href='https://www.hypesnob.herokuapp.com'>Styles</a></li>
//         <Searchbar onSubmit={this.onSearchSubmit}/>
//       </ul>
//     </div>
//   )
// }

export class Navbar extends React.Component {
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
  render(){
    return(
      <div>
        <ul className='Nav__Container'>
        <h1 className='logo'>HYPESNOB</h1>
          {/* <li><a className='header__link navbar__link--one' href='https://www.hypesnob.herokuapp.com'>HYPESNOB</a></li> */}
          <li><a className='header__link navbar__link--two' href='https://www.hypesnob.herokuapp.com'>Discover</a></li>
          <li><a className='header__link navbar__link--three' href='https://www.hypesnob.herokuapp.com'>Shop All</a></li>
          <li><a className='header__link navbar__link--four' href='https://www.hypesnob.herokuapp.com'>Styles</a></li>
          <Searchbar onSubmit={this.onSearchSubmit} />
          {/* <SearchImages images={this.state.images} /> */}
        </ul>
      </div>
    )
  }
}