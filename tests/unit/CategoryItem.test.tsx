import { it, describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';

import { CategoryItem } from '../../src/app/_components/layout/CategoryItem';

describe('Category Item Component', () => {
  const mockName = 'Chicken';
  const mockThumb = 'https://www.themealdb.com/images/category/chicken.png';

  it("should render image and category's name", () => {
    const { getByAltText, getByText } = render(
      <CategoryItem name={mockName} thumb={mockThumb} />
    );

    const imageCategory = getByAltText('category-image');
    expect(imageCategory).toHaveAttribute(
      'src',
      expect.stringContaining('www.themealdb.com')
    );

    const nameCategory = getByText(mockName);
    expect(nameCategory).toBeInTheDocument();
  });
});
