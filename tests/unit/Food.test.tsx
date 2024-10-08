import { it, describe, vi } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

import { Food } from '../../src/app/_components/layout/Food';

const mockData = [
  {
    idMeal: '1',
    strMeal: 'Beef and Mustard Pie',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
  },
  {
    idMeal: '2',
    strMeal: 'Chicken and Mushroom Pie',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/xxyupu1511554369.jpg',
  },
  {
    idMeal: '3',
    strMeal: 'Apple Frangipan Tart',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/wxywrq1511555540.jpg',
  },
  {
    idMeal: '53073',
    strMeal: 'Dauphin Asado',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg',
  },
  {
    idMeal: '53072',
    strMeal: 'Chicken Asado',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg',
  },
  {
    idMeal: '53077',
    strMeal: 'Tiger Asado',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg',
  },
];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('Food component', () => {
  vi.mock('axios');
  const mockedAxiosGet = axios.get as unknown as jest.Mock;

  beforeEach(() => {
    mockedAxiosGet.mockResolvedValueOnce({
      data: { meals: mockData },
    });
  });

  it('should render at most 6 meals', async () => {
    mockedAxiosGet.mockResolvedValueOnce({
      data: { meals: mockData },
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Food
          cateName={'Beef'}
          option={'Name'}
          nameFood={'Beef and Mustard Pie'}
        />
      </QueryClientProvider>
    );
  });
});
