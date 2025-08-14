import {
  ActionIcon,
  Card,
  Group,
  Pill,
  PillsInput,
  Select,
  Text,
  TextInput,
} from '@mantine/core';
import { IconMapPin, IconPlus } from '@tabler/icons-react';
const VacancyFilter = () => {
  return (
    <>
      <Card w={317} p={24} radius="md">
        <Text fw={600} ta="left">
          Ключевые навыки
        </Text>
        <Group mt={12} gap={8}>
          <TextInput radius="md" w={227} placeholder="Навык" />
          <ActionIcon w={34} h={30} color="#228BE6">
            <IconPlus />
          </ActionIcon>
        </Group>
        <PillsInput variant="unstyled" mt={12}>
          <Pill.Group>
            <Pill withRemoveButton>React</Pill>
            <Pill withRemoveButton>Vue</Pill>
            <Pill withRemoveButton>Svelte</Pill>
          </Pill.Group>
        </PillsInput>
      </Card>
      <Card w={317} mt={20} p={24}>
        <Select
          leftSection={<IconMapPin size={18} />}
          placeholder="Все города"
          data={['Все города', 'Москва', 'Санкт-Петербург']}
        />
      </Card>
    </>
  );
};

export default VacancyFilter;
