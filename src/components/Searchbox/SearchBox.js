import styled from 'styled-components/macro';

const Search = styled.input`
  width: 37.5rem;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 5rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 3rem;
  color: #8a8479;
  background-color: transparent;
  border: 2px solid #615c54;
  border-radius: var(--md-radius);
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.8px;

  &:focus {
    outline: none;
    border-radius: var(--md-radius);
    box-shadow: 0 0 10px hsla(227deg, 24%, 81%, 0.3);
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    height: 20px;
    width: 20px;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 6 6 18M6 6l12 12' stroke='%239c9c9c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-size: 20px 20px;
  }
`;

const SearchBox = ({ onChangeHandler }) => {
  return (
    <Search
      type="search"
      placeholder="Search character"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
