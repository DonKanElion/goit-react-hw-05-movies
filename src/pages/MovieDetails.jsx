import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import notifyError from './Home';

import Button from 'components/Button/Button';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Loader from 'components/Loader/Loader';
import { getMoviesById } from 'services/moviesAPI';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  let id = movieId.slice(1);

  const {
    original_title,
    title,
    release_date,
    genresTitles,
    overview,
    popularity,
  } = details;

  useEffect(() => {
    setIsLoading(true);

    function getGenresNames(array) {
      return array
        .map(genre => {
          return genre.name;
        })
        .join(' ');
    }

    getMoviesById(id)
      .then(res => {
        if (res === null) {
          console.log('ПУСТИЙ МАСИВ!!!!!');
          return setDetails(null);
        }
        const genresTitles = getGenresNames(res.genres);
        return setDetails({ ...res, genresTitles });
      })
      .catch(error => {
        // alert(error);
        return console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  console.log('Last TEST details: ', details);

  return (
    <>
      {details ? (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Button></Button>
              <section>
                <div className="flex_wrapper">
                  <img
                    src={`${BASE_IMG_URL}w300${details?.poster_path}`}
                    alt=""
                  />
                  <div>
                    <div>
                      <h2>
                        {original_title || title} ({release_date?.slice(0, 4)})
                      </h2>
                    </div>
                    <p>User Score: {popularity.toFixed(0)} %</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genresTitles}</p>
                    <p>Жанри, хуяндри, ніяк не можу мапнути масив...</p>
                  </div>
                </div>
              </section>

              <section>
                <h2>Additional information</h2>
                <ul>
                  <li>
                    <NavLink to="cast">Cast</NavLink>
                  </li>
                  <li>
                    <NavLink to="reviews">Reviews</NavLink>
                  </li>
                </ul>
                <Cast>test Cast</Cast>
                <Reviews>test Reviews</Reviews>
              </section>
            </>
          )}
        </>
      ) : null}
    </>
  );
};

export default MovieDetails;
