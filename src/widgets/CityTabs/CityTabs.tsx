import { useNavigate, useParams } from 'react-router-dom';
import { Tabs } from '@mantine/core';

const CityTabs = () => {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Tabs
        value={tabValue}
        onChange={(value) => navigate(`/${value}`)}
       
    >
      <Tabs.List>
        <Tabs.Tab value="first">Москва</Tabs.Tab>
        <Tabs.Tab value="second">Санкт-Петербург</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export default CityTabs


