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
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import {
  setSkillInput,
  addSkill,
  removeSkill,
  setCity,
} from '../../App/store/reducers/VacancySlice';
import { useSearchParams } from 'react-router-dom';

const VacancyFilter = () => {
  const { skillInput, city } = useAppSelector((state) => state.vacancyReducer);
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  const skillsParam = searchParams.get('skills')?.split(' ');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addSkill());
  };

  return (
    <>
      <Card w={317} p={24} radius="md" pos="sticky" top={15}>
        <Text fw={600} ta="left">
          Ключевые навыки
        </Text>
        <form onSubmit={handleSubmit}>
          <Group mt={12} gap={8}>
            <TextInput
              radius="md"
              w={227}
              placeholder="Навык"
              value={skillInput}
              onChange={(e) => {
                dispatch(setSkillInput(e.target.value));
              }}
            />
            <ActionIcon type="submit" w={34} h={30} color="#228BE6">
              <IconPlus />
            </ActionIcon>
          </Group>
        </form>
        <PillsInput variant="unstyled" mt={12}>
          <Pill.Group>
            {skillsParam?.map((skill) => (
              <Pill
                withRemoveButton
                key={skill}
                onRemove={() => dispatch(removeSkill(skill))}
              >
                {skill}
              </Pill>
            ))}
          </Pill.Group>
        </PillsInput>
      </Card>
      {/* <Card w={317} mt={20} p={24} pos="sticky" top={205}>
        <Select
          leftSection={<IconMapPin size={18} />}
          placeholder="Все города"
          data={[
            { value: '113', label: 'Все города' },
            { value: '1', label: 'Москва' },
            { value: '2', label: 'Санкт-Петербург' },
          ]}
          value={city}
          onChange={(value: string | null) => {
            if (value) dispatch(setCity(value));
          }}
        />
      </Card> */}
    </>
  );
};

export default VacancyFilter;
