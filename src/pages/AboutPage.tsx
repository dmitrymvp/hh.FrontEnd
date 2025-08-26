import { Text, Container, Card, Group, Title } from '@mantine/core';

const AboutPage = () => {
  return (
    <div>
      <Container size={658} p={0}>
        <Card w={658} mt={24} p={24}>
          <Group mt={8} ta="left">
            <Title order={2} fw={700} size={26} ta="left">
              Дмитрий Мищенко
            </Title>
            <Text>
              Привет! Я - Frontend-разработчик. Пишу приложения на React +
              TypeScript + Redux Toolkit.
            </Text>
          </Group>
        </Card>
      </Container>
    </div>
  );
};

export default AboutPage;
