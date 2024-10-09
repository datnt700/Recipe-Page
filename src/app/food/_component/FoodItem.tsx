/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { UseQueryResult } from '@tanstack/react-query';

import logo from '../../../../public/images/logo-light.svg';
import { useFoodById } from '../../_hooks/useFood';

import { FoodItemStyle } from './FoodItem.style';

import { FoodTypeItem } from '@/app/_types/Food';

export const FoodItem = () => {
  const searchParams = useSearchParams();

  const searchId = searchParams.get('id');

  const { data, isLoading }: UseQueryResult<FoodTypeItem[]> = useFoodById({
    id: searchId ? searchId : '',
  });
  return (
    <section id={'FoodItem'}>
      <div css={FoodItemStyle.container}>
        {isLoading && <p style={{ color: 'white' }}>...Is Loading</p>}
        <div css={FoodItemStyle.introduction}>
          <Image src={logo} alt={'logo'} width={150} height={60} />
          <Link href={'/'} css={FoodItemStyle.link}>
            <Icon icon="ri:arrow-left-s-line" width="1.2em" height="1.2em" />
            Back to categories
          </Link>
        </div>

        {data?.map((item) => (
          <div css={FoodItemStyle.content} key={item.idMeal}>
            <Image
              src={item.strMealThumb}
              alt={'image'}
              width={500}
              height={500}
              css={FoodItemStyle.photo}
            />
            <h1 css={FoodItemStyle.title}>{item.strMeal}</h1>
            <div css={FoodItemStyle.tag}>
              <p>
                Category: <span>{item.strCategory}</span>
              </p>
              <p>
                Area: <span>{item.strArea}</span>
              </p>
            </div>
            <div css={FoodItemStyle.detail}>
              <h2 css={FoodItemStyle.underTitle}>
                <span></span>Ingredient
              </h2>
              <ul css={FoodItemStyle.list}>
                <li>
                  <span>{item.strMeasure1} </span>
                  {item.strIngredient1}
                </li>
                <li>
                  <span>{item.strMeasure2} </span>
                  {item.strIngredient2}
                </li>
                <li>
                  <span>{item.strMeasure3} </span>
                  {item.strIngredient3}
                </li>
                <li>
                  <span>{item.strMeasure4} </span>
                  {item.strIngredient4}
                </li>
                <li>
                  <span>{item.strMeasure5} </span>
                  {item.strIngredient5}
                </li>
                <li>
                  <span>{item.strMeasure6} </span>
                  {item.strIngredient6}
                </li>
                <li>
                  <span>{item.strMeasure7} </span>
                  {item.strIngredient7}
                </li>
                <li>
                  <span>{item.strMeasure8} </span>
                  {item.strIngredient8}
                </li>
                <li>
                  <span>{item.strMeasure9} </span>
                  {item.strIngredient9}
                </li>
                <li>
                  <span>{item.strMeasure10} </span>
                  {item.strIngredient10}
                </li>
              </ul>
            </div>
            <div css={FoodItemStyle.detail}>
              <h2 css={FoodItemStyle.underTitle}>
                <span></span>Instruction
              </h2>
              <p css={FoodItemStyle.text}>{item.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
