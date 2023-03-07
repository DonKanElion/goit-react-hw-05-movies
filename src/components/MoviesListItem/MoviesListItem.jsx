import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
    font-size: 12px;
    font-weight: 400;
`
const MoviesListItem = ({ title }) => {
    return <Item>{title}</Item>
}

MoviesListItem.propTypes = {
title: PropTypes.string.isRequired,
}

export default MoviesListItem;