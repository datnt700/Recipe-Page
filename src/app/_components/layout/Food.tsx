/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { UseQueryResult } from '@tanstack/react-query';

import { useFood } from '../../_hooks/useFood';
import { foodStyle } from '../../../app/_components/layout/Food.style';
import { Card } from '../../../app/_components/common/Card';
import { FoodType } from '../../_types/Food';

interface FoodProps {
  cateName: string;
  option: string;
  nameFood: string;
}

export const Food = ({ cateName, option, nameFood }: FoodProps) => {
  const { data, isLoading }: UseQueryResult<FoodType[]> = useFood({
    cateName: cateName,
  });
  const [food, setFood] = useState<FoodType[]>([]);
  useEffect(() => {
    if (data) {
      let filteredData = [...data];
      if (option === 'Name') {
        filteredData = filteredData?.sort((a, b) =>
          a.strMeal > b.strMeal ? 1 : -1
        );
      } else {
        filteredData = filteredData?.sort((a, b) =>
          a.idMeal > b.idMeal ? 1 : -1
        );
      }
      setFood(filteredData);
    }
  }, [data, option]);

  useEffect(() => {
    if (data) {
      let filteredData = [...data];
      if (nameFood) {
        filteredData = filteredData?.filter((word) =>
          word.strMeal.toLowerCase().includes(nameFood)
        );
      }
      setFood(filteredData);
    }
  }, [data, nameFood]);
  return (
    <section id={'Food'}>
      <div css={foodStyle.container}>
        {isLoading && <p style={{ color: 'white' }}>...Is Loading</p>}
        {food?.slice(0, 6).map((item) => (
          <div key={item.idMeal} data-testid="mock-component">
            <Card name={item.strMeal} thumb={item.strMealThumb} />
          </div>
        ))}
      </div>
    </section>
  );
};
