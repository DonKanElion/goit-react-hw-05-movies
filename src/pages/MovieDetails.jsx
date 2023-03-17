import { useState, useEffect } from 'react';
import { NavLink, useParams, Outlet, useLocation } from 'react-router-dom';
import defaultPoster from '../default_poster.png';
import {
  FlexWrapper,
  BoxImg,
  Img,
  SectionDetails,
  Details,
} from './GlobalStyles.styled';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import notifyError from './Home';

import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { getMoviesById } from 'services/moviesAPI';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

function getGenresNames(array) {
  return array
    .map(genre => {
      return genre.name;
    })
    .join(' ');
}

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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

    getMoviesById(id)
      .then(res => {
        if (res === null) {
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

  const checkImg = details.poster_path
    ? `${BASE_IMG_URL}w300${details?.poster_path}`
    : defaultPoster;

  return (
    <>
      {details ? (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <SectionDetails>
                <Button to={backLinkHref}></Button>
                <FlexWrapper>
                  <BoxImg>
                    <Img src={checkImg} alt={original_title || title}></Img>
                  </BoxImg>
                  <Details>
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
                  </Details>
                </FlexWrapper>
              </SectionDetails>

              <SectionDetails>
                <h2>Additional information</h2>
                <ul>
                  <li>
                    <NavLink to="cast">Cast</NavLink>
                  </li>
                  <li>
                    <NavLink to="reviews">Reviews</NavLink>
                  </li>
                </ul>
              </SectionDetails>

              <Outlet />
            </>
          )}
        </>
      ) : null}
    </>
  );
};

export default MovieDetails;
