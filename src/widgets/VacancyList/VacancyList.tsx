import { Center, Container, Space } from '@mantine/core';
import VacancyCard from '../../entities/VacancyCard';
import PaginationList from '../../features/Pagination/Pagination';

const VacancyList = () => {
  return (
    <Container size={659} p={0}>
      <ul>
        <VacancyCard />
        <Space h="md" />
        <VacancyCard />
        <Space h="md" />
        <VacancyCard />
        <Space h="md" />
        <VacancyCard />
      </ul>
      <Center mt={24}>
        <PaginationList />
      </Center>
    </Container>
  );
};

export default VacancyList;
