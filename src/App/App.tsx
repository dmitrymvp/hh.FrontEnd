import './App.css';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import MainPage from '../pages/MainPage';
import Layout from './layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import Vacancy from '../pages/Vacancy';

export default function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/vacancies" replace />} />
          <Route path="/vacancies" element={<MainPage />} />
          {/* <Route path="vacancy" element={<Vacancy />} /> */}
          <Route path="vacancies/:id" element={<Vacancy />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}
