import styled from 'styled-components/macro';
import CardCharacter from '../CardCharacter/CardCharacter';

const CardContainer = styled.div`
  width: clamp(15rem, 80vw, 80rem);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 40px;
  margin-left: auto;
  margin-right: auto;
`;

const CardList = ({ characters }) => {
  return (
    <CardContainer>
      {characters.map((character, idx) => (
        <CardCharacter character={character} key={idx} />
      ))}
    </CardContainer>
  );
};

export default CardList;
