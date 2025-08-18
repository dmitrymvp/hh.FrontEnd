import { Button, Flex, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { setSearchInput } from '../../App/store/reducers/VacancySlice';
import { fetchVacancyList } from '../../App/store/reducers/VacancyThunk';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { searchInput } = useAppSelector((state) => state.vacancyReducer);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchVacancyList());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex align="center" gap={12}>
        <TextInput
          w={403}
          size="md"
          radius="md"
          placeholder="Должность или название компании"
          leftSection={<IconSearch size={18} stroke={1.5} />}
          value={searchInput}
          onChange={(e) => {
            dispatch(setSearchInput(e.target.value));
          }}
        />
        <Button type="submit" w={93} h={42} color="#4263EB">
          Найти
        </Button>
      </Flex>
    </form>
  );
};

export default SearchBar;
