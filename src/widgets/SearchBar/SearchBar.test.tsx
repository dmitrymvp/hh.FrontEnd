import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Инпут и кнопка должны отрендериться', async () => {
    renderWithProviders(<SearchBar />);
    expect(screen.getByRole('button', { name: /найти/i })).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Должность или название компании/i),
    ).toBeInTheDocument();
  });
});
