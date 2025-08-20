import { useParams } from 'react-router-dom';
import VacancyCard from '../entities/VacancyCard';
import { useAppSelector } from '../shared/hooks/redux';
import { Card, Container, Text, Title } from '@mantine/core';

const Vacancy = () => {
  const { vacancyList } = useAppSelector((state) => state.vacancyReducer);

  const { id } = useParams();

  const vac = vacancyList.find((item) => item.id === id);
  console.log(vac);
  return vac ? (
    <Container>
      <VacancyCard {...vac}></VacancyCard>
      <Card mt={20}>
        <Title>Компания</Title>
        <Text>{vac.requirement}</Text>
      </Card>
    </Container>
  ) : (
    'Вакансия не найдена'
  );
};

export default Vacancy;
