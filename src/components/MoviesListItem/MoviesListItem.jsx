import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link, useLocation } from 'react-router-dom';

const Item = styled.li`
  font-size: 12px;
  font-weight: 400;
`;

const MoviesListItem = movie => {
  const { id, original_title } = movie.props;

  const location = useLocation();

  return (
    <Item>
      <Link to={`/movies/:${id}`} state={{ from: location }}>
        {original_title}
      </Link>
    </Item>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.object,
};

export default MoviesListItem;
