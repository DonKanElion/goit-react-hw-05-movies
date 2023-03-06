import React, { useState } from 'react';
import styled from 'styled-components';
import bootstrap from 'bootstrap';

const Wrapper = styled.section`
  padding: 2em;
  background: #7bd3ffdb;
  border-radius: 0 0 5px 5px;
`;

const LinkNav = styled.a`
  // ${props => (props.primary ? 'white' : 'palevioletred')}
  color: black;
  font-weight: 500;
  font-style: 'Roboto';
  font-size: 16px;
  margin: 10px;
  padding: 20px 15px;
  text-decoration: none;
`;

export const Header = () => {
  console.log('Hello Header');

  return (
    <Wrapper>
      <LinkNav href="/">Home</LinkNav>
      <LinkNav href="/movies">Movies</LinkNav>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Movies
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </Wrapper>
  );
};
