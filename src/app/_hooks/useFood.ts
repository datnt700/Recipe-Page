import { useQuery } from '@tanstack/react-query';

import { fetchFoodByCategory } from '../_services/food';

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
