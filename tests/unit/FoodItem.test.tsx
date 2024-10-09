import { it, describe } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';

import { FoodItem } from '../../src/app/_components/layout/FoodItem';

describe('Food Item Component', () => {
  'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg';
  it('should render image and food name', () => {
    render(<FoodItem />);
  });
});
