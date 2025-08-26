import './App.css';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import MainPage from '../pages/MainPage';
import Layout from './layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import Vacancy from '../pages/Vacancy';
import CityTabs from '../widgets/CityTabs/CityTabs';

export default function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/vacancies" replace />} />
          <Route path="/vacancies" element={<MainPage />}>
            <Route path="moscow" element={<CityTabs />} />
            <Route path="petersburg" element={<CityTabs />} />
          </Route>
          <Route path="vacancies/:id" element={<Vacancy />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}
