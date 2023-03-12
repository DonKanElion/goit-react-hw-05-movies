import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FlexWrapper, BoxImg, Img, SectionDetails } from './GlobalStyles.styled';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import notifyError from './Home';

import Button from 'components/Button/Button';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Loader from 'components/Loader/Loader';
import { getMoviesById } from 'services/moviesAPI';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

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
    vote_average,
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
              <SectionDetails>
                <Button></Button>
                <FlexWrapper>
                <BoxImg>
                <Img
                    src={`${BASE_IMG_URL}w300${details?.poster_path}`}
                    alt=""
                  ></Img>
                </BoxImg>
                  <div>
                    <div>
                      <h2>
                        {original_title || title} ({release_date?.slice(0, 4)})
                      </h2>
                    </div>
                    <p>Vote average: {vote_average?.toFixed(2)} %</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genresTitles}</p>
                  </div>
                </FlexWrapper>
              </SectionDetails>

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