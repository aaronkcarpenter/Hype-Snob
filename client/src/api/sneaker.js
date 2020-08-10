import axios from 'axios';

// export default axios.create({
//   baseURL: 'https://api.thesneakerdatabase.com/v1/sneakers?limit=100&gender=men',
// });

// export default axios.create({
//   baseURL: 'https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=Jordan&gender=men&releaseYear=2019',
// });

export default axios.create({
  baseURL: 'https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=Jordan&gender=men&releaseYear=2019',
});