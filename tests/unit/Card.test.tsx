import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';

import { Card } from '../../src/app/_components/common/Card';

describe('Card Component', () => {
  const mockStrMeal = 'Beef and Mustard Pie';
  const mockStrMealThumb =
    'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg';

  it('should render correction name and image', () => {
    render(<Card name={mockStrMeal} thumb={mockStrMealThumb} />);

    const name = screen.getByText(mockStrMeal);
    expect(name).toBeInTheDocument();

    const image = screen.getByAltText('card-image');
    expect(image).toBeInTheDocument();
  });
});
