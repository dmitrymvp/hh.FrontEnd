import { Center, Container, Space } from '@mantine/core';
import VacancyCard from '../../entities/VacancyCard';
import PaginationList from '../../features/Pagination/Pagination';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { fetchVacancyList } from '../../App/store/reducers/VacancyThunk';

const VacancyList = () => {
  const dispatch = useAppDispatch();
  const { vacancyList } = useAppSelector((state) => state.vacancyReducer);

  useEffect(() => {
    dispatch(fetchVacancyList());
  }, [dispatch]);

  return (
    <Container size={659} p={0}>
      <ul>
        {vacancyList.map((item) => (
          <VacancyCard name={item.name} />
        ))}
      </ul>
      <Center mt={24}>
        <PaginationList />
      </Center>
    </Container>
  );
};

export default VacancyList;
