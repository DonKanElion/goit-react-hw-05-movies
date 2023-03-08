import styled from 'styled-components';

/*Resize the wrap to see the search bar change!*/
export const Wrap = styled.div`
  width: 50%;
  padding: 10px 0;
`;

export const Search = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const SearchTerm = styled.input`
  width: 100%;
  border: 3px solid var(--bs-primary);
  border-right: none;
  padding: 8px;
  height: 28px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: black;
  font-size: 14px;
  font-weight: 400;
  &focus {
    color: #00b4cc;
  }
`;

export const SearchBtn = styled.button`
  width: 60px;
  height: 28px;
  border: 1px solid var(--bs-primary);
  background: var(--bs-primary);
  text-align: center;
  color: white;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 14px;

  &:hover,
    &:focus {
        color: black;
        /* background-color: rgba(123, 211, 255, 0.86); */
    }
`;
