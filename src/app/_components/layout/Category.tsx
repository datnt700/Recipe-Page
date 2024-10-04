/** @jsxImportSource @emotion/react */
import { UseQueryResult } from '@tanstack/react-query';
import React, { useEffect } from 'react';

import { categoryStyle } from '../../_components/layout/Category.style';
import { CategoryItem } from '../../_components/layout/CategoryItem';
import { useCategories } from '../../_hooks/useCategory';

import { CategoryType } from '@/app/_types/Category';

export const Category = () => {
  const { data, isLoading }: UseQueryResult<CategoryType[]> = useCategories();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <section id={'Category'}>
      <div css={categoryStyle.container}>
        {isLoading && <p style={{ color: 'white' }}>...Is Loading</p>}
        <h2 css={categoryStyle.title}>Categories</h2>
        <div css={categoryStyle.list}>
          {data?.slice(0, 6).map((item) => (
            <div key={item.idCategory} data-testid="category-item">
              <CategoryItem
                name={item.strCategory}
                thumb={item.strCategoryThumb}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
