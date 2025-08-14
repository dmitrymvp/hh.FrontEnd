import { Button, Flex, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const SearchBar = () => {
  return (
    <Flex align="center" gap={12}>
      <TextInput
        w={403}
        size="md"
        radius="md"
        placeholder="Должность или название компании"
        leftSection={<IconSearch size={18} stroke={1.5} />}
      />
      <Button w={93} h={42} color="#4263EB">
        Найти
      </Button>
    </Flex>
  );
};

export default SearchBar;
