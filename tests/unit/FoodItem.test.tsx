import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import { FoodItem } from '../../src/app/food/_component/FoodItem';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// Mock the useSearchParams hook
vi.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: vi.fn().mockReturnValue('52874'), // Mock the id returned by searchParams
  }),
}));

describe('FoodItem Component', () => {
  // Mock dữ liệu trả về từ API
  const mockData = [
    {
      idMeal: '1',
      strMeal: 'Beef and Mustard Pie',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
      strCategory: 'Beef',
      strArea: 'British',
      strIngredient1: 'Beef',
      strIngredient2: 'Mustard',
      strMeasure1: '200g',
      strMeasure2: '2 tbsp',
      strInstructions: 'Cook beef, mix with mustard...',
    },
  ];

  it('should show loading state', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FoodItem />
      </QueryClientProvider>
    );

    expect(screen.getByText(/...Is Loading/i)).toBeInTheDocument();
  });

  it('should render logo and back to categories link', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FoodItem />
      </QueryClientProvider>
    );

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();

    const backLink = screen.getByRole('link', { name: /Back to categories/i });
    expect(backLink).toBeInTheDocument();
  });

  it('should display food data when API call is successful', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FoodItem />
      </QueryClientProvider>
    );

    const mealImage = await screen.findByAltText('image');
    const mealName = await screen.findByText(mockData[0].strMeal);
    expect(mealImage).toBeInTheDocument();
    expect(mealName).toBeInTheDocument();

    const category = await screen.findByText(/Category:/i);
    const area = await screen.findByText(/Area:/i);
    expect(category).toBeInTheDocument();
    expect(area).toBeInTheDocument();
  });
});
