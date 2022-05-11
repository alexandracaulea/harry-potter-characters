import styled from 'styled-components/macro';
import FamilyTreeFill from '../../assets/icons/FamilyTreeFill';
import HatWizardDetails from '../../assets/icons/HatVizardDetails';
import HatWizardFill from '../../assets/icons/HatWizardFill';
import HouseHill from '../../assets/icons/HouseFill';
import PersonFill from '../../assets/icons/PersonFill';
import QuestionFill from '../../assets/icons/QuestionFill';
import StudentFill from '../../assets/icons/StudentFill';
import TeacherFill from '../../assets/icons/TeacherFill';
import WandFill from '../../assets/icons/WandFill';
import PlaceholderImage from '../../assets/images/placeholder.png';

const Card = styled.div`
  padding: 2rem;
  border-radius: var(--md-radius);
  background-color: rgba(35, 37, 45, 0.25);
  box-shadow: 0 8px 32px 0 rgba(97, 92, 84, 0.265);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  border: 1px solid hsla(37, 7%, 35%, 0.301);

  svg {
    margin-right: 8px;
  }
`;

const Title = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: var(--primary-color);
  text-align: center;
  font-weight: 700;
`;

const List = styled.ul`
  margin-bottom: 0;
  margin-top: 0;
`;

const ListItem = styled.li`
  font-size: 1.125rem;
  color: var(--secondary-color);
  line-height: 1.5;
`;

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 130px;
  height: 180px;
  object-fit: cover;
  border-radius: var(--md-radius);
`;

const Paragraph = styled.p`
  display: flex;
  font-size: 1.125rem;
  align-items: center;
  color: var(--secondary-color);
`;

const Highlight = styled.span`
  margin-left: 0.25rem;
  color: var(--primary-color);
  font-weight: 700;
`;

const CardCharacter = ({ character }) => {
  const {
    name,
    alternate_names,
    house,
    wizard,
    patronus,
    ancestry,
    hogwartsStudent,
    hogwartsStaff,
    wand,
    image,
  } = character;
  function isOptionEmpty(name) {
    if (Array.isArray(name) && name.length > 1) {
      return name[0];
    }
    return '-';
  }
  return (
    <Card>
      <Img src={image ? image : PlaceholderImage} alt={name} loading="lazy" />
      <Title>{name}</Title>
      <Paragraph>
        <PersonFill />
        Alternative Name:
        <Highlight>{isOptionEmpty(alternate_names)}</Highlight>
      </Paragraph>
      <Paragraph>
        <HouseHill />
        House:
        <Highlight>{isOptionEmpty(house)}</Highlight>
      </Paragraph>
      <Paragraph>
        <HatWizardDetails />
        Wizard:
        <Highlight>{wizard ? 'Yes' : 'No'}</Highlight>
      </Paragraph>
      <Paragraph>
        <HatWizardFill />
        Patronus:
        <Highlight>{isOptionEmpty(patronus)}</Highlight>
      </Paragraph>
      <Paragraph>
        <FamilyTreeFill />
        Ancestry:
        <Highlight>{isOptionEmpty(ancestry)}</Highlight>
      </Paragraph>
      <Paragraph>
        {hogwartsStudent ? (
          <StudentFill />
        ) : hogwartsStaff ? (
          <TeacherFill />
        ) : (
          <QuestionFill />
        )}
        Hogwarts:
        <Highlight>
          {hogwartsStudent ? 'Student' : hogwartsStaff ? 'Teacher' : '-'}
        </Highlight>
      </Paragraph>
      <div>
        <Paragraph style={{ marginBottom: '0.375rem' }}>
          <WandFill />
          Wand:
        </Paragraph>
        <List>
          {Object.entries(wand).map(([key, value]) => {
            return (
              <ListItem key={key}>
                {key}: <Highlight>{value ? value : '-'}</Highlight>
              </ListItem>
            );
          })}
        </List>
      </div>
    </Card>
  );
};

export default CardCharacter;
