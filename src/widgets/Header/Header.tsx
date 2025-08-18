import {
  Anchor,
  Container,
  Group,
  Image,
  SimpleGrid,
  Text,
} from '@mantine/core';
import logo from '../../shared/assets/image/logo.svg';
import { IconUserCircle } from '@tabler/icons-react';

const Header = () => {
  return (
    <Container fluid p={0} bg="white" size="100%">
      <Container size={1440} p={15}>
        <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm">
          <Anchor w={116} href="/">
            <Image src={logo} alt="logo" w={116} fit="contain" />
          </Anchor>
          <Group justify="center">
            <Anchor href="/" underline="never" fw={500} c="black">
              Вакансии FE
            </Anchor>
            <Anchor href="#" c="dimmed" underline="never">
              <Group justify="space-between" gap={2}>
                <IconUserCircle size={18} />
                <Text fw={500}>Обо мне</Text>
              </Group>
            </Anchor>
          </Group>
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default Header;
