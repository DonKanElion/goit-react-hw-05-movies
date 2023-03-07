import axios from 'axios';

export async function  fetchMovies () {
    const params = new URLSearchParams ({
        api_key: 'a0869b2b27b58a659702b4629a364211',
    })

        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?${params}`)
        // console.log(response);
        console.log(response.data);
        console.log(response.data.results);


        return response.data; 
}



// https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>


// https://api.themoviedb.org/3/movie/550?api_key=a0869b2b27b58a659702b4629a364211



// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.