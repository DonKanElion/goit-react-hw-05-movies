import axios from 'axios';

export async function  getMovieIdAPI ({ id }) {
    const params = new URLSearchParams ({
        api_key: 'a0869b2b27b58a659702b4629a364211',
    })

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?${params}`)
        // console.log(response);
        console.log('getMovieIdAPI: ', response.data);
        // console.log(response.data.results);
        return response.data; 
};



// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>


// https://api.themoviedb.org/3/movie/22462/credits?api_key=a0869b2b27b58a659702b4629a364211



// https://api.themoviedb.org/3/movie/550?api_key=a0869b2b27b58a659702b4629a364211



// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму