import { useQuery } from '@tanstack/react-query';

import { fetchFoodByCategory, fetchFoodById } from '../_services/food';

export const useFood = (opts?: { cateName: string }) => {
  return useQuery({
    queryKey: ['meals', opts?.cateName],
    queryFn: () => {
      if (opts?.cateName) {
        return fetchFoodByCategory({ categoryName: opts.cateName });
      }
      return Promise.resolve([]);
    },
    retry: false,
  });
};

export const useFoodById = (opts?: { id: string }) => {
  return useQuery({
    queryKey: ['meals', opts?.id],
    queryFn: () => {
      if (opts?.id) {
        return fetchFoodById({ id: opts.id });
      }
      return Promise.resolve([]);
    },
    retry: false,
  });
};
