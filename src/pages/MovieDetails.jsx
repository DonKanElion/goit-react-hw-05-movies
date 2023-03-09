import { NavLink, useParams } from 'react-router-dom';

import Button from 'components/Button/Button';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();

  console.log(movieId);

  return (
    <>
      <Button></Button>
      <section>
        <div className="flex_wrapper">
          <img src="" alt="" />
          <div>
            <div>
              <h2>TEST Name movie</h2>
              <p>(2019)</p>
            </div>
            <p>User Score: </p>
            <h3>Overview</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h3>Genres</h3>
            <p>Lorem ipsum dolor sit.</p>
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
  );
};

export default MovieDetails;
