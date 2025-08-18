import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from '../test/utils';

describe('App', () => {
  it('Приложение должно отрендериться', async () => {
    renderWithRedux(<App />);

    expect(screen.getByText(/Список вакансий/i)).toBeInTheDocument();
    expect(
      screen.getByText(/по профессии Frontend-разработчик/i),
    ).toBeInTheDocument();
  });
});
