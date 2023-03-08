import { useState } from 'react';
import { Wrap, Search, SearchTerm, SearchBtn } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    const { value } = evt.target;
    setQuery(value);
    console.log('Query: ', query);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('HandleSubmit');

    const checkSubmit = query.trim();

    if(checkSubmit){
      return onSubmit(checkSubmit);
    }
  };

  return (
    <Wrap>
      <Search>
        <SearchTerm
          type="text"
          onChange={handleChange}
          autocomplete="off"
          // autofocus
          placeholder="Search movies"
        ></SearchTerm>
        <SearchBtn
          type="submit"
          // className="SearchForm-button"
          onClick={handleSubmit}
        >
          <p>Search</p>
        </SearchBtn>
      </Search>
    </Wrap>
  );
};

export default SearchForm;
