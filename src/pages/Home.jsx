import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getMovies } from 'services/moviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getMovies()
      .then(({ results }) => {

        if (results === 0) {
          return notifyWarning(
            // 'Sorry, nothing was found for your request, try something else.'
            'Сталася помилка'
          );
        }
        return setTrendMovies([...results]);
      })
      .catch(error => {
        notifyError(error);
        return console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const notifyWarning = text => {
    Notify.warning(`${text}`);
  };

  const notifyError = () => {
    Notify.error('Oops, something went wrong, please try again.');
  };

  return (
    <>
      <h3>Trending today</h3>
      {isLoading ? (<Loader/>) : (<MoviesList movies={trendMovies}/>)}
    </>
  );
};

export default Home;