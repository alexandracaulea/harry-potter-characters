import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Header from '../Header';
import SearchBox from '../Searchbox';
import CardList from '../CardList';

const Wrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(users => {
        setCharacters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchField);
    });
    setFilteredCharacters(newFilteredCharacters);
  }, [characters, searchField]);

  function onSearchChange(event) {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <Wrapper>
      <Header />
      <main>
        <SearchBox onChangeHandler={onSearchChange} />
        <CardList characters={filteredCharacters} />
      </main>
    </Wrapper>
  );
};

export default App;
