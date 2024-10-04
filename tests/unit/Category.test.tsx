import { it, describe, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

import { Category } from '../../src/app/_components/layout/Category';
describe('Category Component', () => {
  const createTestQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

  const mockCategories = [
    {
      idCategory: '1',
      strCategory: 'Beef',
      strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
      strCategoryDescription:
        'Beef is the culinary name for meat from cattle, particularly skeletal muscle.',
    },
    {
      idCategory: '2',
      strCategory: 'Chicken',
      strCategoryThumb: 'https://www.themealdb.com/images/category/chicken.png',
      strCategoryDescription:
        'Chicken is a type of poultry that humans have been eating for thousands of years.',
    },
    {
      idCategory: '3',
      strCategory: 'Pasta',
      strCategoryThumb: 'https://www.themealdb.com/images/category/pasta.png',
      strCategoryDescription:
        'Pasta is a type of Italian food typically made from unleavened dough of wheat flour.',
    },
    {
      idCategory: '4',
      strCategory: 'Dessert',
      strCategoryThumb: 'https://www.themealdb.com/images/category/dessert.png',
      strCategoryDescription:
        'Dessert is a course that typically comes at the end of a meal, usually consisting of sweet foods.',
    },
    {
      idCategory: '5',
      strCategory: 'Seafood',
      strCategoryThumb: 'https://www.themealdb.com/images/category/seafood.png',
      strCategoryDescription:
        'Seafood refers to any form of sea life regarded as food.',
    },
    {
      idCategory: '6',
      strCategory: 'Vegan',
      strCategoryThumb: 'https://www.themealdb.com/images/category/vegan.png',
      strCategoryDescription: 'Vegan foods exclude all animal products.',
    },
    {
      idCategory: '7',
      strCategory: 'Vegetarian',
      strCategoryThumb:
        'https://www.themealdb.com/images/category/vegetarian.png',
      strCategoryDescription:
        'Vegetarian cuisine involves not eating meat but may include other animal products.',
    },
  ];

  // Mock axios
  vi.mock('axios');
  const mockedAxiosGet = axios.get as jest.Mock;
  const queryClient = createTestQueryClient();

  it('should render at most 6 category items', async () => {
    mockedAxiosGet.mockResolvedValueOnce({
      data: { categories: mockCategories },
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Category />
      </QueryClientProvider>
    );

    const firstCategory = await screen.findByText(
      mockCategories[0].strCategory
    );
    expect(firstCategory).toBeInTheDocument();

    const firstImage = await screen.findAllByAltText('category-image');
    expect(firstImage[0]).toHaveAttribute(
      'src',
      expect.stringContaining('www.themealdb.com')
    );
  });
});
