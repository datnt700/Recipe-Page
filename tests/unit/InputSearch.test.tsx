import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import { InputSearch } from '../../src/app/_components/common/InputSearch';

vi.mock('use-debounce', () => ({
  useDebouncedCallback: vi.fn((callback) => callback),
}));

describe('Input Search Component', () => {
  it('should render input and logo', () => {
    const mockHandleInput = vi.fn();
    render(<InputSearch setNameFood={mockHandleInput} />);

    const input = screen.getByPlaceholderText('Search recipes and more...');
    expect(input).toBeInTheDocument();

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('should call handleInput on input change', async () => {
    const mockSetNameFood = vi.fn(); // Giả lập setNameFood
    render(<InputSearch setNameFood={mockSetNameFood} />);

    const input = screen.getByPlaceholderText('Search recipes and more...');
    fireEvent.change(input, { target: { value: 'Beef' } });

    await waitFor(() => {
      expect(mockSetNameFood).toHaveBeenCalledTimes(1);
      expect(mockSetNameFood).toHaveBeenCalledWith('Beef');
    });
  });
});
