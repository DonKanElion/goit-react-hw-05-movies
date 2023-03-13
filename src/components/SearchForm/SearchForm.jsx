import { useState, useEffect } from 'react';

import { Wrap, Search, SearchTerm, SearchBtn } from './SearchForm.styled';
import { getMovieSearch } from 'services/moviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const SearchForm = ({ onSubmit }) => {
  const [inValue, setInValue] = useState('');
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = evt => {
    const { value } = evt.target;
    setInValue(value);
    console.log('inValue: ', inValue);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('Click = HandleSubmit');

    if (!inValue.trim()) {
      alert('Enter correct title');
      return;
    }
    setQuery(inValue);
    return setInValue('');
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    getMovieSearch(query)
      .then(resp => {
        const { results } = resp;
        setSearchMovies([...results]);
      })
      .catch(error => {
        console.log('ERROR: ', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <>
      <Wrap>
        <Search>
          <SearchTerm
            type="text"
            onChange={handleChange}
            autocomplete="off"
            // autofocus
            placeholder="Search movies"
          ></SearchTerm>

          <SearchBtn type="submit" onClick={handleSubmit}>
            <p>Search</p>
          </SearchBtn>
        </Search>
      </Wrap>

      {isLoading ? <Loader /> : <MoviesList movies={searchMovies} />}
    </>
  );
};

export default SearchForm;
