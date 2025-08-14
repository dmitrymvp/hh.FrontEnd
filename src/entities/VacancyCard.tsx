import { Card, Group, Title, Text, Button, Badge } from '@mantine/core';

const VacancyCard = ({ name }) => {
  return (
    <Card w={659} p={24}>
      <Title order={2} c="#364FC7" fw={600} size={20} ta="left">
        {name}
      </Title>
      <Group mt={8}>
        <Text>100 000 - 970 000</Text>
        <Text c="dimmed"> Опыт 3 года</Text>
      </Group>
      <Text c="dimmed" size="sm" ta="left" mt={16}>
        Компания
      </Text>
      <Badge color="black" radius="sm" size="xs" mt={8}>
        Гибрид
      </Badge>
      <Text ta="left" mt={4}>
        Город
      </Text>
      <Group mt={16}>
        <Button color="#0F0F10">Смотреть вакансию</Button>
        <Button color="#0F0F101A" c="black">
          Откликнуться
        </Button>
      </Group>
    </Card>
  );
};

export default VacancyCard;
