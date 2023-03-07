import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchMovies } from 'Services/moviesAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  fetchMovies()
    .then(({ results }) => {
      if (results === 0) {
        return notifyWarning(
          // 'Sorry, nothing was found for your request, try something else.'
          'Сталася помилка'
        );
      }

      setTrendingMovies(results);
      console.log(trendingMovies);
      return;
    })
    .catch(error => {
      notifyError(error);
      return console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    });

  const notifyWarning = text => {
    Notify.warning(`${text}`);
  };

  const notifyError = () => {
    Notify.error('Oops, something went wrong, please try again.');
  };

  return <p>Hello Home </p>;
};

export default Home;
