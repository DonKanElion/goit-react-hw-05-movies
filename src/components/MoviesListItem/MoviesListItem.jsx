import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  font-size: 12px;
  font-weight: 400;
`;

const MoviesListItem = movie => {
  const { id, original_title } = movie.props;

  return (
    <Item>
      <Link to={`movies/:${id}`}>{original_title}</Link>
    </Item>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.array.isRequired,
};

export default MoviesListItem;
