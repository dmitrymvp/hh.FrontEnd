import { Button, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <Text m={20}>Этот раздел пока не доступен</Text>
      <Link to="/">
        <Button>На главную</Button>
      </Link>
    </div>
  );
};

export default AboutPage;
