import PropTypes from 'prop-types';

import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title, release_date, overview }) => {
        return (
          <MoviesListItem key={id} title={original_title}></MoviesListItem>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
