import PropTypes from 'prop-types';

import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

const MoviesList = ({ movies }) => {
    console.log('MoviesList - props', movies);
  return (
    <ul>
      {movies.map(({ original_title, id }) => {
        return <MoviesListItem key={id} title={original_title}></MoviesListItem>;
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
