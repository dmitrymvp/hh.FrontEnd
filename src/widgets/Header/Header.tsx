import { Container, Group, Image, SimpleGrid, Text } from '@mantine/core';
import logo from '../../shared/assets/image/logo.svg';
import { IconUserCircle } from '@tabler/icons-react';
import { Link, NavLink, type NavLinkRenderProps } from 'react-router-dom';

const Header = () => {
  const setActive = ({ isActive }: NavLinkRenderProps) =>
    isActive ? 'active-link' : 'link';

  return (
    <Container fluid p={0} bg="white" size="100%">
      <Container size={1440} p={15}>
        <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm">
          <Link
            to="/vacancies"
            style={{
              width: '116px',
            }}
          >
            <Image src={logo} alt="logo" w={116} fit="contain" />
          </Link>
          <Group justify="center" gap={38}>
            <NavLink to="/vacancies" className={setActive}>
              Вакансии FE
            </NavLink>
            <NavLink to="/about" className={setActive}>
              <Group justify="space-between" gap={2}>
                <IconUserCircle size={18} />
                <Text fw={500}>Обо мне</Text>
              </Group>
            </NavLink>
          </Group>
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default Header;
