import { Title, Stack, Container, Divider, Flex, Grid } from '@mantine/core';
import SearchBar from '../widgets/SearchBar/SearchBar';
import VacancyList from '../widgets/VacancyList/VacancyList';
import VacancyFilter from '../widgets/VacancyFilter/VacancyFilter';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../shared/hooks/redux';
import {
  setCity,
  setSearchQuery,
  startSkills,
} from '../App/store/reducers/VacancySlice';

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { skills, city, searchQuery } = useAppSelector(
    (state) => state.vacancyReducer,
  );

  useEffect(() => {
    const cityParam = searchParams.get('city') || '113';
    const skillsParam = searchParams.get('skills')?.split(' ') || skills;
    const searchParam = searchParams.get('search') ?? '';

    dispatch(setSearchQuery(searchParam));
    dispatch(setCity(cityParam));
    dispatch(startSkills(skillsParam));
  }, [dispatch, searchParams]);

  useEffect(() => {
    const params: Record<string, string> = {};

    if (skills && skills.length) params.skills = skills.join(' ');
    if (city) params.city = city;
    if (searchQuery !== '') params.search = searchQuery;

    setSearchParams(params);
  }, [city, skills, searchQuery, setSearchParams]);

  return (
    <div>
      <Container pb={24} pt={24} pl={0} pr={0} size={1000}>
        <Flex justify="space-between">
          <Stack align="flex-start" justify="center" gap={4}>
            <Title order={1} size={26}>
              Список вакансий
            </Title>
            <Title order={2} c="dimmed" size={20} fw={500}>
              по профессии Frontend-разработчик
            </Title>
          </Stack>
          <SearchBar />
        </Flex>
      </Container>
      <Divider w="100%" />

      <Container pb={24} pt={24} pl={0} pr={0} size={1000}>
        <Grid>
          <Grid.Col span={4}>
            <VacancyFilter />
          </Grid.Col>
          <Grid.Col span={8}>
            <VacancyList />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default MainPage;
