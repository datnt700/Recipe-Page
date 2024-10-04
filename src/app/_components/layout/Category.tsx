/** @jsxImportSource @emotion/react */
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import axios from 'axios';

import { categoryStyle } from '../../_components/layout/Category.style';
import { CategoryItem } from '../../_components/layout/CategoryItem';

import { CategoryType } from '@/app/_types/Category';

export const fetchCategory = async () => {
  const response = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );
  return response.data.categories;
};

export const Category = () => {
  const { data, isLoading }: UseQueryResult<CategoryType[]> = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategory,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <section id={'Category'}>
      <div css={categoryStyle.container}>
        {isLoading && <p>...isLoading</p>}
        <h2 css={categoryStyle.title}>Categories</h2>
        <div css={categoryStyle.list}>
          {data
            ?.slice(0, 6)
            .map((item) => (
              <CategoryItem
                key={item.idCategory}
                name={item.strCategory}
                thumb={item.strCategoryThumb}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
