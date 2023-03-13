import { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';

import { Wrap, Search, SearchTerm, SearchBtn } from './SearchForm.styled';
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
    console.log('query: ', query);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('Click = HandleSubmit');

    if (!query.trim()) {
      alert('Enter correct title');
      return;
    }
    setMovie(query);
    updateQueryString(query);
    return setQuery('');
  };

  useEffect(() => {
    if (searchParams.get('searchQuery')) {
      console.log('Забрали значення з URL');
      return setMovie(searchParams.get('searchQuery'));
    }
    console.log('В URL пусто');
  }, []);

  useEffect(() => {
    if (!movie) {
      console.log('Нульовий рендер');
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
