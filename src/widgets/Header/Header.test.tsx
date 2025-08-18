import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Header from './Header';
import { renderWithProviders } from '../../test/utils';

describe('Header', () => {
  it('Header должен отрендериться', async () => {
    renderWithProviders(<Header />);

    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Вакансии/i)).toBeInTheDocument();
    expect(screen.getByText(/Обо мне/i)).toBeInTheDocument();
  });
});
