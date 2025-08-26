import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs } from '@mantine/core';
import { useAppDispatch } from '../../shared/hooks/redux';
import { setCity } from '../../App/store/reducers/VacancySlice';
import { useEffect } from 'react';

const CityTabs = () => {
  const cityId: Record<string, string> = {
    all: '113',
    moscow: '1',
    petersburg: '2',
  };

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const pathSplit = location.pathname.split('/');
  const tabUrl = pathSplit[2];
  const activeTab =
    tabUrl === 'moscow' || tabUrl === 'petersburg' ? tabUrl : null;

  useEffect(() => {
    if (activeTab) {
      dispatch(setCity(cityId[activeTab]));
    } else {
      dispatch(setCity(cityId.all));
    }
  }, [activeTab, dispatch]);

  const handleChange = (val: string | null) => {
    if (!val) return;
    navigate(`/vacancies/${val}${location.search}`);
    dispatch(setCity(cityId[val]));
  };

  return (
    <Tabs value={activeTab} onChange={handleChange}>
      <Tabs.List>
        <Tabs.Tab value="moscow">Москва</Tabs.Tab>
        <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default CityTabs;
