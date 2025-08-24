import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import VacancyCard from './VacancyCard';
import { type Vacancy, WorkFormat } from '../shared/types/types';
import { renderWithProviders } from '../test/utils';

const mock: Vacancy = {
  id: 1,
  name: 'Frontend',
  salaryMin: 100000,
  salaryMax: 150000,
  experience: '3–5 лет',
  employerName: 'Компания',
  area: 'Москва',
  workFormat: WorkFormat.ON_SITE,
  vacancyUrl: 'https://example.com',
  vacancyDescription: 'Описание',
};

describe('VacancyCard', () => {
  it('Карточка должна отрендериться', async () => {
    renderWithProviders(
      <VacancyCard {...mock} textButton="текст кнопки" isVisibleButton />,
    );

    expect(screen.getByText(/Frontend/i)).toBeInTheDocument();
    expect(screen.getByText(/100000 - 150000 ₽/i)).toBeInTheDocument();
    expect(screen.getByText(/3–5 лет/i)).toBeInTheDocument();
    expect(screen.getByText(/Компания/i)).toBeInTheDocument();
    expect(screen.getByText(/ОФИС/i)).toBeInTheDocument();
    expect(screen.getByText(/Москва/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Смотреть вакансию/i }),
    ).toBeInTheDocument();
  });
});
