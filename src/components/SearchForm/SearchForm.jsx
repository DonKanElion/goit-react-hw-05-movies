import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Wrap, Form, SearchTerm, SearchBtn } from './SearchForm.styled';
import { getMovieSearch } from 'services/moviesAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryString = searchQuery => {
    const nextParams = searchQuery !== '' ? { searchQuery } : {};
    setSearchParams(nextParams);
  };

  const handleChange = evt => {
    const { value } = evt.target;
    setQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget

    if (!query.trim()) {
      alert('Enter correct title');
      return;
    }
    setMovie(query);
    updateQueryString(query);
    form.reset();
    return setQuery('');
  };

  useEffect(() => {
    if (searchParams.get('searchQuery')) {
      return setMovie(searchParams.get('searchQuery'));
    }
  }, [searchParams]);

  useEffect(() => {
    if (!movie) {
      return;
    }

    setIsLoading(true);

    getMovieSearch(movie)
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
  }, [movie]);

  return (
    <>
      <Wrap>
        <Form onSubmit={handleSubmit}>
          <SearchTerm
            type="text"
            name='inputQuery'
            onChange={handleChange}
            autocomplete="off"
            // autofocus
            placeholder="Search movies"
          ></SearchTerm>

          {/* <SearchBtn type="submit" onClick={handleSubmit}> */}
          <SearchBtn type="submit">
            <p>Search</p>
          </SearchBtn>
        </Form>
      </Wrap>

      {isLoading ? <Loader /> : <MoviesList movies={searchMovies} />}
    </>
  );
};

export default SearchForm;
