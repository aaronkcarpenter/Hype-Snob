import React from 'react';
import sneaker from '../api/sneaker';
import './Navbar.css';
import SearchImages from './SearchImages';
import './SearchImages.css';
import Searchbar from './Searchbar';
import './SearchBar.css';

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

  // onSearchSubmit = async (term) => {
  //   const response = await sneaker.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&gender=men')
  //   console.log(response.data.results);

  //   this.setState({ images: response.data.results });
  // }

  onSearchSubmit = async (term) => {
    const response = await sneaker.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=Jordan&gender=men&releaseYear=2019')
    console.log(response.data.results);

    this.setState({ images: response.data.results });
  }


  render(){
    return(
      <>
        <header className='Nav__Container'>
          <nav className='header-nav'>
            <h1 className='logo'>
              <a href='./home'>HYPESNOB</a>
            </h1>
            <ul className='list-container'>
              <li>
                <span className='nav-links'>
                  <a className='header__link navbar__link--two' href='./home'>Discover</a>
                </span>
              </li>
              <li>
                <span className='nav-links'>
                  <a className='header__link navbar__link--three' href='./shop'>Shop All</a>
                </span>
              </li>
              <li>
                <span className='nav-links'>
                  <a className='header__link navbar__link--four' href='./styles'>Styles</a>
                </span>
              </li>
              <li>
                <span className='nav-links'>
                  <Searchbar className='header__link' onSubmit={this.onSearchSubmit} />
                </span>
              </li>
              <li><SearchImages className='search__images' images={this.state.images} /></li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
}