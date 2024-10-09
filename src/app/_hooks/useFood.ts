import { useQuery } from '@tanstack/react-query';

import { fetchFoodByCategory, fetchFoodById } from '../_services/food';

export const useFoods = (opts?: { categoryName: string }) => {
  return useQuery({
    queryKey: ['meals', opts?.categoryName],
    queryFn: () => {
      if (opts?.categoryName) {
        return fetchFoodByCategory({ categoryName: opts.categoryName });
      }
      return Promise.resolve([]);
    },
    retry: false,
  });
};

export const useFoodById = (opts?: { id: string }) => {
  return useQuery({
    queryKey: ['mealItem', opts?.id],
    queryFn: () => {
      if (opts?.id) {
        return fetchFoodById({ id: opts.id });
      }
      return Promise.resolve([]);
    },
    retry: false,
  });
};
