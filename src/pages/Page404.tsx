import {
  Button,
  Card,
  Container,
  Flex,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import catImage from '../shared/assets/image/sad-cat.png';

const Page404 = () => {
  return (
    <Container size={707} p={0}>
      <Card w={707} mt={72} p={32}>
        <Flex h={124} align="center">
          <Group mt={8}>
            <Title order={2} fw={700} size={34} ta="left">
              Упс! Такой страницы не существует
            </Title>
            <Text c="dimmed">Давайте перейдём к началу.</Text>
          </Group>
          <Link to="/">
            <Button>На главную</Button>
          </Link>
        </Flex>

        <Group mt={32}>
          <Image src={catImage}></Image>
        </Group>
      </Card>
    </Container>
  );
};

export default Page404;
