import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavButton = styled(NavLink)`
    /* width: 100px; */
    padding: 4px 8px;
    margin-bottom: 10px;
    border: 1px black solid;
    border-radius: 4px;
    font-size: 14px;
    text-decoration: none;
    color: black;
    background-color: gainsboro;

    &:hover,
    &:focus {
      background-color: rgb(49, 144, 246);
    }
`;
