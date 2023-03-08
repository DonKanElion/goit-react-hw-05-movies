import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { getMovieIdAPI } from 'Services/getMovieIdAPI';

const Item = styled.li`
  font-size: 12px;
  font-weight: 400;
`;
const MoviesListItem = ({ title }) => {
  const handleClick = evt => {
    evt.preventDefault();
    console.log('Hello Tik Tik');
    // getMovieIdAPI(id);
  };

  return (
    <Item onClick={handleClick}>
      <a href="/">{title}</a>
    </Item>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MoviesListItem;
