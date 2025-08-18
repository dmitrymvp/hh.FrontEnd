import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import VacancyFilter from './VacancyFilter';
import { renderWithProviders } from '../../test/utils';
import userEvent from '@testing-library/user-event';

describe('VacancyFilter', () => {
  it('Приложение должно отрендериться', async () => {
    renderWithProviders(<VacancyFilter />);

    expect(screen.getByText(/Ключевые навыки/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Навык/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();

    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/Redux/i)).toBeInTheDocument();
  });

  it('добавляет новый навык', async () => {
    renderWithProviders(<VacancyFilter />);

    const input = screen.getByPlaceholderText(/Навык/i);
    const button = screen.getByRole('button');

    await userEvent.type(input, 'html');
    await userEvent.click(button);
    expect(await screen.findByText(/html/i)).toBeInTheDocument();
  });

  it('Удаляет навык ', async () => {
    renderWithProviders(<VacancyFilter />);

    const skill = screen.getByText(/TypeScript/i).closest('.mantine-Pill-root');
    const removeBtn = skill?.querySelector('button.mantine-Pill-remove');

    await userEvent.click(removeBtn!);

    await waitFor(() => {
      expect(screen.queryByText(/TypeScript/i)).not.toBeInTheDocument();
    });
  });
});
