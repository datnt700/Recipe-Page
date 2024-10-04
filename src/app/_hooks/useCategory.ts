import { useQuery } from '@tanstack/react-query';

import { fetchCategory } from '../_services/categories';

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategory,
    retry: false,
  });
};
