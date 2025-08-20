import { Title, Stack, Container, Divider, Flex, Grid } from '@mantine/core';
import SearchBar from '../widgets/SearchBar/SearchBar';
import VacancyList from '../widgets/VacancyList/VacancyList';
import VacancyFilter from '../widgets/VacancyFilter/VacancyFilter';

const MainPage = () => {
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
