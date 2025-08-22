import { useParams } from 'react-router-dom';
import VacancyCard from '../entities/VacancyCard';
import { useAppDispatch, useAppSelector } from '../shared/hooks/redux';
import { Card, Container, Text } from '@mantine/core';
import { useEffect } from 'react';
import { fetchVacancyById } from '../App/store/reducers/VacancyThunk';

const Vacancy = () => {
  const dispatch = useAppDispatch()

  const { currentVacancy, status } = useAppSelector((state) => state.vacancyReducer);
  const { id } = useParams();

  useEffect(()=>{
    if(id) {
      dispatch(fetchVacancyById(id))
    }
  },[id, dispatch])
  
  if(status ==='loading') {
    return (
         <Container size={659} flex='center' p={20}>
        <Text> Загрузка...</Text>
    </Container>
    )
  }
  
  if(currentVacancy && status ==='success') {
    return (
    <Container size={659} flex='center' p={20}>
      <VacancyCard {...currentVacancy}></VacancyCard>
      <Card w={659} mt={20}>
        <Text  ta='left' dangerouslySetInnerHTML={{__html: `${currentVacancy.vacancyDescription}`}}></Text>
      </Card>
    </Container>
  )
  }
  if(!currentVacancy || status==='error') {
    return (

      <Container size={659} flex='center' p={20}>
        <Text>Вакансия не найдена</Text>
    </Container>
            )
  }

};

export default Vacancy;
