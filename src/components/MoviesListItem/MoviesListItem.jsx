// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";


import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { getMovieIdAPI } from 'Services/getMovieIdAPI';

const Item = styled.li`
  font-size: 12px;
  font-weight: 400;
`;
const MoviesListItem = ({ title, id}) => {
  const handleClick = evt => {
    evt.preventDefault();
    console.log('Hello Tik Tik');
    // getMovieIdAPI(id);
  };

  return (
    <Item onClick={handleClick}>
      <NavLink to='/movies/:movieId' >{title}</NavLink>
    </Item>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MoviesListItem;
