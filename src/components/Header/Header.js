import styled from 'styled-components/macro';

const MainHeader = styled.h1`
  font-family: 'Harry Potter', cursive;
  font-size: clamp(3rem, 1.5rem + 8.5vw, 9rem);
  font-weight: 400;
  text-align: center;
  color: var(--primary-color);
`;

const Header = () => {
  return (
    <header>
      <MainHeader>Harry Potter Characters</MainHeader>
    </header>
  );
};

export default Header;
