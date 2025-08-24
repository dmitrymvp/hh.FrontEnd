import { Center, Container, Space } from '@mantine/core';
import VacancyCard from '../../entities/VacancyCard';
import PaginationList from '../../features/Pagination/Pagination';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { fetchVacancyList } from '../../App/store/reducers/VacancyThunk';

const VacancyList = () => {
  const dispatch = useAppDispatch();
  const { vacancyList, city, currentPage, skills } = useAppSelector(
    (state) => state.vacancyReducer,
  );

  useEffect(() => {
    dispatch(fetchVacancyList());
  }, [dispatch, city, currentPage, skills]);

  return (
    <Container size={659} p={0}>
      <ul>
        {vacancyList.map((item) => (
          <li key={item.id}>
            <VacancyCard
              id={item.id}
              name={item.name}
              salaryMin={item.salaryMin}
              salaryMax={item.salaryMax}
              experience={item.experience}
              employerName={item.employerName}
              area={item.area}
              workFormat={item.workFormat}
              vacancyUrl={item.vacancyUrl}
              textButton={`Откликнуться`}
              isVisibleButton={true}
            />
            <Space h="md" />
          </li>
        ))}
      </ul>
      <Center mt={24}>
        <PaginationList />
      </Center>
    </Container>
  );
};

export default VacancyList;
