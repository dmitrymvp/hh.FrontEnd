import { Card, Group, Title, Text, Button, Badge } from '@mantine/core';
import type { Vacancy } from '../shared/types/types';

const workFormatInfo = {
  ON_SITE: { text: 'ОФИС', color: '#0F0F101A', textColor: 'black' },
  HYBRID: { text: 'ГИБРИД', color: '#0F0F10', textColor: 'white' },
  REMOTE: { text: 'МОЖНО УДАЛЁННО', color: '#4263EB', textColor: 'white' },
};

const VacancyCard = ({
  name,
  salaryMin,
  salaryMax,
  experience,
  employerName,
  area,
  workFormat,
  vacancyUrl,
}: Vacancy) => {
  const format = workFormatInfo[workFormat];

  const salary = () => {
    if (salaryMin && salaryMax) {
      return (
        <Text>
          {salaryMin} - {salaryMax} ₽
        </Text>
      );
    } else if (salaryMin && !salaryMax) {
      return <Text>от {salaryMin} ₽</Text>;
    } else if (!salaryMin && salaryMax) {
      return <Text>до {salaryMax} ₽</Text>;
    } else {
      return null;
    }
  };

  return (
    <Card w={659} p={24}>
      <Title order={2} c="#364FC7" fw={600} size={20} ta="left">
        {name}
      </Title>
      <Group mt={8}>
        {salary()}

        <Text c="dimmed">{experience}</Text>
      </Group>
      <Text c="dimmed" size="sm" ta="left" mt={16}>
        {employerName}
      </Text>
      {format && (
        <Badge
          color={format.color ?? 'black'}
          c={format.textColor}
          radius="sm"
          size="xs"
          mt={8}
        >
          {format.text}
        </Badge>
      )}

      <Text ta="left" mt={4}>
        {area}
      </Text>
      <Group mt={16}>
        <Button color="#0F0F10">Смотреть вакансию</Button>
        <Button
          color="#0F0F101A"
          c="black"
          component="a"
          href={vacancyUrl}
          target="_blank"
        >
          Откликнуться
        </Button>
      </Group>
    </Card>
  );
};

export default VacancyCard;
