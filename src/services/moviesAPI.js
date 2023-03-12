import axios from 'axios';

const API_KEY = 'a0869b2b27b58a659702b4629a364211';
const BASE_URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = BASE_URL;

export async function getMovies() {
  const { data } = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  return data;
}

export async function getMoviesById(movieId) {
//   const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
const resp = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);

  //   console.log('getMoviesById DATA: ', data);
//   return data;
return resp.data;

}


// export async function getMoviesReviews(movieId) {
//     //   const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
//     const resp = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
    
//       //   console.log('getMoviesById DATA: ', data);
//     //   return data;
//     return resp;
    
//     }