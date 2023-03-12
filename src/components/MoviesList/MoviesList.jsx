import PropTypes from 'prop-types';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map( movie => {
        const { id } = movie;

        return (
          <MoviesListItem key={id} props={movie} ></MoviesListItem>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
