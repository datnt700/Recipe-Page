/** @jsxImportSource @emotion/react */
import { UseQueryResult } from '@tanstack/react-query';
import React from 'react';

import { categoryStyle } from '../../_components/layout/Category.style';
import { CategoryItem } from '../../_components/layout/CategoryItem';
import { useCategories } from '../../_hooks/useCategory';
import { CategoryType } from '../../../app/_types/Category';

interface CategoryProps {
  handleCate: (e: string) => void;
  cateName: string;
}

export const Category = ({ handleCate, cateName }: CategoryProps) => {
  const { data, isLoading }: UseQueryResult<CategoryType[]> = useCategories();
  return (
    <section id={'Category'}>
      <div css={categoryStyle.container}>
        {isLoading && <p style={{ color: 'white' }}>...Is Loading</p>}
        <h2 css={categoryStyle.title}>Categories</h2>
        <div css={categoryStyle.list}>
          {data?.slice(0, 6).map((item) => (
            <button
              key={item.idCategory}
              data-testid="category-item"
              onClick={() => handleCate(item.strCategory)}
              style={
                cateName === item.strCategory
                  ? { backgroundColor: '#FEBD2E' }
                  : { backgroundColor: 'transparent' }
              }
            >
              <CategoryItem
                name={item.strCategory}
                thumb={item.strCategoryThumb}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
