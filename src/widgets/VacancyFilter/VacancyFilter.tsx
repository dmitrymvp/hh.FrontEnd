import {
  ActionIcon,
  Card,
  Group,
  Pill,
  PillsInput,
  Text,
  TextInput,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import {
  setSkillInput,
  addSkill,
  removeSkill,
} from '../../App/store/reducers/VacancySlice';
import { useSearchParams } from 'react-router-dom';

const VacancyFilter = () => {
  const { skillInput } = useAppSelector((state) => state.vacancyReducer);
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
    </>
  );
};

export default VacancyFilter;
